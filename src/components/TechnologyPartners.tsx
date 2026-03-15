import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Crestron",
  "Lutron",
  "Control4",
  "Cisco",
  "Q-SYS",
  "Starlink",
  "Peplink",
];

const TechnologyPartners = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="technology" className="relative py-32 md:py-44" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-ocean mb-4 block">
            Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
            Technology Partners
          </h2>
          <div className="luxury-divider mt-8" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card flex items-center justify-center p-6 h-24 hover:border-ocean/30 transition-all duration-500 group"
            >
              <span className="text-sm font-body font-medium tracking-[0.15em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
