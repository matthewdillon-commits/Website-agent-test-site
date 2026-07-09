import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { contactInfo, footerColumns } from '../data/site'

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.63 4.75 6.05V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-4V8.5z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  const columns = footerColumns.filter((c) => c.heading !== 'Legal').slice(0, 5)

  return (
    <div className="closing">
      <div className="closing-glow" />
      <div className="closing-inner">
        <img className="closing-logo" src="/assets/logo.webp" alt="LimitlessAI logo" />
        <h2>
          Time to turn conversations
          <br />
          into your advantage.
        </h2>
        <p>
          Join the teams who never miss a client insight — and never stop getting better.
        </p>
        <div className="closing-ctas">
          <Link className="btn btn-white btn-lg" to="/contact">
            Start for free
          </Link>
          <Link className="btn btn-ghost-light btn-lg" to="/contact">
            Book a demo
          </Link>
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <Link to="/" className="footer-brand">
              LimitlessAI.ca
            </Link>
            <p className="footer-brand-desc">The self-improving conversation platform.</p>
          </div>
          {columns.map((col) => (
            <div className="footer-col" key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {year} LimitlessAI. All rights reserved.</p>
          <div className="socials">
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={contactInfo.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={`mailto:${contactInfo.email}`} aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
