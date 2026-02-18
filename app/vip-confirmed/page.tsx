import styles from './page.module.css';

export default function VipConfirmedPage() {
  const googleCalendarUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    '&text=The+Emotional+Freedom+Challenge+%E2%80%94+Live+Session' +
    '&dates=20260316T170000Z/20260316T180000Z' +
    '&details=Live+sessions+take+place+inside+the+private+Facebook+group.' +
    '&recur=RRULE:FREQ=DAILY;COUNT=5' +
    '&ctz=America/New_York';

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container container-content">
          <div className={styles.badge}>VIP Access Confirmed</div>
          <h1>You're All Set</h1>
          <p className={styles.subtitle}>
            Your VIP upgrade for The Emotional Freedom Challenge is confirmed.
          </p>
        </div>
      </section>

      <section className={styles.confirmationSection}>
        <div className="container container-content">
          <p>
            You now have full VIP access — recordings, extended Q&amp;A after each session, and everything else included in the upgrade.
          </p>
          <p>
            Check your inbox for a confirmation email with all the details.
          </p>
        </div>
      </section>

      <section className={styles.whatYouHaveSection}>
        <div className="container container-content">
          <h2>What's Included in Your VIP Access</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>🎥</span>
              <div>
                <strong>Session Recordings</strong>
                <p>Every daily session recorded and available to revisit after the challenge ends.</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>🙋</span>
              <div>
                <strong>Live Q&amp;A After Each Session</strong>
                <p>Extended time with Dr. Paul Jenkins after each live session — exclusive to VIP participants.</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>📓</span>
              <div>
                <strong>Session Notes &amp; Resources</strong>
                <p>Companion materials for each day to help you apply what you're learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stepsSection}>
        <div className="container container-content">
          <div className={styles.step}>
            <h2>Step 1: Join the Private Facebook Group</h2>
            <p>
              All live sessions, VIP Q&amp;A sessions, and updates happen inside the private Facebook group.
            </p>
            <p className={styles.callout}>
              👉{' '}
              <a
                href="https://www.facebook.com/groups/emotionalfreedomchallengemarch2026"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.groupLink}
              >
                Join the Private Emotional Freedom Challenge Facebook Group
              </a>
            </p>
            <p>
              If you're not in the group, you'll miss the live sessions and the VIP Q&amp;A that follows each one.
            </p>
          </div>

          <div className={styles.step}>
            <h2>Step 2: Add the Sessions to Your Calendar</h2>
            <p>The challenge runs:</p>
            <p className={styles.challengeDetails}>
              <strong>March 16–20</strong><br />
              Live each day at <strong>12:00 PM Eastern</strong><br />
              Sessions last about 60 minutes, followed by VIP Q&amp;A
            </p>
            <div className={styles.calendarLinks}>
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                👉 Add All Sessions to Google Calendar
              </a>
              <a
                href="/calendar/emotional-freedom-challenge.ics"
                download
                className="button button-primary"
              >
                👉 Add All Sessions to Outlook / Apple / Other Calendars
              </a>
            </div>
          </div>

          <div className={styles.step}>
            <h2>Step 3: Watch for Your VIP Confirmation Email</h2>
            <p>
              We've sent a separate email with your VIP details — including how recordings and Q&amp;A access will be delivered each day.
            </p>
            <p>
              If you don't see it within a few minutes, check your spam or promotions folder and mark us as a trusted sender.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div className="container container-content">
          <h2>One Last Thing</h2>
          <p>
            VIP access gives you more time with the material — and that's exactly when these ideas tend to settle in.
          </p>
          <p>
            The recordings mean you can revisit anything that resonated. The Q&amp;A means you can ask about what's specific to your situation.
          </p>
          <p>
            Use both.
          </p>
          <p className={styles.signoff}>
            — Dr. Paul Jenkins
          </p>
        </div>
      </section>
    </div>
  );
}
