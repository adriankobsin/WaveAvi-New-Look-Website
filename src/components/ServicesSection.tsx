import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor,
  Network,
  Satellite,
  Lightbulb,
  Shield,
  Cpu,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Marine AV Systems",
    description:
      "Immersive audio-visual experiences engineered for the marine environment.",
  },
  {
    icon: Network,
    title: "IT Infrastructure & Networking",
    description:
      "Enterprise-grade networks designed for reliability at sea.",
  },
  {
    icon: Satellite,
    title: "Global Connectivity",
    description:
      "VSAT, Starlink and 5G solutions for seamless worldwide coverage.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Control",
    description:
      "Intelligent lighting systems that transform spaces and atmospheres.",
  },
  {
    icon: Shield,
    title: "Security & Surveillance",
    description:
      "Advanced CCTV and cybersecurity for total protection.",
  },
  {
    icon: Cpu,
    title: "Smart Automation",
    description:
      "Unified control systems for effortless vessel management.",
  },
  {
    icon: Wrench,
    title: "Technical Consultancy",
    description:
      "Expert guidance from concept through commissioning and beyond.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-32 md:py-44" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-ocean mb-4 block">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
            Our Services
          </h2>
          <div className="luxury-divider mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass-card p-8 hover:border-ocean/30 transition-all duration-500 cursor-default"
            >
              <service.icon
                className="w-8 h-8 text-ocean mb-6 group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.2}
              />
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
