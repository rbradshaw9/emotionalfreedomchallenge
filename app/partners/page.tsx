import Link from 'next/link';
import styles from './page.module.css';
import FAQAccordion from './components/FAQAccordion';

export default function PartnersPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container container-content">
          <h1 className="text-center text-balance">
            Partner with the Emotional Freedom Challenge
          </h1>
          <p className={styles.subtitle}>
            We're inviting a small group of aligned partners to help share the Emotional Freedom Challenge with audiences who care about personal growth, emotional awareness, and lasting change.
          </p>
          <p className={styles.subtitle}>
            This is not a mass affiliate program. It's a relationship-based partnership built on trust, integrity, and real impact.
          </p>
        </div>
      </section>

      <section className={styles.primaryCta}>
        <div className="container container-content text-center">
          <Link 
            href="/partners/register"
            className="button button-primary button-lg"
          >
            Apply to Become a Partner
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container container-content">
          <h2>How Partnership Works</h2>
          <div className={styles.partnershipSteps}>
            <div className={styles.partnershipStep}>
              <div className={styles.stepIcon}>📝</div>
              <h3>Apply to Become a Partner</h3>
              <p>Complete our simple application to share your background and audience.</p>
            </div>
            <div className={styles.partnershipStep}>
              <div className={styles.stepIcon}>🔗</div>
              <h3>Receive Your Referral Link</h3>
              <p>Once approved, you'll get your unique tracking link and partner resources.</p>
            </div>
            <div className={styles.partnershipStep}>
              <div className={styles.stepIcon}>📢</div>
              <h3>Share with Your Audience</h3>
              <p>Use our ready-made materials or create your own content to share the challenge.</p>
            </div>
            <div className={styles.partnershipStep}>
              <div className={styles.stepIcon}>💰</div>
              <h3>Earn Commissions</h3>
              <p>Receive payment for qualified referrals and VIP upgrades automatically.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.compensationSection}`}>
        <div className="container container-content">
          <h2 className="text-center">Partner Compensation</h2>
          <p className={styles.compensationIntro}>
            Our priority with this challenge is impact and service. That said, we also believe in compensating partners who help extend the reach of this work.
          </p>
          
          <div className={styles.compensationCards}>
            <div className={styles.compensationCard}>
              <div className={styles.compensationIcon}>🎯</div>
              <div className={styles.compensationAmount}>$1,000</div>
              <h3>Per Coaching Client</h3>
              <p>Earn $1,000 for each coaching client who enrolls through your referral link.</p>
            </div>
            <div className={styles.compensationCard}>
              <div className={styles.compensationIcon}>⭐</div>
              <div className={styles.compensationAmount}>50%</div>
              <h3>VIP Upgrade Commission</h3>
              <p>Receive 50% commission on all VIP upgrades from your referrals.</p>
            </div>
          </div>

          <p className={styles.compensationNote}>
            There are no quotas, requirements, or pressure. Compensation is simply our way of saying thank you.
          </p>
        </div>
      </section>

      <section className={styles.midPageCta}>
        <div className="container container-content text-center">
          <h2>Ready to Join?</h2>
          <p className={styles.ctaSubtext}>Apply now to become a trusted partner and start earning.</p>
          <Link 
            href="/partners/register"
            className="button button-primary button-lg"
          >
            Apply to Become a Partner
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container container-content">
          <h2>Why This Partnership Exists</h2>
          <p>
            Over the years, Dr. Paul Jenkins has seen the same pattern repeat itself in people from every background. They're capable. They're thoughtful. They're trying.
          </p>
          <p>
            And yet, emotionally, they keep getting pulled into reactions they don't choose — frustration, defensiveness, shutdown, overwhelm.
          </p>
          <p>
            This challenge exists to give people a clear, grounded framework for emotional ownership: learning how to notice emotional reactions, slow them down, and respond intentionally instead of automatically.
          </p>
          <p>
            We're inviting a small group of trusted peers to share this experience with their audience — only if it feels aligned. Many people are emotionally stuck but don't have language for what's happening, or a framework that doesn't involve blame, shame, or avoidance.
          </p>
          <p>
            This challenge gives people a way to understand themselves more clearly — and take responsibility without self-judgment. If that resonates with the people you serve, we'd be grateful to have you share it.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container container-content">
          <h2>Who This Challenge Serves & What They'll Experience</h2>
          
          <h3 className={styles.sectionSubheading}>This challenge is a strong fit for people who:</h3>
          <ul>
            <li>Feel emotionally reactive or stuck in familiar patterns</li>
            <li>Want to take responsibility for their emotional responses without shame</li>
            <li>Are open to reflection, growth, and intentional change</li>
            <li>Value clarity, agency, and personal accountability</li>
          </ul>
          <p>
            It's especially relevant for audiences interested in leadership, relationships, parenting, personal development, and values-driven living.
          </p>

          <h3 className={styles.sectionSubheading}>What participants will experience:</h3>
          <p>Over five live sessions, participants will:</p>
          <ul>
            <li>Learn the difference between emotions, thoughts, and choice</li>
            <li>Identify emotional triggers and habitual reactions</li>
            <li>Practice creating space between stimulus and response</li>
            <li>Understand why insight alone rarely leads to lasting change</li>
            <li>See what emotional ownership looks like in real life</li>
          </ul>
          <p>
            The purpose of this challenge is clarity and ownership — not quick fixes.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container container-content">
          <h2>How Sharing Works</h2>
          <p>
            Sharing the challenge is simple and entirely optional.
          </p>
          <p>
            If you choose to participate:
          </p>
          <ul>
            <li>We'll provide ready-to-use email and social copy</li>
            <li>You're free to customize or share in your own voice</li>
            <li>There's no requirement to promote or sell</li>
            <li>No live appearances or time commitments are needed</li>
          </ul>
          <p>
            Our goal is to make this easy and respectful of your relationship with your audience.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container container-content">
          <h2>Preview What You'll Be Promoting</h2>
          <p>
            Before applying, we encourage you to review the pages your audience will see. 
            This helps you determine if the messaging and experience aligns with your values 
            and the people you serve.
          </p>
          
          <div className={styles.previewLinks}>
            <div className={styles.previewCard}>
              <div className={styles.previewIcon}>🏠</div>
              <h3>Main Landing Page</h3>
              <p>The primary page where participants learn about and register for the Emotional Freedom Challenge.</p>
              <Link 
                href="/"
                target="_blank"
                className="button button-secondary"
              >
                View Landing Page
              </Link>
            </div>
            <div className={styles.previewCard}>
              <div className={styles.previewIcon}>⭐</div>
              <h3>VIP Upgrade Page</h3>
              <p>The premium upgrade offer participants see after registering for the free challenge.</p>
              <Link 
                href="/vip"
                target="_blank"
                className="button button-secondary"
              >
                View VIP Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container container-content">
          <h2>Frequently Asked Questions</h2>
          <FAQAccordion />
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container container-content text-center">
          <Link 
            href="/partners/register"
            className="button button-primary button-lg"
          >
            Apply to Become a Partner
          </Link>
        </div>
      </section>
    </div>
  );
}

