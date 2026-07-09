import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, Phone, MessageSquare, Eye, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { contactInfo, industries, products, resources } from '../data/site'

const productIcons = [Phone, MessageSquare, Eye]

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const productRef = useRef<HTMLDivElement>(null)
  const industriesRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)
  const timers = useRef<Record<string, number>>({})

  useEffect(() => {
    setMobileOpen(false)
    setProductOpen(false)
    setIndustriesOpen(false)
    setResourcesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node
      if (productRef.current && !productRef.current.contains(t)) setProductOpen(false)
      if (industriesRef.current && !industriesRef.current.contains(t)) setIndustriesOpen(false)
      if (resourcesRef.current && !resourcesRef.current.contains(t)) setResourcesOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  const open = (key: 'product' | 'industries' | 'resources') => {
    window.clearTimeout(timers.current[key])
    if (key === 'product') setProductOpen(true)
    if (key === 'industries') setIndustriesOpen(true)
    if (key === 'resources') setResourcesOpen(true)
  }

  const close = (key: 'product' | 'industries' | 'resources') => {
    timers.current[key] = window.setTimeout(() => {
      if (key === 'product') setProductOpen(false)
      if (key === 'industries') setIndustriesOpen(false)
      if (key === 'resources') setResourcesOpen(false)
    }, 150)
  }

  return (
    <>
      <nav className="nav-wrap" aria-label="Main navigation">
        <div className="nav-bar">
          <Link to="/" className="nav-logo" aria-label="LimitlessAI Home">
            <img src="/assets/logo.webp" alt="LimitlessAI" />
            <span>LimitlessAI</span>
          </Link>

          <div className="nav-links">
            <div
              className="nav-dropdown"
              ref={productRef}
              onMouseEnter={() => open('product')}
              onMouseLeave={() => close('product')}
            >
              <button
                type="button"
                aria-expanded={productOpen}
                onClick={() => setProductOpen((v) => !v)}
              >
                Product <ChevronDown size={14} style={{ opacity: 0.6 }} />
              </button>
              <AnimatePresence>
                {productOpen && (
                  <motion.div
                    className="nav-menu"
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                  >
                    {products.map((item, i) => {
                      const Icon = productIcons[i]
                      return (
                        <Link key={item.href} to={item.href} className="nav-menu-item">
                          <div className="nav-menu-icon">
                            <Icon size={16} />
                          </div>
                          <div>
                            <strong>{item.label}</strong>
                            <span>{item.desc}</span>
                          </div>
                        </Link>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="nav-dropdown"
              ref={industriesRef}
              onMouseEnter={() => open('industries')}
              onMouseLeave={() => close('industries')}
            >
              <button
                type="button"
                aria-expanded={industriesOpen}
                onClick={() => setIndustriesOpen((v) => !v)}
              >
                Industries <ChevronDown size={14} style={{ opacity: 0.6 }} />
              </button>
              <AnimatePresence>
                {industriesOpen && (
                  <motion.div
                    className="nav-menu wide"
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                  >
                    {industries.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/industries/${item.slug}`}
                        className="nav-menu-item"
                      >
                        <div className="nav-menu-icon">
                          <Phone size={16} />
                        </div>
                        <div>
                          <strong>{item.name}</strong>
                          <span>{item.navDesc}</span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="nav-dropdown"
              ref={resourcesRef}
              onMouseEnter={() => open('resources')}
              onMouseLeave={() => close('resources')}
            >
              <button
                type="button"
                aria-expanded={resourcesOpen}
                onClick={() => setResourcesOpen((v) => !v)}
              >
                Resources <ChevronDown size={14} style={{ opacity: 0.6 }} />
              </button>
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    className="nav-menu"
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                  >
                    {resources.map((item) => (
                      <Link key={item.href} to={item.href} className="nav-menu-item">
                        <div className="nav-menu-icon">
                          <Eye size={16} />
                        </div>
                        <div>
                          <strong>{item.label}</strong>
                          <span>{item.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link className="nav-link" to="/about">
              About Us
            </Link>
            <Link className="nav-link" to="/partners">
              Partners
            </Link>
          </div>

          <div className="nav-actions">
            <a className="btn btn-secondary" href={contactInfo.app} target="_blank" rel="noreferrer">
              Open app
            </a>
            <Link className="btn btn-primary" to="/contact">
              Book a demo
            </Link>
          </div>

          <button
            className="nav-toggle"
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <Link to="/phone-agents">AI Phone Agents</Link>
        <Link to="/chat-agents">AI Chat Agents</Link>
        <Link to="/always-on-visibility">AI Visibility</Link>
        <Link to="/about">About Us</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/success-stories">Success Stories</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <div className="mobile-cta">
          <a className="btn btn-secondary" href={contactInfo.app} target="_blank" rel="noreferrer">
            Open app
          </a>
          <Link className="btn btn-primary" to="/contact">
            Book a demo
          </Link>
        </div>
      </div>
    </>
  )
}
