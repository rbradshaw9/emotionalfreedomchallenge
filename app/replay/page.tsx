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

  return (
    <div className={styles.page}>
      {/* 
        INTEGRATION POINT: Authentication/Gating
        
        In the future, this page should check for:
        - Valid registration token
        - Active session
        - Payment status (if required)
        
        If not authenticated, redirect to registration page.
        Consider using URL parameters or cookies for token-based access.
      */}
      
      <div className={styles.header}>
        <div className="container">
          <h1>Challenge Replays</h1>
          <p className={styles.headerSubtitle}>
            Watch or rewatch any session from the 5-day challenge
          </p>
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

      <section className={styles.resourcesSection}>
        <div className="container container-md">
          <h2 className="text-center">Additional Resources</h2>
          <div className={styles.resources}>
            <div className={styles.resource}>
              <h3>Workbook</h3>
              <p>Download the companion workbook with exercises for each session.</p>
              <button className="button button-secondary">Download PDF</button>
            </div>
            
            <div className={styles.resource}>
              <h3>Discussion Group</h3>
              <p>Join the conversation and share insights with other participants.</p>
              <a 
                href="https://facebook.com/groups/placeholder" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                Join Group
              </a>
            </div>
            
            <div className={styles.resource}>
              <h3>VIP Upgrade</h3>
              <p>Get exclusive Q&A access and bonus content with VIP membership.</p>
              <a href="/vip" className="button button-accent">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
