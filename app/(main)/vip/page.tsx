import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'VIP Upgrade - The Emotional Freedom Challenge',
  description: 'Upgrade to VIP access for live Q&A sessions, full recordings, and deeper engagement with Dr. Paul Jenkins during the Emotional Freedom Challenge.',
};

export default function VIPPage() {
  return (
    <>
      {/* Hero */}
      <section className="v2-hero">
        <div className="v2-container">
          <div className="v2-badge v2-badge--success" style={{ marginBottom: '20px' }}>
            ✓ &nbsp;You&apos;re Registered
          </div>
          <h1 className="v2-headline">
            You&apos;re Registered — One More Thing Before You Go
          </h1>
          <p className="v2-subhead">
            Your seat for The Emotional Freedom Challenge is confirmed.
          </p>
          <p className="v2-body v2-text-center v2-muted-text" style={{ maxWidth: '600px', margin: '0 auto 24px' }}>
            Check your inbox for an email shortly with instructions for joining the private Facebook group and attending the live sessions.
          </p>
          <p className="v2-body v2-text-center" style={{ maxWidth: '600px', margin: '0 auto 28px', fontWeight: 500.  }}>
            Before you move on, there&apos;s one decision worth making now — while this is still fresh.
          </p>

          {/* Above-the-fold CTA */}
          <div className="v2-upgrade-card" style={{ maxWidth: '480px', margin: '0 auto' }}>
            <div className="v2-badge v2-badge--accent" style={{ marginBottom: '16px' }}>
              Limited Spots Available
            </div>
            <div className="v2-price-row">
              <span className="v2-price-strike">$297 value</span>
              <span className="v2-price-main">$27</span>
              <span className="v2-price-label">one-time</span>
            </div>
            <div className="v2-quick-benefits">
              <div className="v2-quick-benefit">
                <span className="v2-quick-benefit-check">✓</span>
                Private Q&amp;A after each session
              </div>
              <div className="v2-quick-benefit">
                <span className="v2-quick-benefit-check">✓</span>
                Special Surprise Guests
              </div>
              <div className="v2-quick-benefit">
                <span className="v2-quick-benefit-check">✓</span>
                All session &amp; Q&amp;A recordings
              </div>
            </div>
            <a
              href="https://bl843.infusionsoft.app/app/orderForms/cdb82d2b-34ac-443e-aba9-2c63993be424"
              className="v2-btn v2-btn-primary v2-btn-lg v2-btn-block"
              style={{ marginTop: '20px' }}
            >
              Yes — Add VIP Access for $27
            </a>
            <div className="v2-secondary-path" style={{ marginTop: '12px' }}>
              <Link href="/thank-you" className="v2-no-thanks">
                No thanks — Continue without VIP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern */}
      <section className="v2-section">
        <div className="v2-container v2-max-w-narrow">
          <h2 className="v2-h2">A Pattern Most People Recognize</h2>
          <p className="v2-body">Most people don&apos;t intend to put off or procrastinate their emotional freedom for later.</p>
          <p className="v2-body">
            They simply need to &ldquo;think about it,&rdquo;<br />
            or &ldquo;see how the week goes,&rdquo;<br />
            or &ldquo;figure some things out first,&rdquo;<br />
            or &ldquo;come back to this when things slow down.&rdquo;
          </p>
          <p className="v2-body">
            And then the challenge ends.<br />
            Life happens.<br />
            The same patterns show up again.
          </p>
          <p className="v2-body">
            We keep doing what we have been doing — habit.<br />
            <strong>Default is down!</strong><br />
            Elevation requires effort.
          </p>
          <p className="v2-body">
            Are you ready to lean in and maximize this challenge for five days in March?
          </p>
          <p className="v2-body" style={{ fontWeight: 500.  }}>
            How could you turn this challenge into a personal development victory?
          </p>
        </div>
      </section>

      {/* What VIP Changes */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container">
          <span className="v2-kicker v2-text-center" style={{ display: 'block' }}>The VIP Difference</span>
          <h2 className="v2-h2 v2-text-center">What VIP Access Changes</h2>
          <div className="v2-spacer--sm"></div>
          <div className="v2-max-w-narrow" style={{ margin: '0 auto' }}>
            <p className="v2-body">
              VIP access changes how you engage with the content and the experience as a whole.
            </p>
            <p className="v2-body">For people who choose VIP, the experience usually feels different in three ways:</p>
            <ul className="v2-list v2-checklist">
              <li>They ask their questions immediately, and get feedback now</li>
              <li>They hear how others are working through similar situations</li>
              <li>Even at a ridiculously reduced cost, they have skin in the game and this switches something in the brain</li>
              <li>They can revisit moments that landed, instead of relying on memory or notes</li>
            </ul>
            <p className="v2-body">That additional layer is often what turns awareness into something that sticks.</p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="v2-section">
        <div className="v2-container">
          <h2 className="v2-h2 v2-text-center">What&apos;s Included with VIP Access</h2>
          <div className="v2-spacer--sm"></div>
          <div className="v2-features-list v2-max-w-narrow" style={{ margin: '0 auto' }}>
            <div className="v2-feature-item">
              <div className="v2-feature-icon-wrap">💬</div>
              <div className="v2-feature-content">
                <h3>Private Live Q&amp;A After Each Session</h3>
                <p>After each daily session, Dr. Paul stays on for a smaller Q&amp;A. You get to ask — and hear others ask — about real conversations, real relationships, and real situations. Specific application of what was just discussed in the main session.</p>
              </div>
            </div>
            <div className="v2-feature-item">
              <div className="v2-feature-icon-wrap">🌟</div>
              <div className="v2-feature-content">
                <h3>Special Surprise Guests</h3>
                <p>Dr. Paul has a lot of cool friends, and loves to invite them to share their insights in the live Q&amp;A after the main session. These guests include authors, speakers, thought leaders, and coaches who understand the principles well and generously contribute to the conversation.</p>
              </div>
            </div>
            <div className="v2-feature-item">
              <div className="v2-feature-icon-wrap">📹</div>
              <div className="v2-feature-content">
                <h3>Full Session Recordings — Including the Q&amp;A</h3>
                <p>You&apos;ll have access to all the recordings for each session, so you can return to what stood out or catch anything you missed. Every time you return to the content, you do so with different ears because it will build on what you noticed the first time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Cost */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container--sm">
          <div className="v2-card" style={{ textAlign: 'center', padding: '40px 36px' }}>
            <h2 className="v2-h2" style={{ marginBottom: '16px' }}>About the Cost</h2>
            <p className="v2-body">VIP access is valued at $297.</p>
            <p className="v2-body">
              Because you&apos;re joining the challenge now, you can add VIP access for a one-time payment of <strong>$27</strong>.
            </p>
            <p className="v2-body" style={{ marginBottom: 0 }}>
              VIP spots are limited so the Q&amp;A sessions stay useful and personal.
            </p>
          </div>
        </div>
      </section>

      {/* A Simple Way to Decide */}
      <section className="v2-section">
        <div className="v2-container v2-max-w-narrow">
          <h2 className="v2-h2">A Simple Way to Decide</h2>
          <p className="v2-body">If you&apos;re the type of person who:</p>
          <ul className="v2-decision-list">
            <li>tends to have questions after sessions</li>
            <li>wants to slow things down and reflect</li>
            <li>knows that momentum matters</li>
          </ul>
          <p className="v2-body">VIP usually ends up being worth it.</p>
          <p className="v2-body">
            If you&apos;re comfortable just attending live and seeing what you notice, that&apos;s fine too.
          </p>
          <p className="v2-body" style={{ fontWeight: 500 }}>
            But this is the moment when most people either lean in —<br />
            or default back to how things usually go.
          </p>
        </div>
      </section>

      {/* Final CTA box */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container--sm">
          <div className="v2-cta-box">
            <h2 className="v2-h2">👉 Add VIP Access for $27</h2>
            <p className="v2-muted-text" style={{ marginBottom: '24px' }}>(one-time payment)</p>
            <a
              href="https://bl843.infusionsoft.app/app/orderForms/cdb82d2b-34ac-443e-aba9-2c63993be424"
              className="v2-btn v2-btn-primary v2-btn-lg v2-btn-block"
            >
              Yes — Add VIP Access
            </a>
            <div className="v2-secondary-path" style={{ marginTop: '16px' }}>
              <p className="v2-muted-text" style={{ fontSize: '14px', marginBottom: '8px' }}>Or continue without VIP</p>
              <Link href="/thank-you" className="v2-no-thanks">
                No — I&apos;ll attend the live sessions only
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Either Way */}
      <section className="v2-section">
        <div className="v2-container v2-max-w-narrow v2-text-center">
          <h2 className="v2-h2">Either Way</h2>
          <p className="v2-body">Welcome to The Emotional Freedom Challenge!</p>
        </div>
      </section>
    </>
  );
}
