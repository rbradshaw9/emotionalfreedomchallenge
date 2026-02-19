import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use - The Emotional Freedom Challenge',
  description: 'Terms of use for The Emotional Freedom Challenge by Dr. Paul Jenkins.',
};

export default function TermsPage() {
  return (
    <>
      <div className="v2-prose">
        <div className="v2-container--md">
          <h1>Terms of Use</h1>
          <p className="v2-last-updated">Last Updated: February 16, 2026</p>

          <section>
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and participating in The Emotional Freedom Challenge by Dr. Paul Jenkins
              (&ldquo;the Challenge&rdquo;), you agree to be bound by these Terms of Use. If you do not agree
              to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2>Description of Service</h2>
            <p>
              The Emotional Freedom Challenge is a 5-day online educational experience designed to
              help participants explore emotional wellness and personal development. The Challenge
              includes live sessions, recorded replays, and supplementary materials.
            </p>
          </section>

          <section>
            <h2>Registration and Account</h2>
            <ul>
              <li>You must provide accurate and complete information when registering</li>
              <li>You are responsible for maintaining the confidentiality of your access credentials</li>
              <li>You must be at least 18 years of age to participate</li>
              <li>One registration is for individual use only and may not be shared</li>
            </ul>
          </section>

          <section>
            <h2>VIP Access</h2>
            <p>
              VIP access is available for an additional fee and includes extra features such as
              Q&amp;A sessions and exclusive content. VIP purchases are subject to our refund policy
              as outlined below.
            </p>
          </section>

          <section>
            <h2>Refund Policy</h2>
            <p>
              We offer a 30-day money-back guarantee for VIP purchases. To request a refund,
              please contact us within 30 days of purchase. The free version of the Challenge
              does not require a refund as no payment is collected.
            </p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              All content provided in the Challenge, including videos, audio recordings, worksheets,
              and written materials, is the intellectual property of Dr. Paul Jenkins and is protected
              by copyright law. You may not:
            </p>
            <ul>
              <li>Copy, reproduce, or distribute Challenge content</li>
              <li>Record, screenshot, or share live sessions or replays</li>
              <li>Use the content for commercial purposes</li>
              <li>Create derivative works based on Challenge materials</li>
            </ul>
          </section>

          <section>
            <h2>User Conduct</h2>
            <p>You agree to use the Challenge in a respectful and lawful manner. You will not:</p>
            <ul>
              <li>Harass, abuse, or harm other participants</li>
              <li>Share inappropriate or offensive content</li>
              <li>Attempt to access areas of the platform you&apos;re not authorized to access</li>
              <li>Interfere with the proper functioning of the Challenge</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section>
            <h2>No Medical or Professional Advice</h2>
            <p>
              The Challenge provides educational content for personal development purposes only.
              It is not a substitute for professional medical, psychological, or therapeutic advice.
              If you are experiencing a mental health crisis or emergency, please contact appropriate
              professional help immediately.
            </p>
          </section>

          <section>
            <h2>Disclaimer of Warranties</h2>
            <p>
              The Challenge is provided &ldquo;as is&rdquo; without warranties of any kind, either express or
              implied. We do not guarantee specific results from participation in the Challenge.
              Individual results may vary.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Dr. Paul Jenkins and The Emotional Freedom
              Challenge shall not be liable for any indirect, incidental, consequential, or punitive
              damages arising from your participation in the Challenge.
            </p>
          </section>

          <section>
            <h2>Modifications to Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of the Challenge
              at any time without notice. We may also update these Terms of Use periodically.
            </p>
          </section>

          <section>
            <h2>Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to the Challenge at any time,
              without notice, for conduct that we believe violates these Terms of Use or is harmful
              to other participants.
            </p>
          </section>

          <section>
            <h2>Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of
              the jurisdiction in which Dr. Paul Jenkins operates, without regard to its conflict
              of law provisions.
            </p>
          </section>

          <section>
            <h2>Contact Information</h2>
            <p>If you have questions about these Terms of Use, please contact us at:</p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@drpauljenkins.com">info@drpauljenkins.com</a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+18013807981">+1 801-380-7981</a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
