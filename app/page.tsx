import styles from './page.module.css';
import RegistrationForm from './components/RegistrationForm';

export default function RegistrationPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container container-md">
          <h1 className="text-center text-balance">
            5 Days to Emotional Ownership
          </h1>
          <p className={styles.subtitle}>
            A free, live 5-day experience with Dr. Paul Jenkins
          </p>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className="container container-content">
          <p>
            Most people don't think of themselves as emotionally reactive.<br />
            They think of themselves as reasonable people who sometimes get frustrated…<br />
            or overwhelmed…<br />
            or say things they wish they had handled differently.
          </p>
          <p>
            And most of the time, that explanation feels fair.<br />
            Until the same moments keep showing up again.
          </p>
          <p>
            If you've noticed that pattern — this 5-day experience was created for you.
          </p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container container-sm">
          <div className={styles.formCard}>
            <RegistrationForm />
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container container-content">
          <h2>You Might Be Noticing Things Like…</h2>
          <p className={styles.quote}>
            "I know better, but in the moment it still happens."
          </p>
          <p className={styles.quote}>
            "I replay conversations afterward and think, why did I respond that way?"
          </p>
          <p className={styles.quote}>
            "I try to stay calm, but certain situations just push my buttons."
          </p>
          <p className={styles.quote}>
            "I'm working on myself — reading, learning, reflecting — and yet some reactions don't seem to change."
          </p>
          <p>
            If any of that sounds familiar, you're not alone.<br />
            Most people never stop to look closely at why those reactions feel so automatic — or what's happening just before them.<br />
            That's what this challenge focuses on.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container container-content">
          <h2>What This 5-Day Experience Is About</h2>
          <p>
            Over five live sessions, Dr. Paul Jenkins will walk through how emotional reactions actually form — and why they often override good intentions.<br />
            Not in abstract terms.<br />
            In everyday situations people recognize immediately.
          </p>
          <p>During the week, you'll begin to see:</p>
          <ul>
            <li>Why certain emotions seem to take over before you've had time to think</li>
            <li>How familiar triggers develop and repeat, even when you're trying to change</li>
            <li>What's happening in the brief space between feeling something and acting on it</li>
            <li>Why insight alone doesn't always lead to different behavior</li>
            <li>What emotional ownership looks like in real life, not in theory</li>
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container container-content">
          <h2>A Simple Clarification</h2>
          <p>This is a free educational experience.</p>
          <p>
            It isn't therapy.<br />
            It isn't group coaching.<br />
            It isn't designed to pressure you into buying anything.
          </p>
          <p>
            At the end of the five days, there will be an optional opportunity to learn more about ongoing coaching for those who want structured support.<br />
            The challenge itself is complete and valuable on its own.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container container-content">
          <h2>About Dr. Paul Jenkins</h2>
          <p>
            Dr. Paul Jenkins has spent decades working with individuals, couples, families, and leaders around emotional responsibility and personal agency.
          </p>
          <p>
            His work is based on a simple observation:<br />
            when people understand their emotional responses clearly, they regain the ability to choose how they act — even under stress.
          </p>
          <p>
            This challenge is a practical introduction to that work.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container container-content">
          <h2>How It Works</h2>
          <p>
            <strong>Dates:</strong> [Insert Dates]<br />
            <strong>Sessions:</strong> Live each day<br />
            <strong>Where:</strong> Private Facebook group<br />
            <strong>Cost:</strong> Free
          </p>
          <p>
            Once you register, you'll receive instructions on how to join the group and attend the sessions.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container container-content">
          <h2>Optional Additional Access</h2>
          <p>
            Some participants prefer the ability to ask questions and revisit the material.
          </p>
          <p>
            For those individuals, an optional VIP access option will be available, which includes:
          </p>
          <ul>
            <li>Live Q&A sessions after each daily session</li>
            <li>Access to session recordings</li>
          </ul>
          <p>
            Details will be shared after registration. Participation is optional.
          </p>
        </div>
      </section>

      <section className={styles.invitationSection}>
        <div className="container container-content">
          <h2>An Invitation</h2>
          <p>
            If you've been noticing emotional responses that don't reflect who you want to be — or moments you wish you had handled differently — this is a simple place to start looking more closely.
          </p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container container-sm text-center">
          <a href="#" className="button button-primary button-lg">
            Reserve Your Free Spot
          </a>
        </div>
      </section>
    </div>
  );
}
