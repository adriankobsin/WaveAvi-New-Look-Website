import { Link } from "react-router-dom";
import type { ReactNode } from "react";

const LandingShell = ({ eyebrow, title, intro, points, children }: { eyebrow: string; title: string; intro: string; points: { title: string; text: string }[]; children: ReactNode }) => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="section-padding py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-body font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-12">← Wave-AVI</Link>
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16">
          <div>
            <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">{eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-display font-semibold leading-[1.05] mb-8">{title}</h1>
            <p className="text-base font-body font-light text-muted-foreground leading-relaxed mb-12 max-w-lg">{intro}</p>
            <div className="space-y-8">
              {points.map((p, i) => (
                <div key={p.title} className="flex gap-6">
                  <span className="font-display text-primary text-lg w-8 shrink-0">0{i + 1}</span>
                  <div>
                    <h2 className="font-display text-xl mb-2">{p.title}</h2>
                    <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:pt-6">{children}</div>
        </div>
      </div>
    </div>
  </div>
);
export default LandingShell;
