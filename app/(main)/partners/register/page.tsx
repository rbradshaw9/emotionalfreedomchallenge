import type { Metadata } from 'next';
import PartnerRegisterForm from './PartnerRegisterForm';

export const metadata: Metadata = {
  title: 'Partner Registration - The Emotional Freedom Challenge',
  description: 'Complete your partner registration for The Emotional Freedom Challenge. Secure partner dashboard access with referral tracking and commission management.',
};

export default function PartnerRegister() {
  return (
    <>
      <section className="v2-hero">
        <div className="v2-container--md">
          <p className="v2-kicker">Partner Program</p>
          <h1 className="v2-h1">Partner Registration</h1>
          <p className="v2-subhead">
            Thanks for taking the next step. This page is for invited partners to complete registration for The Emotional Freedom Challenge.
          </p>
        </div>
      </section>

      <section className="v2-section v2-section-muted">
        <div className="v2-container--md">
          <h2 className="v2-h2" style={{ marginBottom: '24px' }}>What This Registration Includes</h2>
          <p className="v2-body">
            To ensure accurate referral tracking and timely commission payments, we ask for detailed partner information. This is standard for any professional referral program.
          </p>
          <p className="v2-body">
            You&apos;ll provide contact details, PayPal payment information, and account credentials for secure access to your partner dashboard.
          </p>
          <p className="v2-body">
            We know this requires more detail than a typical signup. All information is encrypted, stored securely, and used solely for partnership administration and tax compliance.
          </p>
          <p className="v2-body" style={{ fontWeight: 600 }}>
            Your privacy matters to us. We never share partner information with third parties.
          </p>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container--md">
          <h2 className="v2-h2" style={{ marginBottom: '16px' }}>What Happens Next</h2>
          <p className="v2-body">Once you complete this registration:</p>
          <ul className="v2-list v2-checklist" style={{ marginBottom: '32px' }}>
            <li><strong>Immediate confirmation</strong> — You&apos;ll be registered as an official referral partner</li>
            <li><strong>Within 1 business day</strong> — We&apos;ll send your unique referral link</li>
            <li><strong>Partner resources</strong> — You&apos;ll receive ready-to-share email and social copy</li>
            <li><strong>No pressure</strong> — Share when and how it feels right for your audience</li>
          </ul>
          <p className="v2-body">Questions? Our team is here to support you every step of the way.</p>
        </div>
      </section>

      <section className="v2-section v2-section-muted">
        <div className="v2-container--sm">
          <PartnerRegisterForm />

          <p className="v2-body v2-text-center" style={{ marginTop: '24px', color: 'var(--v2-muted)', fontSize: '14px' }}>
            We respect your privacy. Partner information is used only for referral tracking, commission payouts, and challenge-related communication.
          </p>
        </div>
      </section>
    </>
  );
}
