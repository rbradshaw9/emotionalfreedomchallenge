import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Become a Certified Positivity Practitioner | Dr. Paul Jenkins',
  description: 'Get certified to teach proprietary positive psychology models. Master the Positivity Model, Control/Maturity Model, and Influence Quadrant — with a full year of expert training and support.',
};

// Replace with the actual Keap order form URL when ready
const ORDER_FORM_URL = '#enroll';

export default function SpecialPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="v2-hero" style={{ paddingBottom: '80px' }}>
        <div className="v2-container">
          <div className="v2-badge v2-badge--info" style={{ marginBottom: '16px' }}>
            🎓 &nbsp;April 16–17, 2026 · 2-Day Live Online Breakthrough Event
          </div>
          <h1 className="v2-headline">
            You&apos;ve Experienced the Freedom.<br />
            <span style={{ color: 'var(--v2-primary)' }}>Now Get Certified to Teach It.</span>
          </h1>
          <p className="v2-subhead">
            Become a Certified Positivity Practitioner — licensed to teach the Positivity Model,
            Control/Maturity Model, and Influence Quadrant in your practice, organization, or coaching work.
          </p>

          <div className="v2-trust-bar" style={{ marginBottom: '32px' }}>
            <div className="v2-trust-item">
              <span className="v2-trust-check">✓</span> Science-Backed Methods
            </div>
            <div className="v2-trust-item">
              <span className="v2-trust-check">✓</span> 200+ Certified Practitioners
            </div>
            <div className="v2-trust-item">
              <span className="v2-trust-check">✓</span> 30-Day Money-Back Guarantee
            </div>
            <div className="v2-trust-item">
              <span className="v2-trust-check">✓</span> Limited to 50 Participants
            </div>
          </div>

          <div className="v2-cta-group">
            <a href={ORDER_FORM_URL} className="v2-btn v2-btn-primary v2-btn-lg">
              Reserve My Spot — April 16–17 →
            </a>
            <p className="v2-muted-text" style={{ fontSize: '14px', marginBottom: 0 }}>
              $2,997 one-time &nbsp;·&nbsp; or 3 payments of $999 &nbsp;·&nbsp; 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* ── Bridge: From Challenge to Certification ──────────── */}
      <section className="v2-section v2-section-muted v2-section--sm">
        <div className="v2-container--md" style={{ textAlign: 'center' }}>
          <span className="v2-kicker">The Natural Next Step</span>
          <h2 className="v2-h2">
            You&apos;ve Lived the Positivity Model This Week.<br />
            Imagine Teaching It.
          </h2>
          <p className="v2-body" style={{ maxWidth: '700px', margin: '0 auto 0' }}>
            Over the last five days you&apos;ve experienced firsthand what happens when these frameworks
            click. The discontent, the paradigm shift, the agent mindset — it&apos;s not theory anymore.
            The CPP certification takes you from experiencing these models to mastering and teaching them.
            You&apos;ll be licensed to use Dr. Paul&apos;s proprietary frameworks professionally — giving
            your clients the same breakthroughs you&apos;ve had this week.
          </p>
        </div>
      </section>

      {/* ── Why Become a CPP ─────────────────────────────────── */}
      <section className="v2-section">
        <div className="v2-container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="v2-kicker">Why Become a CPP</span>
            <h2 className="v2-h2">Get Certified. Master the Models. Transform Lives.</h2>
            <p className="v2-subhead" style={{ maxWidth: '680px' }}>
              You&apos;re getting professional certification to teach licensed frameworks —
              not generic coaching techniques.
            </p>
          </div>
          <div className="v2-grid v2-grid-3">
            {[
              {
                icon: '🔬',
                title: 'Proven Psychology',
                body: 'Ground your coaching in time-tested principles of positive psychology so clients trust your process and get real, lasting results.',
              },
              {
                icon: '🛠️',
                title: 'Practical Tools',
                body: 'Facilitate breakthroughs using the Positivity Model and licensed frameworks designed for clarity, change, and accountability.',
              },
              {
                icon: '🤝',
                title: 'Support & Community',
                body: 'Join an uplifting network of Certified Positivity Practitioners who share wins, resources, and referrals for a full year.',
              },
            ].map((item) => (
              <div key={item.title} className="v2-card v2-card--center">
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 className="v2-h3">{item.title}</h3>
                <p className="v2-body v2-muted-text" style={{ margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You'll Master ───────────────────────────────── */}
      <section className="v2-section v2-section-dark">
        <div className="v2-container--md">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="v2-kicker" style={{ color: 'var(--v2-accent)' }}>What You&apos;ll Master</span>
            <h2 className="v2-h2">
              Master Proprietary Models.<br />Get Licensed to Teach Them.
            </h2>
            <p className="v2-body" style={{ maxWidth: '680px', margin: '0 auto', color: '#a1a1a6' }}>
              You don&apos;t just learn about these models — you master them personally first.
              That deep, embodied understanding is what lets you facilitate genuine transformation in others.
            </p>
          </div>
          <div className="v2-grid v2-grid-2" style={{ gap: '20px' }}>
            {[
              {
                title: 'The Positivity Model',
                body: 'A proven framework for shifting from negativity bias to intentional, sustainable positivity in all seven core life relationships.',
              },
              {
                title: 'The Control/Maturity Model',
                body: 'Moving from victim mentality to personal ownership and agency — the foundation of all meaningful change.',
              },
              {
                title: 'The Influence Quadrant',
                body: 'Strategic frameworks for creating impact, building influence, and facilitating transformation in others.',
              },
              {
                title: 'Licensed IP Rights',
                body: 'Full permission to teach and apply these proprietary models in your coaching, training, speaking, or consulting work.',
              },
            ].map((item) => (
              <div key={item.title} style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '14px',
                padding: '28px 24px',
              }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    minWidth: '28px', height: '28px', background: '#34c759',
                    borderRadius: '50%', color: '#fff', fontSize: '14px', fontWeight: 700, marginTop: '2px',
                  }}>✓</span>
                  <div>
                    <h3 className="v2-h3" style={{ color: '#f5f5f7', marginBottom: '8px' }}>{item.title}</h3>
                    <p style={{ color: '#a1a1a6', margin: 0, fontSize: '15px', lineHeight: 1.6 }}>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Year-Long Journey ────────────────────────────────── */}
      <section className="v2-section">
        <div className="v2-container--md">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="v2-kicker">Your Year-Long Certification Journey</span>
            <h2 className="v2-h2">Everything You Need — for a Full Year</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
            {[
              { label: 'Four quarterly 2-day Breakthrough Events with Dr. Paul Jenkins', detail: 'Intensive training in each model with hands-on application and live instruction.' },
              { label: 'Monthly live skills training', detail: 'Learn how to facilitate these models with real clients, handle objections, and create breakthroughs.' },
              { label: 'Monthly mastermind groups', detail: 'Practice with fellow practitioners, share client wins, troubleshoot challenges, and build accountability.' },
              { label: 'Self-paced certification courses', detail: 'Deepen your mastery at your own pace with video lessons, assessments, and client-ready tools.' },
              { label: 'Full year of support', detail: "We're committed to helping you integrate these models and use them confidently — by your side the entire journey." },
            ].map((item) => (
              <div key={item.label} style={{
                display: 'flex', gap: '16px', alignItems: 'flex-start',
                background: 'var(--v2-bg-muted)',
                border: '1px solid var(--v2-border-light)',
                borderRadius: '12px', padding: '20px 22px',
              }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  minWidth: '26px', height: '26px', background: 'var(--v2-primary)',
                  borderRadius: '50%', color: '#fff', fontSize: '13px', fontWeight: 700, marginTop: '2px',
                }}>✓</span>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '16px', margin: '0 0 4px', color: 'var(--v2-text)' }}>{item.label}</p>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--v2-muted)' }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Event callout */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0,113,227,0.06) 0%, rgba(0,113,227,0.02) 100%)',
            border: '1px solid rgba(0,113,227,0.2)',
            borderRadius: '16px',
            padding: '32px 28px',
            textAlign: 'center',
          }}>
            <span className="v2-kicker">Next Live Breakthrough Event</span>
            <h3 className="v2-h3" style={{ marginBottom: '8px' }}>April 16–17, 2026 · Live Online</h3>
            <p className="v2-body v2-muted-text" style={{ maxWidth: '560px', margin: '0 auto 20px' }}>
              Begin your certification with an energizing, 2-day live online experience. Interactive training,
              real-world application, and your cohort of fellow practitioners — all from day one.
            </p>
            <p style={{ fontSize: '13px', color: 'var(--v2-muted)', marginBottom: '20px' }}>
              Virtual live event &nbsp;·&nbsp; Limited to 50 participants &nbsp;·&nbsp; Times to be announced
            </p>
            <a href={ORDER_FORM_URL} className="v2-btn v2-btn-primary">
              Reserve My Spot for April →
            </a>
          </div>
        </div>
      </section>

      {/* ── Who It's For ─────────────────────────────────────── */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="v2-kicker">Is This Right for You?</span>
            <h2 className="v2-h2">Who This Program Is For</h2>
            <p className="v2-subhead">
              Designed for professionals and individuals who want to make a meaningful impact
              using proven positive psychology principles.
            </p>
          </div>
          <div className="v2-grid v2-grid-3">
            {[
              { icon: '🎯', title: 'Coaches & Consultants', body: 'Elevate your practice with research-backed frameworks and certification that positions you as an expert.' },
              { icon: '💙', title: 'Therapists & Counselors', body: 'Add practical positive psychology tools to complement your existing therapeutic approaches.' },
              { icon: '📊', title: 'Leaders & Managers', body: 'Create positive, high-performing teams and cultures using science-backed leadership strategies.' },
              { icon: '🎤', title: 'Speakers & Trainers', body: 'Deliver more impactful presentations with licensed frameworks and proven transformation models.' },
              { icon: '🏢', title: 'HR Professionals', body: 'Enhance employee engagement and well-being with tools that create lasting organizational change.' },
              { icon: '⭐', title: 'Personal Growth Seekers', body: 'Master your own positivity first, then share these life-changing principles with others around you.' },
            ].map((item) => (
              <div key={item.title} className="v2-card">
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
                <h3 className="v2-h3" style={{ fontSize: '17px' }}>{item.title}</h3>
                <p className="v2-body v2-muted-text" style={{ fontSize: '14px', margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Proof ─────────────────────────────────────── */}
      <section className="v2-section">
        <div className="v2-container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="v2-kicker">Alumni Spotlight</span>
            <h2 className="v2-h2">Mastering the Models — In Their Own Words</h2>
          </div>
          <div className="v2-grid v2-grid-3">
            {[
              {
                name: 'Kirk',
                role: 'Professional Speaker & Training Facilitator',
                quote: 'The certification provided me with research-backed models, strategic tools, and licensing rights I can now use professionally. The Positivity Model, Control/Maturity Model, and Influence Quadrant gave me a proven system to deliver transformation — not just motivation.',
              },
              {
                name: 'Jamelyn',
                role: 'Professional Coach',
                quote: 'She described her participation as life changing — both personally and professionally. Mastering the models first transformed her own mindset. The certification gave her proven frameworks and licensing rights that allowed her to facilitate deeper breakthroughs with clients.',
              },
              {
                name: 'Jon',
                role: 'Licensed Psychologist',
                quote: 'After becoming a Certified Positivity Practitioner, Jon had structured models and licensed tools that significantly improved his client outcomes. Mastering the models personally first created a newfound level of joy and fulfillment in his own life.',
              },
            ].map((t) => (
              <div key={t.name} className="v2-card" style={{ position: 'relative' }}>
                <div style={{ fontSize: '32px', color: 'var(--v2-primary)', marginBottom: '12px', opacity: 0.4 }}>&ldquo;</div>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--v2-text)', marginBottom: '20px' }}>
                  {t.quote}
                </p>
                <div style={{ borderTop: '1px solid var(--v2-border-light)', paddingTop: '16px' }}>
                  <p style={{ fontWeight: 700, fontSize: '15px', margin: '0 0 2px' }}>{t.name}</p>
                  <p style={{ fontSize: '13px', color: 'var(--v2-muted)', margin: 0 }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value Breakdown ──────────────────────────────────── */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container--md">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="v2-kicker">The Total Value</span>
            <h2 className="v2-h2">What&apos;s Included in Your Certification</h2>
            <p className="v2-subhead">
              If purchased separately, the components of this program represent over $31,000 in value.
            </p>
          </div>

          <div style={{
            background: 'var(--v2-bg)',
            border: '1px solid var(--v2-border-light)',
            borderRadius: '18px',
            overflow: 'hidden',
            boxShadow: 'var(--v2-shadow)',
            marginBottom: '40px',
          }}>
            {[
              { item: '4 Live Breakthrough Events with Dr. Paul Jenkins (2 days each)', value: '$4,000' },
              { item: '12 Monthly Live Skills Training Sessions', value: '$3,600' },
              { item: '12 Monthly Mastermind Group Sessions', value: '$2,400' },
              { item: 'License to Use the Models in Your Work', value: '$10,000' },
              { item: 'Full Year Access to Live On Purpose Central', value: '$804' },
              { item: '5 Additional Seats to Live On Purpose Central', value: '$4,020' },
              { item: 'Self-Paced Skills Training Master Class & Resource Library', value: '$1,997' },
              { item: 'CPP Certification & Professional Designation', value: '$2,000' },
              { item: 'Essential Course Books & Materials', value: '$500' },
              { item: 'Client-Ready Tools, Templates & Worksheets', value: '$800' },
              { item: 'Access to Thriving Community of Purpose-Driven Practitioners', value: '$1,000' },
            ].map((row, i) => (
              <div key={row.item} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '14px 24px',
                borderBottom: i < 10 ? '1px solid var(--v2-border-light)' : 'none',
                background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.015)',
                gap: '16px',
              }}>
                <span style={{ fontSize: '14px', color: 'var(--v2-text)' }}>{row.item}</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--v2-muted)', whiteSpace: 'nowrap' }}>{row.value}</span>
              </div>
            ))}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '18px 24px',
              background: 'var(--v2-bg-muted)',
              borderTop: '2px solid var(--v2-border)',
            }}>
              <span style={{ fontWeight: 700, fontSize: '16px' }}>Total Program Value</span>
              <span style={{ fontWeight: 700, fontSize: '18px', color: 'var(--v2-primary)' }}>$31,121</span>
            </div>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px',
            textAlign: 'center', marginBottom: '48px',
          }}>
            {[
              { num: '12', label: 'Months of Training' },
              { num: '4', label: 'Live Breakthrough Events' },
              { num: '24+', label: 'Live Training Sessions' },
            ].map((stat) => (
              <div key={stat.label} style={{
                background: 'var(--v2-bg)',
                border: '1px solid var(--v2-border-light)',
                borderRadius: '14px',
                padding: '24px 16px',
              }}>
                <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--v2-primary)', lineHeight: 1 }}>{stat.num}</div>
                <div style={{ fontSize: '13px', color: 'var(--v2-muted)', marginTop: '6px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section id="enroll" className="v2-section">
        <div className="v2-container--md">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="v2-kicker">Choose Your Enrollment Option</span>
            <h2 className="v2-h2">Your Investment</h2>
            <p className="v2-subhead">
              Both options include full access to the entire year-long certification program.
            </p>
          </div>

          <div className="v2-grid v2-grid-2" style={{ gap: '24px', marginBottom: '40px' }}>
            {/* Pay in Full */}
            <div className="v2-card" style={{ position: 'relative', border: '2px solid var(--v2-primary)' }}>
              <div style={{
                position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                background: 'var(--v2-primary)', color: '#fff',
                padding: '4px 18px', borderRadius: '999px', fontSize: '12px', fontWeight: 700,
                whiteSpace: 'nowrap',
              }}>BEST VALUE</div>
              <div style={{ textAlign: 'center', paddingTop: '8px' }}>
                <h3 className="v2-h3" style={{ marginBottom: '4px' }}>Pay In Full</h3>
                <div style={{ fontSize: '44px', fontWeight: 700, color: 'var(--v2-primary)', lineHeight: 1, margin: '16px 0 8px' }}>$2,997</div>
                <p style={{ fontSize: '14px', color: 'var(--v2-muted)', marginBottom: '24px' }}>Best value — save with one payment</p>
                <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Includes the April 16–17 Breakthrough Event',
                    'Full access for one year',
                    'All training, masterminds, and resources',
                    'CPP certification and licensing',
                  ].map(item => (
                    <li key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14px' }}>
                      <span style={{ color: '#34c759', fontWeight: 700, marginTop: '1px' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={ORDER_FORM_URL} className="v2-btn v2-btn-primary v2-btn-block">
                  Enroll — Pay in Full →
                </a>
              </div>
            </div>

            {/* 3 Payments */}
            <div className="v2-card">
              <div style={{ textAlign: 'center', paddingTop: '8px' }}>
                <h3 className="v2-h3" style={{ marginBottom: '4px' }}>3 Monthly Payments</h3>
                <div style={{ fontSize: '44px', fontWeight: 700, color: 'var(--v2-text)', lineHeight: 1, margin: '16px 0 4px' }}>$999</div>
                <p style={{ fontSize: '14px', color: 'var(--v2-muted)', marginBottom: '24px' }}>× 3 monthly payments</p>
                <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Includes the April 16–17 Breakthrough Event',
                    'Full access for one year',
                    'All training, masterminds, and resources',
                    'CPP certification and licensing',
                  ].map(item => (
                    <li key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14px' }}>
                      <span style={{ color: '#34c759', fontWeight: 700, marginTop: '1px' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={ORDER_FORM_URL} className="v2-btn v2-btn-outline v2-btn-block">
                  Enroll — 3 Payments →
                </a>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div style={{
            background: 'rgba(52,199,89,0.05)',
            border: '1px solid rgba(52,199,89,0.2)',
            borderRadius: '16px',
            padding: '32px 28px',
            textAlign: 'center',
            marginBottom: '16px',
          }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>🛡️</div>
            <h3 className="v2-h3" style={{ marginBottom: '10px' }}>30-Day Money-Back Guarantee</h3>
            <p className="v2-body v2-muted-text" style={{ maxWidth: '560px', margin: '0 auto', marginBottom: 0 }}>
              We are so confident in the value and transformative potential of this program that we offer a
              30-day money-back guarantee. Enroll today, and if within the first 30 days you feel this is
              not the right fit, we will refund your investment. No questions asked. No hoops. No hassle.
            </p>
          </div>
          <p className="v2-muted-text" style={{ textAlign: 'center', fontSize: '13px' }}>
            Enrollment closes when we hit capacity. Secure your spot today.
          </p>
        </div>
      </section>

      {/* ── What Happens Next ────────────────────────────────── */}
      <section className="v2-section v2-section-muted">
        <div className="v2-container--md">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="v2-kicker">After You Enroll</span>
            <h2 className="v2-h2">What Happens Next</h2>
          </div>
          <div className="v2-grid v2-grid-3">
            {[
              { step: '1', title: 'Immediate Access', body: 'Get instant login credentials to the CPP portal with all self-paced courses, resources, and community access.' },
              { step: '2', title: 'Welcome Email', body: 'Receive a detailed welcome packet with your April event details, preparation checklist, and what to expect.' },
              { step: '3', title: 'Join the Event', body: 'Attend the April 16–17 live Breakthrough Event and begin your transformation journey with Dr. Paul and your cohort.' },
            ].map((item) => (
              <div key={item.step} className="v2-step-card">
                <div className="v2-step-number">{item.step}</div>
                <h3 className="v2-h3">{item.title}</h3>
                <p className="v2-body v2-muted-text" style={{ margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="v2-section">
        <div className="v2-container--md">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="v2-kicker">Common Questions</span>
            <h2 className="v2-h2">Questions & Answers</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              {
                q: 'Do I need to be a certified coach to join?',
                a: 'No! This program is designed for coaches, therapists, HR professionals, managers, speakers, and anyone who wants to use proven frameworks professionally. You\'ll receive comprehensive training in the models and licensing rights to teach them — whether you\'re starting fresh or enhancing an existing practice.',
              },
              {
                q: 'What if I can\'t attend a live event?',
                a: 'All live events are recorded and made available in your portal within 24 hours. While we highly encourage live attendance for the interactive model practice and networking, you\'ll have full access to recordings if you need to catch up or review content.',
              },
              {
                q: 'How much time will I need to commit each week?',
                a: 'Plan for 3–5 hours per week on average. This includes live sessions, self-paced courses, and practicing the models. The program is designed to fit busy schedules — you control the pace of self-study between our structured monthly sessions.',
              },
              {
                q: 'Can I really get my money back if it\'s not right for me?',
                a: 'Absolutely. We stand behind our program 100%. If within 30 days you decide it\'s not the right fit, simply contact our support team for a full refund. No complicated forms, no pressure to explain why — we\'ll process it immediately.',
              },
              {
                q: 'What makes this certification different from other programs?',
                a: 'You won\'t be learning generic coaching techniques. You\'re getting licensed access to three proprietary models (Positivity Model, Control/Maturity Model, Influence Quadrant) that you can teach and apply professionally. Plus, you\'ll master them personally first through a full year of expert support — so you truly embody what you teach.',
              },
            ].map((faq) => (
              <div key={faq.q} style={{
                background: 'var(--v2-bg-muted)',
                border: '1px solid var(--v2-border-light)',
                borderRadius: '12px',
                padding: '24px 24px',
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 10px', color: 'var(--v2-text)' }}>{faq.q}</h3>
                <p style={{ fontSize: '14px', color: 'var(--v2-muted)', margin: 0, lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="v2-section v2-section-dark">
        <div className="v2-container--md" style={{ textAlign: 'center' }}>
          <span className="v2-kicker" style={{ color: 'var(--v2-accent)' }}>Ready to Master the Models?</span>
          <h2 className="v2-h2" style={{ color: '#f5f5f7' }}>
            Claim Your Spot in the April 2026 Event
          </h2>
          <p className="v2-body" style={{ color: '#a1a1a6', maxWidth: '600px', margin: '0 auto 32px' }}>
            You&apos;ve experienced the Positivity Model this week. Now become licensed to teach it.
            We&apos;ll be by your side the entire year — in live events, monthly trainings, mastermind
            groups, and ongoing support — helping you embody these models and use them confidently with others.
          </p>
          <div className="v2-cta-group">
            <a href={ORDER_FORM_URL} className="v2-btn v2-btn-primary v2-btn-lg">
              Enroll Now &amp; Join the April Event →
            </a>
            <p style={{ fontSize: '13px', color: '#a1a1a6', marginBottom: 0 }}>
              Enroll today. 30-day money-back guarantee. No risk.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer note ──────────────────────────────────────── */}
      <section style={{ background: 'var(--v2-bg-dark)', padding: '20px 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontSize: '13px', color: '#6e6e73', margin: 0 }}>
          © Copyright Live on Purpose — Dr. Paul Jenkins 2026 &nbsp;·&nbsp;
          <Link href="/terms" style={{ color: '#6e6e73' }}>Terms &amp; Conditions</Link>
          &nbsp;·&nbsp;
          <Link href="/privacy" style={{ color: '#6e6e73' }}>Privacy Policy</Link>
        </p>
      </section>
    </>
  );
}
