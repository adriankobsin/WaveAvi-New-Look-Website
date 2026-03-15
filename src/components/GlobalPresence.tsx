import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const offices = [
  { city: "London", country: "United Kingdom", x: "47%", y: "28%" },
  { city: "Amsterdam", country: "Netherlands", x: "49%", y: "26%" },
  { city: "Phuket", country: "Thailand", x: "72%", y: "52%" },
  { city: "Singapore", country: "Singapore", x: "74%", y: "58%" },
];

const GlobalPresence = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="global" className="relative py-32 md:py-44" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-ocean mb-4 block">
            Worldwide
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
            Global Presence
          </h2>
          <div className="luxury-divider mt-8" />
        </motion.div>

        {/* Map visualization */}
        <div className="relative max-w-5xl mx-auto">
          {/* Simplified world outline */}
          <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden glass-card">
            {/* Grid lines for map feel */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`h-${i}`}
                  className="absolute w-full h-px bg-ocean"
                  style={{ top: `${(i + 1) * 11}%` }}
                />
              ))}
              {[...Array(12)].map((_, i) => (
                <div
                  key={`v-${i}`}
                  className="absolute h-full w-px bg-ocean"
                  style={{ left: `${(i + 1) * 7.7}%` }}
                />
              ))}
            </div>

            {/* Office markers */}
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="absolute group"
                style={{ left: office.x, top: office.y }}
              >
                {/* Pulse ring */}
                <div className="absolute -inset-3 rounded-full bg-ocean/20 animate-glow-pulse" />
                <div className="relative w-3 h-3 rounded-full bg-ocean shadow-[0_0_12px_hsl(210_80%_55%/0.6)]" />
                {/* Label */}
                <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-body font-medium text-foreground">
                    {office.city}
                  </p>
                  <p className="text-xs font-body text-muted-foreground">
                    {office.country}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Office list */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <MapPin className="w-5 h-5 text-ocean mx-auto mb-2" strokeWidth={1.2} />
                <p className="text-sm font-display font-semibold text-foreground">
                  {office.city}
                </p>
                <p className="text-xs font-body text-muted-foreground">
                  {office.country}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
