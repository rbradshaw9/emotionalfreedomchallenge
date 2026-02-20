import type { Metadata } from 'next';
import RegistrationForm from '@/app/(main)/components/RegistrationForm';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'The Emotional Freedom Challenge | Free 5-Day Experience with Dr. Paul Jenkins',
  description: 'Join Dr. Paul Jenkins for a free, live 5-day experience exploring emotional ownership, self-awareness, and lasting personal change. March 16–20, 2026.',
};

export default function RegistrationPage() {
  return (
    <>
      {/* Hero */}
      <section className="v2-hero">
        <div className="v2-container">
          <div className="v2-event-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            March 16–20, 2026 · Free Live Online Event
          </div>

          <h1 className="v2-headline">
            The Emotional Freedom Challenge
          </h1>
          <p className="v2-subhead">
            A free, live 5-day experience with Dr. Paul Jenkins
          </p>

          <div className="v2-trust-bar">
            <div className="v2-trust-item">
              <span className="v2-trust-check">✓</span>
              <span>5 Live Daily Sessions</span>
            </div>
            <div className="v2-trust-item">
              <span className="v2-trust-check">✓</span>
              <span>Private Facebook Group</span>
            </div>
            <div className="v2-trust-item">
              <span className="v2-trust-check">✓</span>
              <span>Completely Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="v2-section">
        <div className="v2-container v2-max-w-narrow">
          <p className="v2-body" style={{ fontSize: '19px', fontWeight: 500, color: 'var(--v2-text)' }}>
            Are you ready to stop being emotionally hijacked by circumstances, other people, or your own thought patterns — and start living with greater peace, clarity, and confidence?
          </p>
          <p className="v2-body">
            Most people don&apos;t think of themselves as emotionally reactive.<br />
            They are generally reasonable, stable people who sometimes get frustrated…<br />
            or overwhelmed…<br />
            or say things they wish they had handled differently.
          </p>
          <p className="v2-body">
            And usually, that description is completely fair.<br />
            Until the same moments keep showing up again, and again, and… Aaargh!
          </p>
          <p className="v2-body">
            If you&apos;ve noticed that pattern — this 5-day experience will change the game for you.
          </p>
          <div style={{ textAlign: 'center', marginTop: '8px' }}>
            <a href="#register" className="v2-btn v2-btn-primary">
              👉 Reserve Your Free Spot
            </a>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="v2-section v2-section-muted">
        <div className="v2-container--sm">
          <div className="v2-text-center" style={{ marginBottom: '32px' }}>
            <span className="v2-kicker">Register Now</span>
            <h2 className="v2-h2">Reserve Your Free Spot</h2>
            <p className="v2-body v2-muted-text">Sessions are live March 16–20 at 12:00 PM Eastern. Free to attend.</p>
          </div>
          <div className="v2-form-card">
            <RegistrationForm />
          </div>
        </div>
      </section>

      {/* You Might Be Noticing */}
      <section className="v2-section">
        <div className="v2-container">
          <span className="v2-kicker v2-text-center" style={{ display: 'block' }}>Sound Familiar?</span>
          <h2 className="v2-h2 v2-text-center">You Might Be Noticing Things Like…</h2>
          <div className="v2-spacer--sm"></div>
          <div className="v2-grid v2-grid-2 v2-grid--lg">
            <div className="v2-quote">&ldquo;I know better, but in the moment it still happens.&rdquo;</div>
            <div className="v2-quote">&ldquo;I replay conversations afterward and think, why did I respond that way?&rdquo;</div>
            <div className="v2-quote">&ldquo;I try to stay calm, but certain situations (or people) just push my buttons.&rdquo;</div>
            <div className="v2-quote">&ldquo;I&apos;m working on myself — reading, learning, reflecting — and yet some reactions don&apos;t seem to change.&rdquo;</div>
          </div>
          <div className="v2-spacer--sm"></div>
          <div className="v2-max-w-narrow" style={{ margin: '0 auto' }}>
            <p className="v2-body">
              If any of this sounds familiar, you&apos;re not alone.
            </p>
            <p className="v2-body">
              Most people never stop to think about their own thinking. Psychologists call this &ldquo;metacognition&rdquo;. Awareness precedes choice — and metacognition gives us that awareness.
            </p>
            <p className="v2-body">
              Claiming our emotional freedom is kind of like being inside of a box, and the instructions for getting out of our box are printed on the outside of the box!
            </p>
            <p className="v2-body">
              The Emotional Freedom Challenge will read the instructions to you.
            </p>
            <p className="v2-body" style={{ marginBottom: 0 }}>
              This challenge is not to tell you how to think. It illuminates <em>how</em> you think, so you can get back in charge of it. Either we drive our thoughts, or our thoughts drive us. That&apos;s what this challenge focuses on.
            </p>
          </div>
        </div>
      </section>

      {/* What This Experience Is About */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container">
          <span className="v2-kicker v2-text-center" style={{ display: 'block' }}>The 5-Day Experience</span>
          <h2 className="v2-h2 v2-text-center">What This 5-Day Experience Is About</h2>
          <div className="v2-spacer--sm"></div>
          <div className="v2-max-w-narrow" style={{ margin: '0 auto' }}>
            <p className="v2-body">
              Over five live sessions, Dr. Paul Jenkins will walk through how emotional reactions actually form — and why they often override good intentions.<br />
              Not in abstract terms.<br />
              In everyday situations people recognize immediately.
            </p>
            <p className="v2-body">During the week, you&apos;ll begin to see:</p>
            <ul className="v2-list v2-checklist">
              <li>Why certain emotions seem to take over before you&apos;ve had time to think</li>
              <li>How familiar triggers develop and repeat, even when you&apos;re trying to change</li>
              <li>What&apos;s happening in the brief space between feeling something and acting on it</li>
              <li>Why insight alone doesn&apos;t always lead to different behavior</li>
              <li>What emotional ownership looks like in real life, not in theory</li>
            </ul>
            <p className="v2-body" style={{ marginTop: '24px' }}>
              Each day, you&apos;ll learn powerful, practical principles from positive psychology and apply them immediately through simple but transformative challenge tasks. This isn&apos;t about suppressing emotions or pretending everything is fine. It&apos;s about understanding how your emotional system actually works — and reclaiming your ability to respond intentionally instead of react automatically.
            </p>
            <p className="v2-body" style={{ marginBottom: 0 }}>
              If you&apos;re ready to experience more hope, stability, and personal power — regardless of what&apos;s happening around you — this challenge will show you how.
            </p>
          </div>
        </div>
      </section>

      {/* A Simple Clarification */}
      <section className="v2-section">
        <div className="v2-container v2-max-w-narrow">
          <h2 className="v2-h2">A Simple Clarification and Disclaimer</h2>
          <div className="v2-card" style={{ marginBottom: '20px' }}>
            <p className="v2-body" style={{ fontWeight: 600, marginBottom: '16px' }}>
              ✅ This is a FREE EDUCATIONAL EXPERIENCE based on principles of positive psychology.
            </p>
            <p className="v2-body" style={{ marginBottom: '12px' }}>
              ❌ This is <strong>NOT</strong> therapy or mental health treatment — although many participants experience improvements in their subjective mental health.
            </p>
            <p className="v2-body" style={{ marginBottom: '12px' }}>
              ❌ This is <strong>NOT</strong> personal or group coaching — although the principles and models you learn are exactly the ones we teach and use in our coaching programs.
            </p>
            <p className="v2-body" style={{ marginBottom: '12px' }}>
              ❌ This is <strong>NOT</strong> a sales pitch and we would never pressure you into buying anything — although we will let you know toward the end of the week what other resources are available to you for ongoing coaching and structured support.
            </p>
            <p className="v2-body" style={{ marginBottom: 0 }}>
              The challenge itself is complete and valuable on its own. This is a service to create more emotional freedom in our lives, families, and communities. Please remember to thank the person who invited you!
            </p>
          </div>
        </div>
      </section>

      {/* About Dr. Paul */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container">
          <div className="v2-about-drpaul">
            <div className="v2-drpaul-img-wrap">
              <Image
                src="/images/drpaul.png"
                alt="Dr. Paul Jenkins"
                width={280}
                height={280}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div>
              <span className="v2-kicker">About the Host</span>
              <h2 className="v2-h2">About Dr. Paul Jenkins</h2>
              <p className="v2-body">
                Dr. Paul Jenkins is a seasoned professional psychologist who has spent decades working with individuals, couples, families, and leaders around emotional responsibility and personal agency.
              </p>
              <p className="v2-body">
                His work is based on a simple observation:<br />
                When people understand how to operate the equipment of their own mind, they regain the ability to choose how they act — even under stress.
              </p>
              <p className="v2-body" style={{ marginBottom: 0 }}>
                The Emotional Freedom Challenge is a practical introduction to that work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="v2-section">
        <div className="v2-container">
          <span className="v2-kicker v2-text-center" style={{ display: 'block' }}>Logistics</span>
          <h2 className="v2-h2 v2-text-center">How It Works</h2>
          <div className="v2-spacer--sm"></div>
          <div className="v2-card v2-max-w-narrow" style={{ background: 'var(--v2-bg-muted)', margin: '0 auto' }}>
            <ul className="v2-list" style={{ margin: 0 }}>
              <li style={{ marginBottom: '10px' }}><strong>Dates:</strong> [Insert Dates]</li>
              <li style={{ marginBottom: '10px' }}><strong>Sessions:</strong> Live each day</li>
              <li style={{ marginBottom: '10px' }}><strong>Where:</strong> Private Facebook group</li>
              <li style={{ marginBottom: 0 }}><strong>Cost:</strong> Free</li>
            </ul>
          </div>
          <div className="v2-spacer--sm"></div>
          <div className="v2-max-w-narrow" style={{ margin: '0 auto', textAlign: 'center' }}>
            <p className="v2-body v2-muted-text" style={{ marginBottom: 0 }}>
              Once you register, you&apos;ll receive instructions on how to join the group and attend the sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Optional VIP */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container v2-max-w-narrow">
          <h2 className="v2-h2">Optional VIP Access</h2>
          <p className="v2-body">
            Some participants are ready to lean in and they prefer the ability to ask questions and revisit the material.
          </p>
          <p className="v2-body">
            If you&apos;re one of those people, we&apos;ve got you! An optional VIP access option will be available, which includes:
          </p>
          <ul className="v2-list v2-checklist">
            <li>Live Q&amp;A sessions after each daily session</li>
            <li>Special Surprise Guests</li>
            <li>Access to all of the recordings</li>
          </ul>
          <p className="v2-body">
            After you register we will share how you can grab this if you want it. Participation is optional.
          </p>
        </div>
      </section>

      {/* Invitation */}
      <section className="v2-section">
        <div className="v2-container v2-max-w-narrow">
          <h2 className="v2-h2">An Invitation</h2>
          <p className="v2-body">
            If you&apos;ve been noticing emotional responses that don&apos;t reflect who you want to be — or moments you wish you had handled differently — this is a simple place to start looking more closely.
          </p>
          <div style={{ textAlign: 'center', marginTop: '8px' }}>
            <a href="#register" className="v2-btn v2-btn-primary">
              👉 Reserve Your Free Spot
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container--sm v2-text-center">
          <div className="v2-cta-group">
            <a href="#register" className="v2-btn v2-btn-primary v2-btn-lg">
              Reserve Your Free Spot
            </a>
            <p className="v2-secure-note">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Free to attend. No credit card required.
            </p>
            <p className="v2-body v2-muted-text" style={{ fontSize: '13px', marginTop: '16px', marginBottom: 0 }}>
              Your privacy is respected. Your information will never be shared.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
