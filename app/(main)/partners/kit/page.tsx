'use client';

import { useState, useEffect } from 'react';

export default function V2PartnerKitPage() {
  const [affiliateCode, setAffiliateCode] = useState<string>('');
  const [manualCode, setManualCode] = useState<string>('');
  const [showManualInput, setShowManualInput] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleManualCodeSubmit = () => {
    if (manualCode.trim()) {
      setAffiliateCode(manualCode.trim());
      setShowManualInput(false);
    }
  };

  const getReferralLink = () => `https://bl843.isrefer.com/go/efc/${affiliateCode}`;

  const copyToClipboard = async (text: string, index: number) => {
    try {
      setIsLoading(true);
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => { setCopiedIndex(null); setIsLoading(false); }, 2000);
    } catch {
      setIsLoading(false);
    }
  };

  const getEmail1Subject = () => `Someone I trust is hosting this`;
  const getEmail1Preview = () => `A free live challenge I'm recommending`;
  const getEmail1Body = () => `Hey Friend,

Your emotional freedom matters to me, which is why I feel to share this with you.
My friend and colleague, Dr. Paul Jenkins, is hosting a free live experience called The Emotional Freedom Challenge. This challenge runs March 16–20, live each day at 12:00 Noon Eastern Time.

Dr. Paul has spent decades teaching emotional ownership and intentional response in a way that's practical and grounded. What I appreciate most about his work is that it's clear, positive, and focused on personal choice rather than labels or diagnoses.

If you're interested in developing more awareness around how you respond emotionally—especially in daily situations—this is worth a look.

You can learn more and register here:
${getReferralLink()}

—
[PARTNER NAME]`;

  const getEmail2Subject = () => `A Powerful Approach to Emotional Freedom`;
  const getEmail2Preview = () => `Hosted by Dr. Paul Jenkins`;
  const getEmail2Body = () => `Hello,

You're probably going to thank me for this resource from someone I respect in the personal development space.

Dr. Paul Jenkins is a clinical psychologist and educator who has spent years teaching people how to take ownership of their emotional responses and live more intentionally.

He's hosting The Emotional Freedom Challenge from March 16–20, meeting daily at 12:00 Noon Eastern Time. It's free, live, and virtual.

The sessions are practical and focused on real-life application—work, relationships, and everyday stress. Your personal "lunch and learn" for the week.

If that sounds useful to you, here are the details:
${getReferralLink()}

—
[PARTNER NAME]`;

  const getEmail3Subject = () => `Why I'm Sharing This with You`;
  const getEmail3Preview = () => `A better approach to emotional freedom`;
  const getEmail3Body = () => `Hey friend,

You might be wondering why I'm inviting you to The Emotional Freedom Challenge. This aligns with how I think about growth and responsibility.

Dr. Paul Jenkins teaches emotional awareness and ownership from a perspective of positive psychology. His work centers on recognizing emotional patterns and learning to operate the equipment of our own mind so we respond with intention rather than habit.

Dr. Paul is hosting this free challenge March 16–20, live and virtual each day at 12:00 Noon Eastern Time.

If you appreciate thoughtful, grounded approaches to personal growth, you may want to schedule this in for your lunchtime that week.

More information is here:
${getReferralLink()}

—
[PARTNER NAME]`;

  const getEmail4Subject = () => `Up for a challenge that has an impact?`;
  const getEmail4Preview = () => `Hosted by Dr. Paul Jenkins`;
  const getEmail4Body = () => `Friend,

You need to know about a free live challenge coming up that's going to have a very meaningful impact.

My friend, Dr. Paul Jenkins, is known for helping people understand how emotional reactions shape daily life—and how to respond more intentionally without overcomplicating the process.

The Emotional Freedom Challenge runs March 16–20, live at 12:00 Noon Eastern Time, and each session lasts about an hour. Perfect for a "lunch-and-learn" in the middle of your day.

There's also an optional VIP experience with extended Q&A for those who want deeper discussion.

You can see all the details here:
${getReferralLink()}

—
[PARTNER NAME]`;

  const getEmail5Subject = () => `The Challenge Starts Tomorrow`;
  const getEmail5Preview = () => `Sharing one last reminder`;
  const getEmail5Body = () => `Hello,

You deserve one quick reminder about that free live challenge this week.

My friend, Dr. Paul Jenkins, is hosting The Emotional Freedom Challenge starting tomorrow March 16, live at 12:00 Noon Eastern.

If you've followed my recommendations before, you know I don't share things lightly. Dr. Paul's work is thoughtful, respectful, and genuinely useful for anyone wanting to be more intentional in how they respond emotionally.

If this feels timely for you, you can register here:
${getReferralLink()}

You're welcome ;)

—
[PARTNER NAME]`;

  const getSocial1 = () => `Do you trust your friends… to take care of your friends?

My friend, Dr. Paul Jenkins, has spent the past few decades as a Positivity Psychologist teaching emotional responsibility and intentional response in a clear, grounded way. He's hosting a free live Emotional Freedom Challenge from March 16–20, live each day at 12 PM Eastern.

If emotional awareness is something you want to strengthen, this is worth checking out.

Details here:
${getReferralLink()}`;

  const getSocial2 = () => `If you don't know Dr. Paul Jenkins yet, let me introduce you.

He's a Positivity Psychologist and educator who focuses on emotional ownership and intentional response—in ways that are actually understandable and enjoyable.

He's hosting a free live Emotional Freedom Challenge
📅 March 16–20
🕛 12 PM Eastern

More info here:
${getReferralLink()}`;

  const getSocial3 = () => `One reason I appreciate Dr. Paul Jenkins' work is that it's practical and respectful. He teaches people how to respond emotionally with intention rather than habit.

Dr. Paul is leading a free live Emotional Freedom Challenge starting March 16.

If that approach resonates with you, you can learn more here:
${getReferralLink()}`;

  const getSocial4 = () => `Emotional reactions shape more of daily life than most people realize.

Dr. Paul Jenkins helps people recognize those patterns and respond more intentionally. He's hosting a free live Emotional Freedom Challenge from March 16–20, live at noon Eastern.

I think you might appreciate his approach.

Details here:
${getReferralLink()}`;

  const getSocial5 = () => `This starts soon.

Dr. Paul Jenkins is starting up The Emotional Freedom Challenge on March 16, live at 12 Noon Eastern.

It's a thoughtful, practical introduction to emotional awareness and intentional response.

You can register here:
${getReferralLink()}`;

  const CopyBtn = ({ text, index, label }: { text: string; index: number; label: string }) => (
    <button
      onClick={() => copyToClipboard(text, index)}
      className="v2-copy-btn"
      disabled={isLoading && copiedIndex !== index}
    >
      {copiedIndex === index ? '✓ Copied!' : label}
    </button>
  );

  const EmailBlock = ({
    title, subjectFn, previewFn, bodyFn, ids
  }: {
    title: string;
    subjectFn: () => string;
    previewFn: () => string;
    bodyFn: () => string;
    ids: [number, number, number];
  }) => (
    <div className="v2-promo-block">
      <h3 className="v2-h4">{title}</h3>
      <div className="v2-email-component">
        <h4 className="v2-component-label">Subject Line</h4>
        <div className="v2-subject-content"><pre>{subjectFn()}</pre></div>
        <CopyBtn text={subjectFn()} index={ids[0]} label="Copy Subject" />
      </div>
      <div className="v2-email-component">
        <h4 className="v2-component-label">Preview Text <span className="v2-optional-label">(optional – appears after subject in most inboxes)</span></h4>
        <div className="v2-subject-content"><pre>{previewFn()}</pre></div>
        <CopyBtn text={previewFn()} index={ids[1]} label="Copy Preview" />
      </div>
      <div className="v2-email-component">
        <h4 className="v2-component-label">Email Body</h4>
        <div className="v2-promo-content"><pre>{bodyFn()}</pre></div>
        <CopyBtn text={bodyFn()} index={ids[2]} label="Copy Email Body" />
      </div>
    </div>
  );

  return (
    <>
      <section className="v2-hero">
        <div className="v2-container--md">
          <p className="v2-kicker">Partner Resources</p>
          <h1 className="v2-h1">Partner Promotion Kit</h1>
          <p className="v2-kicker" style={{ marginTop: '8px', marginBottom: '20px' }}>5 Days to Emotional Ownership</p>
          <p className="v2-subhead">
            Thank you for being willing to share this experience with your audience. Below are ready-to-use options you can copy, paste, or customize in your own voice.
          </p>
        </div>
      </section>

      {showManualInput && (
        <section className="v2-section v2-section-muted">
          <div className="v2-container--sm">
            <p className="v2-body v2-text-center" style={{ marginBottom: '16px' }}>
              We couldn&apos;t automatically load your referral link. Enter your code below:
            </p>
            <div className="v2-manual-section">
              <div className="v2-manual-input-group">
                <input
                  type="text"
                  className="v2-manual-input"
                  value={manualCode}
                  onChange={(e) => setManualCode(e.target.value)}
                  placeholder="Enter your referral code"
                  onKeyDown={(e) => e.key === 'Enter' && handleManualCodeSubmit()}
                />
                <button onClick={handleManualCodeSubmit} className="v2-btn v2-btn-primary">
                  Load my referral links
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {affiliateCode && (
        <div className="v2-kit-layout">
          <aside className="v2-kit-sidebar">
            <div>
              <p style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--v2-muted)', marginBottom: '12px' }}>On this page</p>
              <a href="#email-swipes" className="v2-sidebar-link">✉ Email Invitations</a>
              <a href="#social-posts" className="v2-sidebar-link">📱 Social Media Copy</a>
              <a href="#tracking-notes" className="v2-sidebar-link">📊 Tracking &amp; Links</a>
              <div style={{ marginTop: '32px', padding: '16px', background: 'var(--v2-bg-muted)', borderRadius: '12px' }}>
                <p style={{ fontWeight: 600, marginBottom: '6px', fontSize: '14px' }}>Need help?</p>
                <p style={{ fontSize: '13px', color: 'var(--v2-muted)', marginBottom: '10px' }}>Our partner support team is available to assist with your campaigns.</p>
                <a href="mailto:info@drpauljenkins.com" style={{ fontSize: '13px', color: 'var(--v2-primary)', fontWeight: 600 }}>Contact Support</a>
              </div>
            </div>
          </aside>

          <div className="v2-kit-content">
            <section id="email-swipes" className="v2-kit-section">
              <div className="v2-kit-section-header">
                <div className="v2-kit-section-icon">✉</div>
                <h2 className="v2-h2">1. Email Invitations</h2>
              </div>

              <EmailBlock title="Email 1 — Personal Trust Transfer" subjectFn={getEmail1Subject} previewFn={getEmail1Preview} bodyFn={getEmail1Body} ids={[1, 2, 3]} />
              <EmailBlock title="Email 2 — Authority & Experience" subjectFn={getEmail2Subject} previewFn={getEmail2Preview} bodyFn={getEmail2Body} ids={[4, 5, 6]} />
              <EmailBlock title="Email 3 — Style & Philosophy Match" subjectFn={getEmail3Subject} previewFn={getEmail3Preview} bodyFn={getEmail3Body} ids={[11, 12, 13]} />
              <EmailBlock title="Email 4 — Practical Outcomes & Credibility" subjectFn={getEmail4Subject} previewFn={getEmail4Preview} bodyFn={getEmail4Body} ids={[14, 15, 16]} />
              <EmailBlock title="Email 5 — Last Call with Personal Endorsement" subjectFn={getEmail5Subject} previewFn={getEmail5Preview} bodyFn={getEmail5Body} ids={[17, 18, 19]} />
            </section>

            <section id="social-posts" className="v2-kit-section">
              <div className="v2-kit-section-header">
                <div className="v2-kit-section-icon">📱</div>
                <h2 className="v2-h2">2. Social Media Copy</h2>
              </div>
              {[
                { title: 'Social Post 1 — Personal Trust', fn: getSocial1, id: 20 },
                { title: 'Social Post 2 — Who Dr. Paul Is', fn: getSocial2, id: 21 },
                { title: 'Social Post 3 — Philosophy Match', fn: getSocial3, id: 22 },
                { title: 'Social Post 4 — Practical Outcomes', fn: getSocial4, id: 23 },
                { title: 'Social Post 5 — Starts Soon', fn: getSocial5, id: 24 },
              ].map(({ title, fn, id }) => (
                <div key={id} className="v2-promo-block">
                  <h3 className="v2-h4">{title}</h3>
                  <div className="v2-promo-content"><pre>{fn()}</pre></div>
                  <CopyBtn text={fn()} index={id} label="Copy" />
                </div>
              ))}
            </section>

            <section id="tracking-notes" className="v2-kit-section">
              <div className="v2-kit-section-header">
                <div className="v2-kit-section-icon">📊</div>
                <h2 className="v2-h2">3. Tracking &amp; Links</h2>
              </div>
              <ul className="v2-notes-list">
                <li>Each partner will receive a unique registration link for tracking</li>
                <li>Referral tracking applies to:
                  <ul>
                    <li>VIP upgrades</li>
                    <li>Coaching enrollments</li>
                  </ul>
                </li>
                <li>Partners will receive clear reporting and payouts after the challenge</li>
                <li>If you need your link or have questions, just let us know</li>
              </ul>

              <h3 className="v2-h4" style={{ marginTop: '32px', marginBottom: '12px' }}>Important Notes for Partners</h3>
              <ul className="v2-notes-list">
                <li>No selling is required</li>
                <li>You are welcome to customize language to fit your voice</li>
                <li>One share is appreciated; multiple shares would make you my hero!</li>
                <li>This is a free experience — please present it as such</li>
              </ul>

              <div style={{ marginTop: '32px', padding: '20px 24px', background: 'var(--v2-bg-muted)', borderRadius: 'var(--v2-radius-sm)', borderLeft: '4px solid var(--v2-primary)' }}>
                <h3 className="v2-h4" style={{ marginBottom: '8px' }}>Optional Personal Blurb</h3>
                <p className="v2-body" style={{ margin: 0 }}>I&apos;m sharing this because emotional ownership is foundational, and this experience offers a clear, respectful way to explore it.</p>
              </div>
            </section>

            <section className="v2-kit-section" style={{ borderTop: '1px solid var(--v2-border)', paddingTop: '40px' }}>
              <h2 className="v2-h2" style={{ marginBottom: '12px' }}>Thank You</h2>
              <p className="v2-body">
                We truly appreciate your willingness to share this experience. Emotional ownership work changes lives, and your support helps the right people find it.
              </p>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
