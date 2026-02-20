import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VIP Access Confirmed - The Emotional Freedom Challenge',
  description: 'Your VIP upgrade is confirmed. Access recordings, live Q&A, and companion materials during the Emotional Freedom Challenge.',
};

export default function VipConfirmedPage() {
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
          <div className="v2-badge v2-badge--vip" style={{ marginBottom: '20px' }}>
            ⭐ VIP Access Confirmed
          </div>
          <h1 className="v2-h1">You&apos;re All Set</h1>
          <p className="v2-subhead">
            Your VIP upgrade for The Emotional Freedom Challenge is confirmed.
          </p>
        </div>
      </section>

      {/* Confirmation */}
      <section className="v2-section">
        <div className="v2-container v2-max-w-narrow">
          <p className="v2-body">
            You now have full VIP access — recordings, extended Q&amp;A after each session, and everything else included in the upgrade.
          </p>
          <p className="v2-body">
            Check your inbox for a confirmation email with all the details.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container">
          <span className="v2-kicker v2-text-center" style={{ display: 'block' }}>Your VIP Access</span>
          <h2 className="v2-h2 v2-text-center">What&apos;s Included in Your VIP Access</h2>
          <div className="v2-spacer--sm"></div>
          <div className="v2-benefits-list v2-max-w-narrow" style={{ margin: '0 auto' }}>
            <div className="v2-benefit-item">
              <span className="v2-benefit-icon">🎥</span>
              <div>
                <strong>Session Recordings</strong>
                <p>Every daily session recorded and available to revisit after the challenge ends.</p>
              </div>
            </div>
            <div className="v2-benefit-item">
              <span className="v2-benefit-icon">🙋</span>
              <div>
                <strong>Live Q&amp;A After Each Session</strong>
                <p>Extended time with Dr. Paul Jenkins after each live session — exclusive to VIP participants.</p>
              </div>
            </div>
            <div className="v2-benefit-item">
              <span className="v2-benefit-icon">📓</span>
              <div>
                <strong>Session Notes &amp; Resources</strong>
                <p>Companion materials for each day to help you apply what you&apos;re learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="v2-section">
        <div className="v2-container">
          <span className="v2-kicker v2-text-center" style={{ display: 'block' }}>Action Items</span>
          <h2 className="v2-h2 v2-text-center">Your Next Steps</h2>
          <div className="v2-spacer--sm"></div>
          <div className="v2-steps-section">

            <div className="v2-step">
              <h2>Step 1: Join the Private Facebook Group</h2>
              <p className="v2-body">
                All live sessions, VIP Q&amp;A sessions, and updates happen inside the private Facebook group.
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
                If you&apos;re not in the group, you&apos;ll miss the live sessions and the VIP Q&amp;A that follows each one.
              </p>
            </div>

            <div className="v2-step">
              <h2>Step 2: Add the Sessions to Your Calendar</h2>
              <p className="v2-body">The challenge runs:</p>
              <div className="v2-challenge-details">
                <strong>March 16–20</strong><br />
                Live each day at <strong>12:00 Noon Eastern</strong><br />
                Sessions last about 60 minutes, followed by VIP Q&amp;A
              </div>
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
            </div>

            <div className="v2-step">
              <h2>Step 3: Watch for Your VIP Confirmation Email</h2>
              <p className="v2-body">
                We&apos;ve sent a separate email with your VIP details — including how recordings and Q&amp;A access will be delivered each day.
              </p>
              <p className="v2-body" style={{ marginBottom: 0 }}>
                If you don&apos;t see it within a few minutes, check your spam or promotions folder and mark us as a trusted sender.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container v2-max-w-narrow">
          <h2 className="v2-h2">A Final Note</h2>
          <p className="v2-body">
            Your VIP access is designed to make this week more useful, not more complicated.
          </p>
          <p className="v2-body">
            Show up. Ask the questions that come up for you. Revisit the moments that land. Let it work.
          </p>
          <p className="v2-body">
            If you have any questions about your access, reach us at:{' '}
            <a href="mailto:info@drpauljenkins.com">info@drpauljenkins.com</a>
          </p>
          <p className="v2-body v2-muted-text" style={{ marginTop: '24px', fontStyle: 'italic' }}>
            We&apos;re looking forward to seeing you on March 16.
          </p>
          <p className="v2-body" style={{ fontWeight: 700 }}>
            — Dr. Paul Jenkins &amp; Team
          </p>
        </div>
      </section>
    </>
  );
}
