import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
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
          Privacy Policy
        </h1>
        <p className="text-sm font-body text-muted-foreground mb-12">
          Last updated: March 2026
        </p>

        <div className="space-y-10 text-sm font-body font-light text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">1. Introduction</h2>
            <p>
              Wave-AVI Ltd ("Wave-AVI", "we", "us", or "our") is committed to protecting and respecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
              our website or engage with our services across our global entities: Wave-AVI Ltd (United Kingdom),
              Wave-AVI B.V. (Netherlands), Wave-AVI Co. Ltd (Thailand), and Wave-AVI Pte. Ltd (Singapore).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">2. Data Controller</h2>
            <p>
              The data controller responsible for your personal data is Wave-AVI Ltd, registered in the United Kingdom
              at Room 105, The Oast, Business Centre, New Road, West Malling, East Malling, ME19 6BJ.
              For any privacy-related inquiries, please contact us at{" "}
              <a href="mailto:info@waveavi.com" className="text-ocean hover:underline">info@waveavi.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">3. Information We Collect</h2>
            <p className="mb-3">We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="text-foreground/80">Personal identification information:</span> Name, email address, phone number, company name, and job title when you contact us or request our services.</li>
              <li><span className="text-foreground/80">Technical data:</span> IP address, browser type and version, time zone setting, operating system, and platform when you visit our website.</li>
              <li><span className="text-foreground/80">Usage data:</span> Information about how you use our website, including pages visited and navigation paths.</li>
              <li><span className="text-foreground/80">Project data:</span> Technical specifications, vessel details, and project requirements shared during consultations.</li>
              <li><span className="text-foreground/80">Communication data:</span> Records of correspondence when you contact us via email, phone, or WhatsApp.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">4. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, maintain, and improve our marine technology services.</li>
              <li>To respond to your enquiries and provide project quotations.</li>
              <li>To communicate with you about projects, services, and updates.</li>
              <li>To comply with legal obligations and protect our legitimate interests.</li>
              <li>To analyse website usage and improve user experience.</li>
              <li>To send marketing communications where you have opted in to receive them.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">5. Legal Basis for Processing</h2>
            <p>We process your personal data on the following legal bases under the UK GDPR and EU GDPR:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><span className="text-foreground/80">Contractual necessity:</span> To perform a contract with you or take steps at your request before entering into a contract.</li>
              <li><span className="text-foreground/80">Legitimate interests:</span> To operate and improve our business, provided these interests do not override your rights.</li>
              <li><span className="text-foreground/80">Consent:</span> Where you have given explicit consent for marketing communications.</li>
              <li><span className="text-foreground/80">Legal obligation:</span> To comply with applicable laws and regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">6. Data Sharing & Transfers</h2>
            <p>
              We may share your data with our affiliated entities (Wave-AVI B.V., Wave-AVI Co. Ltd, Wave-AVI Pte. Ltd)
              for the purpose of delivering our services. We may also share data with trusted technology partners and
              subcontractors who assist in project delivery. Where data is transferred outside the UK/EEA, we ensure
              appropriate safeguards are in place, such as Standard Contractual Clauses.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">7. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected,
              including to satisfy any legal, accounting, or reporting requirements. Project-related data is typically
              retained for the duration of the vessel's service life or as required by maritime regulations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">8. Your Rights</h2>
            <p className="mb-3">Under applicable data protection laws, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to or restrict the processing of your data.</li>
              <li>Request data portability.</li>
              <li>Withdraw consent at any time (where processing is based on consent).</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:info@waveavi.com" className="text-ocean hover:underline">info@waveavi.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">9. Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data against
              unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over
              the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
              updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:info@waveavi.com" className="text-ocean hover:underline">info@waveavi.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
