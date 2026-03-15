import logoGrey from "@/assets/logo-grey.png";

const entities = [
  { name: "Adrian Kobsin - Director", location: "+447701316513 • adrian.kobsin@waveavi.com" },
  { name: "Stephen Hobbs - Director", location: "+447488293738 • stephen.hobbs@waveavi.com" },
  { name: "Wave-AVI Ltd", location: "United Kingdom" },
  { name: "Wave-AVI BV", location: "Netherlands" },
  { name: "Wave-AVI Thailand", location: "Thailand" },
  { name: "Wave-AVI Singapore", location: "Singapore" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-16">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img src={logoGrey} alt="Wave-AVI" className="h-12 w-auto" />
            </div>
            <p className="text-sm font-body font-light text-muted-foreground max-w-sm leading-relaxed mb-8">
              The technology authority for superyachts. Advanced AV, IT and
              connectivity systems engineered for the world's most exceptional
              vessels.
            </p>
            {/* Legal entities */}
            <div className="space-y-2">
              {entities.map((e) => (
                <p key={e.name} className="text-xs font-body text-muted-foreground">
                  <span className="text-foreground/70">{e.name}</span> — {e.location}
                </p>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-body tracking-[0.2em] uppercase text-ocean mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Marine AV",
                "IT Networks",
                "Connectivity",
                "Lighting",
                "Automation",
                "Security",
                "Consultancy",
              ].map((s) => (
                <li key={s}>
                  <span className="text-sm font-body font-light text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-body tracking-[0.2em] uppercase text-ocean mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#projects" },
                { label: "Technology", href: "#technology" },
                { label: "Innovation", href: "#innovation" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-body font-light text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glow-line mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-muted-foreground">
            © {new Date().getFullYear()} Wave-AVI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <span
                key={link}
                className="text-xs font-body text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
