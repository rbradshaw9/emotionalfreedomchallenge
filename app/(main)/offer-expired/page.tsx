import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Special Offer Expired — Positivity Practitioner Certification',
  description: 'This special pricing offer has ended. Contact us to learn about current enrollment options.',
  robots: { index: false, follow: false },
};

export default function OfferExpiredPage() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 24px',
        background: 'linear-gradient(135deg, #fafafa 0%, #f0f4ff 100%)',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >


      {/* Card */}
      <div
        style={{
          background: '#fff',
          borderRadius: '20px',
          boxShadow: '0 4px 40px rgba(0,0,0,0.10)',
          padding: '48px 40px',
          maxWidth: '560px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ff6b6b, #ee0979)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            fontSize: '32px',
          }}
        >
          ⏰
        </div>

        <h1
          style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1d1d1f',
            margin: '0 0 12px',
            lineHeight: '1.2',
          }}
        >
          This Special Offer Has Expired
        </h1>

        <p
          style={{
            fontSize: '16px',
            color: '#6e6e73',
            lineHeight: '1.6',
            margin: '0 0 32px',
          }}
        >
          The special bonus — including the private 1-on-1 session with Dr. Paul — was only
          available until midnight. That window has closed, but you haven&apos;t missed
          everything. The Positivity Practitioner Certification is still open.
        </p>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #e8e8ed', margin: '0 0 28px' }} />

        {/* Primary CTA — PositivityPractitioner.com */}
        <p
          style={{
            fontSize: '15px',
            color: '#1d1d1f',
            fontWeight: '600',
            margin: '0 0 6px',
          }}
        >
          We don&apos;t want to leave you hanging.
        </p>
        <p
          style={{
            fontSize: '14px',
            color: '#6e6e73',
            margin: '0 0 20px',
            lineHeight: '1.6',
          }}
        >
          You can still join the Positivity Practitioner Certification at the standard
          enrollment rate — everything except the 1-on-1 bonus is included.
        </p>
        <a
          href="https://positivitypractitioner.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #0071e3, #00408a)',
            color: '#fff',
            padding: '14px 32px',
            borderRadius: '100px',
            fontSize: '15px',
            fontWeight: '600',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}
        >
          Learn More at PositivityPractitioner.com →
        </a>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #e8e8ed', margin: '28px 0 24px' }} />

        {/* Secondary CTA — Email */}
        <p
          style={{
            fontSize: '14px',
            color: '#6e6e73',
            margin: '0 0 12px',
            lineHeight: '1.5',
          }}
        >
          Still have questions? Reach out to Dr. Paul directly.
        </p>
        <a
          href="mailto:paul@drpauljenkins.com"
          style={{
            display: 'inline-block',
            background: 'transparent',
            color: '#0071e3',
            padding: '10px 24px',
            borderRadius: '100px',
            fontSize: '14px',
            fontWeight: '600',
            textDecoration: 'none',
            border: '1.5px solid #0071e3',
            letterSpacing: '-0.01em',
          }}
        >
          paul@drpauljenkins.com
        </a>
      </div>
    </section>
  );
}
