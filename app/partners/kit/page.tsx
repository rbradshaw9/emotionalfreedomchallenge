'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function PartnerKitPage() {
  const [affiliateCode, setAffiliateCode] = useState<string>('');
  const [manualCode, setManualCode] = useState<string>('');
  const [showManualInput, setShowManualInput] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const heroContent = (
    <section className={styles.hero}>
      <div className="container container-content">
        <h1>Partner Marketing Kit</h1>
        <p className={styles.subtitle}>
          Everything you need to share The Emotional Freedom Challenge with your audience.
        </p>
      </div>
    </section>
  );

  // Read affiliate code from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    
    if (code) {
      setAffiliateCode(code);
      setShowManualInput(false);
    } else {
      setShowManualInput(true);
    }
  }, []);

  // Handle manual code submission
  const handleManualCodeSubmit = () => {
    if (manualCode.trim()) {
      setAffiliateCode(manualCode.trim());
      setShowManualInput(false);
    }
  };

  // Generate referral link
  const getReferralLink = () => {
    return `https://bl843.isrefer.com/go/efc/${affiliateCode}`;
  };

  // Copy to clipboard function with loading state
  const copyToClipboard = async (text: string, index: number) => {
    try {
      setIsLoading(true);
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => {
        setCopiedIndex(null);
        setIsLoading(false);
      }, 2000);
    } catch {
      setIsLoading(false);
      // Silently fail - clipboard API may not be available in all contexts
    }
  };

  // Email Option 1 - Separated Components
  const getEmailOption1Subject = () => `A free resource I think you'll appreciate`;
  
  const getEmailOption1Preview = () => `A calm, practical 5-day experience focused on emotional ownership and intentional response.`;
  
  const getEmailOption1Body = () => `I wanted to share a free experience that I genuinely believe will be helpful for many of you.

Dr. Paul Jenkins is hosting a short, free 5-day experience called The Emotional Freedom Challenge.

It's focused on helping people recognize emotional reactions and learn how to respond intentionally instead of automatically. This isn't therapy or hype — it's practical, grounded work around responsibility, choice, and agency.

If emotional reactivity, overwhelm, or repeating patterns are something you've been working on, this could be a valuable experience.

The challenge is completely free and runs for five days.

👉 ${getReferralLink()}

I thought it was worth sharing.

— [Your Name]`;

  // Email Option 2 - Separated Components
  const getEmailOption2Subject = () => `Free 5-day experience on emotional ownership`;
  
  const getEmailOption2Preview = () => `A free 5-day experience with Dr. Paul Jenkins on emotional ownership and choice.`;
  
  const getEmailOption2Body = () => `I want to invite you to a free 5-day experience led by Dr. Paul Jenkins called The Emotional Freedom Challenge.

This challenge is about learning how to stop being run by emotional reactions and start responding more intentionally — especially in moments that matter most.

Each day includes a live session with practical insight and reflection. There's no cost to attend.

If this sounds like something you'd benefit from, you can learn more and register here:

👉 ${getReferralLink()}

— [Your Name]`;

  // Email Option 3 - Separated Components
  const getEmailOption3Subject = () => `A free 5-day experience led by Dr. Paul Jenkins`;
  
  const getEmailOption3Preview = () => `A practical, grounded approach to emotional ownership from a long-time educator and coach.`;
  
  const getEmailOption3Body = () => `I want to share a free experience being led by someone I respect deeply.

Dr. Paul Jenkins has spent decades teaching and coaching around emotional responsibility, choice, and personal agency. His work aligns closely with how I think about responsibility, choice, and emotional ownership.

He's hosting a free 5-day experience called The Emotional Freedom Challenge.

Each day includes a live session designed to help people:
- Notice emotional patterns
- Understand where reactions come from
- Practice choosing responses more deliberately

It's not therapy, and it's not hype.
It's thoughtful, structured work around emotional ownership.

The experience is completely free.

👉 ${getReferralLink()}

I wanted to pass this along as a resource.

— [Your Name]`;

  // Email Option 4 - Separated Components
  const getEmailOption4Subject = () => `A different approach to emotional growth (free)`;
  
  const getEmailOption4Preview = () => `A short, practical experience on emotional responsibility and intentional choice.`;
  
  const getEmailOption4Body = () => `I wanted to share a free experience that approaches emotional growth in a way I don't see very often.

Dr. Paul Jenkins is leading a free 5-day experience called The Emotional Freedom Challenge. His work focuses less on managing emotions and more on understanding them — and choosing how to respond rather than reacting automatically.

The challenge runs March 16–20, with live sessions each day at 12:00 PM Eastern. Each session is about 60 minutes.

This challenge is designed for people who:
- Want to break repeating emotional patterns
- Feel reactive or overwhelmed at times
- Are interested in personal responsibility and intentional living

Each day includes a live session, and the entire experience is free.

If this sounds like something you'd find valuable, you can learn more here:

👉 ${getReferralLink()}

— [Your Name]`;

  const getSocialOption1 = () => `I'm sharing a free resource that may be helpful if you're working on emotional awareness and intentional living.

Dr. Paul Jenkins is hosting a free 5-day experience called The Emotional Freedom Challenge, focused on recognizing emotional patterns and learning how to respond more intentionally.

You can learn more and register here:
👉 ${getReferralLink()}`;

  const getSocialOption2 = () => `I'm looking forward to a free 5-day experience led by Dr. Paul Jenkins called The Emotional Freedom Challenge.

It's practical, grounded work around emotional responsibility and choice — not therapy, not hype.

If that resonates, you can register here:
👉 ${getReferralLink()}`;

  const getSocialOption3 = () => `Free 5-day experience: The Emotional Freedom Challenge  
Learn how to stop reacting emotionally and start choosing intentionally.

👉 ${getReferralLink()}`;

  return (
    <div className={styles.page}>
      {heroContent}

      {/* Manual Code Input (if needed) */}
      {showManualInput && (
        <section className={styles.manualCodeSection}>
          <div className="container container-sm">
            <p className={styles.manualMessage}>
              We couldn't automatically load your referral link.
            </p>
            <div className={styles.manualInputGroup}>
              <input
                type="text"
                value={manualCode}
                onChange={(e) => setManualCode(e.target.value)}
                placeholder="Enter your referral code"
                className={styles.manualInput}
                onKeyPress={(e) => e.key === 'Enter' && handleManualCodeSubmit()}
              />
              <button
                onClick={handleManualCodeSubmit}
                className={styles.manualButton}
              >
                Load my referral links
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Content Sections (only show when code is available) */}
      {affiliateCode && (
        <div className={styles.kitLayout}>
          {/* Sticky Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarInner}>
              <p className={styles.sidebarLabel}>On this page</p>
              <a href="#email-swipes" className={styles.sidebarLink}>
                <span className={styles.sidebarLinkIcon}>&#9993;</span>
                Email Swipes
              </a>
              <a href="#social-posts" className={styles.sidebarLink}>
                <span className={styles.sidebarLinkIcon}>&#128241;</span>
                Social Media Copy
              </a>
              <a href="#tracking-notes" className={styles.sidebarLink}>
                <span className={styles.sidebarLinkIcon}>&#128202;</span>
                Tracking &amp; Notes
              </a>
              <div className={styles.sidebarHelp}>
                <p className={styles.sidebarHelpTitle}>Need help?</p>
                <p className={styles.sidebarHelpText}>Our partner support team is available to assist with your campaigns.</p>
                <a href="mailto:info@drpauljenkins.com" className={styles.sidebarHelpLink}>Contact Support</a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className={styles.kitContent}>

          {/* Email Promotion Options */}
          <section id="email-swipes" className={styles.contentSection}>
            <div className={styles.sectionHeaderBar}>
              <div className={styles.sectionIconCircle}>&#9993;</div>
              <h2>1. Email Swipes</h2>
            </div>
            <div className={styles.sectionBody}>

              <div className={styles.promoBlock}>
                <h3>Email Option 1 — Soft, Value-First (Recommended)</h3>
                
                <div className={styles.emailComponent}>
                  <h4 className={styles.componentLabel}>Subject Line</h4>
                  <div className={styles.subjectContent}>
                    <pre>{getEmailOption1Subject()}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(getEmailOption1Subject(), 1)}
                    className={styles.copyButton}
                    disabled={isLoading}
                  >
                    {copiedIndex === 1 ? '✓ Copied!' : isLoading ? 'Copying...' : 'Copy Subject'}
                  </button>
                </div>

                <div className={styles.emailComponent}>
                  <h4 className={styles.componentLabel}>Preview Text <span className={styles.optionalLabel}>(optional – appears after the subject line in most inboxes)</span></h4>
                  <div className={styles.previewContent}>
                    <pre>{getEmailOption1Preview()}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(getEmailOption1Preview(), 2)}
                    className={styles.copyButton}
                  >
                    {copiedIndex === 2 ? '✓ Copied!' : 'Copy Preview'}
                  </button>
                </div>

                <div className={styles.emailComponent}>
                  <h4 className={styles.componentLabel}>Email Body</h4>
                  <div className={styles.promoContent}>
                    <pre>{getEmailOption1Body()}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(getEmailOption1Body(), 3)}
                    className={styles.copyButton}
                  >
                    {copiedIndex === 3 ? '✓ Copied!' : 'Copy Email Body'}
                  </button>
                </div>
              </div>

              <div className={styles.promoBlock}>
                <h3>Email Option 2 — Slightly More Direct</h3>
                
                <div className={styles.emailComponent}>
                  <h4 className={styles.componentLabel}>Subject Line</h4>
                  <div className={styles.subjectContent}>
                    <pre>{getEmailOption2Subject()}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(getEmailOption2Subject(), 4)}
                    className={styles.copyButton}
                  >
                    {copiedIndex === 4 ? '✓ Copied!' : 'Copy Subject'}
                  </button>
                </div>

                <div className={styles.emailComponent}>
                  <h4 className={styles.componentLabel}>Preview Text <span className={styles.optionalLabel}>(optional – appears after the subject line in most inboxes)</span></h4>
                  <div className={styles.previewContent}>
                    <pre>{getEmailOption2Preview()}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(getEmailOption2Preview(), 5)}
                    className={styles.copyButton}
                  >
                    {copiedIndex === 5 ? '✓ Copied!' : 'Copy Preview'}
                  </button>
                </div>

                <div className={styles.emailComponent}>
                  <h4 className={styles.componentLabel}>Email Body</h4>
                  <div className={styles.promoContent}>
                    <pre>{getEmailOption2Body()}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(getEmailOption2Body(), 6)}
                    className={styles.copyButton}
                  >
                    {copiedIndex === 6 ? '✓ Copied!' : 'Copy Email Body'}
                  </button>
                </div>
              </div>

              <div className={styles.promoBlock}>
                <h3>Email Option 3 — About Dr. Paul (Credibility-Focused)</h3>
                
                <div className={styles.emailComponent}>
                  <h4 className={styles.componentLabel}>Subject Line</h4>
                  <div className={styles.subjectContent}>
                    <pre>{getEmailOption3Subject()}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(getEmailOption3Subject(), 11)}
                    className={styles.copyButton}
                  >
                    {copiedIndex === 11 ? '✓ Copied!' : 'Copy Subject'}
                  </button>
                </div>

                <div className={styles.emailComponent}>
                  <h4 className={styles.componentLabel}>Preview Text <span className={styles.optionalLabel}>(optional – appears after the subject line in most inboxes)</span></h4>
                  <div className={styles.previewContent}>
                    <pre>{getEmailOption3Preview()}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(getEmailOption3Preview(), 12)}
                    className={styles.copyButton}
                  >
                    {copiedIndex === 12 ? '✓ Copied!' : 'Copy Preview'}
                  </button>
                </div>

                <div className={styles.emailComponent}>
                  <h4 className={styles.componentLabel}>Email Body</h4>
                  <div className={styles.promoContent}>
                    <pre>{getEmailOption3Body()}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(getEmailOption3Body(), 13)}
                    className={styles.copyButton}
                  >
                    {copiedIndex === 13 ? '✓ Copied!' : 'Copy Email Body'}
                  </button>
                </div>
              </div>

              <div className={styles.promoBlock}>
                <h3>Email Option 4 — Meaning & Relevance</h3>
                
                <div className={styles.emailComponent}>
                  <h4 className={styles.componentLabel}>Subject Line</h4>
                  <div className={styles.subjectContent}>
                    <pre>{getEmailOption4Subject()}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(getEmailOption4Subject(), 14)}
                    className={styles.copyButton}
                  >
                    {copiedIndex === 14 ? '✓ Copied!' : 'Copy Subject'}
                  </button>
                </div>

                <div className={styles.emailComponent}>
                  <h4 className={styles.componentLabel}>Preview Text <span className={styles.optionalLabel}>(optional – appears after the subject line in most inboxes)</span></h4>
                  <div className={styles.previewContent}>
                    <pre>{getEmailOption4Preview()}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(getEmailOption4Preview(), 15)}
                    className={styles.copyButton}
                  >
                    {copiedIndex === 15 ? '✓ Copied!' : 'Copy Preview'}
                  </button>
                </div>

                <div className={styles.emailComponent}>
                  <h4 className={styles.componentLabel}>Email Body</h4>
                  <div className={styles.promoContent}>
                    <pre>{getEmailOption4Body()}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(getEmailOption4Body(), 16)}
                    className={styles.copyButton}
                  >
                    {copiedIndex === 16 ? '✓ Copied!' : 'Copy Email Body'}
                  </button>
                </div>
              </div>
            </div>{/* end sectionBody */}
          </section>

          {/* Social Post Options */}
          <section id="social-posts" className={styles.contentSection}>
            <div className={styles.sectionHeaderBar}>
              <div className={styles.sectionIconCircle}>&#128241;</div>
              <h2>2. Social Media Copy</h2>
            </div>
            <div className={styles.sectionBody}>

              <div className={styles.promoBlock}>
                <h3>Social Post Option 1 — Neutral &amp; Professional</h3>
                <div className={styles.promoContent}>
                  <pre>{getSocialOption1()}</pre>
                </div>
                <button
                  onClick={() => copyToClipboard(getSocialOption1(), 7)}
                  className={styles.copyButton}
                >
                  {copiedIndex === 7 ? '✓ Copied!' : 'Copy'}
                </button>
              </div>

              <div className={styles.promoBlock}>
                <h3>Social Post Option 2 — Personal Recommendation</h3>
                <div className={styles.promoContent}>
                  <pre>{getSocialOption2()}</pre>
                </div>
                <button
                  onClick={() => copyToClipboard(getSocialOption2(), 8)}
                  className={styles.copyButton}
                >
                  {copiedIndex === 8 ? '✓ Copied!' : 'Copy'}
                </button>
              </div>

              <div className={styles.promoBlock}>
                <h3>Social Post Option 3 — Short & Simple</h3>
                <div className={styles.promoContent}>
                  <pre>{getSocialOption3()}</pre>
                </div>
                <button
                  onClick={() => copyToClipboard(getSocialOption3(), 9)}
                  className={styles.copyButton}
                >
                  {copiedIndex === 9 ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
            </div>{/* end sectionBody */}
          </section>

          {/* Tracking & Partner Notes */}
          <section id="tracking-notes" className={styles.contentSection}>
            <div className={styles.sectionHeaderBar}>
              <div className={styles.sectionIconCircle}>&#128202;</div>
              <h2>3. Tracking &amp; Notes</h2>
            </div>
            <div className={styles.sectionBody}>
              <ul className={styles.notesList}>
                <li>Each partner receives a unique referral tracking link</li>
                <li>Tracking applies to:
                  <ul>
                    <li>VIP upgrades</li>
                    <li>Coaching enrollments</li>
                  </ul>
                </li>
                <li>You are welcome to customize language to fit your voice</li>
                <li>One share is appreciated; multiple shares are optional</li>
                <li>This is a free experience — please present it as such</li>
              </ul>
            </div>
          </section>

          {/* Thank You CTA */}
          <section className={styles.thankYouSection}>
            <h2>Thank You</h2>
            <p>
              We truly appreciate your willingness to share this experience. Emotional ownership work changes lives, and your support helps the right people find it.
            </p>
          </section>

          </div>{/* end kitContent */}
        </div>
      )}
    </div>
  );
}
