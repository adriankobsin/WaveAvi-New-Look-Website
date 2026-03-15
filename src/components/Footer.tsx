const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-16">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-display font-bold tracking-wider text-foreground">
                WAVE
              </span>
              <span className="text-xl font-display font-light tracking-wider text-ocean">
                AVI
              </span>
            </div>
            <p className="text-sm font-body font-light text-muted-foreground max-w-sm leading-relaxed">
              The technology authority for superyachts. Advanced AV, IT and
              connectivity systems engineered for the world's most exceptional
              vessels.
            </p>
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

          {/* Offices */}
          <div>
            <h4 className="text-xs font-body tracking-[0.2em] uppercase text-ocean mb-6">
              Offices
            </h4>
            <ul className="space-y-3">
              {["London", "Amsterdam", "Phuket", "Singapore"].map((c) => (
                <li key={c}>
                  <span className="text-sm font-body font-light text-muted-foreground">
                    {c}
                  </span>
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
