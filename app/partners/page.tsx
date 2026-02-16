import Link from 'next/link';
import styles from './page.module.css';

export default function PartnersPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container container-content">
          <h1 className="text-center text-balance">
            An Invitation to Share the Emotional Freedom Challenge
          </h1>
          <p className={styles.subtitle}>
            A free, live 5-day experience designed to help people develop emotional ownership — and respond to life with clarity instead of reactivity.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container container-content">
          <h2>Why This Challenge Exists</h2>
          <p>
            Over the years, Dr. Paul Jenkins has seen the same pattern repeat itself in people from every background.
          </p>
          <p>
            They're capable. They're thoughtful. They're trying.
          </p>
          <p>
            And yet, emotionally, they keep getting pulled into reactions they don't choose — frustration, defensiveness, shutdown, overwhelm.
          </p>
          <p>
            This challenge exists to give people a clear, grounded framework for emotional ownership: learning how to notice emotional reactions, slow them down, and respond intentionally instead of automatically.
          </p>
          <p>
            This is not therapy, motivation, or surface-level positivity.<br />
            It's practical work centered on responsibility, choice, and agency.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container container-content">
          <h2>Why We're Inviting Partners</h2>
          <p>
            We're inviting a small group of trusted peers to share this experience with their audience — only if it feels aligned.
          </p>
          <p>
            Many people are emotionally stuck but don't have language for what's happening, or a framework that doesn't involve blame, shame, or avoidance.
          </p>
          <p>
            This challenge gives people a way to understand themselves more clearly — and take responsibility without self-judgment.
          </p>
          <p>
            If that resonates with the people you serve, we'd be grateful to have you share it.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container container-content">
          <h2>This Challenge Is a Strong Fit for People Who:</h2>
          <ul>
            <li>Feel emotionally reactive or stuck in familiar patterns</li>
            <li>Want to take responsibility for their emotional responses without shame</li>
            <li>Are open to reflection, growth, and intentional change</li>
            <li>Value clarity, agency, and personal accountability</li>
          </ul>
          <p>
            It's especially relevant for audiences interested in leadership, relationships, parenting, personal development, and values-driven living.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container container-content">
          <h2>What Participants Will Experience</h2>
          <p>
            Over five live sessions, participants will:
          </p>
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
          <h2>Partner Compensation (Optional)</h2>
          <p>
            Our priority with this challenge is impact and service.
          </p>
          <p>
            That said, we also believe in compensating partners who help extend the reach of this work.
          </p>
          <p>
            Partners who choose to participate with referral tracking receive:
          </p>
          <ul>
            <li>$1,000 for each coaching client enrolled</li>
            <li>50% commission on all VIP upgrades</li>
          </ul>
          <p>
            There are no quotas, requirements, or pressure.<br />
            Compensation is simply our way of saying thank you.
          </p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container container-content text-center">
          <h2>Ready to Continue?</h2>
          <p className={styles.ctaText}>
            The next step is a brief partner registration page where we'll collect the information needed for referral tracking and commission payouts.
          </p>
          <p className={styles.ctaText}>
            This page is intended for invited partners only.
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

