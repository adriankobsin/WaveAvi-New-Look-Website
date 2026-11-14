import Seo from "@/components/Seo";
import LandingShell from "@/components/LandingShell";
import EnquiryForm from "@/components/EnquiryForm";

const MarineEnquiry = () => (
  <>
    <Seo title="Marine Lighting Supply & AV Refits | Wave-AVI"
      description="Send your marine lighting requirements or discuss an AV and control refit with Wave-AVI, serving Southeast Asia and Europe."
      path="/marine/enquire" />
    <LandingShell
      eyebrow="Marine · Southeast Asia & Europe"
      title="Marine lighting. Seamless refits."
      intro="From marine lighting supply to audio-video and control refits, Wave-AVI brings technical consultancy, design, installation and support together. Share your vessel's requirements and planned refit window."
      points={[
        { title: "Lighting supply", text: "LEDs, strip LEDs, downlights and explosion-proof marine lighting, matched to the application. Ratings and certification are confirmed per product before supply." },
        { title: "AV & control refits", text: "We review existing systems, intended improvements and the constraints of your refit window." },
        { title: "Accountable delivery", text: "One team from specification through installation and ongoing support." },
      ]}>
      <EnquiryForm
        options={[
          { value: "marine_lighting", label: "Lighting supply" },
          { value: "marine_refit", label: "AV / control refit" },
        ]}
        companyLabel="Vessel / Management company"
        locationLabel="Vessel location"
        messagePlaceholder="Products, quantities, areas of the vessel, or the systems you want to upgrade..."
        submitLabel="Send Your Requirements"
      />
    </LandingShell>
  </>
);
export default MarineEnquiry;
