import Link from 'next/link';
import styles from './page.module.css';

export default function RegistrationPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container container-md">
          <h1 className="text-center text-balance">
            Discover Your Path to Emotional Freedom
          </h1>
          <p className={styles.subtitle}>
            Join Dr. Paul Jenkins for a transformative 5-day experience that will help you 
            break free from emotional patterns that hold you back and discover lasting peace.
          </p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container container-sm">
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Reserve Your Spot</h2>
            <p className={styles.formDescription}>
              Enter your information below to join the challenge. You'll receive immediate 
              access to the daily sessions and exclusive resources.
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
                Join the Challenge
              </button>

              <p className={styles.disclaimer}>
                By registering, you agree to our <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Use</Link>. 
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className="container container-md">
          <h2 className="text-center">What You'll Experience</h2>
          
          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <h3>Daily Live Sessions</h3>
              <p>
                Join Dr. Paul Jenkins each day for powerful teachings and practical 
                exercises designed to create lasting change.
              </p>
            </div>

            <div className={styles.benefit}>
              <h3>Proven Techniques</h3>
              <p>
                Learn evidence-based methods that have helped thousands achieve 
                emotional freedom and inner peace.
              </p>
            </div>

            <div className={styles.benefit}>
              <h3>Supportive Community</h3>
              <p>
                Connect with others on the same journey in our private Facebook group 
                and share your breakthroughs.
              </p>
            </div>

            <div className={styles.benefit}>
              <h3>Session Recordings</h3>
              <p>
                Can't attend live? All sessions are recorded and available to 
                review during the challenge period.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.nextStepsSection}>
        <div className="container container-md">
          <h2 className="text-center">What Happens Next</h2>
          <div className={styles.nextSteps}>
            <div className={styles.nextStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Join the Community</h3>
              <p>Connect with fellow participants in our private Facebook group.</p>
            </div>
            <div className={styles.nextStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Mark Your Calendar</h3>
              <p>Add the live sessions to your calendar so you don't miss a moment.</p>
            </div>
            <div className={styles.nextStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Show Up Live</h3>
              <p>Join us each day for the live experience and real-time breakthroughs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container container-sm text-center">
          <h2>Ready to Begin?</h2>
          <p className={styles.ctaText}>
            Take the first step toward emotional freedom today. Join thousands who have 
            transformed their lives through this powerful challenge.
          </p>
          <a href="#" className="button button-primary button-lg">
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}
