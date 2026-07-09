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
              Start for free
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

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title
  }, [title])
}
