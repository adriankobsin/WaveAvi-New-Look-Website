import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import techRoom from "@/assets/technology-room.jpg";
import heroYacht from "@/assets/hero-yacht.jpg";
import yachtInterior from "@/assets/yacht-interior.jpg";
import yachtAerial from "@/assets/yacht-aerial.jpg";

const projects = [
  {
    title: "M/Y Medialy",
    category: "46M REFIT",
    scope: "Full AV, IT & Connectivity Integration",
    tech: ["Crestron", "Cisco", "VSAT", "Lutron"],
    image: techRoom,
  },
  {
    title: "Mangusta Oceano 50",
    category: "50M REFIT",
    scope: "Complete Technology Upgrade",
    tech: ["CRESTRON", "Q-SYS", "Starlink"],
    image: heroYacht,
  },
  {
    title: "M/Y Aurora",
    category: "60M NEW BUILD",
    scope: "Enterprise IT & Cybersecurity",
    tech: ["Cisco", "Peplink", "Crestron"],
    image: yachtInterior,
  },
  {
    title: "M/Y Poseidon",
    category: "95m New Build",
    scope: "Smart Automation & Lighting",
    tech: ["Lutron", "KNX", "DALI"],
    image: yachtAerial,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 md:py-44" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-ocean mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
            Featured Projects
          </h2>
          <div className="luxury-divider mt-8" />
        </motion.div>

        {/* Large cinematic grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative overflow-hidden cursor-pointer ${
                i === 0 ? "md:col-span-2 h-[500px] md:h-[600px]" : "h-[400px] md:h-[450px]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hovered === i ? "scale-110" : "scale-100"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <span className="text-xs font-body tracking-[0.2em] uppercase text-ocean mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-body font-light text-muted-foreground mb-4">
                  {project.scope}
                </p>
                
                {/* Tech tags */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap gap-2"
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 bg-ocean/10 border border-ocean/20 text-ocean"
                    >
                      {t}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hovered === i ? "4rem" : 0 }}
                  className="h-px bg-ocean mt-4"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
