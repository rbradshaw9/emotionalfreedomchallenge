import Link from 'next/link';
import styles from './page.module.css';

export default function VIPPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container container-md">
          <h1 className="text-center text-balance">
            VIP Upgrade
          </h1>
        </div>
      </section>

      <section className={styles.offerSection}>
        <div className="container container-sm">
          <div className={styles.offerCard}>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div className={styles.featureContent}>
                  <h4>VIP-Only Live Q&A Sessions</h4>
                  <p>Get personalized advice and insights directly from The Emotional Freedom Challenge facilitators.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div className={styles.featureContent}>
                  <h4>Document Downloads</h4>
                  <p>Access proven worksheets and resources to support your emotional growth.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div className={styles.featureContent}>
                  <h4>5-Day Challenge Video Recordings</h4>
                  <p>Rewatch each session at your convenience and never miss a moment.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div className={styles.featureContent}>
                  <h4>5-Day Challenge Slide Downloads</h4>
                  <p>Download and keep the slides for easy reference to the tools and concepts taught.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div className={styles.featureContent}>
                  <h4>Recordings From Q&A Sessions</h4>
                  <p>Access recordings from all VIP Q&A sessions to revisit insights anytime.</p>
                </div>
              </div>
            </div>

            <div className={styles.priceSection}>
              <p className={styles.valueLine}>
                <strong>Limited-Time Offer</strong><br />
                Total value of $297 for a one-time payment of $27.
              </p>
            </div>

            {/* 
              INTEGRATION POINT: Payment Processing
              
              This button will need to be connected to a payment processor
              (e.g., Stripe, PayPal, or Infusionsoft order form).
              
              After successful payment, redirect to /thank-you?vip=true
            */}
            <button className="button button-accent button-lg" style={{ width: '100%', marginBottom: 'var(--space-4)' }}>
              Get VIP Access Now
            </button>
          </div>

          <div className={styles.secondaryPath}>
            <p>Not interested right now?</p>
            <Link href="/thank-you" className={styles.noThanksLink}>
              Continue without VIP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
