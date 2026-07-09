import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string
  title: string
  description: string
  actions?: ReactNode
}) {
  return (
    <section className="inner-hero">
      <div className="content-narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {actions ?? (
          <div className="actions">
            <Link className="btn btn-primary btn-lg" to="/contact">
              Book a demo <ArrowRight size={16} />
            </Link>
            <Link className="btn btn-secondary btn-lg" to="/contact">
              Talk to our team
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export function FeatureCards({
  items,
}: {
  items: { title: string; description: string; icon?: ReactNode }[]
}) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <div className="info-card" key={item.title}>
          <div className="icon">{item.icon ?? <Check size={18} />}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details className="faq-item" key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  )
}

const DEFAULT_META_DESCRIPTION =
  '24/7 AI phone agents, chat agents, and visibility analytics so you never miss a lead. Trusted by Canadian businesses to capture calls, qualify leads, and grow.'

function setMetaDescription(content: string) {
  let tag = document.querySelector('meta[name="description"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', 'description')
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

/**
 * Sets a unique document title and meta description per page.
 * Every route should pass its own `description` — without one, pages fall back
 * to the site-wide default, which is how every page previously ended up sharing
 * identical metadata regardless of content.
 */
export function usePageTitle(title: string, description: string = DEFAULT_META_DESCRIPTION) {
  useEffect(() => {
    document.title = title
    setMetaDescription(description)
  }, [title, description])
}
