import type { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from '@/app/(main)/partners/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Partner Program - The Emotional Freedom Challenge',
  description: 'Join our partner program and share The Emotional Freedom Challenge with your audience. Relationship-based partnership built on trust, integrity, and mutual fit.',
};

export default function PartnersPage() {
  return (
    <>
      <section className="v2-hero">
        <div className="v2-container--md">
          <p className="v2-kicker">Partner Program</p>
          <h1 className="v2-h1">
            Partner with The Emotional Freedom Challenge
          </h1>
          <p className="v2-subhead">
            We&apos;re inviting a small group of aligned partners to share The Emotional Freedom Challenge with audiences who value personal growth, emotional awareness, and lasting change.
          </p>
          <p className="v2-body v2-text-center v2-muted-text" style={{ maxWidth: '740px', margin: '0 auto 0' }}>
            This is a relationship-based partnership built on trust, integrity, and mutual fit — not a mass affiliate program.
          </p>
        </div>
      </section>

      <section className="v2-section v2-section-muted">
        <div className="v2-container--md">
          <h2 className="v2-h2 v2-text-center" style={{ marginBottom: '40px' }}>How Partnership Works</h2>
          <div className="v2-partner-steps">
            <div className="v2-partner-step-card">
              <div className="v2-partner-step-icon">📝</div>
              <h3 className="v2-h4">Apply to Become a Partner</h3>
              <p className="v2-body">Complete our application sharing your background and audience. We review all applications personally.</p>
            </div>
            <div className="v2-partner-step-card">
              <div className="v2-partner-step-icon">🔗</div>
              <h3 className="v2-h4">Receive Your Partner Link</h3>
              <p className="v2-body">If approved, you&apos;ll receive your unique tracking link, resources, and next steps within 1–2 business days.</p>
            </div>
            <div className="v2-partner-step-card">
              <div className="v2-partner-step-icon">📢</div>
              <h3 className="v2-h4">Share with Your Audience</h3>
              <p className="v2-body">Use our materials or create your own. Share when and how it feels right for your audience.</p>
            </div>
            <div className="v2-partner-step-card">
              <div className="v2-partner-step-icon">💰</div>
              <h3 className="v2-h4">Earn Commissions</h3>
              <p className="v2-body">Receive payment automatically for qualified referrals and VIP upgrades.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container--md">
          <h2 className="v2-h2" style={{ marginBottom: '24px' }}>Who This Challenge Serves</h2>
          
          <h3 className="v2-h4" style={{ marginBottom: '12px' }}>This partnership is a good fit if your audience includes people who:</h3>
          <ul className="v2-list" style={{ marginBottom: '24px' }}>
            <li>Feel emotionally reactive or stuck in familiar patterns</li>
            <li>Want to take responsibility for their emotional responses without shame</li>
            <li>Are open to reflection, growth, and intentional change</li>
            <li>Value clarity, agency, and personal accountability</li>
          </ul>
          <p className="v2-body" style={{ marginBottom: '32px' }}>
            This challenge resonates with audiences interested in leadership, relationships, parenting, personal development, and values-driven living.
          </p>

          <h3 className="v2-h4" style={{ marginBottom: '12px' }}>What participants experience:</h3>
          <p className="v2-body">Over five live sessions, participants will:</p>
          <ul className="v2-list v2-checklist" style={{ marginBottom: '24px' }}>
            <li>Learn the difference between emotions, thoughts, and choice</li>
            <li>Identify emotional triggers and habitual reactions</li>
            <li>Practice creating space between stimulus and response</li>
            <li>Understand why insight alone rarely leads to lasting change</li>
            <li>See what emotional ownership looks like in real life</li>
          </ul>
          <p className="v2-body">
            This is about clarity and ownership — not quick fixes or emotional bypassing.
          </p>
        </div>
      </section>

      <section className="v2-section v2-section-muted">
        <div className="v2-container--md">
          <h2 className="v2-h2 v2-text-center" style={{ marginBottom: '8px' }}>Partner Compensation</h2>
          <p className="v2-body v2-text-center" style={{ marginBottom: '40px' }}>
            We believe in fairly compensating partners who help extend the reach of this work. Attendees may purchase any of our offers — here&apos;s what you earn for each.
          </p>
          
          <div className="v2-compensation-cards">
            <div className="v2-compensation-card">
              <div className="v2-compensation-icon">⭐</div>
              <div className="v2-compensation-amount">50%</div>
              <h3 className="v2-h4">VIP Upgrade</h3>
              <p className="v2-body">Earn 50% commission on every VIP upgrade purchased by participants you refer to the challenge.</p>
            </div>
            <div className="v2-compensation-card">
              <div className="v2-compensation-icon">🌱</div>
              <div className="v2-compensation-amount">$50</div>
              <h3 className="v2-h4">Live on Purpose Central</h3>
              <p className="v2-body">Earn $50 for each new member who enrolls in the Live on Purpose Central membership through your referral.</p>
            </div>
            <div className="v2-compensation-card">
              <div className="v2-compensation-icon">🎓</div>
              <div className="v2-compensation-amount">$200</div>
              <h3 className="v2-h4">Positivity Practitioner Certification</h3>
              <p className="v2-body">Earn $200 for each new enrollee in the Positivity Practitioner Certification program.</p>
            </div>
            <div className="v2-compensation-card">
              <div className="v2-compensation-icon">🎯</div>
              <div className="v2-compensation-amount">$500</div>
              <h3 className="v2-h4">Executive Coaching</h3>
              <p className="v2-body">Earn $500 for each new private coaching client who enrolls through your referral.</p>
            </div>
          </div>

          <p className="v2-body v2-text-center" style={{ marginTop: '32px', color: 'var(--v2-muted)' }}>
            There are no quotas or promotional requirements. Share authentically, on your timeline.
          </p>
        </div>
      </section>

      <section className="v2-section" style={{ backgroundColor: 'var(--v2-primary)', color: '#fff', textAlign: 'center', padding: '64px 24px' }}>
        <div className="v2-container--sm">
          <h2 className="v2-h2" style={{ color: '#fff', marginBottom: '16px' }}>Does This Feel Like a Good Fit?</h2>
          <p className="v2-body" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '32px' }}>
            If this resonates with your audience and values, we&apos;d be honored to partner with you.
          </p>
          <Link href="/partners/register" className="v2-btn" style={{ backgroundColor: '#fff', color: 'var(--v2-primary)' }}>
            Apply to Become a Partner
          </Link>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container--md">
          <h2 className="v2-h2" style={{ marginBottom: '24px' }}>Why This Partnership Exists</h2>
          <p className="v2-body">
            Over the years, Dr. Paul Jenkins has seen the same pattern repeat itself in people from every background. They&apos;re capable. They&apos;re thoughtful. They&apos;re trying.
          </p>
          <p className="v2-body">
            And yet, emotionally, they keep getting pulled into reactions they don&apos;t choose — frustration, defensiveness, shutdown, overwhelm.
          </p>
          <p className="v2-body">
            This challenge exists to give people a clear, grounded framework for emotional ownership: learning to notice emotional reactions, slow them down, and respond intentionally instead of automatically.
          </p>
          <p className="v2-body">
            We&apos;re inviting trusted peers to share this experience with their audiences — only where it feels aligned. Many people are emotionally stuck without language for what&apos;s happening, or a framework that doesn&apos;t rely on blame, shame, or avoidance.
          </p>
          <p className="v2-body">
            If this resonates with the people you serve, we&apos;d be grateful to have you share it.
          </p>
        </div>
      </section>

      <section className="v2-section v2-section-muted">
        <div className="v2-container--md">
          <h2 className="v2-h2" style={{ marginBottom: '24px' }}>Sharing the Challenge</h2>
          <p className="v2-body">We make sharing straightforward and respectful of your audience relationship.</p>
          <p className="v2-body">As a partner, you can:</p>
          <ul className="v2-list v2-checklist" style={{ marginBottom: '24px' }}>
            <li>Use our ready-to-share email and social copy</li>
            <li>Customize our materials or create your own content</li>
            <li>Share when it feels natural and aligned</li>
            <li>Participate without live appearances or time commitments</li>
          </ul>
          <p className="v2-body">You control how and when you share. We provide the resources and support.</p>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container--md">
          <h2 className="v2-h2" style={{ marginBottom: '16px' }}>Preview What You&apos;ll Share</h2>
          <p className="v2-body" style={{ marginBottom: '32px' }}>
            Before applying, review the pages your audience will see. This helps you assess whether the messaging and experience aligns with your values and the people you serve.
          </p>
          
          <div className="v2-preview-links">
            <div className="v2-preview-card">
              <div className="v2-preview-icon">🏠</div>
              <h3 className="v2-h4">Main Landing Page</h3>
              <p className="v2-body">Where participants learn about and register for The Emotional Freedom Challenge.</p>
              <Link href="/" target="_blank" className="v2-btn v2-btn-outline">
                View Landing Page
              </Link>
            </div>
            <div className="v2-preview-card">
              <div className="v2-preview-icon">⭐</div>
              <h3 className="v2-h4">VIP Upgrade Page</h3>
              <p className="v2-body">The premium upgrade offer shown after participants register for the free challenge.</p>
              <Link href="/vip" target="_blank" className="v2-btn v2-btn-outline">
                View VIP Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-section-muted">
        <div className="v2-container--md">
          <h2 className="v2-h2" style={{ marginBottom: '32px' }}>Frequently Asked Questions</h2>
          <FAQAccordion />
        </div>
      </section>

      <section className="v2-section" style={{ textAlign: 'center', padding: '64px 24px' }}>
        <div className="v2-container--sm">
          <Link href="/partners/register" className="v2-btn v2-btn-primary v2-btn-lg">
            Apply to Become a Partner
          </Link>
        </div>
      </section>
    </>
  );
}
