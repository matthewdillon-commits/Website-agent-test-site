import { Eye, LineChart, FileText, Search, Target, BarChart3 } from 'lucide-react'
import { Faq, FeatureCards, PageHero, usePageTitle } from '../components/PageHero'

const features = [
  {
    title: 'Track how AI models mention your brand',
    description:
      'For every AI response, LimitlessAI analyzes queries asked, sources cited, and brand mentions — for you and every competitor.',
    icon: <Eye size={18} />,
  },
  {
    title: 'Monitor major AI assistants',
    description:
      'Monitor ChatGPT, Claude, Gemini, and Perplexity simultaneously with consistent prompts.',
    icon: <Search size={18} />,
  },
  {
    title: 'Competitive visibility',
    description:
      'Compare your visibility against competitors in real time and spot recommendation gaps.',
    icon: <Target size={18} />,
  },
  {
    title: 'Actionable insights',
    description:
      'Identify content gaps, competitor advantages, and prioritized actions ranked by impact.',
    icon: <LineChart size={18} />,
  },
  {
    title: 'Content optimization',
    description:
      'Create AI-optimized content briefs backed by real citation data from your monitoring.',
    icon: <FileText size={18} />,
  },
  {
    title: 'Trend reporting',
    description:
      'Track your visibility score over time across topics, models, and markets.',
    icon: <BarChart3 size={18} />,
  },
]

const faqs = [
  {
    q: 'Which AI models do you monitor?',
    a: 'We monitor ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), and Perplexity — the four most widely used AI assistants.',
  },
  {
    q: 'How does AI visibility monitoring work?',
    a: 'We generate industry-specific prompts that mirror how your potential customers ask AI for recommendations, then analyze every response for brand mentions, sentiment, and citations.',
  },
  {
    q: 'How is this different from traditional SEO?',
    a: 'Traditional SEO tools track search engine rankings. LimitlessAI tracks how AI chatbots recommend and discuss your brand — a different discovery channel.',
  },
  {
    q: 'How long until I see results?',
    a: 'You\'ll see your first visibility report within minutes of setup. Improvements from content optimization typically show in AI responses within 2–4 weeks.',
  },
]

export default function VisibilityPage() {
  usePageTitle('Always-On Visibility | LimitlessAI')

  return (
    <>
      <PageHero
        eyebrow="Always-On Visibility"
        title="AI visibility monitoring & insights"
        description="Track how customers discover your business across Google, AI search, and customer conversations so your team knows what is working."
      />
      <section className="content-section">
        <div className="content-narrow">
          <div className="center">
            <h2 className="section-title">Stay visible where buyers ask AI</h2>
            <p className="section-sub">
              SEO is not dead — but it is not enough anymore. Make sure AI assistants recommend you.
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
