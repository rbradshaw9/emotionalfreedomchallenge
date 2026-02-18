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

  // Email 1 — Personal Trust Transfer
  const getEmailOption1Subject = () => `Someone I trust is hosting this`;
  const getEmailOption1Preview = () => `A free live challenge I'm recommending`;
  const getEmailOption1Body = () => `Hello,

I want to share something I genuinely recommend.

Dr. Paul Jenkins is hosting a free live experience called The Emotional Freedom Challenge, running March 16–20, live each day at 12:00 PM Eastern.

Paul has spent decades teaching emotional responsibility and intentional response in a way that's practical and grounded. What I appreciate most about his work is that it's clear, respectful, and focused on personal choice rather than labels or diagnosis.

If you're interested in developing more awareness around how you respond emotionally—especially in daily situations—this is worth a look.

You can learn more and register here:
${getReferralLink()}

—
[PARTNER NAME]`;

  // Email 2 — Authority & Experience
  const getEmailOption2Subject = () => `A Thoughtful Approach to Emotional Growth`;
  const getEmailOption2Preview = () => `Hosted by Dr. Paul Jenkins`;
  const getEmailOption2Body = () => `Hello,

I wanted to pass along a resource from someone I respect in the personal development space.

Dr. Paul Jenkins is a clinical psychologist and educator who has spent years teaching people how to take ownership of their emotional responses and live more intentionally.

He's hosting a free, live Emotional Freedom Challenge from March 16–20, meeting daily at 12:00 PM Eastern.

The sessions are practical and focused on real-life application—work, relationships, and everyday stress.

If that sounds useful to you, here are the details:
${getReferralLink()}

—
[PARTNER NAME]`;

  // Email 3 — Style & Philosophy Match
  const getEmailOption3Subject = () => `Why I'm Sharing This with You`;
  const getEmailOption3Preview = () => `A different kind of emotional work`;
  const getEmailOption3Body = () => `Hello,

I'm sharing this because it aligns with how I think about growth and responsibility.

Dr. Paul Jenkins teaches emotional awareness without hype, pressure, or jargon. His work centers on recognizing emotional patterns and learning to respond with intention rather than habit.

He's hosting a free live Emotional Freedom Challenge from March 16–20, live each day at 12:00 PM Eastern.

If you appreciate thoughtful, grounded approaches to personal growth, you may find this valuable.

More information is here:
${getReferralLink()}

—
[PARTNER NAME]`;

  // Email 4 — Practical Outcomes + Credibility
  const getEmailOption4Subject = () => `A Free Live Challenge Worth Considering`;
  const getEmailOption4Preview = () => `Hosted by Dr. Paul Jenkins`;
  const getEmailOption4Body = () => `Hello,

I wanted to let you know about a free live challenge coming up that's being led by Dr. Paul Jenkins.

Paul is known for helping people understand how emotional reactions shape daily life—and how to respond more intentionally without overcomplicating the process.

The Emotional Freedom Challenge runs March 16–20, live at 12:00 PM Eastern, and each session lasts about an hour.

There's also an optional VIP experience with extended Q&A for those who want deeper discussion.

You can see all the details here:
${getReferralLink()}

—
[PARTNER NAME]`;

  // Email 5 — Last Call with Personal Endorsement
  const getEmailOption5Subject = () => `Starts Tomorrow`;
  const getEmailOption5Preview = () => `Sharing one last reminder`;
  const getEmailOption5Body = () => `Hello,

I wanted to send one last reminder about a free live challenge starting tomorrow.

Dr. Paul Jenkins begins The Emotional Freedom Challenge on March 16, live at 12:00 PM Eastern.

If you've followed my recommendations before, you know I don't share things lightly. Paul's work is thoughtful, respectful, and genuinely useful for anyone wanting to be more intentional in how they respond emotionally.

If this feels timely for you, you can register here:
${getReferralLink()}

—
[PARTNER NAME]`;

  // Social Posts
  const getSocialOption1 = () => `I'm recommending this because I trust the person leading it.

Dr. Paul Jenkins has spent years teaching emotional responsibility and intentional response in a clear, grounded way. He's hosting a free live Emotional Freedom Challenge from March 16–20, live each day at 12 PM Eastern.

If emotional awareness is something you want to strengthen, this is worth checking out.

Details here:
${getReferralLink()}`;

  const getSocialOption2 = () => `If you don't know Dr. Paul Jenkins yet, this is a good introduction.

He's a clinical psychologist and educator who focuses on emotional ownership and intentional response—without hype or jargon.

He's hosting a free live Emotional Freedom Challenge
📅 March 16–20
🕛 12 PM Eastern

More info here:
${getReferralLink()}`;

  const getSocialOption3 = () => `One reason I appreciate Dr. Paul Jenkins' work is that it's practical and respectful. He teaches people how to respond emotionally with intention rather than habit.

He's leading a free live Emotional Freedom Challenge starting March 16.

If that approach resonates with you, you can learn more here:
${getReferralLink()}`;

  const getSocialOption4 = () => `Emotional reactions shape more of daily life than most people realize.

Dr. Paul Jenkins helps people recognize those patterns and respond more intentionally. He's hosting a free live Emotional Freedom Challenge from March 16–20, live at noon Eastern.

I think many of you would appreciate his approach.

Details here:
${getReferralLink()}`;

  const getSocialOption5 = () => `This starts soon and I wanted to share it again.

Dr. Paul Jenkins begins the Emotional Freedom Challenge on March 16, live at 12 PM Eastern.

It's a thoughtful, practical introduction to emotional awareness and intentional response.

You can register here:
${getReferralLink()}`;


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
                <h3>Email 1 — Personal Trust Transfer</h3>
                
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
                <h3>Email 2 — Authority &amp; Experience</h3>
                
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
                <h3>Email 3 — Style &amp; Philosophy Match</h3>
                
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
                <h3>Email 4 — Practical Outcomes &amp; Credibility</h3>
                
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

              <div className={styles.promoBlock}>
                <h3>Email 5 — Last Call with Personal Endorsement</h3>

                <div className={styles.emailComponent}>
                  <h4 className={styles.componentLabel}>Subject Line</h4>
                  <div className={styles.subjectContent}>
                    <pre>{getEmailOption5Subject()}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(getEmailOption5Subject(), 17)}
                    className={styles.copyButton}
                  >
                    {copiedIndex === 17 ? '&#x2713; Copied!' : 'Copy Subject'}
                  </button>
                </div>

                <div className={styles.emailComponent}>
                  <h4 className={styles.componentLabel}>Preview Text <span className={styles.optionalLabel}>(optional – appears after the subject line in most inboxes)</span></h4>
                  <div className={styles.previewContent}>
                    <pre>{getEmailOption5Preview()}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(getEmailOption5Preview(), 18)}
                    className={styles.copyButton}
                  >
                    {copiedIndex === 18 ? '&#x2713; Copied!' : 'Copy Preview'}
                  </button>
                </div>

                <div className={styles.emailComponent}>
                  <h4 className={styles.componentLabel}>Email Body</h4>
                  <div className={styles.promoContent}>
                    <pre>{getEmailOption5Body()}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(getEmailOption5Body(), 19)}
                    className={styles.copyButton}
                  >
                    {copiedIndex === 19 ? '&#x2713; Copied!' : 'Copy Email Body'}
                  </button>
                </div>
              </div>
            </div>{/* end sectionBody */}
          </section>
          <section id="social-posts" className={styles.contentSection}>
            <div className={styles.sectionHeaderBar}>
              <div className={styles.sectionIconCircle}>&#128241;</div>
              <h2>2. Social Media Copy</h2>
            </div>
            <div className={styles.sectionBody}>

              <div className={styles.promoBlock}>
                <h3>Social Post 1 — Personal Trust</h3>
                <div className={styles.promoContent}>
                  <pre>{getSocialOption1()}</pre>
                </div>
                <button
                  onClick={() => copyToClipboard(getSocialOption1(), 20)}
                  className={styles.copyButton}
                >
                  {copiedIndex === 20 ? '✓ Copied!' : 'Copy'}
                </button>
              </div>

              <div className={styles.promoBlock}>
                <h3>Social Post 2 — Who Dr. Paul Is</h3>
                <div className={styles.promoContent}>
                  <pre>{getSocialOption2()}</pre>
                </div>
                <button
                  onClick={() => copyToClipboard(getSocialOption2(), 21)}
                  className={styles.copyButton}
                >
                  {copiedIndex === 21 ? '✓ Copied!' : 'Copy'}
                </button>
              </div>

              <div className={styles.promoBlock}>
                <h3>Social Post 3 — Philosophy Match</h3>
                <div className={styles.promoContent}>
                  <pre>{getSocialOption3()}</pre>
                </div>
                <button
                  onClick={() => copyToClipboard(getSocialOption3(), 22)}
                  className={styles.copyButton}
                >
                  {copiedIndex === 22 ? '✓ Copied!' : 'Copy'}
                </button>
              </div>

              <div className={styles.promoBlock}>
                <h3>Social Post 4 — Practical Outcomes</h3>
                <div className={styles.promoContent}>
                  <pre>{getSocialOption4()}</pre>
                </div>
                <button
                  onClick={() => copyToClipboard(getSocialOption4(), 23)}
                  className={styles.copyButton}
                >
                  {copiedIndex === 23 ? '✓ Copied!' : 'Copy'}
                </button>
              </div>

              <div className={styles.promoBlock}>
                <h3>Social Post 5 — Starts Soon</h3>
                <div className={styles.promoContent}>
                  <pre>{getSocialOption5()}</pre>
                </div>
                <button
                  onClick={() => copyToClipboard(getSocialOption5(), 24)}
                  className={styles.copyButton}
                >
                  {copiedIndex === 24 ? '✓ Copied!' : 'Copy'}
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
