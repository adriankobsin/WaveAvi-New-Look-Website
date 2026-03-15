import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Anchor, Home, Hotel, Ship } from "lucide-react";
import yachtAerial from "@/assets/yacht-aerial.jpg";

const industries = [
  { icon: Anchor, title: "Superyachts", desc: "New builds & refits from 30m to 180m+" },
  { icon: Home, title: "Luxury Residences", desc: "Smart home technology for ultra-prime properties" },
  { icon: Hotel, title: "Resorts & Beach Clubs", desc: "Immersive AV and automation for hospitality" },
  { icon: Hotel, title: "Hospitality", desc: "Enterprise systems for commercial and Hospitality" },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="industries" className="relative py-32 md:py-44" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={yachtAerial}
          alt="Superyacht at sunset"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-ocean mb-4 block">
            Sectors
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
            Industries We Serve
          </h2>
          <div className="luxury-divider mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 border border-ocean/20 flex items-center justify-center group-hover:border-ocean/50 group-hover:bg-ocean/5 transition-all duration-500">
                <ind.icon className="w-8 h-8 text-ocean" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {ind.title}
              </h3>
              <p className="text-sm font-body font-light text-muted-foreground">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
