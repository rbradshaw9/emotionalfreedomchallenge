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
          <p className="v2-subhead">
            Your spot in The Emotional Freedom Challenge is confirmed.
          </p>
        </div>
      </section>

      {/* Confirmation */}
      <section className="v2-section">
        <div className="v2-container v2-max-w-narrow">
          <p className="v2-body">
            You&apos;re officially registered for 5 Days to Emotional Ownership, and we&apos;ve sent you an email with everything you need to participate.
          </p>
          <p className="v2-body">
            Take a breath — you don&apos;t need to do anything perfectly to get value from this week. Just showing up is enough.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container">
          <span className="v2-kicker v2-text-center" style={{ display: 'block' }}>Your Next Steps</span>
          <h2 className="v2-h2 v2-text-center">Three Things to Do Now</h2>
          <div className="v2-spacer--sm"></div>
          <div className="v2-steps-section">

            <div className="v2-step">
              <h2>Step 1: Join the Private Facebook Group</h2>
              <p className="v2-body">
                All live sessions, reminders, and updates take place inside our private Facebook group.
              </p>
              <p className="v2-callout">
                👉{' '}
                <a
                  href="https://www.facebook.com/groups/emotionalfreedomchallengemarch2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-group-link"
                >
                  Join the Private Emotional Freedom Challenge Facebook Group
                </a>
              </p>
              <p className="v2-body" style={{ marginBottom: 0 }}>
                That&apos;s where the experience happens.<br />
                If you&apos;re not in the group, you won&apos;t see the live sessions or announcements.
              </p>
            </div>

            <div className="v2-step">
              <h2>Step 2: Put the Sessions on Your Calendar</h2>
              <p className="v2-body">The challenge runs:</p>
              <div className="v2-challenge-details">
                <strong>March 16–20</strong><br />
                Live each day at <strong>12:00 Noon Eastern</strong><br />
                Sessions last about 60 minutes
              </div>
              <p className="v2-body">
                To make this easy, we&apos;ve created a single calendar link that adds all five sessions at once.
              </p>
              <div className="v2-calendar-links">
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-btn v2-btn-primary"
                >
                  👉 Add All Sessions to Google Calendar
                </a>
                <a
                  href="/calendar/emotional-freedom-challenge.ics"
                  download
                  className="v2-btn v2-btn-outline"
                >
                  👉 Add to Outlook / Apple / Other Calendars
                </a>
              </div>
              <p className="v2-body" style={{ marginBottom: 0 }}>
                Once it&apos;s on your calendar, you won&apos;t need to think about it again — just show up when it starts.
              </p>
            </div>

            <div className="v2-step">
              <h2>Step 3: Introduce Yourself in the Group</h2>
              <p className="v2-body">
                Once you join the Facebook group, take a moment to introduce yourself.
              </p>
              <p className="v2-body">
                You don&apos;t need to be polished or personal.<br />
                Just answer one simple question:
              </p>
              <p className="v2-quote" style={{ fontStyle: 'italic' }}>
                What made you decide to sign up for this challenge?
              </p>
              <p className="v2-body" style={{ marginBottom: 0 }}>
                That one sentence often brings more clarity than people expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="v2-section">
        <div className="v2-container v2-max-w-narrow">
          <h2 className="v2-h2">A Final Note</h2>
          <p className="v2-body">
            Change rarely happens because someone learns a single new idea.
          </p>
          <p className="v2-body">
            It happens when people give themselves a short window to slow down, notice what&apos;s happening internally, and engage a little differently than usual.
          </p>
          <p className="v2-body">
            That&apos;s what this week is designed to support.
          </p>
          <p className="v2-body">
            If you have any questions, you can reach us at:<br />
            <a href="mailto:info@drpauljenkins.com">info@drpauljenkins.com</a> or{' '}
            <a href="tel:+18013807981">+1 801-380-7981</a>
          </p>
          <p className="v2-body v2-muted-text" style={{ marginTop: '24px', fontStyle: 'italic' }}>
            We&apos;re genuinely glad you&apos;re here.
          </p>
          <p className="v2-body" style={{ fontWeight: 700 }}>
            — Dr. Paul Jenkins &amp; Team
          </p>
        </div>
      </section>
    </>
  );
}
