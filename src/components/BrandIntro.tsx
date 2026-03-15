import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import interiorImage from "@/assets/yacht-interior.jpg";

const BrandIntro = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 md:py-44" ref={ref}>
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-body tracking-[0.3em] uppercase text-ocean mb-6 block">
              The Technology Authority
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground leading-tight mb-8">
              Engineering Excellence
              <br />
              <span className="text-titanium">at Sea</span>
            </h2>
            <div className="luxury-divider !mx-0 mb-8" />
            <p className="text-base font-body font-light text-muted-foreground leading-relaxed mb-6">
              Wave-AVI is a global engineering consultancy delivering advanced
              AV, IT, connectivity, security and automation systems for
              superyachts and luxury environments.
            </p>
            <p className="text-base font-body font-light text-muted-foreground leading-relaxed">
              From new builds to refits, we design, engineer and integrate
              complete technology ecosystems that define the future of maritime
              luxury.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={interiorImage}
                alt="Advanced yacht bridge technology"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-ocean/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;
