'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css';

// Video data structure
// INTEGRATION POINT: Set active: true and provide videoUrl when each session is ready
const videoData = [
  {
    day: 1,
    title: 'Day 1: Understanding Emotional Freedom',
    description: 'Discover the foundations of emotional freedom and learn why old patterns keep repeating.',
    videoUrl: '', // INTEGRATION POINT: Replace with Vimeo URL when available
    duration: '~60 min',
    active: false, // Set to true and add videoUrl when session is complete
  },
  {
    day: 2,
    title: 'Day 2: Breaking Free from Limiting Beliefs',
    description: 'Identify and transform the beliefs that have been holding you back from true freedom.',
    videoUrl: '',
    duration: '~60 min',
    active: false,
  },
  {
    day: 3,
    title: 'Day 3: The Power of Emotional Awareness',
    description: 'Learn to recognize and work with your emotions rather than being controlled by them.',
    videoUrl: '',
    duration: '~60 min',
    active: false,
  },
  {
    day: 4,
    title: 'Day 4: Creating New Patterns',
    description: 'Practical techniques for establishing new, healthier emotional patterns that last.',
    videoUrl: '',
    duration: '~60 min',
    active: false,
  },
  {
    day: 5,
    title: 'Day 5: Living in Emotional Freedom',
    description: 'Integrate everything you\'ve learned and create your personal plan for sustained freedom.',
    videoUrl: '',
    duration: '~60 min',
    active: false,
  },
];

function ReplayPageInner() {
  // Default to the first active day, or day 1 if none are active yet
  const firstActiveDay = videoData.find(v => v.active)?.day ?? 1;
  const [selectedDay, setSelectedDay] = useState(firstActiveDay);
  const currentVideo = videoData.find(video => video.day === selectedDay) || videoData[0];
  
  // COACHING CTA — auto-reveals on March 19, 2026 (after Day 4 session)
  // Preview before that date by visiting the page with ?preview=cta in the URL
  const searchParams = useSearchParams();
  const CTA_REVEAL_DATE = new Date('2026-03-19T00:00:00');
  const showCallCTA = new Date() >= CTA_REVEAL_DATE || searchParams.get('preview') === 'cta';
  const isCtaPreview = searchParams.get('preview') === 'cta' && new Date() < CTA_REVEAL_DATE;

  return (
    <div className={styles.page}>
      {/* 
        SECURITY NOTE: This page is at an unguessable URL (/replay/efc-vip-7a9f3k)
        - Not linked in any public navigation
        - noindex/nofollow metadata set in layout.tsx
        - Disallowed in robots.txt
        
        FUTURE: Add authentication/token validation here before showing content
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
            <h2 className={styles.orientationTitle}>Welcome to Your Replays</h2>
            <p className={styles.orientationText}>
              Each session builds on the previous one, creating a foundation for lasting transformation. 
              We recommend watching the sessions in order (Day 1 through Day 5) for the best experience. 
              Take your time with each session and revisit them as needed—the insights deepen with each viewing.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.replayContainer}>
        <div className="container">
          <div className={styles.layout}>
            {/* Main video player */}
            <div className={styles.videoSection}>
              {currentVideo.active && currentVideo.videoUrl ? (
                <>
                  <div className={styles.videoWrapper}>
                    <iframe
                      src={currentVideo.videoUrl}
                      title={currentVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className={styles.videoPlayer}
                    />
                  </div>
                  <div className={styles.videoInfo}>
                    <h2>{currentVideo.title}</h2>
                    <p className={styles.videoDescription}>{currentVideo.description}</p>
                    <div className={styles.videoMeta}>
                      <span className={styles.duration}>Duration: {currentVideo.duration}</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.comingSoonWrapper}>
                    <div className={styles.comingSoonInner}>
                      <div className={styles.lockIcon}>&#128274;</div>
                      <h2 className={styles.comingSoonTitle}>Day {currentVideo.day} — Coming Soon</h2>
                      <p className={styles.comingSoonText}>
                        This session recording will be available after the live session on{' '}
                        <strong>March {15 + currentVideo.day}, 2026</strong>.
                      </p>
                      <p className={styles.comingSoonSubtext}>
                        Check back after 12:00 PM Eastern on that day.
                      </p>
                    </div>
                  </div>
                  <div className={styles.videoInfo}>
                    <h2>{currentVideo.title}</h2>
                    <p className={styles.videoDescription}>{currentVideo.description}</p>
                  </div>
                </>
              )}
            </div>

            {/* Sidebar with day selections */}
            <aside className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>Sessions</h3>
              
              <nav className={styles.dayList} aria-label="Session selection">
                {videoData.map((video) => (
                  <button
                    key={video.day}
                    onClick={() => setSelectedDay(video.day)}
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
                    <div className={styles.dayTitle}>{video.title.split(': ')[1]}</div>
                    <div className={styles.dayDuration}>{video.active ? video.duration : 'Available Mar ' + (15 + video.day)}</div>
                  </button>
                ))}
              </nav>
            </aside>
          </div>
        </div>
      </div>

      {/* Coaching CTA — auto-reveals March 19, 2026 | preview via ?preview=cta */}
      {showCallCTA && (
        <section className={styles.coachingSection}>
          <div className="container container-sm">
            {isCtaPreview && (
              <div className={styles.previewBanner}>
                &#128065; Preview mode — this section is hidden until March 19, 2026
              </div>
            )}
            <div className={styles.coachingCard}>
              <h2>Take Your Transformation Further</h2>
              <p className={styles.coachingText}>
                You&rsquo;ve done the work. Now let&rsquo;s make it stick. Schedule a one-on-one coaching call 
                with Dr. Paul Jenkins to get personalized guidance, work through your specific challenges, 
                and build a clear path forward.
              </p>
              <div className={styles.coachingCTA}>
                {/* INTEGRATION POINT: Replace href with actual scheduling link */}
                <a
                  href="https://calendly.com/placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-lg"
                >
                  Schedule Your Coaching Call
                </a>
              </div>
              <p className={styles.coachingNote}>
                Limited spots available — book yours before they fill up.
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
