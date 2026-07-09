import { Link } from 'react-router-dom'
import { caseStudies } from '../data/site'
import { PageHero, usePageTitle } from '../components/PageHero'

const values = [
  {
    title: 'Limitless Ambition',
    description: 'We push the boundaries of what\'s possible with AI every single day.',
  },
  {
    title: 'Bold Thinking',
    description: 'We dream big and build solutions that transform how businesses operate.',
  },
  {
    title: 'Customer-First by Design',
    description: 'Every decision we make centers around delivering real value to our customers.',
  },
  {
    title: 'Enterprise-Grade Delivery',
    description: 'Security, scalability, and reliability are non-negotiable.',
  },
]

export default function AboutPage() {
  usePageTitle('About LimitlessAI — Our Story & Mission')

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The people behind the self-improving conversation platform"
        description="LimitlessAI builds AI-powered customer communication tools for businesses. Our mission is to make every business reachable 24/7."
      />
      <section className="content-section">
        <div className="content-narrow prose">
          <h2>Our mission</h2>
          <p>
            To empower businesses of every size with AI that truly understands, connects, and
            delivers — transforming every customer interaction into an opportunity.
          </p>
          <h2>Based in Ontario, Canada</h2>
          <p>
            We work with Canadian businesses across real estate, home services, healthcare,
            restaurants, and professional services — helping teams capture every lead with phone
            agents, chat agents, and always-on visibility analytics.
          </p>
        </div>
      </section>
      <section className="content-section" style={{ background: '#fafafa' }}>
        <div className="content-narrow">
          <div className="center">
            <h2 className="section-title">The principles that guide us</h2>
            <p className="section-sub">The principles that guide everything we do at LimitlessAI.</p>
          </div>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {values.map((v) => (
              <div className="info-card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="content-narrow">
          <div className="center">
            <h2 className="section-title">Real results from real clients</h2>
            <p className="section-sub">
              See how businesses across industries are transforming their operations with
              LimitlessAI.
            </p>
          </div>
          <div className="case-grid" style={{ marginTop: '3rem' }}>
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
    </>
  )
}
