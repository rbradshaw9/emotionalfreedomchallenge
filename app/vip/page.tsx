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

      <section className={styles.howItWorksSection}>
        <div className="container container-md">
          <h2 className="text-center">How It Works</h2>
          
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Upgrade Now</h3>
              <p>Click the upgrade button and complete your secure payment to unlock VIP access immediately.</p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Get Your Welcome Email</h3>
              <p>You'll receive instant access details including your private community link and VIP resources.</p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Join & Engage</h3>
              <p>Dive into the exclusive content, mark your calendar for live Q&A sessions, and connect with your VIP cohort.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container container-md">
          <h2 className="text-center">Frequently Asked Questions</h2>
          
          <div className={styles.faqs}>
            <div className={styles.faq}>
              <h3>When do the VIP Q&A sessions take place?</h3>
              <p>Live Q&A sessions are scheduled throughout the challenge. Exact dates and times will be shared in your VIP welcome email and the private community.</p>
            </div>

            <div className={styles.faq}>
              <h3>What if I can't attend the live sessions?</h3>
              <p>All live sessions are recorded and available to VIP members. You can watch replays at your convenience and submit questions in advance.</p>
            </div>

            <div className={styles.faq}>
              <h3>How long do I have access to the VIP materials?</h3>
              <p>Your VIP access includes lifetime access to all recordings, resources, and bonus materials. The private community remains active as long as the program runs.</p>
            </div>

            <div className={styles.faq}>
              <h3>Is the 30-day guarantee really no questions asked?</h3>
              <p>Absolutely. If you're not satisfied with your VIP experience for any reason within 30 days, simply contact our support team for a full refund.</p>
            </div>

            <div className={styles.faq}>
              <h3>Can I upgrade to VIP after the challenge starts?</h3>
              <p>VIP access is limited and may close once capacity is reached. We recommend upgrading now to secure your spot and ensure you don't miss any exclusive content.</p>
            </div>
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
