import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Navigation, Zap } from "lucide-react";

const innovations = [
  {
    icon: Brain,
    title: "AI-Tech Support Systems",
    description:
      "Machine learning algorithms optimise onboard systems in real-time, from energy management to predictive maintenance, able to help with Technical support of all the available systems onboard.",
  },
  {
    icon: Navigation,
    title: "Marine Navigation AI",
    description:
      "Next-generation navigation intelligence combining satellite data, weather patterns and route optimisation.",
  },
  {
    icon: Zap,
    title: "Future Systems Lab",
    description:
      "Our R&D division explores emerging technologies — from quantum networking to autonomous vessel control.",
  },
];

const InnovationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="innovation" className="relative py-32 md:py-44" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-ocean mb-4 block">
            R&D
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
            Innovation
          </h2>
          <div className="luxury-divider mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {innovations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-10 text-center group hover:border-ocean/30 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-8 border border-ocean/20 flex items-center justify-center group-hover:border-ocean/50 transition-colors duration-500">
                <item.icon className="w-7 h-7 text-ocean" strokeWidth={1.2} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
