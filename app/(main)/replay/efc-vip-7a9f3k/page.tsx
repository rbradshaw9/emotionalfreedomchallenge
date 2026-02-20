'use client';

import { useState, Suspense } from 'react';

const videoData = [
  {
    day: 1,
    active: true,
    mainSession: {
      label: 'Main Training',
      title: 'The Positivity Model: Reclaim Emotional Ownership',
      description: "Most people believe their emotions are caused by what happens to them — other people's behavior, the news, their past, their stress, their circumstances. That belief quietly steals our freedom. On Day 1, you'll learn the Positivity Model and discover the powerful truth about where emotions really come from. We'll address anxiety, depression, resentment, and overwhelm — not by minimizing them, but by understanding them. As you learn to make peace with your past, your present, and even your future, you step into emotional ownership.",
      videoUrl: 'https://player.vimeo.com/video/000000001',
      duration: '~60 min',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 1 VIP — Q&A, Surprise Guests & Extended Discussion',
      description: 'Challenge Task: The Gratitude Power-Up — 25 daily gratitudes, with at least half focused on the hard things. Not toxic positivity. Real empowerment. Finding strength and growth in what once felt heavy.',
      videoUrl: 'https://player.vimeo.com/video/000000002',
      duration: '~30 min',
    },
  },
  {
    day: 2,
    active: false,
    mainSession: {
      label: 'Main Training',
      title: 'Creation of What Is To Be: From Discontent to Design',
      description: "Discontent is a powerful signal. On Day 2, we explore the creation side of the Positivity Model and walk through the 6-Phase Creation Process: Discontent, The Choice, The Question, The Plan, The Work, and The Manifestation. Instead of feeling stuck in what is, you'll learn how to intentionally create what could be. Emotional freedom expands when you realize you are here to design the life that previously pushed you around.",
      videoUrl: '',
      duration: '~60 min',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 2 VIP — Q&A, Surprise Guests & Extended Discussion',
      description: 'Challenge Task: Better By 8 — Each day, choose one meaningful action that will make your life, relationships, health, or work just a little better by 8:00. Small steps. Real momentum.',
      videoUrl: '',
      duration: '~30 min',
    },
  },
  {
    day: 3,
    active: false,
    mainSession: {
      label: 'Main Training',
      title: 'Two Determinant Paradigms: Victim or Agent',
      description: "Every emotionally charged moment reveals a choice — even when it doesn't feel like it. On Day 3, we'll dive into the two paradigms that determine your experience of life: the Victim paradigm and the Agent paradigm. Will you choose to blame, or response-ability — your ability to choose your response. When you understand this shift, resentment softens, power returns, and clarity replaces chaos. Emotional freedom grows when you stop asking, \"Why is this happening to me?\" and start asking, \"Who will I choose to be in this?\"",
      videoUrl: '',
      duration: '~60 min',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 3 VIP — Q&A, Surprise Guests & Extended Discussion',
      description: 'Challenge Task: Upside Down — For 24 hours, intentionally disrupt something routine. This simple exercise builds awareness, flexibility, and proof that you can choose differently.',
      videoUrl: '',
      duration: '~30 min',
    },
  },
  {
    day: 4,
    active: false,
    mainSession: {
      label: 'Main Training',
      title: 'The Influence Quadrant: Expand Your Impact',
      description: "So much emotional turmoil comes from trying to control what isn't ours to control — to the neglect of what we CAN control. On Day 4, we explore the Influence Quadrant and discover where your true power lies. You'll see how your emotional freedom affects not just you, but every relationship you touch. Service becomes a stabilizing force. Instead of being drained by others, you'll learn how to engage from strength.",
      videoUrl: '',
      duration: '~60 min',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 4 VIP — Q&A, Surprise Guests & Extended Discussion',
      description: "Challenge Task: Free Three — Make a meaningful difference for three people — one in your family, one in your work or community, and one you don't even know. Emotional freedom deepens when contribution expands.",
      videoUrl: '',
      duration: '~30 min',
    },
  },
  {
    day: 5,
    active: false,
    mainSession: {
      label: 'Main Training',
      title: 'Commitment and Courage: Move Forward with Intention',
      description: "Insight without commitment fades. On our final day, we explore the 4 C's — Commitment, Courage, Capability, and Confidence — and why momentum matters. You can steer a moving vehicle. A parked one? Not so much. Emotional freedom is a practice built on courageous commitment. You'll identify your next right step and solidify the gains you've made this week.",
      videoUrl: '',
      duration: '~60 min',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 5 VIP — Q&A, Surprise Guests & Extended Discussion',
      description: 'Challenge Task: The Next Right Thing — Commit to the next right thing — however small or bold that may be. Choose the next physical step toward that promise you made to yourself or others. This is not a place you come to — it is a place you go from! You are not alone. Notice your abundant sources of support. You complete this challenge equipped to move forward with clarity and power.',
      videoUrl: '',
      duration: '~30 min',
    },
  },
];

type VideoTab = 'main' | 'vip';

function ReplayPageInner() {
  const firstActiveDay = videoData.find(v => v.active)?.day ?? 1;
  const [selectedDay, setSelectedDay] = useState(firstActiveDay);
  const [activeTab, setActiveTab] = useState<VideoTab>('main');

  const currentDay = videoData.find(v => v.day === selectedDay) || videoData[0];
  const currentSession = activeTab === 'main' ? currentDay.mainSession : currentDay.vipSession;

  function handleDaySelect(day: number) {
    setSelectedDay(day);
    setActiveTab('main');
  }

  return (
    <>
      <div className="v2-orientation-section">
        <div className="v2-container--md">
          <div className="v2-orientation-card">
            <h2 className="v2-h3" style={{ marginBottom: '12px' }}>Welcome to Your VIP Recordings</h2>
            <p className="v2-body">
              Each day includes two recordings: the <strong>Main Training</strong> session and your
              exclusive <strong>VIP Session</strong> with live Q&amp;A, special surprise guests, and extended discussion.
              Revisit any session as often as you like.
            </p>
          </div>
        </div>
      </div>

      <div className="v2-section" style={{ paddingTop: '32px' }}>
        <div className="v2-container--lg">
          <div className="v2-replay-layout">

            <div className="v2-replay-main">
              {currentDay.active ? (
                <>
                  <div className="v2-tab-bar">
                    <button
                      onClick={() => setActiveTab('main')}
                      className={`v2-tab-btn${activeTab === 'main' ? ' v2-tab-btn-active' : ''}`}
                    >
                      {currentDay.mainSession.label}
                      <span style={{ display: 'block', fontSize: '12px', opacity: 0.7, fontWeight: 400 }}>{currentDay.mainSession.duration}</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('vip')}
                      className={`v2-tab-btn v2-tab-btn-vip${activeTab === 'vip' ? ' v2-tab-btn-active' : ''}`}
                    >
                      {currentDay.vipSession.label}
                      <span style={{ display: 'block', fontSize: '12px', opacity: 0.7, fontWeight: 400 }}>{currentDay.vipSession.duration}</span>
                    </button>
                  </div>

                  {currentSession.videoUrl ? (
                    <div className="v2-video-wrapper">
                      <iframe
                        key={`${selectedDay}-${activeTab}`}
                        src={currentSession.videoUrl}
                        title={currentSession.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      />
                    </div>
                  ) : (
                    <div className="v2-coming-soon-wrap">
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '48px', marginBottom: '16px' }}>📷</div>
                        <h2 className="v2-h3" style={{ marginBottom: '8px' }}>Recording processing…</h2>
                        <p className="v2-body" style={{ color: 'var(--v2-muted)' }}>
                          This recording will be posted shortly after the session ends.
                        </p>
                      </div>
                    </div>
                  )}

                  <div style={{ padding: '24px 0' }}>
                    <h2 className="v2-h3" style={{ marginBottom: '8px' }}>Day {currentDay.day}: {currentDay.mainSession.title}</h2>
                    <p className="v2-body" style={{ color: 'var(--v2-muted)', marginBottom: '8px' }}>{currentDay.mainSession.description}</p>
                    <p className="v2-body" style={{ color: 'var(--v2-muted)', marginBottom: '8px' }}>
                      <strong>Challenge Task:</strong>{currentDay.vipSession.description.replace('Challenge Task:', '')}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="v2-coming-soon-wrap">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔒</div>
                      <h2 className="v2-h3" style={{ marginBottom: '8px' }}>Day {currentDay.day} — Coming Soon</h2>
                      <p className="v2-body" style={{ color: 'var(--v2-muted)', marginBottom: '8px' }}>
                        Both recordings will be available after the live session on{' '}
                        <strong>March {15 + currentDay.day}, 2026</strong>.
                      </p>
                      <p style={{ fontSize: '14px', color: 'var(--v2-muted)' }}>
                        Check back after 12:00 Noon Eastern on that day.
                      </p>
                    </div>
                  </div>
                  <div style={{ padding: '24px 0' }}>
                    <h2 className="v2-h3" style={{ marginBottom: '8px' }}>Day {currentDay.day}: {currentDay.mainSession.title}</h2>
                    <p className="v2-body" style={{ color: 'var(--v2-muted)' }}>{currentDay.mainSession.description}</p>
                  </div>
                </>
              )}
            </div>

            <aside className="v2-sidebar">
              <h3 className="v2-h4" style={{ marginBottom: '16px' }}>Sessions</h3>
              <nav>
                {videoData.map((video) => (
                  <button
                    key={video.day}
                    onClick={() => handleDaySelect(video.day)}
                    className={[
                      'v2-day-btn',
                      selectedDay === video.day ? 'v2-day-btn-active' : '',
                      !video.active ? 'v2-day-btn-locked' : '',
                    ].filter(Boolean).join(' ')}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Day {video.day}</span>
                      {!video.active && <span>🔒</span>}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '6px', textAlign: 'left' }}>{video.mainSession.title}</div>
                    {video.active ? (
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span style={{ fontSize: '11px', background: 'var(--v2-primary)', color: '#fff', borderRadius: '100px', padding: '2px 8px' }}>Main</span>
                        <span style={{ fontSize: '11px', background: '#f0a500', color: '#fff', borderRadius: '100px', padding: '2px 8px' }}>VIP</span>
                      </div>
                    ) : (
                      <div style={{ fontSize: '12px', color: 'var(--v2-muted)' }}>Available Mar {15 + video.day}</div>
                    )}
                  </button>
                ))}
              </nav>
            </aside>
          </div>
        </div>
      </div>

      <section className="v2-section v2-section-dark" style={{ marginTop: '40px' }}>
        <div className="v2-container--sm" style={{ textAlign: 'center' }}>
          <div className="v2-badge" style={{ marginBottom: '16px' }}>VIP Exclusive</div>
          <h2 className="v2-h2" style={{ marginBottom: '12px' }}>Schedule a Breakthrough Call</h2>
          <p className="v2-body" style={{ marginBottom: '24px' }}>
            As a VIP member, you have access to schedule a one-on-one Breakthrough Call
            with one of our Certified Positivity Practitioners. This is your opportunity
            to get personalized guidance and take your experience to the next level.
          </p>
          <a
            href="https://calendly.com/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="v2-btn v2-btn-primary v2-btn-lg"
          >
            Schedule Your Breakthrough Call
          </a>
          <p className="v2-body v2-text-center" style={{ marginTop: '16px', fontSize: '13px', opacity: 0.7 }}>
            This scheduling link is exclusive to VIP members.
          </p>
        </div>
      </section>
    </>
  );
}

export default function V2ReplayPage() {
  return (
    <Suspense fallback={null}>
      <ReplayPageInner />
    </Suspense>
  );
}
