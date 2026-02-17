import Link from 'next/link';
import styles from './page.module.css';

export default function VIPPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container container-md">
          <h1 className="text-center text-balance">
            You're Registered — One More Thing Before You Go
          </h1>
          <p className={styles.subtitle}>
            Your spot for 5 Days to Emotional Ownership is being held.
          </p>
        </div>
      </section>

      <section className={styles.confirmationSection}>
        <div className="container container-content">
          <p>
            You'll receive an email shortly with instructions for joining the private Facebook group and attending the live sessions.
          </p>
          <p>
            Before you move on, there's one decision worth making now — while this is still fresh.
          </p>
        </div>
      </section>

      <section className={styles.patternSection}>
        <div className="container container-content">
          <h2>A Pattern Most People Recognize</h2>
          <p>Most people don't intend to change their emotional patterns <em>later</em>.</p>
          <p>
            They plan to "think about it,"<br />
            or "see how the week goes,"<br />
            or "come back to this when things slow down."
          </p>
          <p>
            And then the challenge ends.<br />
            Life picks back up.<br />
            And the same reactions tend to show up again.
          </p>
          <p>
            Not because people don't care —<br />
            but because reflection is easiest when there's space to slow down and look honestly.
          </p>
          <p>That's what the next five days are for.</p>
        </div>
      </section>

      <section className={styles.valueSection}>
        <div className="container container-content">
          <h2>What VIP Access Changes</h2>
          <p>
            VIP access doesn't add more information.<br />
            It changes how you engage with what comes up.
          </p>
          <p>For people who choose VIP, the experience usually feels different in three ways:</p>
          <ul>
            <li>They don't have to hold their questions until later</li>
            <li>They can hear how others are working through similar situations</li>
            <li>They can revisit moments that landed, instead of relying on memory</li>
          </ul>
          <p>That additional layer is often what turns awareness into something that sticks.</p>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className="container container-md">
          <h2 className="text-center">What's Included with VIP Access</h2>
          
          <div className={styles.featureCards}>
            <div className={styles.featureCard}>
              <h3>Private Live Q&A After Each Session</h3>
              <p>
                After each daily session, Dr. Paul stays on for a smaller Q&A.
              </p>
              <p>
                This is where people tend to ask about real conversations, real relationships, and real situations — not theory.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3>Full Session Recordings</h3>
              <p>
                You'll have access to the recordings for each session, so you can return to what stood out or catch anything you missed.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3>VIP Q&A Recordings</h3>
              <p>
                All Q&A sessions are recorded and available to you.
              </p>
              <p>
                Many participants say these recordings are where things quietly click.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className="container container-sm">
          <h2 className="text-center">About the Cost</h2>
          <p className="text-center">
            VIP access is valued at $297.
          </p>
          <p className="text-center">
            Because you're joining the challenge now, you can add VIP access for a one-time payment of <strong>$27</strong>.
          </p>
          <p className="text-center">
            VIP spots are limited so the Q&A sessions stay useful and personal.
          </p>
          <p className="text-center">
            <em>This option is only available during registration.</em>
          </p>
        </div>
      </section>

      <section className={styles.decisionSection}>
        <div className="container container-content">
          <h2>A Simple Way to Decide</h2>
          <p>If you're the type of person who:</p>
          <ul>
            <li>tends to have questions after sessions</li>
            <li>wants to slow things down and reflect</li>
            <li>knows that momentum matters</li>
          </ul>
          <p>VIP usually ends up being worth it.</p>
          <p>
            If you're comfortable just attending live and seeing what you notice, that's fine too.
          </p>
          <p>
            But this is the moment when most people either lean in —<br />
            or default back to how things usually go.
          </p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container container-sm">
          <p className={styles.ctaLabel}>👉 Add VIP Access for $27</p>
          <p className={styles.ctaSubtext}>(one-time payment)</p>
          
          <a 
            href="https://bl843.infusionsoft.app/app/orderForms/cdb82d2b-34ac-443e-aba9-2c63993be424" 
            className="button button-primary button-lg"
            style={{ width: '100%', marginBottom: 'var(--space-6)' }}
          >
            Yes — Add VIP Access
          </a>

          <div className={styles.secondaryPath}>
            <p className={styles.orText}>Or continue without VIP</p>
            <Link href="/thank-you" className={styles.noThanksLink}>
              No — I'll attend the live sessions only
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.closingSection}>
        <div className="container container-content">
          <h2>Either Way</h2>
          <p>You're welcome in the challenge.</p>
          <p>
            Just know that how you engage tends to shape what you take away.
          </p>
        </div>
      </section>
    </div>
  );
}
