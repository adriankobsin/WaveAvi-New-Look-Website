import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Navigation, Zap, Calendar, ArrowRight, Newspaper } from "lucide-react";
import journalCover from "@/assets/journal-cover.jpg";
import journalArticle from "@/assets/journal-article.jpg";
import journalInterview from "@/assets/journal-interview.jpg";

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

const newsItems = [
  {
    category: "Publication",
    date: "February 2026",
    title: "Beyond Luxury: How Wave-AVI is Redefining Yacht Technology",
    excerpt:
      "Wave-AVI featured in The Property & Lifestyle Journal Issue 1. Co-founder Adrian Kobsin discusses the art and science of creating onboard systems that impress even the most demanding guests — from Dolby Atmos cinemas to seamless global connectivity.",
    featured: true,
    images: [journalCover, journalArticle, journalInterview],
  },
  {
    category: "Company News",
    date: "February 2026",
    title: "New Singapore Office Expansion",
    excerpt:
      "Wave avi Pti. Ltd. Singapore expands operations with a dedicated marine technology hub to serve the growing Asia-Pacific superyacht market.",
    featured: false,
  },
  {
    category: "Technology",
    date: "January 2026",
    title: "Partnership with Crestron for Next-Gen Marine Control",
    excerpt:
      "Wave-avi announces a deepened partnership with Crestron, bringing cutting-edge vessel automation and control solutions to our clients.",
    featured: false,
  },
  {
    category: "Expansion",
    date: "April 2026",
    title: "New Technology Experience Centre Opening in Phuket",
    excerpt:
      "Wave avi Co. Ltd. is opening a new Technology Experience Centre in Phuket, Thailand — launching in April to coincide with Thai Songkran New Year celebrations.",
    featured: false,
  },
];

const InnovationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = newsItems.find((n) => n.featured);
  const rest = newsItems.filter((n) => !n.featured);

  return (
    <section id="innovation" className="relative py-32 md:py-44" ref={ref}>
      <div className="section-padding">
        {/* Innovation Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-ocean mb-4 block">
            R&D & Updates
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
            Innovation & News
          </h2>
          <div className="luxury-divider mt-8" />
        </motion.div>

        {/* Innovation Tiles */}
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

        {/* News Feed Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-28 mb-16 flex items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <Newspaper className="w-5 h-5 text-ocean" strokeWidth={1.5} />
            <span className="text-xs font-body tracking-[0.3em] uppercase text-ocean">
              Latest from Wave-avi
            </span>
          </div>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Featured Publication */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group relative glass-card overflow-hidden border-ocean/10 hover:border-ocean/30 transition-all duration-500 mb-8"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-ocean via-ocean/60 to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Text side */}
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-body tracking-[0.25em] uppercase px-3 py-1.5 border border-ocean/30 text-ocean">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {featured.date}
                  </span>
                </div>
                <span className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-3 block">
                  The Property & Lifestyle Journal — Issue 1
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground leading-tight mb-6 group-hover:text-ocean transition-colors duration-300">
                  {featured.title}
                </h3>
                <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">
                  {featured.excerpt}
                </p>
                <a
                  href="https://elevation88.app.box.com/s/1oevu10ck9xquzdchn0kf5ntbb61hg1r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center gap-2 text-xs font-body tracking-[0.2em] uppercase text-ocean group-hover:gap-4 transition-all duration-300"
                >
                  Read the feature — Page 52 <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Magazine pages gallery */}
              {"images" in featured && featured.images && (
                <div className="relative grid grid-cols-3 gap-3 p-6 lg:p-8">
                  {featured.images.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20, rotate: i === 0 ? -2 : i === 2 ? 2 : 0 }}
                      animate={
                        inView
                          ? { opacity: 1, y: 0, rotate: i === 0 ? -2 : i === 2 ? 2 : 0 }
                          : {}
                      }
                      transition={{ duration: 0.5, delay: 0.7 + i * 0.15 }}
                      className="relative overflow-hidden shadow-2xl shadow-background/80 hover:scale-105 hover:z-10 transition-transform duration-500"
                      style={{
                        transformOrigin: i === 0 ? "bottom right" : i === 2 ? "bottom left" : "center",
                      }}
                    >
                      <img
                        src={img}
                        alt={`The Property & Lifestyle Journal - Page ${i + 1}`}
                        className="w-full h-full object-cover aspect-[3/4]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        )}

        {/* Other News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
              className="group glass-card p-8 hover:border-ocean/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-ocean/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-body tracking-[0.25em] uppercase px-2.5 py-1 border border-border text-muted-foreground group-hover:border-ocean/30 group-hover:text-ocean transition-colors duration-300">
                  {item.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </span>
              </div>
              <h4 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-ocean transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-sm font-body font-light text-muted-foreground leading-relaxed line-clamp-2">
                {item.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
