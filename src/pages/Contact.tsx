import { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    const mailtoLink = `mailto:info@waveavi.com?subject=${encodeURIComponent(result.data.subject)}&body=${encodeURIComponent(
      `From: ${result.data.name} (${result.data.email})\n\n${result.data.message}`
    )}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setSending(false);
      toast({ title: "Email client opened", description: "Your message has been prepared in your email client." });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="Contact Wave-AVI | Project Enquiries"
        description="Get in touch with the Wave-AVI engineering team about your superyacht, residential or commercial AV and IT project."
        path="/contact"
      />
      <div className="section-padding py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-body font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            ← Back
          </Link>

          <div className="luxury-divider mb-10" />
          <h1 className="text-3xl md:text-5xl font-display font-semibold text-foreground leading-tight mb-4">
            Get In Touch
          </h1>
          <p className="text-base font-body font-light text-muted-foreground mb-12 max-w-lg leading-relaxed">
            Begin a conversation with our engineering team about your next project.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-body font-medium tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-card border-border focus:border-primary"
                  maxLength={100}
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-body font-medium tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-card border-border focus:border-primary"
                  maxLength={255}
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-body font-medium tracking-[0.15em] uppercase text-muted-foreground mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project inquiry"
                className="bg-card border-border focus:border-primary"
                maxLength={200}
              />
              {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-body font-medium tracking-[0.15em] uppercase text-muted-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="bg-card border-border focus:border-primary min-h-[160px]"
                maxLength={2000}
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-3 text-xs font-body font-medium tracking-[0.25em] uppercase bg-ocean text-primary-foreground px-10 py-5 hover:bg-ocean-deep transition-all duration-300 disabled:opacity-50"
            >
              {sending ? "Opening..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
