import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import FAQAccordion from './components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Partner Program - The Emotional Freedom Challenge',
  description: 'Join our partner program and share The Emotional Freedom Challenge with your audience. Relationship-based partnership built on trust, integrity, and mutual fit.',
};

export default function PartnersPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container container-content">
          <h1 className="text-center text-balance">
            Partner with the Emotional Freedom Challenge
          </h1>
          <p className={styles.subtitle}>
            We're inviting a small group of aligned partners to share the Emotional Freedom Challenge with audiences who value personal growth, emotional awareness, and lasting change.
          </p>
          <p className={styles.subtitle}>
            This is a relationship-based partnership built on trust, integrity, and mutual fit — not a mass affiliate program.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container container-content">
          <h2>How Partnership Works</h2>
          <div className={styles.partnershipSteps}>
            <div className={styles.partnershipStep}>
              <div className={styles.stepIcon}>📝</div>
              <h3>Apply to Become a Partner</h3>
              <p>Complete our application sharing your background and audience. We review all applications personally.</p>
            </div>
            <div className={styles.partnershipStep}>
              <div className={styles.stepIcon}>🔗</div>
              <h3>Receive Your Partner Link</h3>
              <p>If approved, you'll receive your unique tracking link, resources, and next steps within 1–2 business days.</p>
            </div>
            <div className={styles.partnershipStep}>
              <div className={styles.stepIcon}>📢</div>
              <h3>Share with Your Audience</h3>
              <p>Use our materials or create your own. Share when and how it feels right for your audience.</p>
            </div>
            <div className={styles.partnershipStep}>
              <div className={styles.stepIcon}>💰</div>
              <h3>Earn Commissions</h3>
              <p>Receive payment automatically for qualified referrals and VIP upgrades.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container container-content">
          <h2>Who This Challenge Serves</h2>
          
          <h3 className={styles.sectionSubheading}>This partnership is a good fit if your audience includes people who:</h3>
          <ul>
            <li>Feel emotionally reactive or stuck in familiar patterns</li>
            <li>Want to take responsibility for their emotional responses without shame</li>
            <li>Are open to reflection, growth, and intentional change</li>
            <li>Value clarity, agency, and personal accountability</li>
          </ul>
          <p>
            This challenge resonates with audiences interested in leadership, relationships, parenting, personal development, and values-driven living.
          </p>

          <h3 className={styles.sectionSubheading}>What participants experience:</h3>
          <p>Over five live sessions, participants will:</p>
          <ul>
            <li>Learn the difference between emotions, thoughts, and choice</li>
            <li>Identify emotional triggers and habitual reactions</li>
            <li>Practice creating space between stimulus and response</li>
            <li>Understand why insight alone rarely leads to lasting change</li>
            <li>See what emotional ownership looks like in real life</li>
          </ul>
          <p>
            This is about clarity and ownership — not quick fixes or emotional bypassing.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.compensationSection}`}>
        <div className="container container-content">
          <h2 className="text-center">Partner Compensation</h2>
          <p className={styles.compensationIntro}>
            We believe in fairly compensating partners who help extend the reach of this work.
          </p>
          
          <div className={styles.compensationCards}>
            <div className={styles.compensationCard}>
              <div className={styles.compensationIcon}>🎯</div>
              <div className={styles.compensationAmount}>$1,000</div>
              <h3>Per Coaching Client</h3>
              <p>Earn $1,000 for each coaching client who enrolls through your referral.</p>
            </div>
            <div className={styles.compensationCard}>
              <div className={styles.compensationIcon}>⭐</div>
              <div className={styles.compensationAmount}>50%</div>
              <h3>VIP Upgrade Commission</h3>
              <p>Receive 50% commission on VIP upgrades from your referrals.</p>
            </div>
          </div>

          <p className={styles.compensationNote}>
            There are no quotas or promotional requirements. Share authentically, on your timeline.
          </p>
        </div>
      </section>

      <section className={styles.midPageCta}>
        <div className="container container-content text-center">
          <h2>Does This Feel Like a Good Fit?</h2>
          <p className={styles.ctaSubtext}>If this resonates with your audience and values, we'd be honored to partner with you.</p>
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
            This challenge exists to give people a clear, grounded framework for emotional ownership: learning to notice emotional reactions, slow them down, and respond intentionally instead of automatically.
          </p>
          <p>
            We're inviting trusted peers to share this experience with their audiences — only where it feels aligned. Many people are emotionally stuck without language for what's happening, or a framework that doesn't rely on blame, shame, or avoidance.
          </p>
          <p>
            If this resonates with the people you serve, we'd be grateful to have you share it.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container container-content">
          <h2>Sharing the Challenge</h2>
          <p>
            We make sharing straightforward and respectful of your audience relationship.
          </p>
          <p>
            As a partner, you can:
          </p>
          <ul>
            <li>Use our ready-to-share email and social copy</li>
            <li>Customize our materials or create your own content</li>
            <li>Share when it feels natural and aligned</li>
            <li>Participate without live appearances or time commitments</li>
          </ul>
          <p>
            You control how and when you share. We provide the resources and support.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container container-content">
          <h2>Preview What You'll Share</h2>
          <p>
            Before applying, review the pages your audience will see. This helps you assess whether the messaging and experience aligns with your values and the people you serve.
          </p>
          
          <div className={styles.previewLinks}>
            <div className={styles.previewCard}>
              <div className={styles.previewIcon}>🏠</div>
              <h3>Main Landing Page</h3>
              <p>Where participants learn about and register for the Emotional Freedom Challenge.</p>
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
              <p>The premium upgrade offer shown after participants register for the free challenge.</p>
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

