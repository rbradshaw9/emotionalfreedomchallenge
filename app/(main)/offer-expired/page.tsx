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
      {/* Logo */}
      <img
        src="https://theemotionalfreedomchallenge.com/logo/emotional-freedom-challenge-logo.png"
        alt="Emotional Freedom Challenge"
        style={{ maxWidth: '200px', marginBottom: '40px', height: 'auto' }}
      />

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
          The midnight deadline has passed and this limited-time pricing is no longer available.
          We&apos;d love to help you explore current enrollment options.
        </p>

        {/* Divider */}
        <div
          style={{
            borderTop: '1px solid #e8e8ed',
            margin: '0 0 28px',
          }}
        />

        <p
          style={{
            fontSize: '15px',
            color: '#1d1d1f',
            fontWeight: '600',
            margin: '0 0 8px',
          }}
        >
          Questions about joining?
        </p>
        <p
          style={{
            fontSize: '14px',
            color: '#6e6e73',
            margin: '0 0 24px',
          }}
        >
          Reach out to Dr. Paul directly and we&apos;ll see what we can do.
        </p>

        <a
          href="mailto:paul@drpauljenkins.com"
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
          Contact Us — paul@drpauljenkins.com
        </a>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #e8e8ed', margin: '28px 0 24px' }} />

        <p
          style={{
            fontSize: '13px',
            color: '#6e6e73',
            margin: '0 0 4px',
            lineHeight: '1.5',
          }}
        >
          We don&apos;t want to leave you hanging —
        </p>
        <p
          style={{
            fontSize: '13px',
            color: '#6e6e73',
            margin: '0 0 16px',
            lineHeight: '1.5',
          }}
        >
          You can still join the Positivity Practitioner Certification at the standard enrollment rate.
          The 1-on-1 bonus session with Dr. Paul is no longer included, but everything else is.
        </p>
        <a
          href="https://positivitypractitioner.com"
          target="_blank"
          rel="noopener noreferrer"
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
          Learn More at PositivityPractitioner.com →
        </a>
      </div>
    </section>
  );
}
