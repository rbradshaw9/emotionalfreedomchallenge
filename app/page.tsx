import Link from 'next/link';
import styles from './page.module.css';

export default function RegistrationPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container container-md">
          <h1 className="text-center text-balance">
            Let's Discover Your Path to Emotional Freedom Together
          </h1>
          <p className={styles.subtitle}>
            Join Dr. Paul Jenkins for a gentle, transformative 5-day journey where you'll 
            release emotional patterns that no longer serve you and find the lasting peace you deserve.
          </p>
        </div>
      </section>

      {/* Subtle visual separator */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 24C300 8 600 40 900 24C1050 14 1125 32 1200 24V48H0V24Z" fill="currentColor" fillOpacity="0.08" style={{color: 'var(--color-gray-400)'}} />
        </svg>
      </div>

      <section className={styles.formSection}>
        <div className="container container-sm">
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Save Your Space</h2>
            <p className={styles.formDescription}>
              Share your information below to begin your journey. We'll send you everything 
              you need to feel supported and prepared.
            </p>

            {/* 
              INTEGRATION POINT: Infusionsoft Form
              
              This placeholder form will be replaced with an Infusionsoft embedded form.
              The form should collect:
              - First Name
              - Email Address
              
              After submission, redirect to /thank-you page.
              
              Infusionsoft form code should be inserted here, replacing this entire form element.
            */}
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <button type="submit" className="button button-primary button-lg">
                Yes, I'm Ready to Begin
              </button>

              <p className={styles.disclaimer}>
                By joining, you agree to our <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Use</Link>. 
                Your privacy and trust are sacred to us—we'll never share your information.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className="container container-md">
          <h2 className="text-center">What Awaits You</h2>
          
          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <h3>Daily Live Gatherings</h3>
              <p>
                Spend time with Dr. Paul Jenkins each day for heartfelt teachings and 
                gentle exercises that create space for real transformation.
              </p>
            </div>

            <div className={styles.benefit}>
              <h3>Time-Tested Wisdom</h3>
              <p>
                Discover compassionate methods that have guided thousands toward 
                emotional freedom and the peace they've been seeking.
              </p>
            </div>

            <div className={styles.benefit}>
              <h3>A Circle of Support</h3>
              <p>
                Find connection with kindred spirits walking this same path, sharing 
                their hearts and breakthroughs in a safe, nurturing space.
              </p>
            </div>

            <div className={styles.benefit}>
              <h3>Session Recordings</h3>
              <p>
                Life happens. Every session is lovingly recorded so you can revisit 
                the wisdom whenever your heart needs it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.nextStepsSection}>
        <div className="container container-md">
          <h2 className="text-center">Your Journey Begins Here</h2>
          <div className={styles.nextSteps}>
            <div className={styles.nextStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Find Your Circle</h3>
              <p>Connect with fellow souls in our warm, private community space.</p>
            </div>
            <div className={styles.nextStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Make Space & Time</h3>
              <p>Carve out this sacred time for yourself—you deserve this journey.</p>
            </div>
            <div className={styles.nextStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Show Up As You Are</h3>
              <p>Join us each day, exactly as you are, ready to embrace transformation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container container-sm text-center">
          <h2>Your Heart Knows You're Ready</h2>
          <p className={styles.ctaText}>
            Take this loving step toward the emotional freedom you deserve. Join thousands 
            of beautiful souls who have transformed their lives through this healing journey.
          </p>
          <a href="#" className="button button-primary button-lg">
            Begin My Journey
          </a>
        </div>
      </section>
    </div>
  );
}
