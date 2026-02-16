import Link from 'next/link';
import styles from './page.module.css';

export default function VIPPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container container-md">
          <h1 className="text-center text-balance">
            Go Deeper with Extra Love & Support
          </h1>
          <p className={styles.subtitle}>
            Wrap yourself in personalized care and gentle guidance to nurture 
            a more profound transformation during this sacred journey.
          </p>
        </div>
      </section>

      {/* Subtle visual separator */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 24C300 8 600 40 900 24C1050 14 1125 32 1200 24V48H0V24Z" fill="currentColor" fillOpacity="0.08" style={{color: 'var(--color-gray-400)'}} />
        </svg>
      </div>

      <section className={styles.offerSection}>
        <div className="container container-sm">
          <div className={styles.offerCard}>
            <div className={styles.badge}>Sacred Space Reserved</div>
            
            <h2>A More Intimate Journey</h2>
            <p className={styles.offerDescription}>
              While the core experience offers beautiful transformation, this intimate VIP 
              circle provides deeper connection, personalized guidance, and the gentle support 
              to help you truly flourish under Dr. Paul Jenkins' caring attention.
            </p>

            <div className={styles.priceSection}>
              <div className={styles.price}>
                <span className={styles.priceAmount}>$497</span>
                <span className={styles.priceLabel}>A heartfelt investment in you</span>
              </div>
            </div>

            <div className={styles.features}>
              <h3>With Loving Care, You'll Receive:</h3>
              
              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div className={styles.featureContent}>
                  <h4>Intimate Q&A Circles</h4>
                  <p>Join gentle, intimate gatherings with Dr. Jenkins where your unique questions and needs are heard and honored in real-time.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div className={styles.featureContent}>
                  <h4>Extended Wisdom Teachings</h4>
                  <p>Receive deeper teachings and heartfelt bonus content created especially for your transformative journey.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div className={styles.featureContent}>
                  <h4>Your Sacred Circle</h4>
                  <p>Find deep connection in a smaller, more intimate space with kindred souls committed to profound healing.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div className={styles.featureContent}>
                  <h4>Personalized Tools & Care</h4>
                  <p>Receive gentle worksheets, nurturing exercises, and loving tools created to support your unique path to freedom.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div className={styles.featureContent}>
                  <h4>Personal Attention</h4>
                  <p>Feel supported with caring responses to your questions and direct access to Dr. Jenkins' compassionate team.</p>
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
              Yes, I Want This Deeper Support
            </button>

            <p className={styles.guarantee}>
              30-Day Peace of Mind Promise — If this doesn't feel right for your heart, 
              we'll lovingly refund your investment, no questions asked.
            </p>
          </div>

          <div className={styles.secondaryPath}>
            <p>Taking your time? That's perfectly okay.</p>
            <Link href="/thank-you" className={styles.noThanksLink}>
              Continue with the foundational experience
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.howItWorksSection}>
        <div className="container container-md">
          <h2 className="text-center">How This Unfolds</h2>
          
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Say Yes to Yourself</h3>
              <p>When you're ready, simply click above—your sacred VIP space will be waiting for you immediately.</p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Feel Welcomed</h3>
              <p>You'll receive a warm welcome with everything you need, including your private circle invitation and loving resources.</p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Settle In & Connect</h3>
              <p>Make yourself at home in the exclusive space, save the intimate gathering times, and meet your fellow travelers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container container-md">
          <h2 className="text-center">Questions? We're Here for You</h2>
          
          <div className={styles.faqs}>
            <div className={styles.faq}>
              <h3>When do the intimate Q&A circles happen?</h3>
              <p>Our live gatherings are woven throughout the journey. You'll receive the sacred dates and times in your welcome message and within your private circle.</p>
            </div>

            <div className={styles.faq}>
              <h3>What if life gets in the way of attending live?</h3>
              <p>We understand—life happens. Every gathering is lovingly recorded for you to revisit whenever your heart needs it. You can also share questions beforehand.</p>
            </div>

            <div className={styles.faq}>
              <h3>How long can I hold onto these treasures?</h3>
              <p>Forever. You'll have lifetime access to all recordings, resources, and materials. Your private circle remains a safe haven throughout the program.</p>
            </div>

            <div className={styles.faq}>
              <h3>Is your promise truly without conditions?</h3>
              <p>Yes, from the heart. If this doesn't feel right for you within 30 days, simply reach out and we'll honor a full refund—no explanation needed.</p>
            </div>

            <div className={styles.faq}>
              <h3>Can I join this intimate circle after we begin?</h3>
              <p>Our VIP circle is intentionally small and intimate. We gently encourage joining now to secure your space and receive all the exclusive gifts from day one.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <div className="container container-md">
          <h2 className="text-center">Hearts Transformed</h2>
          
          <div className={styles.testimonials}>
            <div className={styles.testimonial}>
              <p className={styles.testimonialQuote}>
                "The intimate Q&A circles were such a gift. Having Dr. Jenkins understand 
                my unique journey and offer personal guidance—that's when everything shifted for me."
              </p>
              <p className={styles.testimonialAuthor}>— Sarah M.</p>
            </div>

            <div className={styles.testimonial}>
              <p className={styles.testimonialQuote}>
                "Finding my sacred circle of kindred souls was everything. The deeper connections 
                and authentic vulnerability we shared—it accelerated my healing in ways I never imagined."
              </p>
              <p className={styles.testimonialAuthor}>— Michael R.</p>
            </div>

            <div className={styles.testimonial}>
              <p className={styles.testimonialQuote}>
                "A beautiful investment in myself. The loving resources and personalized tools 
                continue to support me daily, months later—they've become part of my soul care practice."
              </p>
              <p className={styles.testimonialAuthor}>— Jennifer L.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
