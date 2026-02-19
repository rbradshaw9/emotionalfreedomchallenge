import Link from 'next/link';
import styles from './page.module.css';

export default function PartnerConfirmedPage() {
  return (
    <div className={styles.page}>
      <section className={styles.confirmationSection}>
        <div className="container container-sm">
          <div className={styles.confirmationCard}>
            <div className={styles.iconWrapper}>
              <div className={styles.successIcon}>✓</div>
            </div>
            
            <h1 className="text-center">Application Received — Thank You</h1>
            
            <p className={styles.confirmationText}>
              Your partner application for the Emotional Freedom Challenge has been successfully submitted.
            </p>

            <p className={styles.confirmationText}>
              We appreciate your interest in partnering with us and taking the time to apply. Our team reviews each application carefully to ensure alignment and the best possible experience for everyone involved.
            </p>

            <div className={styles.nextStepsCard}>
              <h2>What Happens Next</h2>
              
              <ol className={styles.numberedList}>
                <li>Our team will review your application.</li>
                <li>If approved, you'll receive an email with next steps and your unique referral link.</li>
                <li>You'll also receive details about available resources, timelines, and expectations.</li>
              </ol>
            </div>

            <div className={styles.reassuranceBox}>
              <p>
                <strong>Please Note:</strong> Application reviews typically take a short amount of time. Be sure to check your inbox — and your spam or promotions folder — for updates from us.
              </p>
            </div>

            <p className={styles.closingText}>
              We're grateful for your interest in supporting emotional growth and personal development through the Emotional Freedom Challenge. We'll be in touch soon.
            </p>

            <div className={styles.returnLink}>
              <Link href="/" className="button button-secondary">
                Return to the Emotional Freedom Challenge
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
