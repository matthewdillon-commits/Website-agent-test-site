import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {
  blogPosts,
  caseStudies,
  features,
  integrations,
  stats,
  steps,
} from '../data/site'

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let frame = 0
    const total = 40
    const tick = () => {
      frame += 1
      setValue(Math.round((target * frame) / total))
      if (frame < total) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, active])
  return value
}

function Stat({
  value,
  label,
  prefix = '',
  suffix = '',
}: {
  value: number
  label: string
  prefix?: string
  suffix?: string
}) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.4 },
    )
    const el = document.getElementById(`stat-${label}`)
    if (el) io.observe(el)
    return () => io.disconnect()
  }, [label])
  const n = useCountUp(value, visible)
  return (
    <div id={`stat-${label}`}>
      <div className="stat-value">
        {prefix}
        {n.toLocaleString()}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

function DashboardPreview() {
  return (
    <div className="hero-dashboard animate-fade-up-d5">
      <div className="dashboard-shell">
        <div className="dashboard-card">
          <div className="dashboard-top">
            <div className="dashboard-brand">
              <img src="/assets/logo.webp" alt="" />
              <strong>LimitlessAI</strong>
            </div>
            <div className="online-pill">
              <span className="online-dot" />
              AI Agent · Online
            </div>
          </div>
          <div className="dashboard-grid">
            <div className="dash-panel">
              <h4>Live conversation</h4>
              <div className="chat-row">
                <div className="avatar" />
                <div>
                  <div className="chat-bubble">
                    Hi, I'd like to schedule a demo of your enterprise plan
                  </div>
                  <div className="chat-meta">Sarah Mitchell · just now</div>
                </div>
              </div>
              <div className="chat-row">
                <img src="/assets/logo.webp" alt="" className="avatar" />
                <div>
                  <div className="chat-bubble agent">
                    I'd be happy to help! I see you're on our Growth plan. Let me find the best
                    time for a demo with our enterprise team.
                  </div>
                  <div className="chat-meta">AI Agent · Live</div>
                </div>
              </div>
              <div className="summary-box">
                <strong style={{ color: '#5b21b6', display: 'block', marginBottom: 6 }}>
                  Conversation summary
                </strong>
                Interested in enterprise plan for 10+ users. Needs integrations with Salesforce
                and Slack. Requested pricing and implementation timeline.
                <div style={{ marginTop: 8, fontWeight: 600, color: '#161617' }}>
                  Next step: Schedule demo
                </div>
              </div>
            </div>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div className="dash-panel">
                <h4>Lead score</h4>
                <div className="score-ring">
                  <div className="score-circle">
                    <span>92</span>
                  </div>
                  <div>
                    <div className="mini-stat">
                      Intent
                      <strong>Enterprise · High</strong>
                    </div>
                    <div className="mini-stat" style={{ marginTop: 10 }}>
                      Contact updated in Salesforce
                      <strong style={{ color: '#059669', fontSize: 12 }}>+ synced</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dash-panel">
                <h4>Today</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                  <div className="mini-stat">
                    Calls
                    <strong>47</strong>
                  </div>
                  <div className="mini-stat">
                    Booked
                    <strong style={{ color: '#059669' }}>18</strong>
                  </div>
                  <div className="mini-stat">
                    Qualified
                    <strong style={{ color: '#0369a1' }}>31</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  useEffect(() => {
    document.title = 'AI Phone & Chat Agents for Canadian Businesses | LimitlessAI'
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <svg className="hero-waves" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
            {Array.from({ length: 9 }).map((_, i) => (
              <path
                key={i}
                d={`M -50 ${60 + i * 70} C 300 ${10 + i * 70}, 740 ${150 + i * 70}, 1500 ${40 + i * 70}`}
                fill="none"
                stroke="rgba(0,0,0,0.045)"
                strokeWidth="1.2"
              />
            ))}
          </svg>
        </div>
        <div className="hero-fade" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hero-eyebrow animate-fade-up">
              Trusted by teams that never miss a conversation
            </p>
            <h1 className="hero-title animate-fade-up-d2">
              The self-improving conversation platform.
            </h1>
            <p className="hero-sub animate-fade-up-d3">
              AI that analyzes customer interactions and makes every future conversation better.
            </p>
            <div className="hero-ctas animate-fade-up-d3">
              <Link className="btn btn-primary btn-lg" to="/contact">
                Start for free <ArrowRight size={16} />
              </Link>
              <Link className="btn btn-secondary btn-lg" to="/contact">
                Book a demo
              </Link>
            </div>
          </div>
        </div>
        <DashboardPreview />
      </section>

      <section className="integrations">
        <p className="integrations-label">Integrates with 3000+ Platforms</p>
        <div className="marquee-fade">
          <div className="marquee-track">
            {[...integrations, ...integrations].map((item, i) => (
              <span
                key={`${item.name}-${i}`}
                className="marquee-item"
                style={{
                  fontFamily: item.font,
                  fontWeight: item.weight,
                  textTransform: item.transform,
                }}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="section features">
        <div className="section-narrow">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-block ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div>
                <span className={`tag ${feature.tagClass}`}>{feature.tag}</span>
                <h2 className="feature-headline">{feature.headline}</h2>
                <ul className="feature-bullets">
                  {feature.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <Link className="btn btn-primary" to={feature.href}>
                  {feature.cta}
                </Link>
              </div>
              <div
                className="feature-visual"
                style={{ backgroundImage: `url(${feature.gradient})` }}
              >
                <div className="mock-card">
                  <h5>{feature.tag}</h5>
                  {feature.bullets.slice(0, 3).map((b) => (
                    <div className="mock-line" key={b}>
                      <span>{b.split(' ').slice(0, 4).join(' ')}…</span>
                      <span className="mock-badge">Live</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="case-studies" className="section case-studies">
        <div className="section-narrow">
          <div className="center">
            <span className="section-label">Success Stories</span>
            <h2 className="section-title" style={{ marginTop: '1.25rem' }}>
              Real results from real clients
            </h2>
            <p className="section-sub">
              See how businesses across industries are transforming their operations with
              LimitlessAI.
            </p>
          </div>
          <div className="case-grid">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                to="/success-stories"
                className={`case-card ${study.tall ? 'tall' : ''}`}
              >
                <img src={study.image} alt={study.company} />
                <span className="company">{study.company}</span>
                <div className="stat">{study.stat}</div>
                <p className="desc">{study.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-narrow">
          <div className="center">
            <span className="section-label">Getting started</span>
            <h2 className="section-title" style={{ marginTop: '1.25rem' }}>
              Start improving in minutes
            </h2>
            <p className="section-sub">
              Be ready in minutes — LimitlessAI handles the setup so you can focus on results.
            </p>
          </div>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <div className="step-card" key={step.num}>
                <div className={`step-num ${['amber', 'pink', 'purple'][i]}`}>{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-narrow">
          <div className="stats-grid">
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="section" style={{ background: '#fafafa' }}>
        <div className="section-narrow">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <h2 className="section-title">News and insights</h2>
            <Link className="btn btn-secondary" to="/blog">
              Read LimitlessAI blog <ArrowRight size={16} />
            </Link>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link key={post.slug} to="/blog" className="blog-card">
                <div className="thumb" style={{ background: post.gradient }}>
                  <span className="tag-chip">{post.tag}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
