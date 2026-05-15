create extension if not exists pg_cron with schema extensions;
create extension if not exists pg_net with schema extensions;

create table if not exists public.seo_snapshots (
  id uuid primary key default gen_random_uuid(),
  captured_at timestamptz not null default now(),
  snapshot_date date not null,
  site_url text not null default 'https://www.waveavi.com/',
  clicks_7d integer not null default 0,
  impressions_7d integer not null default 0,
  ctr_7d numeric not null default 0,
  position_7d numeric not null default 0,
  sitemap_submitted integer not null default 0,
  sitemap_indexed integer not null default 0,
  sitemap_errors integer not null default 0,
  sitemap_warnings integer not null default 0,
  sitemap_last_downloaded timestamptz,
  raw jsonb,
  unique (snapshot_date, site_url)
);

create index if not exists seo_snapshots_date_idx on public.seo_snapshots (snapshot_date desc);

create table if not exists public.seo_alerts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  alert_type text not null,
  severity text not null default 'warning',
  message text not null,
  details jsonb,
  email_sent boolean not null default false
);

create index if not exists seo_alerts_created_idx on public.seo_alerts (created_at desc);

alter table public.seo_snapshots enable row level security;
alter table public.seo_alerts enable row level security;

-- No policies => no client access. Service role bypasses RLS.

-- Schedule daily monitor at 06:00 UTC
do $$
declare
  v_jobid integer;
begin
  select jobid into v_jobid from cron.job where jobname = 'gsc-monitor-daily';
  if v_jobid is not null then
    perform cron.unschedule(v_jobid);
  end if;

  perform cron.schedule(
    'gsc-monitor-daily',
    '0 6 * * *',
    $cron$
    select net.http_post(
      url := 'https://pblowwsxusqfxfcohcou.supabase.co/functions/v1/gsc-monitor',
      headers := jsonb_build_object(
        'Content-Type','application/json',
        'Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBibG93d3N4dXNxZnhmY29oY291Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4NzE2MzYsImV4cCI6MjA5NDQ0NzYzNn0.EDn-ngQ9sgXebFqgqS926zt9Ps9m_dusDGgvEgY0_os'
      ),
      body := jsonb_build_object('source','cron')
    );
    $cron$
  );
end $$;