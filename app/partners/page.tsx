import styles from './page.module.css';
import Link from 'next/link';

export default function PartnersPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container container-md">
          <h1 className="text-center text-balance">
            Share Something That Changes Lives
          </h1>
          <p className={styles.subtitle}>
            If you know someone who could benefit from emotional freedom, we'd be honored 
            to partner with you in spreading this transformative work.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container container-md">
          <div className={styles.infoCard}>
            <h2>What Is The Emotional Freedom Challenge?</h2>
            <p>
              A gentle, 5-day guided journey with Dr. Paul Jenkins designed to help people 
              release emotional patterns that no longer serve them. Through daily live gatherings, 
              heartfelt teachings, and supportive community, participants discover practical tools 
              for lasting emotional freedom and inner peace.
            </p>
            <p>
              This isn't about quick fixes or surface-level tips. It's a compassionate, 
              evidence-based approach to emotional wellness that honors each person's unique journey.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.forWhomSection}>
        <div className="container container-md">
          <h2 className="text-center">Who Benefits From This Experience?</h2>
          
          <div className={styles.audienceGrid}>
            <div className={styles.audienceCard}>
              <h3>Those Seeking Peace</h3>
              <p>
                People feeling overwhelmed by stress, anxiety, or emotional weight who are 
                ready to explore a gentler path forward.
              </p>
            </div>

            <div className={styles.audienceCard}>
              <h3>Healing from the Past</h3>
              <p>
                Individuals carrying old wounds or patterns from childhood who want to finally 
                release what's been holding them back.
              </p>
            </div>

            <div className={styles.audienceCard}>
              <h3>Personal Growth Seekers</h3>
              <p>
                Anyone committed to their own development and curious about deeper emotional 
                awareness and self-understanding.
              </p>
            </div>

            <div className={styles.audienceCard}>
              <h3>Support for Others</h3>
              <p>
                Therapists, coaches, and helpers who want effective tools to support 
                their clients' emotional wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.howItWorksSection}>
        <div className="container container-md">
          <h2 className="text-center">How Sharing Works</h2>
          
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Share With Care</h3>
                <p>
                  When you become a partner, we'll provide you with a unique link you can 
                  share with your audience, community, or network—anyone you know who might 
                  benefit from this journey.
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>They Experience Growth</h3>
                <p>
                  People who join through your link receive the full 5-day experience: live 
                  teachings, supportive community, practical tools, and recorded sessions.
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Everyone Wins</h3>
                <p>
                  Your audience receives genuine value and transformation. You receive 
                  compensation for making meaningful introductions. Dr. Paul's work reaches 
                  more hearts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.compensationSection}>
        <div className="container container-sm">
          <div className={styles.compensationCard}>
            <h2 className="text-center">Partner Compensation</h2>
            <p className={styles.compensationText}>
              We believe in honoring those who help us spread this work. Partners receive 
              fair, transparent compensation for each person who joins through their unique link.
            </p>
            <p className={styles.compensationText}>
              Specific rates and payout details are provided once your partnership is confirmed. 
              Everything is handled professionally and transparently—no hidden terms or surprises.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container container-sm text-center">
          <h2>Ready to Learn More?</h2>
          <p className={styles.ctaText}>
            If this resonates with you and you'd like to explore partnering with us, 
            we'd love to hear from you. Simply fill out the form below and we'll be in touch.
          </p>
          <Link 
            href="#partner-form"
            className="button button-primary button-lg"
          >
            Request Partner Information
          </Link>
        </div>
      </section>

      <section id="partner-form" className={styles.formSection}>
        <div className="container container-sm">
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Partner Application</h2>
            <p className={styles.formDescription}>
              Share a bit about yourself and how you'd like to work together. 
              We'll review your information and respond within 1–2 business days.
            </p>

            {/* 
              INTEGRATION POINT: Infusionsoft Partner Signup Form
              
              Replace this placeholder div with the actual Infusionsoft form embed code.
              The form should collect partner information and redirect to /partner-confirmed
              upon successful submission.
            */}
            <div className={styles.formPlaceholder}>
              {/* Infusionsoft Partner Signup Form Embed Here */}
              <p className={styles.placeholderText}>
                [Infusionsoft Partner Form Integration Point]
              </p>
              <p className={styles.placeholderNote}>
                Form fields to include: Name, Email, Website/Social Media, 
                Audience Description, How You'd Like to Partner
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
