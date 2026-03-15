import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import techRoom from "@/assets/technology-room.jpg";
import heroYacht from "@/assets/hero-yacht.jpg";
import yachtInterior from "@/assets/yacht-interior.jpg";

const projects = [
  {
    title: "M/Y Horizon",
    category: "85m New Build",
    scope: "Full AV, IT & Connectivity Integration",
    image: techRoom,
  },
  {
    title: "M/Y Celestial",
    category: "62m Refit",
    scope: "Complete Technology Upgrade",
    image: heroYacht,
  },
  {
    title: "M/Y Aurora",
    category: "120m New Build",
    scope: "Enterprise IT & Cybersecurity",
    image: yachtInterior,
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative overflow-hidden cursor-pointer h-[450px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hovered === i ? "scale-110" : "scale-100"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-xs font-body tracking-[0.2em] uppercase text-ocean mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-body font-light text-muted-foreground">
                  {project.scope}
                </p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hovered === i ? "3rem" : 0 }}
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
