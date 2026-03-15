import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
      "Immersive audio-visual experiences engineered for the marine environment. Cinema rooms, distributed audio and outdoor entertainment.",
    features: ["4K/8K Distribution", "Dolby Atmos", "Outdoor AV"],
  },
  {
    icon: Network,
    title: "IT Infrastructure",
    description:
      "Enterprise-grade networks designed for reliability at sea. Full rack builds, server rooms, and managed services.",
    features: ["Cisco Networks", "Rack Systems", "Managed IT"],
  },
  {
    icon: Satellite,
    title: "Connectivity & VSAT",
    description:
      "VSAT, Starlink and 5G solutions for seamless worldwide coverage wherever you sail.",
    features: ["Starlink", "VSAT", "5G/LTE"],
  },
  {
    icon: Lightbulb,
    title: "Lighting Control",
    description:
      "Intelligent lighting systems that transform spaces and atmospheres with scene-based control.",
    features: ["Lutron", "DALI", "DMX CONTROL"],
  },
  {
    icon: Shield,
    title: "Security & Surveillance",
    description:
      "Advanced CCTV, access control and cybersecurity for total onboard protection.",
    features: ["CCTV", "Cybersecurity", "Access Control"],
  },
  {
    icon: Cpu,
    title: "Smart Automation",
    description:
      "Unified control systems via Crestron and Control4 for effortless vessel management.",
    features: ["Crestron", "Control4", "KNX"],
  },
  {
    icon: Wrench,
    title: "Technical Consultancy",
    description:
      "Expert guidance from concept through commissioning and beyond. Specification, design and project management.",
    features: ["Design", "Specification", "PM"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className="group glass-card p-8 hover:border-ocean/30 transition-all duration-500 cursor-default relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-ocean/5 to-transparent transition-opacity duration-500 ${
                  activeIndex === i ? "opacity-100" : "opacity-0"
                }`}
              />
              <div className="relative z-10">
                <service.icon
                  className="w-8 h-8 text-ocean mb-6 group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.2}
                />
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm font-body font-light text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] font-body tracking-[0.15em] uppercase px-2 py-1 border border-border/50 text-muted-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Consultancy - centered below */}
        <div className="flex justify-center mt-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 6 * 0.08 }}
            onMouseEnter={() => setActiveIndex(6)}
            onMouseLeave={() => setActiveIndex(null)}
            className="group glass-card p-8 hover:border-ocean/30 transition-all duration-500 cursor-default relative overflow-hidden w-full md:w-1/2 lg:w-1/3"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-ocean/5 to-transparent transition-opacity duration-500 ${
                activeIndex === 6 ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="relative z-10">
              <services[6].icon
                className="w-8 h-8 text-ocean mb-6 group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.2}
              />
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                {services[6].title}
              </h3>
              <p className="text-sm font-body font-light text-muted-foreground leading-relaxed mb-4">
                {services[6].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {services[6].features.map((f) => (
                  <span
                    key={f}
                    className="text-[10px] font-body tracking-[0.15em] uppercase px-2 py-1 border border-border/50 text-muted-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
