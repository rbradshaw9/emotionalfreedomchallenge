import Link from 'next/link';
import styles from './page.module.css';

export default function ThankYouPage() {
  return (
    <div className={styles.page}>
      <section className={styles.confirmationSection}>
        <div className="container container-sm">
          <div className={styles.confirmationCard}>
            <div className={styles.iconWrapper}>
              <div className={styles.successIcon}>✓</div>
            </div>
            
            <h1 className="text-center">You're All Set!</h1>
            
            <p className={styles.confirmationText}>
              Welcome to The Emotional Freedom Challenge. We're thrilled to have you 
              join us on this transformative journey.
            </p>

            <div className={styles.emailNotice}>
              <p>
                <strong>Check your email</strong> — We've sent you a confirmation with 
                everything you need to get started, including your access links and schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.nextStepsSection}>
        <div className="container container-md">
          <h2 className="text-center">Your Next Steps</h2>
          
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Join Our Private Community</h3>
                <p>
                  Connect with fellow participants, share your journey, and get support 
                  in our exclusive Facebook group.
                </p>
                {/* 
                  INTEGRATION POINT: Facebook Group Link
                  
                  Replace the href below with the actual Facebook group URL
                  when the group is created.
                */}
                <a 
                  href="https://facebook.com/groups/placeholder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button button-primary"
                >
                  Join the Facebook Group
                </a>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Add to Your Calendar</h3>
                <p>
                  Sessions begin <strong>Monday at 12:00 PM EST</strong> and run daily 
                  for 5 days. Don't miss out — add the sessions to your calendar now.
                </p>
                {/* 
                  INTEGRATION POINT: Calendar Integration
                  
                  Consider adding calendar links for:
                  - Google Calendar
                  - Apple Calendar
                  - Outlook
                  
                  You can use a service like AddEvent.com or create .ics files
                */}
                <button className="button button-secondary">
                  Add to Calendar
                </button>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Access the Replay Hub</h3>
                <p>
                  Can't make it live? No problem. All sessions are recorded and 
                  available immediately after they air.
                </p>
                <Link href="/replay" className="button button-secondary">
                  Go to Replay Hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.preparationSection}>
        <div className="container container-sm">
          <h2 className="text-center">How to Prepare</h2>
          
          <div className={styles.preparationCard}>
            <ul className={styles.preparationList}>
              <li>
                <strong>Set aside time:</strong> Each session is approximately 60 minutes. 
                Find a quiet space where you can focus without interruptions.
              </li>
              <li>
                <strong>Bring an open mind:</strong> Be ready to explore new perspectives 
                and challenge old patterns of thinking.
              </li>
              <li>
                <strong>Have a journal ready:</strong> You'll want to capture insights, 
                ah-ha moments, and reflections throughout the challenge.
              </li>
              <li>
                <strong>Stay committed:</strong> Transformation happens through consistent 
                engagement. Show up each day ready to do the inner work.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.supportSection}>
        <div className="container container-sm text-center">
          <h2>Questions?</h2>
          <p className={styles.supportText}>
            If you have any questions or need assistance, don't hesitate to reach out. 
            We're here to support you every step of the way.
          </p>
          {/* 
            INTEGRATION POINT: Support Contact
            
            Add the appropriate support email or contact form link
          */}
          <p className={styles.supportEmail}>
            Email us at: <a href="mailto:support@drpauljenkins.com">support@drpauljenkins.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
