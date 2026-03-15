import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover">
          
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }} />
        
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-4xl">
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-ocean mb-8" />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-semibold leading-[0.95] tracking-tight text-foreground mb-6">
            Technology
            <br />
            <span className="text-gradient-ocean">Beyond the Horizon</span>
          </h1>
          <p className="text-base md:text-lg font-body font-light text-silver max-w-2xl mb-10 leading-relaxed">Advanced AV, IT and Connectivity Systems for the World's Most Exceptional Yachts and Luxury Residences.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-3 text-xs font-body font-medium tracking-[0.25em] uppercase text-ocean border border-ocean/30 px-8 py-4 hover:bg-ocean/10 transition-all duration-300">
            
            Explore Our Capabilities
            <span className="text-base">→</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        
        <span className="text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-ocean/50" />
        
      </motion.div>
    </section>);

};

export default HeroSection;