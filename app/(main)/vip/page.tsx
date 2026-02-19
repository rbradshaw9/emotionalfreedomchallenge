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
            Your spot for 5 Days to Emotional Ownership is being held.
          </p>
        </div>
      </section>

      {/* Transition */}
      <section className="v2-section">
        <div className="v2-container v2-max-w-narrow">
          <p className="v2-body">
            You&apos;ll receive an email shortly with instructions for joining the private Facebook group and attending the live sessions.
          </p>
          <p className="v2-body">
            Before you move on, there&apos;s one decision worth making now — while this is still fresh.
          </p>
        </div>
      </section>

      {/* Quick VIP Card */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container--sm">
          <div className="v2-upgrade-card">
            <div className="v2-badge v2-badge--accent" style={{ marginBottom: '16px' }}>
              Limited Spots Available
            </div>
            <h2 className="v2-h2">Upgrade to VIP Access</h2>
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
                All session recordings
              </div>
              <div className="v2-quick-benefit">
                <span className="v2-quick-benefit-check">✓</span>
                Q&amp;A recordings
              </div>
            </div>
            <a
              href="https://bl843.infusionsoft.app/app/orderForms/cdb82d2b-34ac-443e-aba9-2c63993be424"
              className="v2-btn v2-btn-primary v2-btn-lg v2-btn-block"
              style={{ marginTop: '20px' }}
            >
              Yes — Upgrade to VIP for $27
            </a>
          </div>
        </div>
      </section>

      {/* Pattern */}
      <section className="v2-section">
        <div className="v2-container v2-max-w-narrow">
          <h2 className="v2-h2">A Pattern Most People Recognize</h2>
          <p className="v2-body">Most people don&apos;t intend to change their emotional patterns <em>later</em>.</p>
          <p className="v2-body">
            They plan to &ldquo;think about it,&rdquo; or &ldquo;see how the week goes,&rdquo; or &ldquo;come back to this when things slow down.&rdquo;
          </p>
          <p className="v2-body">
            And then the challenge ends. Life picks back up. And the same reactions tend to show up again.
          </p>
          <p className="v2-body">
            Not because people don&apos;t care — but because reflection is easiest when there&apos;s space to slow down and look honestly.
          </p>
          <p className="v2-body">That&apos;s what the next five days are for.</p>
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
              VIP access doesn&apos;t add more information.<br />
              It changes how you engage with what comes up.
            </p>
            <p className="v2-body">For people who choose VIP, the experience usually feels different in three ways:</p>
            <ul className="v2-list v2-checklist">
              <li>They don&apos;t have to hold their questions until later</li>
              <li>They can hear how others are working through similar situations</li>
              <li>They can revisit moments that landed, instead of relying on memory</li>
            </ul>
            <p className="v2-body">That additional layer is often what turns awareness into something that sticks.</p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="v2-section">
        <div className="v2-container">
          <h2 className="v2-h2 v2-text-center">What&apos;s Included with VIP Access</h2>
          <p className="v2-body v2-text-center v2-muted-text">
            VIP access provides three key benefits that help you get the most from this experience:
          </p>
          <div className="v2-spacer--sm"></div>
          <div className="v2-features-list v2-max-w-narrow" style={{ margin: '0 auto' }}>
            <div className="v2-feature-item">
              <div className="v2-feature-icon-wrap">💬</div>
              <div className="v2-feature-content">
                <h3>Private Live Q&amp;A After Each Session</h3>
                <p>After each daily session, Dr. Paul stays on for a smaller Q&amp;A. This is where people tend to ask about real conversations, real relationships, and real situations — not theory.</p>
              </div>
            </div>
            <div className="v2-feature-item">
              <div className="v2-feature-icon-wrap">📹</div>
              <div className="v2-feature-content">
                <h3>Full Session Recordings</h3>
                <p>You&apos;ll have access to the recordings for each session, so you can return to what stood out or catch anything you missed. Many participants revisit key moments multiple times.</p>
              </div>
            </div>
            <div className="v2-feature-item">
              <div className="v2-feature-icon-wrap">🔑</div>
              <div className="v2-feature-content">
                <h3>VIP Q&amp;A Recordings</h3>
                <p>All Q&amp;A sessions are recorded and available to you. Many participants say these recordings are where things quietly click — hearing others work through similar situations often makes concepts land more clearly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container--sm">
          <div className="v2-upgrade-card">
            <p style={{ fontSize: '16px', fontWeight: 700, color: 'var(--v2-text)', marginBottom: '4px' }}>
              Add VIP Access — $27
            </p>
            <p className="v2-muted-text" style={{ fontSize: '14px', marginBottom: '20px' }}>
              Limited spots to keep Q&amp;A sessions personal
            </p>
            <a
              href="https://bl843.infusionsoft.app/app/orderForms/cdb82d2b-34ac-443e-aba9-2c63993be424"
              className="v2-btn v2-btn-primary v2-btn-lg v2-btn-block"
            >
              Yes — Add VIP Access
            </a>
            <div className="v2-secondary-path" style={{ marginTop: '16px' }}>
              <Link href="/thank-you" className="v2-no-thanks">
                No thanks — Continue without VIP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Is Right For You */}
      <section className="v2-section">
        <div className="v2-container v2-max-w-narrow">
          <h2 className="v2-h2">VIP Access Is Right For You If...</h2>
          <ul className="v2-decision-list">
            <li>You tend to have questions after learning something new</li>
            <li>You want the ability to revisit key moments instead of relying on memory</li>
            <li>You know that momentum matters and want to stay engaged</li>
          </ul>
          <p className="v2-decision-note">
            If you&apos;re comfortable just attending live, that&apos;s fine too. But this is the moment when most people either lean in — or default back to how things usually go.
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container--sm">
          <div className="v2-risk-card">
            <h2 className="v2-h2" style={{ marginBottom: '24px' }}>Important Details</h2>
            <div className="v2-detail-item">
              <strong>Why only $27?</strong>
              <p>VIP access is valued at $297. We&apos;re offering it at $27 during registration to make it accessible while you&apos;re motivated.</p>
            </div>
            <div className="v2-detail-item">
              <strong>Why limited spots?</strong>
              <p>We keep VIP groups intentionally small so Q&amp;A sessions remain personal and valuable. Once spots fill, this option closes.</p>
            </div>
            <div className="v2-detail-item">
              <strong>When does access start?</strong>
              <p>Immediately. You&apos;ll receive VIP instructions in your confirmation email along with the standard challenge details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA box */}
      <section className="v2-section">
        <div className="v2-container--sm">
          <div className="v2-cta-box">
            <h2 className="v2-h2">Ready to Upgrade?</h2>
            <div className="v2-pricing-box" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '24px', marginTop: '20px' }}>
              <div className="v2-pricing-row" style={{ color: '#c7c7cc' }}>
                <span>5-Day Challenge Access</span>
                <span style={{ color: 'var(--v2-success)', fontWeight: 700 }}>FREE</span>
              </div>
              <div className="v2-pricing-row" style={{ color: '#c7c7cc' }}>
                <span>VIP Upgrade</span>
                <span style={{ color: '#6eb3f7', fontWeight: 700 }}>+$27</span>
              </div>
              <div className="v2-pricing-separator"></div>
              <div className="v2-pricing-total" style={{ color: '#ffffff', paddingTop: '12px' }}>
                <span>Total Today</span>
                <span style={{ fontSize: '28px', fontWeight: 700, color: '#ffffff' }}>$27</span>
              </div>
            </div>
            <a
              href="https://bl843.infusionsoft.app/app/orderForms/cdb82d2b-34ac-443e-aba9-2c63993be424"
              className="v2-btn v2-btn-primary v2-btn-lg v2-btn-block"
            >
              Yes — Add VIP Access for $27
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
        <div className="v2-container v2-max-w-narrow">
          <h2 className="v2-h2">Either Way</h2>
          <p className="v2-body">You&apos;re welcome in the challenge.</p>
          <p className="v2-body">
            Just know that how you engage tends to shape what you take away.
          </p>
        </div>
      </section>
    </>
  );
}
