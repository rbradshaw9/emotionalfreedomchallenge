'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{ textAlign: 'center', padding: '80px 24px', fontFamily: 'system-ui, sans-serif' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '12px' }}>Something went wrong</h2>
          <p style={{ color: '#6e6e73', marginBottom: '24px' }}>
            We&apos;re sorry — please try refreshing the page or contact us at{' '}
            <a href="mailto:info@drpauljenkins.com" style={{ color: '#0071e3' }}>info@drpauljenkins.com</a>.
          </p>
          <button
            onClick={reset}
            style={{ padding: '10px 24px', background: '#0071e3', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '15px' }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
