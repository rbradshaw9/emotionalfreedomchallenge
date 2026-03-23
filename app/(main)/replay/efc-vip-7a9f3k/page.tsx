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
    active: true,
    mainSession: {
      label: 'Main Training',
      title: 'The Influence Quadrant: Expand Your Impact',
      description: "So much emotional turmoil comes from trying to control what isn't ours to control — to the neglect of what we CAN control. On Day 4, Dr. Paul introduces the Seven Key Relationships and the Influence Quadrant — a model that maps exactly where your focus lands in every interaction and reveals the predictable emotional pitfalls that follow. You'll see how shifting your focus from yourself to the people around you is the move that dissolves anxiety, builds real connection, and creates the kind of influence that actually changes lives.",
      bullets: [
        'The Seven Key Relationships — Creator, Self, Spouse, Children, Extended Family, Other People, and Things — the context in which the Influence Quadrant plays out, and why their order is not arbitrary',
        'The foundational premise: we do not control the other humans — our only real chance in every relationship is influence, and the Influence Quadrant shows you exactly how it works',
        'Red (self-conscious) and Orange (insecure): why focusing on "how I feel about me" or "how you feel about me" creates anxiety and fragility — even when the feedback is positive',
        'Purple (critical): the well-intentioned trap — how focusing on "how I feel about you" shows up as judgment and criticism, even for caring parents and well-meaning leaders',
        'Green — the Influence Quadrant: when focus shifts to "how you feel about you," anxiety drops, people are drawn to you, and the kind of influence that actually changes lives becomes available',
        'Challenge Task: Free Three — make a meaningful difference for three people today: one in your family, one in your work or community, and one you\'ve never even met',
      ],
      videoUrl: 'https://player.vimeo.com/video/1175253163',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 4 VIP — The Influence Quadrant in Real Life with Special Guest Heather Kennedy',
      description: "After the main session, Dr. Paul is joined by professional speaker, leadership expert, and author Heather Kennedy for an extended conversation that puts the Influence Quadrant under a very practical lens — from the science of frustration and control to the surprising truth about confidence.",
      bullets: [
        'Special guest: Heather Kennedy — professional speaker, leadership expert, and author of For Starters (six principles of productivity for elevated leaders), and fellow member of the National Speakers Association',
        '"The last time you were frustrated, it was a control issue" — Heather\'s sharp take on why we keep reaching for control even when we know we can\'t have it',
        'Why confidence is overrated — how it waxes and wanes with circumstance and performance, and why the green quadrant offers a far more stable foundation than confidence ever could',
        'The Outward Mindset (Arbinger Institute) — the book Heather recommends for anyone serious about keeping focus outward and serving from genuine strength',
        'Why serving others actually energizes you — the reason the green quadrant produces what Heather calls a "speaker\'s high," and how to access that energy in everyday interactions',
        'Live Q&A with Dr. Paul and Heather — real-time coaching and extended discussion on applying the Influence Quadrant to leadership, parenting, and business',
      ],
      videoUrl: 'https://player.vimeo.com/video/1175252724',
    },
  },
  {
    day: 5,
    active: true,
    mainSession: {
      label: 'Main Training',
      title: 'Commitment and Courage: Move Forward with Intention',
      description: "Day 5 brings everything together. Breakthrough learning gets the lights on — but transformational learning is what changes who you are. Using a Rubik's Cube as a live metaphor, Dr. Paul shows you the four rules that govern mastery in any domain — including emotional freedom — and introduces the 4 C's framework that explains exactly how confidence works (hint: it's a side effect, not a starting point).",
      bullets: [
        'Breakthrough learning vs. transformational learning — why aha moments energize but don\'t last, and what the Zig Ziglar story about "showers" teaches us about daily mental hygiene',
        'The Rubik\'s Cube live demo: four rules for solving any puzzle — Be Willing to Mess It Up, Learn Your Moves, Practice Your Moves, and Help Your Neighbor',
        'The Gan Cube as metaphor — whatever feels impossibly complex in your life has moves you can learn, and someone who already knows them can teach you',
        'Lindi (Dr. Paul\'s daughter and master coach) joins live: how teaching her mom the cube accelerated her own mastery — "I can\'t unlearn it now"',
        'The 4 C\'s from Dan Sullivan — Commitment, Courage, Capability, and Confidence — and why confidence is a strategic side effect that arrives after competence, not before',
        'Challenge Task: The Next Right Thing — identify and commit to the single next physical step toward the promise you made to yourself this week',
      ],
      videoUrl: 'https://player.vimeo.com/video/1175577265',
    },
    vipSession: {
      label: 'VIP Session',
      title: 'Day 5 VIP — Living What You Know with Special Guest Rose Shabanski',
      description: "In the final VIP session, Dr. Paul is joined by certified positivity practitioner and master coach Rose Shabanski — whose personal story is one of the most powerful demonstrations of these principles in real life.",
      bullets: [
        'Special guest: Rose Shabanski — certified positivity practitioner, master coach, and one of the people Dr. Paul says "makes my life better" — who personally invited many of today\'s VIP participants',
        'Rose\'s raw origin story: years of therapy that never stuck, an autoimmune disease and terminal diagnosis from years of emotional suppression, and what finally changed — "I wanted to learn how to think instead of just being told my thinking was wrong"',
        '"Retired every single one of her diagnoses" in the last five years — including no longer struggling with anxiety and depression — by mastering the principles taught this week',
        'Staying grounded through her daughter\'s stage-four cancer diagnosis: "Gratitude has become default, even through a death sentence" — and why people thought she was crazy',
        '"The real flex is owning your stuff" — Rose\'s invitation to stop letting social stigma hold you back from getting the support that actually works',
        'Live Q&A with Dr. Paul, Rose, and VIP members including Yolande Lambright — plus Rose\'s announcement of text-based coaching for real-time support outside of scheduled sessions',
      ],
      videoUrl: 'https://player.vimeo.com/video/1175576750',
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

      {selectedDay >= 4 && (
        <section className="v2-section v2-section-muted" style={{ marginTop: '40px' }}>
          <div className="v2-container--md">
            <div style={{
              background: '#fff',
              border: '1px solid var(--v2-border-light)',
              borderRadius: '16px',
              padding: '40px 48px',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '40px',
              alignItems: 'center',
            }}>
              <div>
                <div className="v2-badge" style={{ marginBottom: '14px' }}>Next Step</div>
                <h2 className="v2-h3" style={{ marginBottom: '10px' }}>
                  Become a Certified Positivity Practitioner
                </h2>
                <p className="v2-body" style={{ color: 'var(--v2-muted)', marginBottom: '20px', lineHeight: 1.75 }}>
                  This week gave you the framework. The CPP program gives you the mastery — plus the certification, the community, and everything you need to use these principles in your own coaching, leadership, or personal practice.
                </p>
                <ul style={{ margin: '0 0 28px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    '2-Day Live Breakthrough Event — April 16–17, 2026',
                    'Full year of training, masterminds & resources',
                    'Official CPP certification & licensing',
                    '30-day money-back guarantee',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '15px', color: 'var(--v2-muted)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--v2-success, #34c759)', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                  <a
                    href="https://theemotionalfreedomchallenge.com/special"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="v2-btn v2-btn-primary"
                    style={{ display: 'inline-block' }}
                  >
                    Learn More &amp; Enroll
                  </a>
                  <span style={{ fontSize: '14px', color: 'var(--v2-muted)' }}>
                    $2,997 — or 3 payments of $999
                  </span>
                </div>
              </div>
              <div style={{
                textAlign: 'center',
                background: 'linear-gradient(135deg, var(--v2-primary) 0%, #005bb5 100%)',
                borderRadius: '12px',
                padding: '28px 24px',
                color: '#fff',
                minWidth: '160px',
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.8, marginBottom: '8px' }}>Enroll today</div>
                <div style={{ fontSize: '36px', fontWeight: 800, lineHeight: 1, marginBottom: '4px' }}>$2,997</div>
                <div style={{ fontSize: '13px', opacity: 0.8, marginBottom: '16px' }}>or 3 × $999</div>
                <a
                  href="https://theemotionalfreedomchallenge.com/special"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    background: '#fff',
                    color: 'var(--v2-primary)',
                    fontWeight: 700,
                    fontSize: '14px',
                    borderRadius: '8px',
                    padding: '10px 16px',
                    textDecoration: 'none',
                  }}
                >
                  Enroll Now →
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

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
