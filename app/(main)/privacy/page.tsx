import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - The Emotional Freedom Challenge',
  description: 'Privacy policy for The Emotional Freedom Challenge by Dr. Paul Jenkins.',
};

export default function PrivacyPage() {
  return (
    <>
      <div className="v2-prose">
        <div className="v2-container--md">
          <h1>Privacy Policy</h1>
          <p className="v2-last-updated">Last Updated: February 16, 2026</p>

          <section>
            <h2>Introduction</h2>
            <p>
              This Privacy Policy describes how The Emotional Freedom Challenge by Dr. Paul Jenkins
              (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects your personal information when you
              participate in our challenge and use our website.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name and email address when you register for the challenge</li>
              <li>Payment information if you purchase VIP access</li>
              <li>Communications when you contact us for support</li>
              <li>Usage data and analytics about how you interact with our website</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide access to the challenge sessions and materials</li>
              <li>Send you important updates and communications about the challenge</li>
              <li>Process payments for VIP access</li>
              <li>Improve our services and user experience</li>
              <li>Respond to your questions and provide customer support</li>
              <li>Send you occasional emails about future programs (you can opt out at any time)</li>
            </ul>
          </section>

          <section>
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information only in the following circumstances:
            </p>
            <ul>
              <li>With service providers who help us operate our business (e.g., email service providers, payment processors)</li>
              <li>When required by law or to protect our rights</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Object to certain processing of your information</li>
            </ul>
          </section>

          <section>
            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to improve your experience on our website,
              analyze usage patterns, and deliver personalized content. You can control cookie settings
              through your browser preferences.
            </p>
          </section>

          <section>
            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices of these external sites. We encourage you to review their privacy
              policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly
              collect personal information from children.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant
              changes by posting the new policy on this page and updating the &ldquo;Last Updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your information,
              please contact us at:
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:privacy@drpauljenkins.com">privacy@drpauljenkins.com</a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
