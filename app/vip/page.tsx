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

      <section className={styles.quickValueSection}>
        <div className="container container-sm">
          <div className={styles.quickValueCard}>
            <div className={styles.badge}>Limited Spots Available</div>
            <h2>Upgrade to VIP Access</h2>
            <div className={styles.quickPrice}>
              <span className={styles.strikethrough}>$297 value</span>
              <span className={styles.mainPrice}>$27</span>
              <span className={styles.priceLabel}>one-time payment</span>
            </div>
            <div className={styles.quickBenefits}>
              <div className={styles.quickBenefit}>✓ Private Q&A after each session</div>
              <div className={styles.quickBenefit}>✓ All session recordings</div>
              <div className={styles.quickBenefit}>✓ Q&A recordings</div>
            </div>
            <a 
              href="https://bl843.infusionsoft.app/app/orderForms/cdb82d2b-34ac-443e-aba9-2c63993be424" 
              className="button button-primary button-lg"
              style={{ width: '100%', marginTop: 'var(--space-6)' }}
            >
              Yes — Upgrade to VIP for $27
            </a>
          </div>
        </div>
      </section>

      <section className={styles.patternSection}>
        <div className="container container-content">
          <h2>A Pattern Most People Recognize</h2>
          <p>Most people don't intend to change their emotional patterns <em>later</em>.</p>
          <p>
            They plan to "think about it," or "see how the week goes," or "come back to this when things slow down."
          </p>
          <p>
            And then the challenge ends. Life picks back up. And the same reactions tend to show up again.
          </p>
          <p>
            Not because people don't care — but because reflection is easiest when there's space to slow down and look honestly.
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
        <div className="container container-content">
          <h2 className="text-center">What's Included with VIP Access</h2>
          <p className={styles.featuresIntro}>
            VIP access provides three key benefits that help you get the most from this experience:
          </p>
          
          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIconWrapper}>
                <div className={styles.featureIcon}>💬</div>
              </div>
              <div className={styles.featureContent}>
                <h3>Private Live Q&A After Each Session</h3>
                <p>
                  After each daily session, Dr. Paul stays on for a smaller Q&A. This is where people tend to ask about real conversations, real relationships, and real situations — not theory.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIconWrapper}>
                <div className={styles.featureIcon}>📹</div>
              </div>
              <div className={styles.featureContent}>
                <h3>Full Session Recordings</h3>
                <p>
                  You'll have access to the recordings for each session, so you can return to what stood out or catch anything you missed. Many participants revisit key moments multiple times.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIconWrapper}>
                <div className={styles.featureIcon}>🔑</div>
              </div>
              <div className={styles.featureContent}>
                <h3>VIP Q&A Recordings</h3>
                <p>
                  All Q&A sessions are recorded and available to you. Many participants say these recordings are where things quietly click — hearing others work through similar situations often makes concepts land more clearly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container container-sm">
          <div className={styles.ctaBox}>
            <p className={styles.ctaLabel}>Add VIP Access — $27</p>
            <p className={styles.ctaSubtext}>Limited spots to keep Q&A sessions personal</p>
            
            <a 
              href="https://bl843.infusionsoft.app/app/orderForms/cdb82d2b-34ac-443e-aba9-2c63993be424" 
              className="button button-primary button-lg"
              style={{ width: '100%', marginBottom: 'var(--space-4)' }}
            >
              Yes — Add VIP Access
            </a>

            <div className={styles.secondaryPath}>
              <Link href="/thank-you" className={styles.noThanksLink}>
                No thanks — Continue without VIP
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.decisionSection}>
        <div className="container container-content">
          <h2>VIP Access Is Right For You If...</h2>
          <ul className={styles.decisionList}>
            <li>You tend to have questions after learning something new</li>
            <li>You want the ability to revisit key moments instead of relying on memory</li>
            <li>You know that momentum matters and want to stay engaged</li>
          </ul>
          <p className={styles.decisionNote}>
            If you're comfortable just attending live, that's fine too. But this is the moment when most people either lean in — or default back to how things usually go.
          </p>
        </div>
      </section>

      <section className={styles.riskReversalSection}>
        <div className="container container-sm">
          <div className={styles.riskCard}>
            <h2>Important Details</h2>
            <div className={styles.detailItem}>
              <strong>Why only $27?</strong>
              <p>VIP access is valued at $297. We're offering it at $27 during registration to make it accessible while you're motivated.</p>
            </div>
            <div className={styles.detailItem}>
              <strong>Why limited spots?</strong>
              <p>We keep VIP groups intentionally small so Q&A sessions remain personal and valuable. Once spots fill, this option closes.</p>
            </div>
            <div className={styles.detailItem}>
              <strong>When does access start?</strong>
              <p>Immediately. You'll receive VIP instructions in your confirmation email along with the standard challenge details.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalCtaSection}>
        <div className="container container-sm">
          <div className={styles.finalCtaCard}>
            <h2>Ready to Upgrade?</h2>
            <div className={styles.finalPricing}>
              <div className={styles.pricingRow}>
                <span>5-Day Challenge Access</span>
                <span className={styles.free}>FREE</span>
              </div>
              <div className={styles.pricingRow}>
                <span>VIP Upgrade</span>
                <span className={styles.vipPrice}>+$27</span>
              </div>
              <div className={styles.pricingSeparator}></div>
              <div className={styles.pricingTotal}>
                <span>Total Today</span>
                <span className={styles.totalAmount}>$27</span>
              </div>
            </div>
            
            <a 
              href="https://bl843.infusionsoft.app/app/orderForms/cdb82d2b-34ac-443e-aba9-2c63993be424" 
              className="button button-primary button-lg"
              style={{ width: '100%', marginBottom: 'var(--space-6)' }}
            >
              Yes — Add VIP Access for $27
            </a>

            <div className={styles.secondaryPath}>
              <p className={styles.orText}>Or continue without VIP</p>
              <Link href="/thank-you" className={styles.noThanksLink}>
                No — I'll attend the live sessions only
              </Link>
            </div>
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
