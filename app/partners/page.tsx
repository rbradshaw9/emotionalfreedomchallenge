import Link from 'next/link';
import styles from './page.module.css';

export default function PartnersPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container container-md">
          <h1 className="text-center text-balance">
            Share Something That Changes Lives
          </h1>
          <p className={styles.subtitle}>
            You've been invited to partner with us in spreading The Emotional Freedom Challenge—a 
            transformative journey that's helping thousands discover lasting peace and emotional wellness.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container container-md">
          <div className={styles.infoCard}>
            <h2>What Is The Emotional Freedom Challenge?</h2>
            <p>
              A gentle, 5-day guided experience with Dr. Paul Jenkins designed to help people 
              release emotional patterns that no longer serve them. Through daily live gatherings, 
              heartfelt teachings, and supportive community, participants discover practical tools 
              for lasting emotional freedom.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.invitationSection}>
        <div className="container container-md">
          <h2 className="text-center">Why We're Inviting You</h2>
          
          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard}>
              <h3>Your Voice Matters</h3>
              <p>
                Your audience trusts you. When you share work that genuinely transforms lives, 
                your recommendation carries weight and creates real impact.
              </p>
            </div>

            <div className={styles.reasonCard}>
              <h3>Values Alignment</h3>
              <p>
                You understand the importance of emotional wellness and authentic transformation—not 
                quick fixes or empty promises.
              </p>
            </div>

            <div className={styles.reasonCard}>
              <h3>Mutual Benefit</h3>
              <p>
                Your audience receives genuine value and healing. You receive fair compensation 
                for meaningful introductions. Everyone wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.fitSection}>
        <div className="container container-sm">
          <div className={styles.fitCard}>
            <h2>Is This A Fit For Your Audience?</h2>
            <p>
              This challenge serves people seeking emotional peace, healing from past patterns, 
              personal growth, and deeper self-understanding. It's particularly valuable for therapists, 
              coaches, and wellness professionals looking for effective tools to support their clients.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.howItWorksSection}>
        <div className="container container-md">
          <h2 className="text-center">How Partner Sharing Works</h2>
          
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3>Receive Your Unique Link</h3>
              <p>
                After registration, you'll receive a personalized referral link that tracks 
                everyone who joins through your recommendation.
              </p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>Share With Your Audience</h3>
              <p>
                Share your link with your community—through email, social media, your website, 
                or anywhere your audience gathers.
              </p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>Track & Receive Compensation</h3>
              <p>
                Monitor referrals through your partner portal and receive transparent, timely 
                commission payments via PayPal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.compensationSection}>
        <div className="container container-sm">
          <div className={styles.compensationCard}>
            <h2 className="text-center">Partner Compensation</h2>
            <p>
              We honor partners who help spread this work. You'll receive fair, transparent compensation 
              for each person who joins through your unique referral link.
            </p>
            <p>
              Specific commission rates and payout details are provided during the registration process. 
              Everything is handled professionally with no hidden terms.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container container-sm text-center">
          <h2>Ready to Partner With Us?</h2>
          <p className={styles.ctaText}>
            Complete your partner registration to receive your unique referral link 
            and start sharing this transformative work with your audience.
          </p>
          <Link 
            href="/partners/register"
            className="button button-primary button-lg"
          >
            Continue to Partner Registration
          </Link>
        </div>
      </section>
    </div>
  );
}
