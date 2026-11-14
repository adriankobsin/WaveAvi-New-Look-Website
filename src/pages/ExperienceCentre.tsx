import Seo from "@/components/Seo";
import LandingShell from "@/components/LandingShell";
import EnquiryForm from "@/components/EnquiryForm";

const ExperienceCentre = () => (
  <>
    <Seo title="Wave-AVI Technology Experience Centre, Phuket | Register Interest"
      description="Register your interest in a private consultation at Wave-AVI's new Technology Experience Centre in Phuket, opening for Songkran in April."
      path="/experience-centre" />
    <LandingShell
      eyebrow="Phuket · Opening April for Songkran"
      title="A private setting for effortless technology."
      intro="Wave-AVI's new Technology Experience Centre in Phuket lets villa owners, architects and hospitality developers explore audio-video, entertainment and intelligent control in person — and discuss a specific project with our team."
      points={[
        { title: "Luxury villas", text: "Discreet entertainment, integrated sound and intuitive control that complement the architecture." },
        { title: "Architects & designers", text: "Align system design with architectural intent early, so technology disappears into the space." },
        { title: "Boutique hospitality", text: "Technology that supports guest comfort and simplifies day-to-day operation." },
      ]}>
      <EnquiryForm
        options={[
          { value: "experience_villa", label: "Villa" },
          { value: "experience_architecture", label: "Architecture / Design" },
          { value: "experience_hospitality", label: "Hospitality" },
        ]}
        companyLabel="Company / Practice"
        locationLabel="Project location"
        messagePlaceholder="Tell us about your property or project..."
        showRemote
        submitLabel="Register Your Interest"
      />
    </LandingShell>
  </>
);
export default ExperienceCentre;
