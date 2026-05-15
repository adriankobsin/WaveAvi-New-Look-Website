// Daily Google Search Console monitor for waveavi.com
// - Pulls last 7d vs prior 7d clicks/impressions/ctr/position
// - Pulls sitemap status (errors, warnings, indexed)
// - Stores snapshot, detects regressions, sends email alert when needed
import { createClient } from "npm:@supabase/supabase-js@2.45.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SITE = "https://www.waveavi.com/";
const SITE_ENC = encodeURIComponent(SITE);
const SITEMAP = "https://www.waveavi.com/sitemap.xml";
const ALERT_EMAIL = "info@waveavi.com";

// Conservative thresholds
const DROP_PCT = 0.25; // 25% drop in clicks or impressions

const GSC_BASE = "https://connector-gateway.lovable.dev/google_search_console";

function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

async function gsc(path: string, init: RequestInit = {}) {
  const lovKey = Deno.env.get("LOVABLE_API_KEY");
  const gscKey = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
  if (!lovKey) throw new Error("LOVABLE_API_KEY missing");
  if (!gscKey) throw new Error("GOOGLE_SEARCH_CONSOLE_API_KEY missing");
  const res = await fetch(`${GSC_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${lovKey}`,
      "X-Connection-Api-Key": gscKey,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });
  const text = await res.text();
  let body: any;
  try { body = text ? JSON.parse(text) : {}; } catch { body = { raw: text }; }
  if (!res.ok) throw new Error(`GSC ${path} [${res.status}]: ${text.slice(0, 500)}`);
  return body;
}

async function fetchAnalytics(startDate: string, endDate: string) {
  const body = JSON.stringify({ startDate, endDate, dimensions: [], rowLimit: 1 });
  const data = await gsc(`/webmasters/v3/sites/${SITE_ENC}/searchAnalytics/query`, {
    method: "POST",
    body,
  });
  const row = data.rows?.[0];
  return {
    clicks: row?.clicks ?? 0,
    impressions: row?.impressions ?? 0,
    ctr: row?.ctr ?? 0,
    position: row?.position ?? 0,
  };
}

async function fetchSitemap() {
  return await gsc(`/webmasters/v3/sites/${SITE_ENC}/sitemaps/${encodeURIComponent(SITEMAP)}`);
}

function pctDrop(prev: number, curr: number) {
  if (prev <= 0) return 0;
  return (prev - curr) / prev;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  try {
    // GSC search analytics has a ~2-day lag. Use end = today-3, start = end-6 for "current 7d"
    const today = new Date();
    const endCur = new Date(today); endCur.setUTCDate(endCur.getUTCDate() - 3);
    const startCur = new Date(endCur); startCur.setUTCDate(startCur.getUTCDate() - 6);
    const endPrev = new Date(startCur); endPrev.setUTCDate(endPrev.getUTCDate() - 1);
    const startPrev = new Date(endPrev); startPrev.setUTCDate(startPrev.getUTCDate() - 6);

    const [cur, prev, sitemap] = await Promise.all([
      fetchAnalytics(isoDate(startCur), isoDate(endCur)),
      fetchAnalytics(isoDate(startPrev), isoDate(endPrev)),
      fetchSitemap().catch((e) => ({ error: String(e) })),
    ]);

    const c = sitemap?.contents?.[0] ?? {};
    const snapshot = {
      snapshot_date: isoDate(today),
      site_url: SITE,
      clicks_7d: Math.round(cur.clicks),
      impressions_7d: Math.round(cur.impressions),
      ctr_7d: Number(cur.ctr.toFixed(4)),
      position_7d: Number(cur.position.toFixed(2)),
      sitemap_submitted: Number(c.submitted ?? 0),
      sitemap_indexed: Number(c.indexed ?? 0),
      sitemap_errors: Number(sitemap?.errors ?? 0),
      sitemap_warnings: Number(sitemap?.warnings ?? 0),
      sitemap_last_downloaded: sitemap?.lastDownloaded ?? null,
      raw: { current: cur, previous: prev, sitemap },
    };

    await supabase.from("seo_snapshots").upsert(snapshot, {
      onConflict: "snapshot_date,site_url",
    });

    // Pull yesterday's snapshot for sitemap delta
    const ySnap = await supabase
      .from("seo_snapshots")
      .select("*")
      .lt("snapshot_date", snapshot.snapshot_date)
      .order("snapshot_date", { ascending: false })
      .limit(1)
      .maybeSingle();
    const prevSnap = ySnap.data;

    const alerts: { type: string; severity: string; message: string; details: any }[] = [];

    // 1. Sitemap errors / warnings
    if (snapshot.sitemap_errors > 0) {
      alerts.push({
        type: "sitemap_errors",
        severity: "critical",
        message: `Sitemap reports ${snapshot.sitemap_errors} error(s).`,
        details: { sitemap },
      });
    }
    if (prevSnap && snapshot.sitemap_warnings > prevSnap.sitemap_warnings) {
      alerts.push({
        type: "sitemap_warnings_up",
        severity: "warning",
        message: `Sitemap warnings rose from ${prevSnap.sitemap_warnings} to ${snapshot.sitemap_warnings}.`,
        details: { sitemap },
      });
    }

    // 2. Indexing regression — drop in indexed URLs
    if (
      prevSnap &&
      prevSnap.sitemap_indexed > 0 &&
      snapshot.sitemap_indexed < prevSnap.sitemap_indexed
    ) {
      alerts.push({
        type: "indexing_drop",
        severity: "warning",
        message: `Indexed URLs dropped from ${prevSnap.sitemap_indexed} to ${snapshot.sitemap_indexed}.`,
        details: { previous: prevSnap.sitemap_indexed, current: snapshot.sitemap_indexed },
      });
    }

    // 3. Performance regression vs previous 7d (only if there's meaningful baseline traffic)
    const clicksDrop = pctDrop(prev.clicks, cur.clicks);
    const imprDrop = pctDrop(prev.impressions, cur.impressions);
    if (prev.clicks >= 10 && clicksDrop >= DROP_PCT) {
      alerts.push({
        type: "clicks_drop",
        severity: "warning",
        message: `Clicks dropped ${(clicksDrop * 100).toFixed(0)}% week-over-week (${Math.round(prev.clicks)} → ${Math.round(cur.clicks)}).`,
        details: { previous: prev, current: cur },
      });
    }
    if (prev.impressions >= 100 && imprDrop >= DROP_PCT) {
      alerts.push({
        type: "impressions_drop",
        severity: "warning",
        message: `Impressions dropped ${(imprDrop * 100).toFixed(0)}% week-over-week (${Math.round(prev.impressions)} → ${Math.round(cur.impressions)}).`,
        details: { previous: prev, current: cur },
      });
    }

    let emailed = false;
    if (alerts.length > 0) {
      // Try to send a single digest email via Lovable Emails (transactional).
      // Falls back to logging if email infra isn't ready yet.
      try {
        const { error: invokeErr } = await supabase.functions.invoke(
          "send-transactional-email",
          {
            body: {
              templateName: "seo-regression-alert",
              recipientEmail: ALERT_EMAIL,
              idempotencyKey: `seo-alert-${snapshot.snapshot_date}`,
              templateData: {
                site: SITE,
                snapshotDate: snapshot.snapshot_date,
                alerts,
                metrics: { current: cur, previous: prev, sitemap: c },
              },
            },
          },
        );
        if (invokeErr) throw invokeErr;
        emailed = true;
      } catch (e) {
        console.error("Email send failed (infra may not be set up yet):", e);
      }

      await supabase.from("seo_alerts").insert(
        alerts.map((a) => ({
          alert_type: a.type,
          severity: a.severity,
          message: a.message,
          details: a.details,
          email_sent: emailed,
        })),
      );
    }

    return new Response(
      JSON.stringify({ ok: true, snapshot, alerts, emailed }, null, 2),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("gsc-monitor error", err);
    return new Response(
      JSON.stringify({ ok: false, error: err instanceof Error ? err.message : String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
