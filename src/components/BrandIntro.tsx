import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import interiorImage from "@/assets/yacht-interior.jpg";

const BrandIntro = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" className="relative py-32 md:py-44 overflow-hidden" ref={ref}>
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}>
            
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
              Wave-AVI delivers advanced technology systems for superyachts,
              luxury residences and high-end hospitality environments. Our
              expertise combines marine engineering, enterprise networking and
              intelligent automation.
            </p>
            <p className="text-base font-body font-light text-muted-foreground leading-relaxed mb-10">
              From new builds to refits, we design, engineer and integrate
              complete technology ecosystems that define the future of maritime
              luxury.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              {[
              { value: "50+", label: "Projects" },
              { value: "4", label: "Global Offices" },
              { value: "20+", label: "Years Experience" }].
              map((stat, i) =>
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}>
                
                  <p className="text-2xl md:text-3xl font-display font-semibold text-ocean">
                    {stat.value}
                  </p>
                  <p className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative">
            
            <div className="relative overflow-hidden">
              <motion.img
                src={interiorImage}
                alt="Advanced yacht bridge technology"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
                style={{ y: imageY }} />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            
          </motion.div>
        </div>
      </div>
    </section>);

};

export default BrandIntro;