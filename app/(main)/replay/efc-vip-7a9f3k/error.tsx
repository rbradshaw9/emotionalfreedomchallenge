'use client';

export default function ReplayError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section style={{ textAlign: 'center', padding: '80px 24px' }}>
      <h2 className="v2-h2" style={{ marginBottom: '12px' }}>Unable to load the replay page</h2>
      <p className="v2-body v2-muted-text" style={{ marginBottom: '24px' }}>
        Please try refreshing. If the issue continues, contact us at{' '}
        <a href="mailto:info@drpauljenkins.com">info@drpauljenkins.com</a>.
      </p>
      <button className="v2-btn v2-btn-primary" onClick={reset}>
        Try again
      </button>
    </section>
  );
}
