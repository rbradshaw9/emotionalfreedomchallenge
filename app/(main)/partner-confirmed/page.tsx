import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Application Received - Partner Program',
  description: 'Your partner application for The Emotional Freedom Challenge has been submitted. Our team will review and contact you shortly.',
};

export default function PartnerConfirmedPage() {
  return (
    <>
      <section className="v2-hero">
        <div className="v2-container--sm">
          <div className="v2-confirmation-card">
            <div className="v2-success-icon">✓</div>

            <h1 className="v2-h1" style={{ textAlign: 'center', marginBottom: '16px' }}>
              Application Received — Thank You
            </h1>

            <p className="v2-body v2-text-center">
              Your partner application for The Emotional Freedom Challenge has been successfully submitted.
            </p>
            <p className="v2-body v2-text-center">
              We appreciate your interest in partnering with us and taking the time to apply. Our team reviews each application carefully to ensure alignment and the best possible experience for everyone involved.
            </p>

            <div className="v2-next-steps-card">
              <h2>What Happens Next</h2>
              <ol className="v2-numbered-list">
                <li>Our team will review your application.</li>
                <li>If approved, you&apos;ll receive an email with next steps and your unique referral link.</li>
                <li>You&apos;ll also receive details about available resources, timelines, and expectations.</li>
              </ol>
            </div>

            <div className="v2-reassurance-box">
              <p>
                <strong>Please Note:</strong> Application reviews typically take a short amount of time. Be sure to check your inbox — and your spam or promotions folder — for updates from us.
              </p>
            </div>

            <p className="v2-body v2-text-center" style={{ marginBottom: '24px' }}>
              We&apos;re grateful for your interest in supporting emotional growth and personal development through The Emotional Freedom Challenge. We&apos;ll be in touch soon.
            </p>

            <div style={{ textAlign: 'center' }}>
              <Link href="/" className="v2-btn v2-btn-outline">
                Return to The Emotional Freedom Challenge
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
