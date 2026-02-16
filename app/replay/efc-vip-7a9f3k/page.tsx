'use client';

import { useState } from 'react';
import styles from './page.module.css';

// Video data structure
// INTEGRATION POINT: Replace these placeholder URLs with actual video URLs
const videoData = [
  {
    day: 1,
    title: 'Day 1: Understanding Emotional Freedom',
    description: 'Discover the foundations of emotional freedom and learn why old patterns keep repeating.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    duration: '58:42',
  },
  {
    day: 2,
    title: 'Day 2: Breaking Free from Limiting Beliefs',
    description: 'Identify and transform the beliefs that have been holding you back from true freedom.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    duration: '62:15',
  },
  {
    day: 3,
    title: 'Day 3: The Power of Emotional Awareness',
    description: 'Learn to recognize and work with your emotions rather than being controlled by them.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    duration: '56:30',
  },
  {
    day: 4,
    title: 'Day 4: Creating New Patterns',
    description: 'Practical techniques for establishing new, healthier emotional patterns that last.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    duration: '64:18',
  },
  {
    day: 5,
    title: 'Day 5: Living in Emotional Freedom',
    description: 'Integrate everything you\'ve learned and create your personal plan for sustained freedom.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    duration: '71:05',
  },
];

export default function ReplayPage() {
  const [selectedDay, setSelectedDay] = useState(1);
  const currentVideo = videoData.find(video => video.day === selectedDay) || videoData[0];
  
  // DAY 4 COACHING CTA TOGGLE
  // Controlled by environment variable: NEXT_PUBLIC_SHOW_CALL_CTA
  // Set to 'true' in Vercel environment variables to reveal the CTA
  // Alternative date-based approach (commented):
  // const showCallCTA = new Date() >= new Date('2026-03-20'); // Replace with actual Day 4 date
  const showCallCTA = process.env.NEXT_PUBLIC_SHOW_CALL_CTA === 'true';

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
        <div className="container container-md">
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
                    }`}
                    aria-current={selectedDay === video.day ? 'true' : 'false'}
                  >
                    <div className={styles.dayNumber}>Day {video.day}</div>
                    <div className={styles.dayTitle}>{video.title.split(': ')[1]}</div>
                    <div className={styles.dayDuration}>{video.duration}</div>
                  </button>
                ))}
              </nav>
            </aside>
          </div>
        </div>
      </div>

      {/* Day 4 Coaching CTA - Only visible when environment variable is set */}
      {showCallCTA && (
        <section className={styles.coachingSection}>
          <div className="container container-sm">
            <div className={styles.coachingCard}>
              <h2>Ready to Go Deeper?</h2>
              <p className={styles.coachingText}>
                Now that you've experienced the core teachings, you might benefit from personalized guidance. 
                Schedule a one-on-one coaching call with Dr. Paul Jenkins to address your specific situation 
                and accelerate your transformation.
              </p>
              <div className={styles.coachingCTA}>
                {/* INTEGRATION POINT: Replace with actual scheduling link (Calendly, etc.) */}
                <a 
                  href="https://calendly.com/placeholder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button button-primary button-lg"
                >
                  Schedule a Call
                </a>
              </div>
              <p className={styles.coachingNote}>
                Limited availability—book your session while spots are open.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
