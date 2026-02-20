import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'You\'re Registered - The Emotional Freedom Challenge',
  description: 'Your spot in The Emotional Freedom Challenge is confirmed. Here are your next steps to prepare for the 5-day experience.',
};

export default function ThankYouPage() {
  const googleCalendarUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    '&text=The+Emotional+Freedom+Challenge+%E2%80%94+Live+Session' +
    '&dates=20260316T170000Z/20260316T180000Z' +
    '&details=Live+sessions+take+place+inside+the+private+Facebook+group.' +
    '&recur=RRULE:FREQ=DAILY;COUNT=5' +
    '&ctz=America/New_York';

  return (
    <>
      {/* Hero */}
      <section className="v2-hero">
        <div className="v2-container">
          <div className="v2-success-icon" style={{ margin: '0 auto 20px' }}>✓</div>
          <h1 className="v2-h1">You&apos;re In</h1>
          <p className="v2-subhead" style={{ marginBottom: '16px' }}>
            Your spot in The Emotional Freedom Challenge is confirmed.
          </p>
          <p className="v2-body v2-text-center v2-muted-text" style={{ maxWidth: '720px', margin: '0 auto 8px' }}>
            We&apos;ve sent you an email with everything you need to participate.
          </p>
          <p className="v2-body v2-text-center" style={{ maxWidth: '720px', margin: '0 auto', fontWeight: 500 }}>
            What you do next will determine how much you actually get from the week.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container">
          <span className="v2-kicker v2-text-center" style={{ display: 'block' }}>Your Next Steps</span>
          <h2 className="v2-h2 v2-text-center">Three Things to Do Now</h2>
          <div className="v2-steps-section">

            <div className="v2-step">
              <h2>Step 1: Join the Private Facebook Group</h2>
              <p className="v2-body">
                All sessions, reminders, and updates happen inside the private Facebook group.
              </p>
              <p className="v2-callout">
                👉{' '}
                <a
                  href="https://www.facebook.com/groups/emotionalfreedomchallengemarch2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-group-link"
                >
                  Join the Private &ldquo;The Emotional Freedom Challenge&rdquo; Facebook Group
                </a>
              </p>
              <p className="v2-body" style={{ marginBottom: 0 }}>
                If you&apos;re not in the group, you&apos;ll miss the experience.
              </p>
            </div>

            <div className="v2-step">
              <h2>Step 2: Put the Sessions on Your Calendar</h2>
              <p className="v2-body">The challenge runs:</p>
              <div className="v2-challenge-details">
                <strong>Monday, March 16 – Friday, March 20</strong><br />
                Live each day at <strong>12:00 Noon Eastern</strong><br />
                Sessions run about an hour each day.
              </div>
              <p className="v2-body">
                Add them to your calendar now, while it&apos;s still top of mind:
              </p>
              <div className="v2-calendar-links">
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-btn v2-btn-primary"
                >
                  👉 Add to Google Calendar
                </a>
                <a
                  href="/calendar/emotional-freedom-challenge.ics"
                  download
                  className="v2-btn v2-btn-outline"
                >
                  👉 Add to Outlook / Apple / Other Calendars
                </a>
              </div>
              <p className="v2-body" style={{ fontWeight: 500 }}>
                Your commitment determines your results.
              </p>
              <p className="v2-body">
                I know when someone is truly committed by two documents — their calendar and their bank statement.
              </p>
              <p className="v2-body" style={{ marginBottom: 0 }}>
                Show your calendar that you are committed now.<br />
                If you want to show commitment in your bank statement, grab the VIP option.
              </p>
            </div>

            <div className="v2-step">
              <h2>Step 3: Introduce Yourself in the Group</h2>
              <p className="v2-body">
                When you join the group, take a moment to introduce yourself.
              </p>
              <p className="v2-body">
                You don&apos;t need to be polished or personal.<br />
                Just answer one simple question in your post:
              </p>
              <p className="v2-quote" style={{ fontStyle: 'italic' }}>
                What made you decide to sign up for this challenge?
              </p>
              <p className="v2-body" style={{ marginBottom: 0 }}>
                That one sentence often clarifies more than people expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Upsell */}
      <section className="v2-section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="v2-container--sm">
          <div className="v2-upgrade-card" style={{ maxWidth: '540px', margin: '0 auto' }}>
            <span className="v2-kicker v2-text-center" style={{ display: 'block', marginBottom: '8px' }}>Still Thinking About VIP?</span>
            <h2 className="v2-h3 v2-text-center" style={{ marginBottom: '12px' }}>Get More from This Week</h2>
            <p className="v2-body v2-text-center" style={{ marginBottom: '20px' }}>
              VIP members get private Q&amp;A after each session, special surprise guests, and full recordings to revisit anytime — all for a one-time payment of <strong>$27</strong>.
            </p>
            <a
              href="https://bl843.infusionsoft.app/app/orderForms/cdb82d2b-34ac-443e-aba9-2c63993be424"
              className="v2-btn v2-btn-primary v2-btn-lg v2-btn-block"
            >
              Add VIP Access for $27
            </a>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="v2-section" style={{ paddingTop: '40px' }}>
        <div className="v2-container v2-max-w-narrow">
          <h2 className="v2-h2">A Final Note</h2>
          <p className="v2-body">
            Change doesn&apos;t usually happen because someone learns one new idea.
          </p>
          <p className="v2-body">
            It happens when people give themselves a committed window to slow down, pay attention, and engage differently than usual.
          </p>
          <p className="v2-body">
            That&apos;s what this week is.
          </p>
          <p className="v2-body">
            If you have any questions, you can reach us at:<br />
            <a href="mailto:info@drpauljenkins.com">info@drpauljenkins.com</a> or{' '}
            <a href="tel:+18013807981">+1 801-380-7981</a>
          </p>
          <p className="v2-body v2-muted-text" style={{ marginTop: '24px', fontStyle: 'italic' }}>
            We&apos;re glad you&apos;re here.
          </p>
          <p className="v2-body" style={{ fontWeight: 700 }}>
            — Dr. Paul Jenkins &amp; Team
          </p>
        </div>
      </section>
    </>
  );
}
