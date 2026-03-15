import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-32 md:py-44" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="luxury-divider mb-12" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-8">
            Design the Future of
            <br />
            <span className="text-gradient-ocean">Technology at Sea</span>
          </h2>
          <p className="text-base font-body font-light text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            Begin a conversation with our engineering team about your next
            project.
          </p>
          <a
            href="mailto:info@waveavi.com"
            className="inline-flex items-center gap-3 text-xs font-body font-medium tracking-[0.25em] uppercase bg-ocean text-primary-foreground px-10 py-5 hover:bg-ocean-deep transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
