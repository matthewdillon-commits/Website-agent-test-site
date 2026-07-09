import { Link, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { blogPosts, caseStudies, industries } from '../data/site'
import { PageHero, usePageTitle } from '../components/PageHero'

export function SuccessStoriesPage() {
  usePageTitle('Success Stories | LimitlessAI')
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="Real results from real clients"
        description="See how businesses across industries are transforming their operations with LimitlessAI."
      />
      <section className="content-section" style={{ paddingTop: 0 }}>
        <div className="content-narrow">
          <div className="case-grid">
            {caseStudies.map((study) => (
              <div key={study.slug} className={`case-card ${study.tall ? 'tall' : ''}`}>
                <img src={study.image} alt={study.company} />
                <span className="company">{study.company}</span>
                <div className="stat">{study.stat}</div>
                <p className="desc">{study.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function BlogPage() {
  usePageTitle('Blog | LimitlessAI')
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="News and insights"
        description="Guides and perspectives on AI phone agents, chat agents, and visibility for Canadian businesses."
      />
      <section className="content-section" style={{ paddingTop: 0 }}>
        <div className="content-narrow">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="blog-card">
                <div className="thumb" style={{ background: post.gradient }}>
                  <span className="tag-chip">{post.tag}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function PartnersPage() {
  usePageTitle('Partners | LimitlessAI')
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Grow with LimitlessAI"
        description="Partner with us to bring AI phone agents, chat agents, and visibility analytics to your clients."
      />
      <section className="content-section" style={{ paddingTop: 0 }}>
        <div className="content-narrow">
          <div className="card-grid">
            {[
              {
                title: 'Agency partners',
                description: 'Offer AI communication tools alongside your existing services.',
              },
              {
                title: 'Technology partners',
                description: 'Integrate LimitlessAI with CRMs, telephony, and scheduling platforms.',
              },
              {
                title: 'Referral partners',
                description: 'Introduce clients and earn ongoing revenue as they grow with us.',
              },
            ].map((item) => (
              <div className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link className="btn btn-primary btn-lg" to="/contact">
              Become a partner <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export function IndustryPage() {
  const { slug } = useParams()
  const industry = industries.find((i) => i.slug === slug) ?? industries[0]
  usePageTitle(`AI Agents for ${industry.name} | LimitlessAI`)

  return (
    <>
      <PageHero
        eyebrow={industry.name}
        title={industry.tagline}
        description={industry.description}
      />
      <section className="content-section">
        <div className="content-narrow">
          <div className="card-grid">
            {[
              {
                title: industry.navDesc,
                description: `Purpose-built workflows for ${industry.name.toLowerCase()} teams.`,
              },
              {
                title: '24/7 coverage',
                description: 'Capture every evening, weekend, and overnight inquiry automatically.',
              },
              {
                title: 'Human handoff',
                description: 'Route high-intent conversations to the right person with full context.',
              },
            ].map((item) => (
              <div className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function IndustriesIndexPage() {
  usePageTitle('Industries | LimitlessAI')
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="AI agents built for your industry"
        description="From real estate to restaurants, LimitlessAI adapts to the conversations that grow your business."
      />
      <section className="content-section" style={{ paddingTop: 0 }}>
        <div className="content-narrow">
          <div className="simple-list">
            {industries.map((item) => (
              <Link key={item.slug} to={`/industries/${item.slug}`}>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.tagline}</span>
                </div>
                <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function SimpleContentPage({
  title,
  eyebrow,
  description,
  body,
}: {
  title: string
  eyebrow: string
  description: string
  body: string[]
}) {
  usePageTitle(`${title} | LimitlessAI`)
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="content-section" style={{ paddingTop: 0 }}>
        <div className="content-narrow prose">
          {body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
    </>
  )
}

export function LearnPage() {
  return (
    <SimpleContentPage
      eyebrow="Learning Center"
      title="AI receptionist & phone agent guides"
      description="Learn how AI phone agents, chat agents, and visibility analytics help Canadian businesses capture every lead."
      body={[
        'An AI receptionist answers inbound calls, qualifies leads, books appointments, and routes complex conversations to your team — 24/7.',
        'Unlike traditional answering services, LimitlessAI agents learn from every conversation and improve over time.',
        'Explore our guides on after-hours answering, missed call recovery, appointment booking, and lead qualification.',
      ]}
    />
  )
}

export function SolutionsPage() {
  return (
    <SimpleContentPage
      eyebrow="Solutions"
      title="After-hours, booking, and lead qualification"
      description="Practical AI workflows that stop missed calls from becoming missed revenue."
      body={[
        'After-hours answering keeps your business reachable when competitors go to voicemail.',
        'Missed call recovery follows up within seconds so the next provider does not win the lead.',
        'Appointment booking and lead qualification turn conversations into scheduled, revenue-ready opportunities.',
      ]}
    />
  )
}

export function ComparePage() {
  return (
    <SimpleContentPage
      eyebrow="Compare"
      title="LimitlessAI vs the alternatives"
      description="See how LimitlessAI compares with Birdeye, Podium, Intercom, Drift, and traditional answering services."
      body={[
        'LimitlessAI combines AI phone agents, chat agents, and visibility analytics in one self-improving platform.',
        'Instead of bolting chat onto a review tool or helpdesk, you get conversation intelligence across voice and digital channels.',
        'Book a demo to walk through a side-by-side comparison for your industry.',
      ]}
    />
  )
}

export function LocationsPage() {
  const cities = [
    'Toronto',
    'Vancouver',
    'Montreal',
    'Calgary',
    'Edmonton',
    'Ottawa',
    'Mississauga',
    'Winnipeg',
  ]
  usePageTitle('Locations | LimitlessAI')
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Serving businesses across Canada"
        description="LimitlessAI helps teams in major Canadian markets capture every call, chat, and AI search mention."
      />
      <section className="content-section" style={{ paddingTop: 0 }}>
        <div className="content-narrow">
          <div className="card-grid">
            {cities.map((city) => (
              <div className="info-card" key={city}>
                <h3>{city}</h3>
                <p>AI phone & chat agents for local businesses in {city}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function EventsPage() {
  return (
    <SimpleContentPage
      eyebrow="Events & Social"
      title="Updates & LinkedIn posts"
      description="Follow LimitlessAI for product updates, webinars, and stories from Canadian businesses."
      body={[
        'Join us at industry events and webinars covering AI receptionists, missed-call recovery, and AI visibility.',
        'Connect on LinkedIn and Instagram for the latest launches and customer stories.',
      ]}
    />
  )
}

export function LimitlessAiPage() {
  return (
    <SimpleContentPage
      eyebrow="Limitless AI"
      title="The self-improving conversation platform"
      description="LimitlessAI analyzes customer interactions and makes every future conversation better."
      body={[
        'Phone agents, chat agents, and visibility analytics work together so your team never misses a lead.',
        'Every conversation feeds the intelligence engine — improving responses, routing, and conversion over time.',
      ]}
    />
  )
}

export function PrivacyPage() {
  return (
    <SimpleContentPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="How LimitlessAI collects, uses, and protects information."
      body={[
        'We collect information you provide when requesting a demo, contacting sales, or using our products.',
        'We use this information to provide services, improve the platform, and communicate with you.',
        'For privacy questions, contact leads@limitlessai.ca.',
      ]}
    />
  )
}

export function TermsPage() {
  return (
    <SimpleContentPage
      eyebrow="Legal"
      title="Terms of Service"
      description="Terms governing use of the LimitlessAI website and products."
      body={[
        'By accessing limitlessai.ca or using LimitlessAI products, you agree to these terms.',
        'Services are provided for lawful business use. Unauthorized access, scraping, or misuse is prohibited.',
        'Contact leads@limitlessai.ca for questions about these terms.',
      ]}
    />
  )
}

export function NotFoundPage() {
  usePageTitle('Page not found | LimitlessAI')
  return (
    <PageHero
      eyebrow="404"
      title="This page wandered off"
      description="The page you’re looking for doesn’t exist. Head home or book a demo instead."
    />
  )
}
