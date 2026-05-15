import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandIntro from "@/components/BrandIntro";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TechnologyPartners from "@/components/TechnologyPartners";
import GlobalPresence from "@/components/GlobalPresence";
import InnovationSection from "@/components/InnovationSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Wave-AVI | Marine, Residential & Commercial AV Engineering"
        description="Global engineering consultancy delivering advanced AV, IT, connectivity, security and automation systems for superyachts and luxury environments."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Wave-AVI",
            url: "https://www.waveavi.com",
            logo: "https://www.waveavi.com/favicon.ico",
            sameAs: [],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Wave-AVI",
            url: "https://www.waveavi.com",
          },
        ]}
      />
      <Navbar />
      <HeroSection />
      <BrandIntro />
      <div className="glow-line" />
      <IndustriesSection />
      <ServicesSection />
      <div className="glow-line" />
      <TechnologyPartners />
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
