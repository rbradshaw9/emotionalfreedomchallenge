import styles from './page.module.css';

export default function ThankYouPage() {
  // Google Calendar URL for recurring event
  // March 16-20, 2026, 12:00 PM - 1:00 PM Eastern (5 daily occurrences)
  const googleCalendarUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    '&text=The+Emotional+Freedom+Challenge+%E2%80%94+Live+Session' +
    '&dates=20260316T170000Z/20260316T180000Z' +
    '&details=Live+sessions+take+place+inside+the+private+Facebook+group.' +
    '&recur=RRULE:FREQ=DAILY;COUNT=5' +
    '&ctz=America/New_York';

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container container-content">
          <h1>You're In</h1>
          
          <p className={styles.subtitle}>
            Your spot in The Emotional Freedom Challenge is confirmed.
          </p>
        </div>
      </section>

      <section className={styles.confirmationSection}>
        <div className="container container-content">
          <p>
            You're officially registered for 5 Days to Emotional Ownership, and we've sent you an email with everything you need to participate.
          </p>

          <p>
            Take a breath — you don't need to do anything perfectly to get value from this week. Just showing up is enough.
          </p>
        </div>
      </section>

      <section className={styles.stepsSection}>
        <div className="container container-content">
          <div className={styles.step}>
            <h2>Step 1: Join the Private Facebook Group</h2>
            <p>
              All live sessions, reminders, and updates take place inside our private Facebook group.
            </p>
            <p className={styles.callout}>
              👉 <a 
                href="https://facebook.com/groups/emotionalfreedomchallenge" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.groupLink}
              >
                Join the Private Emotional Freedom Challenge Facebook Group
              </a>
            </p>
            <p>
              That's where the experience happens.<br />
              If you're not in the group, you won't see the live sessions or announcements.
            </p>
          </div>

          <div className={styles.step}>
            <h2>Step 2: Put the Sessions on Your Calendar</h2>
            <p>The challenge runs:</p>
            <p className={styles.challengeDetails}>
              <strong>March 16–20</strong><br />
              Live each day at <strong>12:00 PM Eastern</strong><br />
              Sessions last about 60 minutes
            </p>
            <p>
              To make this easy, we've created a single calendar link that adds all five sessions at once.
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
            <p>
              Once it's on your calendar, you won't need to think about it again — just show up when it starts.
            </p>
          </div>

          <div className={styles.step}>
            <h2>Step 3: Introduce Yourself in the Group</h2>
            <p>
              Once you join the Facebook group, take a moment to introduce yourself.
            </p>
            <p>
              You don't need to be polished or personal.<br />
              Just answer one simple question:
            </p>
            <p className={styles.question}>
              <em>What made you decide to sign up for this challenge?</em>
            </p>
            <p>
              That one sentence often brings more clarity than people expect.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div className="container container-content">
          <h2>A Final Note</h2>
          <p>
            Change rarely happens because someone learns a single new idea.
          </p>
          <p>
            It happens when people give themselves a short window to slow down, notice what's happening internally, and engage a little differently than usual.
          </p>
          <p>
            That's what this week is designed to support.
          </p>
          <p>
            If you have any questions, you can reach us at:<br />
            <a href="mailto:info@drpauljenkins.com">info@drpauljenkins.com</a> or <a href="tel:+18013807981">+1 801-380-7981</a>
          </p>
          <p className={styles.signoff}>
            We're genuinely glad you're here.
          </p>
          <p className={styles.signature}>
            — Dr. Paul Jenkins & Team
          </p>
        </div>
      </section>
    </div>
  );
}

