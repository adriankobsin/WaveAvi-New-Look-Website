import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="Cookie Policy | Wave-AVI"
        description="How Wave-AVI uses cookies and similar tracking technologies on the waveavi.com website."
        path="/cookies"
      />
      <div className="section-padding py-20 max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-4">
          Cookie Policy
        </h1>
        <p className="text-sm font-body text-muted-foreground mb-12">
          Last updated: March 2026
        </p>

        <div className="space-y-10 text-sm font-body font-light text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work efficiently and to provide information to the website owners.
              This policy explains how Wave-AVI uses cookies and similar tracking technologies on our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">2. How We Use Cookies</h2>
            <p className="mb-3">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="text-foreground/80">Essential cookies:</span> Required for the website to function correctly. These enable core features such as page navigation and access to secure areas. The website cannot function properly without these cookies.</li>
              <li><span className="text-foreground/80">Analytics cookies:</span> Help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the website experience.</li>
              <li><span className="text-foreground/80">Functional cookies:</span> Allow the website to remember choices you make (such as language preferences) and provide enhanced, more personalised features.</li>
              <li><span className="text-foreground/80">Performance cookies:</span> Collect information about how you use the website, such as which pages you visit most often, helping us optimise site performance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">3. Cookies We Use</h2>
            <div className="border border-border/30 rounded overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border/30 bg-card/30">
                    <th className="px-4 py-3 text-xs font-body font-medium text-foreground/80 uppercase tracking-wider">Cookie</th>
                    <th className="px-4 py-3 text-xs font-body font-medium text-foreground/80 uppercase tracking-wider">Type</th>
                    <th className="px-4 py-3 text-xs font-body font-medium text-foreground/80 uppercase tracking-wider">Duration</th>
                    <th className="px-4 py-3 text-xs font-body font-medium text-foreground/80 uppercase tracking-wider">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  <tr>
                    <td className="px-4 py-3 text-foreground/70">_ga</td>
                    <td className="px-4 py-3">Analytics</td>
                    <td className="px-4 py-3">2 years</td>
                    <td className="px-4 py-3">Distinguishes unique users for Google Analytics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-foreground/70">_gid</td>
                    <td className="px-4 py-3">Analytics</td>
                    <td className="px-4 py-3">24 hours</td>
                    <td className="px-4 py-3">Distinguishes unique users for Google Analytics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-foreground/70">cookie_consent</td>
                    <td className="px-4 py-3">Essential</td>
                    <td className="px-4 py-3">1 year</td>
                    <td className="px-4 py-3">Stores your cookie consent preferences</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-foreground/70">session_id</td>
                    <td className="px-4 py-3">Essential</td>
                    <td className="px-4 py-3">Session</td>
                    <td className="px-4 py-3">Maintains your session while browsing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">4. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third-party services that appear on our pages. We use Google Analytics
              to analyse website traffic. Google may also use cookies to serve ads based on your prior visits.
              We also embed Google Maps on our Global Presence page, which may set its own cookies.
              We do not control third-party cookies and recommend reviewing the respective privacy policies
              of these services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">5. Managing Cookies</h2>
            <p className="mb-3">
              You can control and manage cookies in several ways. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>View what cookies are stored and delete them individually.</li>
              <li>Block third-party cookies.</li>
              <li>Block cookies from particular websites.</li>
              <li>Block all cookies from being set.</li>
              <li>Delete all cookies when you close your browser.</li>
            </ul>
            <p className="mt-3">
              Please note that if you choose to block or delete cookies, some features of our website may not
              function correctly. For more information on managing cookies, visit{" "}
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ocean hover:underline"
              >
                aboutcookies.org
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">6. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation,
              or our data practices. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-medium text-foreground mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at:{" "}
              <a href="mailto:info@waveavi.com" className="text-ocean hover:underline">info@waveavi.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
