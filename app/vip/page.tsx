import Link from 'next/link';
import styles from './page.module.css';

export default function VIPPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container container-md">
          <h1 className="text-center text-balance">
            Deepen Your Experience with VIP Access
          </h1>
          <p className={styles.subtitle}>
            Get personalized support and exclusive resources to maximize your 
            transformation during the challenge.
          </p>
        </div>
      </section>

      <section className={styles.offerSection}>
        <div className="container container-sm">
          <div className={styles.offerCard}>
            <div className={styles.badge}>Limited Availability</div>
            
            <h2>VIP Challenge Experience</h2>
            <p className={styles.offerDescription}>
              While the core challenge provides tremendous value, our VIP experience 
              offers additional support and resources to help you go deeper and get 
              personalized guidance from Dr. Paul Jenkins.
            </p>

            <div className={styles.priceSection}>
              <div className={styles.price}>
                <span className={styles.priceAmount}>$497</span>
                <span className={styles.priceLabel}>One-time investment</span>
              </div>
            </div>

            <div className={styles.features}>
              <h3>What's Included:</h3>
              
              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div className={styles.featureContent}>
                  <h4>Live Q&A Sessions</h4>
                  <p>Join exclusive live sessions with Dr. Jenkins to get your specific questions answered in real-time.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div className={styles.featureContent}>
                  <h4>VIP-Only Recordings</h4>
                  <p>Access extended teachings and bonus content not available to standard participants.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div className={styles.featureContent}>
                  <h4>Private Community</h4>
                  <p>Connect with a smaller, more intimate group of committed participants focused on deep transformation.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div className={styles.featureContent}>
                  <h4>Personalized Resources</h4>
                  <p>Receive worksheets, exercises, and tools tailored to accelerate your emotional freedom journey.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div className={styles.featureContent}>
                  <h4>Priority Support</h4>
                  <p>Get faster responses to your questions and direct access to Dr. Jenkins' team.</p>
                </div>
              </div>
            </div>

            {/* 
              INTEGRATION POINT: Payment Processing
              
              This button will need to be connected to a payment processor
              (e.g., Stripe, PayPal, or Infusionsoft order form).
              
              After successful payment, redirect to /thank-you?vip=true
            */}
            <button className="button button-accent button-lg" style={{ width: '100%', marginBottom: 'var(--space-4)' }}>
              Upgrade to VIP Access
            </button>

            <p className={styles.guarantee}>
              30-Day Money-Back Guarantee — If you're not completely satisfied, 
              we'll refund your investment, no questions asked.
            </p>
          </div>

          <div className={styles.secondaryPath}>
            <p>Not ready to upgrade?</p>
            <Link href="/thank-you" className={styles.noThanksLink}>
              Continue with standard access
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <div className="container container-md">
          <h2 className="text-center">What VIP Members Are Saying</h2>
          
          <div className={styles.testimonials}>
            <div className={styles.testimonial}>
              <p className={styles.testimonialQuote}>
                "The VIP Q&A sessions were invaluable. Being able to ask Dr. Jenkins 
                about my specific situation made all the difference in my breakthrough."
              </p>
              <p className={styles.testimonialAuthor}>— Sarah M.</p>
            </div>

            <div className={styles.testimonial}>
              <p className={styles.testimonialQuote}>
                "The intimate VIP community provided the support I needed. Connecting 
                with others on a deeper level accelerated my transformation."
              </p>
              <p className={styles.testimonialAuthor}>— Michael R.</p>
            </div>

            <div className={styles.testimonial}>
              <p className={styles.testimonialQuote}>
                "Worth every penny. The bonus content and personalized resources gave 
                me tools I still use daily, months after the challenge ended."
              </p>
              <p className={styles.testimonialAuthor}>— Jennifer L.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
