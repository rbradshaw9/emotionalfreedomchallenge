'use client';

import { useState, Suspense, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CHALLENGE } from '@/app/lib/challengeConfig';

const videoData = [
  {
    day: 1,
    active: true,
    mainSession: {
      label: 'Main Training',
      title: 'The Positivity Model: Reclaim Emotional Ownership',
      description: 'Day 1 lays the entire foundation. Dr. Paul shares a defining personal story and introduces the Positivity Model — the framework that makes emotional freedom a real, achievable practice.',
      bullets: [
        'The Positivity Model — the foundational framework for understanding where emotions actually come from',
        "Dr. Paul's raw origin story: a minivan, a prepaid Visa card for gas, and a financial collapse that ended in bankruptcy",
        'Meet Mary Louise Zeller — the 80-year-old, 6th-degree black belt who delivered the breakthrough: "The troops are not coming. We are the troops."',
        'Why waiting for circumstances to change quietly robs you of emotional freedom — and what to do instead',
        'Challenge Task: The Gratitude Power-Up — 25 gratitudes per day, with at least half focused on the hard stuff',
      ],
      videoUrl: 'https://player.vimeo.com/video/1174112981',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 1 VIP — Coach Blu Robinson & The Gratitude Power-Up',
      description: 'After the main session, Dr. Paul is joined by special guest Coach Blu Robinson for a live Q&A, an honest conversation about choice and awareness, and a practical breakdown of today\'s challenge task.',
      bullets: [
        'Special guest: Coach Blu Robinson, founder of Addict to Athlete — the only addiction recovery program Dr. Paul has ever endorsed',
        'Why "my choice was taken from me" is the most dangerous belief — and how awareness is the key that unlocks freedom',
        'The "Take Your Mark" framework: take your place, get focused, and keep moving forward',
        'Live Q&A with VIP members — real-time coaching and connection from Dr. Paul',
        'Deep dive on the Gratitude Power-Up: why it works, how to do it right, and what to expect',
      ],
      videoUrl: 'https://player.vimeo.com/video/1174113342',
    },
  },
  {
    day: 2,
    active: true,
    mainSession: {
      label: 'Main Training',
      title: 'Creation of What Is To Be: From Discontent to Design',
      description: 'Discontent is not a sign that something is wrong with you — it is the creative spark that starts every meaningful change. On Day 2, Dr. Paul introduces the 6-Phase Creation Process and shows you exactly how to move from feeling stuck in what is to confidently designing what could be. This is the session that transforms restlessness into direction.',
      bullets: [
        'The 6-Phase Creation Process — Discontent, The Choice, The Question, The Plan, The Work, and The Manifestation — and why every act of creation follows this same sequence',
        'Why you\'re not depressed, you\'re a creator — the insight from Ernie Harker that reframes the feeling of "never being satisfied" as a superpower',
        'The paradigm shift at the heart of the process: Victim vs. Agent — and why choosing the victim side sends you straight back into the cycle of discontent',
        '"If not this, then what?" — the question that turns your brain on, and why "I can\'t" shuts everything down',
        'Challenge Task: Better By 8 — choose one meaningful action each day that will make your life, relationships, health, or work just a little better by 8:00 PM',
      ],
      videoUrl: 'https://player.vimeo.com/video/1174491150',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 2 VIP — The Creation Process Deep Dive with Natasja Visser',
      description: 'Fresh off the main session, Dr. Paul is joined by special guest Natasja Visser for an extended conversation that puts the 6-Phase Creation Process in a whole new light — through the lens of your emotions.',
      bullets: [
        'Special guest: Natasja Visser — professional counselor from South Africa, executive coach, and key member of the Live on Purpose team Dr. Paul calls "one of the true heroes" in his life',
        'The gas light analogy: your emotions are your body\'s dashboard warning lights — ignoring them doesn\'t make them disappear, it increases the risk of breaking down',
        'Every emotion has a purpose and a message — sadness may mean "let yourself cry," anger may mean "a boundary is being crossed"',
        'How to stop being a victim of your emotions and start being an agent of them — using the creation process as your roadmap',
        'Live Q&A with VIP members and extended discussion on applying the creation process to your real life right now',
      ],
      videoUrl: 'https://player.vimeo.com/video/1174490883',
    },
  },
  {
    day: 3,
    active: true,
    mainSession: {
      label: 'Main Training',
      title: 'Two Determinant Paradigms: Victim or Agent',
      description: 'How you see the world determines everything about how you experience it. On Day 3, Dr. Paul takes a deep dive into the two paradigms that shape every emotional response — and shows you the science behind why your brain fights so hard to keep you seeing things the way you always have. This session gives you the tools to catch yourself in victim mode and make the shift to agent — where your hands are back on the wheel.',
      bullets: [
        'The George Stratton experiment (1896): wearing upside-down glasses for 8 days revealed that your brain has two main jobs — keep you safe and prove you right',
        'Victim vs. Agent as paradigms (ways of seeing), not labels — one leads predictably to captivity and stuckness, the other to freedom and forward movement',
        'Victim mode in action: blame, "why me?", scarcity, and "I can\'t" — and why pointing the finger means your hands aren\'t on the wheel',
        'Agent mode in action: response-ability, "why not me?", abundance, and "how can I?" — illustrated through Dr. Paul\'s own spasmodic dysphonia diagnosis',
        'Dr. Susan Jeffers\' insight from Feel the Fear and Do It Anyway: under every fear is the same core belief — "I can\'t handle it" — and what happens when you decide that you can',
        'Challenge Task: Upside Down — for 24 hours, intentionally disrupt one routine to build awareness, flexibility, and proof that you can choose differently',
      ],
      videoUrl: 'https://player.vimeo.com/video/1174865348',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 3 VIP — From Victim to Agent with Special Guest Janelle Brown',
      description: 'In this VIP session, Dr. Paul is joined by certified master coach and positivity practitioner Janelle Brown for a candid conversation about what it actually takes to make the shift from victim to agent — even when you\'re in a deep spiral.',
      bullets: [
        'Special guest: Janelle Brown — certified master coach positivity practitioner, known to many through reality television, now actively helping others design a whole new chapter of their lives',
        'Viktor Frankl\'s last human freedom: the ability to choose your attitude in any set of circumstances — and why most of us never realize that\'s a choice',
        'The 5-part process for getting these principles in you: encounter, recognize, embrace, live, and share',
        'What to do when you\'ve spiraled so deep you can\'t see the choice — and how awareness, community, and coaching can pull you back',
        'Live Q&A with Dr. Paul — real-time coaching and candid conversation for VIP members',
      ],
      videoUrl: 'https://player.vimeo.com/video/1174864678',
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
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 4 VIP — Q&A, Surprise Guests & Extended Discussion',
      description: "Challenge Task: Free Three — Make a meaningful difference for three people — one in your family, one in your work or community, and one you don't even know. Emotional freedom deepens when contribution expands.",
      videoUrl: '',
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
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 5 VIP — Q&A, Surprise Guests & Extended Discussion',
      description: 'Challenge Task: The Next Right Thing — Commit to the next right thing — however small or bold that may be. Choose the next physical step toward that promise you made to yourself or others. This is not a place you come to — it is a place you go from! You are not alone. Notice your abundant sources of support. You complete this challenge equipped to move forward with clarity and power.',
      videoUrl: '',
    },
  },
];

type VideoTab = 'main' | 'vip';

function ReplayPageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const firstActiveDay = videoData.find(v => v.active)?.day ?? 1;

  const paramDay = Number(searchParams.get('day'));
  const paramTab = searchParams.get('tab') as VideoTab | null;
  const initialDay = (paramDay >= 1 && paramDay <= 5) ? paramDay : firstActiveDay;
  const initialTab: VideoTab = paramTab === 'vip' ? 'vip' : 'main';

  const [selectedDay, setSelectedDay] = useState<number>(initialDay);
  const [activeTab, setActiveTab] = useState<VideoTab>(initialTab);

  // Keep URL in sync whenever selection changes
  useEffect(() => {
    const params = new URLSearchParams();
    params.set('day', String(selectedDay));
    params.set('tab', activeTab);
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [selectedDay, activeTab, router]);

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
                    </button>
                    <button
                      onClick={() => setActiveTab('vip')}
                      className={`v2-tab-btn v2-tab-btn-vip${activeTab === 'vip' ? ' v2-tab-btn-active' : ''}`}
                    >
                      {currentDay.vipSession.label}
                    </button>
                  </div>

                  {currentSession.videoUrl ? (
                    <div className="v2-video-wrapper">
                      <iframe
                        key={`${selectedDay}-${activeTab}`}
                        src={`${currentSession.videoUrl}?badge=0&byline=0&portrait=0&title=0`}
                        title={currentSession.title}
                        allow="autoplay; fullscreen; picture-in-picture"
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

                  <div style={{ padding: '28px 0 36px' }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--v2-primary)', marginBottom: '6px' }}>
                      {currentSession.label}
                    </p>
                    <h2 className="v2-h3" style={{ marginBottom: '14px' }}>
                      Day {currentDay.day}: {currentSession.title}
                    </h2>
                    <p className="v2-body" style={{ color: 'var(--v2-muted)', marginBottom: '22px', lineHeight: 1.75 }}>
                      {currentSession.description}
                    </p>
                    {'bullets' in currentSession && Array.isArray((currentSession as {bullets?: string[]}).bullets) && (currentSession as {bullets?: string[]}).bullets!.length > 0 && (
                      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {(currentSession as {bullets?: string[]}).bullets!.map((bullet, i) => (
                          <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '15px', lineHeight: 1.65, color: 'var(--v2-muted)' }}>
                            <span style={{ color: 'var(--v2-primary)', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>→</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
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
                        <strong>March {CHALLENGE.startDayOffset + currentDay.day}, 2026</strong>.
                      </p>
                      <p style={{ fontSize: '14px', color: 'var(--v2-muted)' }}>
                        Check back after {CHALLENGE.sessionTime} on that day.
                      </p>
                    </div>
                  </div>
                  <div style={{ padding: '28px 0 36px' }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--v2-muted)', marginBottom: '6px', opacity: 0.6 }}>
                      Main Training
                    </p>
                    <h2 className="v2-h3" style={{ marginBottom: '14px' }}>
                      Day {currentDay.day}: {currentDay.mainSession.title}
                    </h2>
                    <p className="v2-body" style={{ color: 'var(--v2-muted)', lineHeight: 1.75 }}>
                      {currentDay.mainSession.description}
                    </p>
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
            href="https://calendly.com/liveonpurpose-team/free"
            target="_blank"
            rel="noopener noreferrer"
            className="v2-btn v2-btn-primary"
            style={{ display: 'inline-block', marginBottom: '16px' }}
          >
            Schedule Your Breakthrough Call
          </a>
          <p className="v2-body v2-text-center" style={{ fontSize: '13px', opacity: 0.7, marginBottom: 0 }}>
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
