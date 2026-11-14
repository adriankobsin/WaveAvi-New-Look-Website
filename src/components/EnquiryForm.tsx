import { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

export type EnquiryOption = { value: string; label: string };

const schema = z.object({
  enquiry_type: z.string().min(1, "Please choose an option"),
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(150),
  location: z.string().trim().max(150),
  timeframe: z.string().trim().max(100),
  message: z.string().trim().min(1, "Please tell us about your project").max(2000),
});

type Props = {
  options: EnquiryOption[];
  locationLabel: string;
  companyLabel: string;
  messagePlaceholder: string;
  showRemote?: boolean;
  submitLabel: string;
};

const label = "block text-xs font-body font-medium tracking-[0.15em] uppercase text-muted-foreground mb-2";

const EnquiryForm = ({ options, locationLabel, companyLabel, messagePlaceholder, showRemote, submitLabel }: Props) => {
  const [form, setForm] = useState({ enquiry_type: options[0].value, name: "", email: "", company: "", location: "", timeframe: "", message: "" });
  const [remote, setRemote] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const set = (k: string, v: string) => { setForm((p) => ({ ...p, [k]: v })); setErrors((p) => ({ ...p, [k]: "" })); };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const fe: Record<string, string> = {};
      r.error.errors.forEach((er) => { const f = String(er.path[0]); if (!fe[f]) fe[f] = er.message; });
      setErrors(fe);
      return;
    }
    setState("sending");
    const d = r.data;
    const { error } = await supabase.from("project_enquiries").insert({
      enquiry_type: d.enquiry_type, name: d.name, email: d.email,
      company: d.company || null, location: d.location || null, timeframe: d.timeframe || null,
      message: d.message, remote_consultation: remote,
      source_page: (window.location.pathname + window.location.search).slice(0, 300),
    });
    if (error) { setState("error"); return; }
    setState("done");
    window.dispatchEvent(new CustomEvent("waveavi:enquiry", { detail: { type: d.enquiry_type } }));
  };

  if (state === "done") {
    return (
      <div className="border border-border bg-card p-10">
        <h3 className="text-2xl font-display text-foreground mb-3">Thank you — we have your enquiry.</h3>
        <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">
          A member of the Wave-AVI team will reply by email. You can also reach us at{" "}
          <a href="mailto:info@waveavi.com" className="text-primary underline">info@waveavi.com</a>.
        </p>
      </div>
    );
  }

  const field = (k: keyof typeof form, l: string, ph: string, max: number, type = "text") => (
    <div>
      <label htmlFor={k} className={label}>{l}</label>
      <Input id={k} type={type} value={form[k]} onChange={(e) => set(k, e.target.value)} placeholder={ph} maxLength={max} className="bg-card border-border" />
      {errors[k] && <p className="text-destructive text-xs mt-1">{errors[k]}</p>}
    </div>
  );

  return (
    <form onSubmit={submit} className="space-y-6">
      <fieldset>
        <legend className={label}>I would like to discuss</legend>
        <div className="flex flex-wrap gap-3">
          {options.map((o) => (
            <button type="button" key={o.value} onClick={() => set("enquiry_type", o.value)}
              aria-pressed={form.enquiry_type === o.value}
              className={`px-5 py-3 text-xs font-body tracking-[0.15em] uppercase border transition-colors ${form.enquiry_type === o.value ? "border-primary text-foreground bg-primary/10" : "border-border text-muted-foreground hover:text-foreground"}`}>
              {o.label}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {field("name", "Name", "Your name", 100)}
        {field("email", "Email", "your@email.com", 255, "email")}
        {field("company", companyLabel, "Optional", 150)}
        {field("location", locationLabel, "Optional", 150)}
      </div>
      {field("timeframe", "Timeframe", "e.g. Refit window Q2, opening late 2027", 100)}
      <div>
        <label htmlFor="message" className={label}>Project details</label>
        <Textarea id="message" value={form.message} onChange={(e) => set("message", e.target.value)} placeholder={messagePlaceholder} maxLength={2000} className="bg-card border-border min-h-[150px]" />
        {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
      </div>
      {showRemote && (
        <label className="flex items-center gap-3 text-sm font-body text-muted-foreground">
          <input type="checkbox" checked={remote} onChange={(e) => setRemote(e.target.checked)} className="accent-primary" />
          I would prefer an initial remote consultation (e.g. from Cambodia)
        </label>
      )}
      {state === "error" && <p className="text-destructive text-sm">Something went wrong. Please try again or email info@waveavi.com.</p>}
      <p className="text-xs text-muted-foreground font-body">We use your details only to reply to this enquiry. See our <a href="/privacy" className="underline">privacy policy</a>.</p>
      <button type="submit" disabled={state === "sending"}
        className="inline-flex items-center gap-3 text-xs font-body font-medium tracking-[0.25em] uppercase bg-ocean text-primary-foreground px-10 py-5 hover:bg-ocean-deep transition-all duration-300 disabled:opacity-50">
        {state === "sending" ? "Sending..." : submitLabel}
      </button>
    </form>
  );
};

export default EnquiryForm;
