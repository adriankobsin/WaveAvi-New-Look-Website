import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandIntro from "@/components/BrandIntro";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TechnologyPartners from "@/components/TechnologyPartners";
import ProjectsSection from "@/components/ProjectsSection";
import GlobalPresence from "@/components/GlobalPresence";
import InnovationSection from "@/components/InnovationSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const YachtScene = lazy(() => import("@/components/YachtScene"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BrandIntro />
      <div className="glow-line" />
      <ServicesSection />
      <IndustriesSection />
      <div className="glow-line" />
      <TechnologyPartners />
      <Suspense fallback={null}>
        <YachtScene />
      </Suspense>
      <div className="glow-line" />
      <ProjectsSection />
      <div className="glow-line" />
      <GlobalPresence />
      <InnovationSection />
      <div className="glow-line" />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
