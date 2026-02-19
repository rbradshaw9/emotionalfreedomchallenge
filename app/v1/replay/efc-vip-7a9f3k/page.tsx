'use client';

import { useState, Suspense } from 'react';
import styles from './page.module.css';

// ─── Video Data ────────────────────────────────────────────────────────────────
// Each day has two recordings: the main training (shared with all attendees) and
// the VIP-only session.
//
// TO ACTIVATE A DAY:
//   1. Set active: true
//   2. Add the Vimeo embed URL to mainSession.videoUrl and/or vipSession.videoUrl
//      Format: 'https://player.vimeo.com/video/XXXXXXX'
// ──────────────────────────────────────────────────────────────────────────────
const videoData = [
  {
    day: 1,
    active: true,
    mainSession: {
      label: 'Main Training',
      title: 'Understanding Emotional Freedom',
      description: 'Discover the foundations of emotional freedom and learn why old patterns keep repeating.',
      videoUrl: 'https://player.vimeo.com/video/000000001', // REPLACE with actual Vimeo URL
      duration: '~60 min',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 1 VIP — Deep Dive & Q&A',
      description: 'Extended coaching, personalized Q&A, and deeper application of today\'s core concepts.',
      videoUrl: 'https://player.vimeo.com/video/000000002', // REPLACE with actual Vimeo URL
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
      description: 'Extended coaching, personalized Q&A, and deeper application of today\'s core concepts.',
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
      description: 'Extended coaching, personalized Q&A, and deeper application of today\'s core concepts.',
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
      description: 'Extended coaching, personalized Q&A, and deeper application of today\'s core concepts.',
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
      description: 'Integrate everything you\'ve learned and create your personal plan for sustained freedom.',
      videoUrl: '',
      duration: '~60 min',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 5 VIP — Deep Dive & Q&A',
      description: 'Extended coaching, personalized Q&A, and deeper application of today\'s core concepts.',
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
    setActiveTab('main'); // always reset to main training when switching days
  }

  // COACHING CTA — always visible on the VIP replay page
  // Positioned as exclusive early-access for VIP members before calendar opens to the public
  // INTEGRATION POINT: Replace the placeholder Calendly link before the challenge starts
  const showCallCTA = true;

  return (
    <div className={styles.page}>
      {/*
        SECURITY NOTE: This page is at an unguessable URL (/replay/efc-vip-7a9f3k)
        - Not linked in any public navigation
        - noindex/nofollow metadata set in layout.tsx
        - Disallowed in robots.txt
      */}

      <div className={styles.header}>
        <div className="container">
          <h1>Challenge Replays</h1>
          <p className={styles.headerSubtitle}>
            Access your session recordings
          </p>
        </div>
      </div>

      {/* Orientation Block */}
      <div className={styles.orientationSection}>
        <div className="container container-content">
          <div className={styles.orientationCard}>
            <h2 className={styles.orientationTitle}>Welcome to Your VIP Replays</h2>
            <p className={styles.orientationText}>
              Each day includes two recordings: the <strong>Main Training</strong> session and your
              exclusive <strong>VIP Session</strong> with extended coaching and live Q&amp;A.
              Watch in order for the best experience, and revisit any session as often as you like.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.replayContainer}>
        <div className="container">
          <div className={styles.layout}>

            {/* ── Main content area ── */}
            <div className={styles.videoSection}>
              {currentDay.active ? (
                <>
                  {/* Tab switcher */}
                  <div className={styles.tabBar}>
                    <button
                      className={`${styles.tabButton} ${activeTab === 'main' ? styles.tabButtonActive : ''}`}
                      onClick={() => setActiveTab('main')}
                    >
                      {currentDay.mainSession.label}
                      <span className={styles.tabDuration}>{currentDay.mainSession.duration}</span>
                    </button>
                    <button
                      className={`${styles.tabButton} ${activeTab === 'vip' ? styles.tabButtonActive : ''} ${styles.tabButtonVip}`}
                      onClick={() => setActiveTab('vip')}
                    >
                      {currentDay.vipSession.label}
                      <span className={styles.tabDuration}>{currentDay.vipSession.duration}</span>
                    </button>
                  </div>

                  {/* Player */}
                  {currentSession.videoUrl ? (
                    <div className={styles.videoWrapper}>
                      <iframe
                        key={`${selectedDay}-${activeTab}`}
                        src={currentSession.videoUrl}
                        title={currentSession.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={styles.videoPlayer}
                      />
                    </div>
                  ) : (
                    <div className={styles.comingSoonWrapper}>
                      <div className={styles.comingSoonInner}>
                        <div className={styles.lockIcon}>&#128247;</div>
                        <h2 className={styles.comingSoonTitle}>Recording processing&hellip;</h2>
                        <p className={styles.comingSoonText}>
                          This recording will be posted shortly after the session ends.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Info below player */}
                  <div className={styles.videoInfo}>
                    <h2>{currentSession.title}</h2>
                    <p className={styles.videoDescription}>{currentSession.description}</p>
                    <div className={styles.videoMeta}>
                      <span className={styles.duration}>Duration: {currentSession.duration}</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.comingSoonWrapper}>
                    <div className={styles.comingSoonInner}>
                      <div className={styles.lockIcon}>&#128274;</div>
                      <h2 className={styles.comingSoonTitle}>Day {currentDay.day} — Coming Soon</h2>
                      <p className={styles.comingSoonText}>
                        Both recordings will be available after the live session on{' '}
                        <strong>March {15 + currentDay.day}, 2026</strong>.
                      </p>
                      <p className={styles.comingSoonSubtext}>
                        Check back after 12:00 PM Eastern on that day.
                      </p>
                    </div>
                  </div>
                  <div className={styles.videoInfo}>
                    <h2>Day {currentDay.day}: {currentDay.mainSession.title}</h2>
                    <p className={styles.videoDescription}>{currentDay.mainSession.description}</p>
                  </div>
                </>
              )}
            </div>

            {/* ── Sidebar ── */}
            <aside className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>Sessions</h3>

              <nav className={styles.dayList} aria-label="Session selection">
                {videoData.map((video) => (
                  <button
                    key={video.day}
                    onClick={() => handleDaySelect(video.day)}
                    className={`${styles.dayButton} ${
                      selectedDay === video.day ? styles.dayButtonActive : ''
                    } ${
                      !video.active ? styles.dayButtonLocked : ''
                    }`}
                    aria-current={selectedDay === video.day ? 'true' : 'false'}
                  >
                    <div className={styles.dayButtonTop}>
                      <div className={styles.dayNumber}>Day {video.day}</div>
                      {!video.active && <span className={styles.lockBadge}>&#128274;</span>}
                    </div>
                    <div className={styles.dayTitle}>{video.mainSession.title}</div>
                    {video.active ? (
                      <div className={styles.daySessionPills}>
                        <span className={styles.pillMain}>Main</span>
                        <span className={styles.pillVip}>VIP</span>
                      </div>
                    ) : (
                      <div className={styles.dayDuration}>Available Mar {15 + video.day}</div>
                    )}
                  </button>
                ))}
              </nav>
            </aside>
          </div>
        </div>
      </div>

      {/* Coaching CTA — always visible, positioned as VIP early-access */}
      {showCallCTA && (
        <section className={styles.coachingSection}>
          <div className="container container-sm">
            <div className={styles.coachingCard}>
              <div className={styles.coachingBadge}>VIP Early Access</div>
              <h2>Work Directly with Dr. Paul</h2>
              <p className={styles.coachingText}>
                As a VIP member, you&rsquo;re getting first access to Dr. Paul&rsquo;s coaching calendar
                before it opens to the public. A limited number of one-on-one sessions are
                available &mdash; claim yours now while spots remain.
              </p>
              <div className={styles.coachingCTA}>
                {/* INTEGRATION POINT: Replace href with actual scheduling link */}
                <a
                  href="https://calendly.com/placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.coachingButton}
                >
                  Claim Your Spot
                </a>
              </div>
              <p className={styles.coachingNote}>
                This calendar link is exclusive to VIP members &mdash; not shared publicly.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default function ReplayPage() {
  return (
    <Suspense fallback={null}>
      <ReplayPageInner />
    </Suspense>
  );
}
