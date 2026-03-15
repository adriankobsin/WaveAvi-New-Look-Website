import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "Crestron", url: "https://www.crestron.com" },
  { name: "Lutron", url: "https://www.lutron.com" },
  { name: "Control4", url: "https://www.control4.com" },
  { name: "Cisco", url: "https://www.cisco.com" },
  { name: "Q-SYS", url: "https://www.qsys.com" },
  { name: "Starlink", url: "https://www.starlink.com" },
  { name: "Peplink", url: "https://www.peplink.com" },
  { name: "MTN", url: "https://www.mtn.com" },
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
          <p className="text-base font-body font-light text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            We partner with the world's leading technology manufacturers to deliver
            best-in-class solutions for every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card flex items-center justify-center p-8 h-28 hover:border-ocean/30 hover:bg-ocean/5 transition-all duration-500 group"
            >
              <span className="text-sm font-body font-medium tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300">
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
