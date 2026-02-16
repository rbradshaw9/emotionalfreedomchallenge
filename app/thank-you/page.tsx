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
            
            <h1 className="text-center">Welcome, Beautiful Soul!</h1>
            
            <p className={styles.confirmationText}>
              Your heart led you here, and we're honored to walk alongside you 
              on this sacred journey to emotional freedom.
            </p>

            <div className={styles.emailNotice}>
              <p>
                <strong>Look for our warm welcome</strong> — We've sent you a loving message with 
                everything you need to feel prepared and supported, including your access details and our gathering times.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.nextStepsSection}>
        <div className="container container-md">
          <h2 className="text-center">Your Path Forward</h2>
          
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Find Your Sacred Circle</h3>
                <p>
                  Join fellow travelers in our warm, private community space where you can 
                  share your heart, receive support, and witness beautiful transformation.
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
                  Join Our Circle
                </a>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Honor This Time for Yourself</h3>
                <p>
                  Our gatherings begin <strong>Monday at 12:00 PM EST</strong> and continue daily 
                  for 5 precious days. Carve out this sacred time—you deserve it.
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
                  Save My Time
                </button>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Your Replay Sanctuary</h3>
                <p>
                  Life happens, we understand. Every gathering is lovingly recorded 
                  so you can return whenever your soul needs the wisdom.
                </p>
                <Link href="/replay" className="button button-secondary">
                  Visit Replay Space
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.preparationSection}>
        <div className="container container-sm">
          <h2 className="text-center">Gently Preparing Your Heart</h2>
          
          <div className={styles.preparationCard}>
            <ul className={styles.preparationList}>
              <li>
                <strong>Create sacred space:</strong> Each gathering lasts about 60 minutes. 
                Find a cozy, quiet sanctuary where you can be fully present with yourself.
              </li>
              <li>
                <strong>Come with an open heart:</strong> Be gentle with yourself as you explore 
                new perspectives and lovingly release patterns that no longer serve you.
              </li>
              <li>
                <strong>Keep a journal nearby:</strong> You'll want to capture the insights, 
                tender realizations, and beautiful reflections that arise within you.
              </li>
              <li>
                <strong>Honor your commitment:</strong> True transformation unfolds through gentle, 
                consistent presence. Show up each day as you are, ready to embrace your healing.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.supportSection}>
        <div className="container container-sm text-center">
          <h2>We're Here for You</h2>
          <p className={styles.supportText}>
            Have a question or need gentle support? Please don't hesitate to reach out. 
            We're honored to walk beside you every step of this journey.
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
