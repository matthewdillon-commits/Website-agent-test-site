import { Phone, Calendar, Users, Languages, Headphones, Zap, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Faq, FeatureCards, PageHero, usePageTitle } from '../components/PageHero'

const features = [
  {
    title: 'Never miss a call',
    description:
      'Never miss a call again. Your AI agent answers every inbound call instantly — evenings, weekends, and holidays included.',
    icon: <Phone size={18} />,
  },
  {
    title: 'Resolve routine calls automatically',
    description:
      'Hours, services, locations, and pricing handled automatically so your team stays focused on high-value work.',
    icon: <Headphones size={18} />,
  },
  {
    title: 'Smart handoff with context',
    description:
      'When a caller needs a human, the AI transfers them seamlessly — with full context, call summary, and lead score.',
    icon: <Users size={18} />,
  },
  {
    title: 'Qualify leads in real time',
    description:
      'Qualify leads in real time, book demos, and capture revenue-ready opportunities before they go cold.',
    icon: <Zap size={18} />,
  },
  {
    title: 'Appointment booking',
    description:
      'Schedule consultations directly into your calendar system with confirmations and reminders.',
    icon: <Calendar size={18} />,
  },
  {
    title: '70+ languages',
    description:
      'Serve international customers automatically with language detection and natural multilingual conversations.',
    icon: <Languages size={18} />,
  },
]

const faqs = [
  {
    q: 'How does the AI phone agent sound?',
    a: 'Our AI agents use advanced voice synthesis to deliver natural, human-like conversations. Callers often can\'t tell they\'re speaking with AI. You can customize the voice, tone, and speaking style to match your brand.',
  },
  {
    q: 'Can I keep my existing phone number?',
    a: 'Yes. Simply forward your current business line to your AI agent. There\'s no need to change your number or switch providers. Setup takes less than 5 minutes.',
  },
  {
    q: 'What happens when the AI can\'t handle a call?',
    a: 'The AI performs a warm transfer to your human team with full context — including the caller\'s intent, key details, and a real-time summary. If no one is available, it can take a message, schedule a callback, or book an appointment.',
  },
  {
    q: 'How many languages does it support?',
    a: 'Our AI agents support 70+ languages and can detect the caller\'s language automatically.',
  },
  {
    q: 'How quickly can I get started?',
    a: 'Most businesses are up and running within 24 hours. Upload your FAQs and scripts, configure your call flow, and your agent is ready to take calls.',
  },
  {
    q: 'Can the AI book appointments and update my CRM?',
    a: 'Yes. The AI integrates with popular calendars and CRMs to book appointments, log call details, and update records in real time.',
  },
]

export default function PhoneAgentsPage() {
  usePageTitle(
    'AI Phone System for Canadian Businesses — Never Miss a Call | LimitlessAI',
    'Replace your business phone line with an AI phone system built for Canadian businesses: answer every inbound call 24/7, qualify leads, book appointments, and hand off to your team with full context. Book a demo to hear it on your own script.',
  )

  return (
    <>
      <PageHero
        eyebrow="AI Phone System"
        title="The AI phone system that answers every call your business would otherwise miss"
        description="Keep your existing number and let an AI agent pick up every inbound call — evenings, weekends, and busy periods included. It qualifies leads, books appointments, and hands off warm, high-intent callers to your team with full context."
        actions={
          <div className="actions">
            <Link className="btn btn-primary btn-lg" to="/contact">
              Book a phone system demo <ArrowRight size={16} />
            </Link>
            <a className="btn btn-secondary btn-lg" href="#phone-faq">
              See how setup works
            </a>
          </div>
        }
      />
      <section className="content-section">
        <div className="content-narrow">
          <div className="center">
            <h2 className="section-title">Everything your phone line should do for a Canadian business</h2>
            <p className="section-sub">
              Forward your existing business line or get a dedicated number. Works with any
              telephony provider — no hardware required.
            </p>
          </div>
          <FeatureCards items={features} />
        </div>
      </section>
      <section className="content-section" style={{ background: '#fafafa' }}>
        <div className="content-narrow center">
          <h2 className="section-title">Go live on your phone system in three steps</h2>
          <div className="steps-grid" style={{ textAlign: 'left' }}>
            {[
              {
                title: 'Connect your number',
                desc: 'Forward your existing business line or get a new dedicated number.',
              },
              {
                title: 'Train your agent',
                desc: 'Upload your FAQs, scripts, and business context. Your AI learns your brand voice in minutes.',
              },
              {
                title: 'Answer every call',
                desc: 'Go live and let your AI handle calls 24/7. Monitor transcripts and optimize from your dashboard.',
              },
            ].map((s, i) => (
              <div className="step-card" key={s.title}>
                <div className={`step-num ${['amber', 'pink', 'purple'][i]}`}>{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link className="btn btn-primary btn-lg" to="/contact">
              Book a phone system demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section id="phone-faq" className="content-section">
        <div className="content-narrow center">
          <h2 className="section-title">Phone system questions, answered</h2>
          <Faq items={faqs} />
          <div style={{ marginTop: '2.5rem' }}>
            <Link className="btn btn-secondary btn-lg" to="/contact">
              Still have questions? Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
