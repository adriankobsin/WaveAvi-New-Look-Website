import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import techRoom from "@/assets/technology-room.jpg";

const techSpecs = [
  { label: "AV Zones", value: "32+" },
  { label: "Network Nodes", value: "128" },
  { label: "Bandwidth", value: "40Gbps" },
  { label: "Uptime SLA", value: "99.9%" },
];

const YachtScene = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-44 overflow-hidden" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-ocean mb-4 block">
            Engineering Detail
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
            Systems Architecture
          </h2>
          <div className="luxury-divider mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full h-[500px] md:h-[600px] overflow-hidden"
        >
          {/* Background image with parallax feel */}
          <img
            src={techRoom}
            alt="Yacht technology systems room"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />

          {/* Animated grid overlay */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`h-${i}`}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                className="absolute w-full h-px bg-ocean origin-left"
                style={{ top: `${(i + 1) * 14}%` }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`v-${i}`}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.8 + i * 0.08 }}
                className="absolute h-full w-px bg-ocean origin-top"
                style={{ left: `${(i + 1) * 11}%` }}
              />
            ))}
          </div>

          {/* Floating data points */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-12">
              {techSpecs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
                  className="glass-card p-6 text-center"
                >
                  <p className="text-2xl md:text-3xl font-display font-semibold text-ocean">
                    {spec.value}
                  </p>
                  <p className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground mt-2">
                    {spec.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scan line animation */}
          <motion.div
            initial={{ top: "0%" }}
            animate={inView ? { top: ["0%", "100%", "0%"] } : {}}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-px bg-ocean/40 shadow-[0_0_20px_hsl(210_80%_55%/0.3)]"
          />
        </motion.div>

        {/* Bottom info */}
        <div className="flex justify-between items-end mt-6 pointer-events-none">
          <div>
            <p className="text-xs font-body tracking-[0.2em] uppercase text-ocean mb-1">
              Technology Overview
            </p>
            <p className="text-sm font-body text-muted-foreground">
              Enterprise-grade systems engineered for the marine environment
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground">
              Wave-AVI Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YachtScene;
