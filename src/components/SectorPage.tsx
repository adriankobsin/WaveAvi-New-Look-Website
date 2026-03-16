import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export interface SubService {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface SectorPageProps {
  sectorLabel: string;
  sectorTitle: string;
  subtitle: string;
  services: SubService[];
}

const ServiceCard = ({ service, index }: { service: SubService; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = service.icon;

  // Show first sentence as preview
  const firstSentence = service.description.split(". ")[0] + ".";
  const hasMore = service.description.length > firstSentence.length;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-card p-8 transition-all duration-500 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ocean/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <Icon
          className="w-7 h-7 text-ocean mb-5 group-hover:scale-110 transition-transform duration-300"
          strokeWidth={1.2}
        />
        <h3 className="text-lg font-display font-semibold text-foreground mb-3">
          {service.title}
        </h3>

        <div className="overflow-hidden transition-all duration-500">
          <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">
            {expanded ? service.description : firstSentence}
          </p>
        </div>

        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 inline-flex items-center gap-1 text-xs font-body tracking-wide text-ocean hover:text-[hsl(210,80%,65%)] transition-colors"
          >
            {expanded ? "Show less" : "Learn more"}
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>
    </motion.div>
  );
};

const SectorPage = ({ sectorLabel, sectorTitle, subtitle, services }: SectorPageProps) => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="section-padding">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/#industries"
              className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Industries
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-xs font-body tracking-[0.3em] uppercase text-ocean mb-4 block">
              {sectorLabel}
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
              {sectorTitle}
            </h1>
            <p className="text-base font-body font-light text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            <div className="luxury-divider mt-8" />
          </motion.div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SectorPage;
