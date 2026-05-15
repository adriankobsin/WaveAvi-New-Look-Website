import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Gem, Target, Star, Handshake, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const values = [
  {
    icon: Gem,
    title: "Design Excellence",
    description:
      "We believe technology should complement architecture and interior design. Every solution is crafted to integrate seamlessly, preserving the aesthetic integrity of the space.",
  },
  {
    icon: Star,
    title: "Simplicity Through Intelligence",
    description:
      "Advanced technology should be easy to use. We focus on intuitive control and automation, ensuring complex systems operate effortlessly through Crestron and Control4 platforms.",
  },
  {
    icon: Target,
    title: "Quality Without Compromise",
    description:
      "From product selection to installation standards, we work exclusively with proven technologies and apply rigorous attention to detail at every stage.",
  },
  {
    icon: Handshake,
    title: "Partnership & Trust",
    description:
      "We build lasting relationships with our clients, collaborators, and industry partners through transparency, reliability, and consistent delivery.",
  },
  {
    icon: Rocket,
    title: "Future-Ready Solutions",
    description:
      "Our systems are designed with longevity in mind, offering scalability, flexibility, and the ability to evolve as technology advances.",
  },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="About Wave-AVI | Marine & Luxury AV Engineering"
        description="Wave-AVI is a global engineering consultancy specialising in AV, IT and control systems for superyachts, luxury residences and commercial environments."
        path="/about"
      />
      <Navbar />

      <section className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="section-padding">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-xs font-body tracking-[0.3em] uppercase text-ocean mb-4 block">
              About Us
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
              Who We Are
            </h1>
            <div className="luxury-divider mt-8" />
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-24"
          >
            <h2 className="text-xs font-body tracking-[0.3em] uppercase text-ocean mb-6 text-center">
              Philosophy
            </h2>
            <div className="space-y-6 text-base font-body font-light text-muted-foreground leading-relaxed">
              <p>
                Our philosophy is founded on the principle that exceptional technology should feel effortless. We create refined audio visual and smart control environments where performance, elegance, and simplicity exist in perfect balance. Every system is designed to enhance the space it inhabits, remaining discreet in presence yet powerful in capability.
              </p>
              <p>
                We take a design-first approach, working closely with architects, interior designers, and clients to ensure technology integrates seamlessly into the fabric of each project. Using industry-leading platforms such as Crestron and Control4, we deliver systems that are intuitive, reliable, and engineered to the highest standards. From lighting and climate to entertainment and security, every element is unified into a single, cohesive experience.
              </p>
              <p>
                Attention to detail defines our work. From system specification and precision installation to calibration and commissioning, we focus on delivering solutions that perform flawlessly today while remaining adaptable for tomorrow. Our commitment extends beyond installation, offering ongoing support and long-term system stewardship to ensure continued excellence.
              </p>
            </div>
          </motion.div>

          <div className="glow-line mb-24" />

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto mb-24 text-center"
          >
            <h2 className="text-xs font-body tracking-[0.3em] uppercase text-ocean mb-6">
              Our Mission
            </h2>
            <p className="text-lg font-body font-light text-muted-foreground leading-relaxed">
              Our mission is to design and deliver sophisticated technology solutions that elevate the way people live, work, and interact with their environments. Through the use of best-in-class platforms, thoughtful design, and meticulous execution, we aim to create intelligent spaces that are intuitive, dependable, and enduring.
            </p>
          </motion.div>

          <div className="glow-line mb-24" />

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xs font-body tracking-[0.3em] uppercase text-ocean mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="glass-card p-8 group hover:border-ocean/30 transition-all duration-500"
                >
                  <value.icon
                    className="w-7 h-7 text-ocean mb-5 group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={1.2}
                  />
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
