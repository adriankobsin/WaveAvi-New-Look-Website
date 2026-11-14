import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FunctionsHttpError } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const labelCls = "block text-xs font-body font-medium tracking-[0.15em] uppercase text-muted-foreground mb-2";

const CampaignBrief = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ goal: "", audience: "", offer: "", passcode: "" });
  const [loading, setLoading] = useState(false);
  const [brief, setBrief] = useState("");
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.goal.trim() || !form.audience.trim() || !form.offer.trim() || !form.passcode) {
      setError("Please fill in every field.");
      return;
    }
    setLoading(true);
    const { data, error: err } = await supabase.functions.invoke("campaign-brief", { body: form });
    setLoading(false);
    if (err) {
      let msg = err.message;
      if (err instanceof FunctionsHttpError) {
        try { msg = (await err.context.json()).error ?? msg; } catch { /* keep default */ }
      }
      setError(msg);
      return;
    }
    setBrief(data.brief);
  };

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Campaign Brief Studio | Wave-AVI</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="section-padding py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-body font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-12">
            ← Back
          </Link>
          <div className="luxury-divider mb-10" />
          <h1 className="text-3xl md:text-5xl font-display font-semibold text-foreground leading-tight mb-4">Campaign Brief Studio</h1>
          <p className="text-base font-body font-light text-muted-foreground mb-12 max-w-lg leading-relaxed">
            Describe the goal, audience and offer. AI drafts a tailored Wave-AVI ad campaign brief for you to review.
          </p>

          <form onSubmit={submit} className="space-y-6">
            <div>
              <label htmlFor="goal" className={labelCls}>Campaign goal</label>
              <Textarea id="goal" value={form.goal} onChange={set("goal")} maxLength={1000} rows={3} className="bg-card border-border"
                placeholder="e.g. Generate refit enquiries for yacht AV/IT upgrades" />
            </div>
            <div>
              <label htmlFor="audience" className={labelCls}>Target audience</label>
              <Textarea id="audience" value={form.audience} onChange={set("audience")} maxLength={1500} rows={3} className="bg-card border-border"
                placeholder="e.g. Captains, engineers and owners' reps in Phuket, Singapore and the Med" />
            </div>
            <div>
              <label htmlFor="offer" className={labelCls}>Offer</label>
              <Textarea id="offer" value={form.offer} onChange={set("offer")} maxLength={1500} rows={3} className="bg-card border-border"
                placeholder="e.g. Free onboard connectivity health check" />
            </div>
            <div>
              <label htmlFor="passcode" className={labelCls}>Access code</label>
              <Input id="passcode" type="password" value={form.passcode} onChange={set("passcode")} className="bg-card border-border max-w-xs" autoComplete="current-password" />
            </div>
            {error && <p className="text-destructive text-sm">{error}</p>}
            <Button type="submit" disabled={loading}>{loading ? "Drafting brief…" : "Draft campaign brief"}</Button>
          </form>

          {brief && (
            <section className="mt-16 border border-border bg-card p-6 md:p-10">
              <div className="flex items-center justify-between mb-6 gap-4">
                <h2 className="text-xl font-display font-semibold text-foreground">Draft brief</h2>
                <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(brief); toast({ title: "Brief copied" }); }}>
                  Copy
                </Button>
              </div>
              <div className="whitespace-pre-wrap font-body text-sm leading-relaxed text-foreground/90">{brief}</div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
};

export default CampaignBrief;
