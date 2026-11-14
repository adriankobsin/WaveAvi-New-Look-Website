CREATE TABLE public.project_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  enquiry_type text NOT NULL CHECK (enquiry_type IN ('marine_lighting','marine_refit','experience_villa','experience_architecture','experience_hospitality')),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  company text CHECK (char_length(company) <= 150),
  location text CHECK (char_length(location) <= 150),
  timeframe text CHECK (char_length(timeframe) <= 100),
  remote_consultation boolean NOT NULL DEFAULT false,
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  source_page text CHECK (char_length(source_page) <= 300)
);
GRANT INSERT ON public.project_enquiries TO anon, authenticated;
GRANT ALL ON public.project_enquiries TO service_role;
ALTER TABLE public.project_enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can submit enquiries" ON public.project_enquiries FOR INSERT TO anon, authenticated WITH CHECK (true);