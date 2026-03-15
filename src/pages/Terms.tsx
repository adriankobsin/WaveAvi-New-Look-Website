import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="section-padding py-20 max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-4">
          Terms of Service
        </h1>
        <p className="text-sm font-body text-muted-foreground mb-12">
          Last updated: March 2026
        </p>

        <div className="space-y-10 text-sm font-body font-light text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Wave-AVI website and services, you agree to be bound by these Terms of Service.
              If you do not agree with any part of these terms, you may not access the website or use our services.
              These terms apply to all visitors, users, and clients of Wave-AVI Ltd and its affiliated entities.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">2. Services</h2>
            <p>
              Wave-AVI provides marine technology solutions including but not limited to: audio-visual systems,
              IT infrastructure, satellite communications and connectivity, lighting control, automation and integration,
              security and surveillance systems, and technical consultancy for superyachts and commercial marine vessels.
              All services are subject to individual project agreements and specifications.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">3. Intellectual Property</h2>
            <p>
              All content on the Wave-AVI website, including but not limited to text, graphics, logos, images,
              system designs, technical documentation, and software, is the property of Wave-AVI Ltd or its licensors
              and is protected by international copyright, trademark, and other intellectual property laws.
              You may not reproduce, distribute, modify, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">4. Project Engagements</h2>
            <p className="mb-3">For all project engagements:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Detailed specifications, scope of work, timelines, and pricing will be outlined in a separate project proposal or contract.</li>
              <li>Any changes to the agreed scope may result in adjustments to timeline and pricing.</li>
              <li>Wave-AVI reserves the right to engage subcontractors and technology partners to deliver services.</li>
              <li>Client approval is required at key project milestones as defined in the project agreement.</li>
              <li>All system designs and engineering solutions remain the intellectual property of Wave-AVI unless otherwise agreed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">5. Warranties & Guarantees</h2>
            <p>
              Wave-AVI warrants that all services will be performed with reasonable skill and care in accordance
              with industry standards. Equipment warranties are provided by the respective manufacturers and are
              passed through to the client. Specific warranty terms will be detailed in individual project contracts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Wave-AVI shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not limited to loss of profits, data,
              or business opportunities, arising from the use of our website or services. Our total liability
              shall not exceed the fees paid for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">7. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or sensitive information
              shared during the course of business. This includes vessel specifications, system designs, client
              details, and commercial terms. Confidentiality obligations survive the termination of any agreement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">8. Website Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must not use the website in any way that causes, or may cause, damage to the website or impairment of its availability.</li>
              <li>You must not use the website for any unlawful, illegal, fraudulent, or harmful purpose.</li>
              <li>You must not conduct any systematic data collection activities on or in relation to the website without our express consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites, including those of our technology partners
              (e.g., Crestron, Lutron, Cisco). These links are provided for convenience only. Wave-AVI does not
              endorse or accept responsibility for the content or practices of third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">10. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of England and Wales.
              Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction
              of the courts of England and Wales, unless otherwise agreed in a project-specific contract.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">11. Changes to Terms</h2>
            <p>
              Wave-AVI reserves the right to modify these Terms of Service at any time. Changes will be effective
              immediately upon posting to the website. Your continued use of the website constitutes acceptance
              of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">12. Contact</h2>
            <p>
              For questions regarding these terms, please contact us at:{" "}
              <a href="mailto:info@waveavi.com" className="text-ocean hover:underline">info@waveavi.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
