'use client';

import { useState, Suspense } from 'react';

const videoData = [
  {
    day: 1,
    active: true,
    mainSession: {
      label: 'Main Training',
      title: 'Understanding Emotional Freedom',
      description: 'Discover the foundations of emotional freedom and learn why old patterns keep repeating.',
      videoUrl: 'https://player.vimeo.com/video/000000001',
      duration: '~60 min',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 1 VIP — Deep Dive & Q&A',
      description: "Extended coaching, personalized Q&A, and deeper application of today's core concepts.",
      videoUrl: 'https://player.vimeo.com/video/000000002',
      duration: '~30 min',
    },
  },
  {
    day: 2,
    active: false,
    mainSession: {
      label: 'Main Training',
      title: 'Breaking Free from Limiting Beliefs',
      description: 'Identify and transform the beliefs that have been holding you back from true freedom.',
      videoUrl: '',
      duration: '~60 min',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 2 VIP — Deep Dive & Q&A',
      description: "Extended coaching, personalized Q&A, and deeper application of today's core concepts.",
      videoUrl: '',
      duration: '~30 min',
    },
  },
  {
    day: 3,
    active: false,
    mainSession: {
      label: 'Main Training',
      title: 'The Power of Emotional Awareness',
      description: 'Learn to recognize and work with your emotions rather than being controlled by them.',
      videoUrl: '',
      duration: '~60 min',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 3 VIP — Deep Dive & Q&A',
      description: "Extended coaching, personalized Q&A, and deeper application of today's core concepts.",
      videoUrl: '',
      duration: '~30 min',
    },
  },
  {
    day: 4,
    active: false,
    mainSession: {
      label: 'Main Training',
      title: 'Creating New Patterns',
      description: 'Practical techniques for establishing new, healthier emotional patterns that last.',
      videoUrl: '',
      duration: '~60 min',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 4 VIP — Deep Dive & Q&A',
      description: "Extended coaching, personalized Q&A, and deeper application of today's core concepts.",
      videoUrl: '',
      duration: '~30 min',
    },
  },
  {
    day: 5,
    active: false,
    mainSession: {
      label: 'Main Training',
      title: 'Living in Emotional Freedom',
      description: "Integrate everything you've learned and create your personal plan for sustained freedom.",
      videoUrl: '',
      duration: '~60 min',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 5 VIP — Deep Dive & Q&A',
      description: "Extended coaching, personalized Q&A, and deeper application of today's core concepts.",
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
      <div className="v2-replay-header">
        <div className="v2-container--md">
          <h1 className="v2-h1" style={{ color: '#fff', marginBottom: '8px' }}>Challenge Replays</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '17px' }}>Access your session recordings</p>
        </div>
      </div>

      <div className="v2-orientation-section">
        <div className="v2-container--md">
          <div className="v2-orientation-card">
            <h2 className="v2-h3" style={{ marginBottom: '12px' }}>Welcome to Your VIP Replays</h2>
            <p className="v2-body">
              Each day includes two recordings: the <strong>Main Training</strong> session and your
              exclusive <strong>VIP Session</strong> with extended coaching and live Q&amp;A.
              Watch in order for the best experience, and revisit any session as often as you like.
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
                    <h2 className="v2-h3" style={{ marginBottom: '8px' }}>{currentSession.title}</h2>
                    <p className="v2-body" style={{ color: 'var(--v2-muted)', marginBottom: '8px' }}>{currentSession.description}</p>
                    <p style={{ fontSize: '13px', color: 'var(--v2-muted)' }}>Duration: {currentSession.duration}</p>
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
                        Check back after 12:00 PM Eastern on that day.
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

      <section className="v2-section v2-section-muted" style={{ marginTop: '40px' }}>
        <div className="v2-container--sm">
          <div className="v2-coaching-card">
            <div className="v2-badge" style={{ marginBottom: '16px' }}>VIP Early Access</div>
            <h2 className="v2-h2" style={{ marginBottom: '12px' }}>Work Directly with Dr. Paul</h2>
            <p className="v2-body" style={{ marginBottom: '24px' }}>
              As a VIP member, you&rsquo;re getting first access to Dr. Paul&rsquo;s coaching calendar
              before it opens to the public. A limited number of one-on-one sessions are
              available &mdash; claim yours now while spots remain.
            </p>
            <div style={{ textAlign: 'center' }}>
              <a
                href="https://calendly.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="v2-btn v2-btn-primary v2-btn-lg"
              >
                Claim Your Spot
              </a>
            </div>
            <p className="v2-body v2-text-center" style={{ marginTop: '16px', fontSize: '13px', color: 'var(--v2-muted)' }}>
              This calendar link is exclusive to VIP members — not shared publicly.
            </p>
          </div>
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
