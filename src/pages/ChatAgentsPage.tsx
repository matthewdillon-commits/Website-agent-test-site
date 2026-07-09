import { MessageSquare, Clock, UserPlus, Sparkles, Bot, Shield } from 'lucide-react'
import { Faq, FeatureCards, PageHero, usePageTitle } from '../components/PageHero'

const features = [
  {
    title: '24/7 instant chat support',
    description:
      'Your AI chat agent is always online — evenings, weekends, and holidays. Visitors get instant, helpful responses the moment they land on your site.',
    icon: <Clock size={18} />,
  },
  {
    title: 'Answer FAQs in under 1 second',
    description:
      'Pricing, services, hours, policies — your agent handles the most common questions instantly.',
    icon: <MessageSquare size={18} />,
  },
  {
    title: 'Capture and qualify every lead',
    description:
      'Collect name, email, phone number, and service need automatically. Every visitor interaction becomes a qualified lead.',
    icon: <UserPlus size={18} />,
  },
  {
    title: 'Brand-aware conversations',
    description:
      'Train the agent on your offerings, tone, and policies so every reply feels like your team wrote it.',
    icon: <Bot size={18} />,
  },
  {
    title: 'Smart escalation',
    description:
      'Hand off complex conversations to humans with full transcript context and lead scoring.',
    icon: <Sparkles size={18} />,
  },
  {
    title: 'Secure by default',
    description:
      'Enterprise-ready controls for data handling, conversation logs, and CRM syncing.',
    icon: <Shield size={18} />,
  },
]

const faqs = [
  {
    q: 'Can the chat agent book appointments?',
    a: 'Yes. It can collect availability preferences, propose times, and sync bookings to your calendar tools.',
  },
  {
    q: 'Does it work after hours?',
    a: 'Absolutely. The agent stays online 24/7 and turns after-hours traffic into qualified opportunities.',
  },
  {
    q: 'Will it match our brand voice?',
    a: 'You can train the agent on your FAQs, services, and tone guidelines so replies stay on-brand.',
  },
]

export default function ChatAgentsPage() {
  usePageTitle('AI Chat Agents | LimitlessAI')

  return (
    <>
      <PageHero
        eyebrow="AI Chat Agents"
        title="Intelligent chat support across every channel"
        description="Engage website visitors immediately, answer questions, collect contact details, and turn after-hours traffic into qualified opportunities."
      />
      <section className="content-section">
        <div className="content-narrow">
          <div className="center">
            <h2 className="section-title">Turn every visit into a conversation</h2>
            <p className="section-sub">
              Stop losing website leads to contact forms. Meet visitors the moment they arrive.
            </p>
          </div>
          <FeatureCards items={features} />
        </div>
      </section>
      <section className="content-section" style={{ background: '#fafafa' }}>
        <div className="content-narrow center">
          <h2 className="section-title">Frequently asked questions</h2>
          <Faq items={faqs} />
        </div>
      </section>
    </>
  )
}
