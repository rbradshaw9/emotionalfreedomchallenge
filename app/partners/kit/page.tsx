'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function PartnerKitPage() {
  const [affiliateCode, setAffiliateCode] = useState<string>('');
  const [manualCode, setManualCode] = useState<string>('');
  const [showManualInput, setShowManualInput] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

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

  // Copy to clipboard function
  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Promotion content with referral links
  const getEmailOption1 = () => `Subject: A free resource I think you'll appreciate

I wanted to share a free resource that I genuinely believe will be helpful for many of you.

Dr. Paul Jenkins is hosting a short, free 5-day experience called The Emotional Freedom Challenge.

It's focused on helping people recognize emotional reactions and learn how to respond intentionally instead of automatically. This isn't therapy or hype — it's practical, grounded work around responsibility, choice, and agency.

If emotional reactivity, overwhelm, or repeating patterns are something you've been working on, this could be a valuable experience.

The challenge is completely free and runs for five days.

👉 ${getReferralLink()}

I thought it was worth sharing as a resource.

— [Your Name]`;

  const getEmailOption2 = () => `Subject: Free 5-day experience on emotional ownership

I want to invite you to a free 5-day experience led by Dr. Paul Jenkins called The Emotional Freedom Challenge.

This challenge is about learning how to stop being run by emotional reactions and start responding more intentionally — especially in moments that matter most.

Each day includes a live session with practical insight and reflection. There's no cost to attend.

If this sounds like something you'd benefit from, you can learn more and register here:

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

  const getPersonalBlurb = () => `I'm sharing this because emotional ownership is foundational, and this experience offers a clear, respectful way to explore it.`;

  return (
    <div className={styles.page}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className="container container-md">
          <h1>Partner Promotion Kit</h1>
          <p className={styles.subtitle}>
            The Emotional Freedom Challenge<br />
            5 Days to Emotional Ownership
          </p>
          <p>
            Thank you for being willing to share this experience with your audience. Below are ready-to-use options you can copy, paste, or customize in your own voice.
          </p>
        </div>
      </section>

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
        <>
          {/* Email Promotion Options */}
          <section className={styles.contentSection}>
            <div className="container container-md">
              <h2>Email Promotion Options</h2>

              <div className={styles.promoBlock}>
                <h3>Email Option 1 — Soft, Value-First (Recommended)</h3>
                <div className={styles.promoContent}>
                  <pre>{getEmailOption1()}</pre>
                </div>
                <button
                  onClick={() => copyToClipboard(getEmailOption1(), 1)}
                  className={styles.copyButton}
                >
                  {copiedIndex === 1 ? '✓ Copied!' : 'Copy'}
                </button>
              </div>

              <div className={styles.promoBlock}>
                <h3>Email Option 2 — Slightly More Direct</h3>
                <div className={styles.promoContent}>
                  <pre>{getEmailOption2()}</pre>
                </div>
                <button
                  onClick={() => copyToClipboard(getEmailOption2(), 2)}
                  className={styles.copyButton}
                >
                  {copiedIndex === 2 ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </section>

          {/* Social Post Options */}
          <section className={styles.contentSection}>
            <div className="container container-md">
              <h2>Social Post Options</h2>

              <div className={styles.promoBlock}>
                <h3>Social Post Option 1 — Neutral & Professional</h3>
                <div className={styles.promoContent}>
                  <pre>{getSocialOption1()}</pre>
                </div>
                <button
                  onClick={() => copyToClipboard(getSocialOption1(), 3)}
                  className={styles.copyButton}
                >
                  {copiedIndex === 3 ? '✓ Copied!' : 'Copy'}
                </button>
              </div>

              <div className={styles.promoBlock}>
                <h3>Social Post Option 2 — Personal Recommendation</h3>
                <div className={styles.promoContent}>
                  <pre>{getSocialOption2()}</pre>
                </div>
                <button
                  onClick={() => copyToClipboard(getSocialOption2(), 4)}
                  className={styles.copyButton}
                >
                  {copiedIndex === 4 ? '✓ Copied!' : 'Copy'}
                </button>
              </div>

              <div className={styles.promoBlock}>
                <h3>Social Post Option 3 — Short & Simple</h3>
                <div className={styles.promoContent}>
                  <pre>{getSocialOption3()}</pre>
                </div>
                <button
                  onClick={() => copyToClipboard(getSocialOption3(), 5)}
                  className={styles.copyButton}
                >
                  {copiedIndex === 5 ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </section>

          {/* Optional Personal Blurb */}
          <section className={styles.contentSection}>
            <div className="container container-md">
              <h2>Optional Personal Blurb</h2>

              <div className={styles.promoBlock}>
                <div className={styles.promoContent}>
                  <pre>{getPersonalBlurb()}</pre>
                </div>
                <button
                  onClick={() => copyToClipboard(getPersonalBlurb(), 6)}
                  className={styles.copyButton}
                >
                  {copiedIndex === 6 ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </section>

          {/* Tracking & Partner Notes */}
          <section className={styles.notesSection}>
            <div className="container container-md">
              <h2>Tracking & Partner Notes</h2>
              <ul>
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

          {/* Thank You */}
          <section className={styles.thankYouSection}>
            <div className="container container-sm">
              <h2>Thank You</h2>
              <p>
                We truly appreciate your willingness to share this experience. Emotional ownership work changes lives, and your support helps the right people find it.
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
