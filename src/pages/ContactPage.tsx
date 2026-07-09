import { useState, type FormEvent } from 'react'
import { Calendar, Mail, Phone } from 'lucide-react'
import { contactInfo } from '../data/site'
import { PageHero, usePageTitle } from '../components/PageHero'

export default function ContactPage() {
  usePageTitle('Contact LimitlessAI | Book a Demo')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something limitless"
        description="Pick a time that works for you. We'll show you exactly how AI can transform your customer calls and visibility."
        actions={<div />}
      />
      <section className="content-section" style={{ paddingTop: 0 }}>
        <div className="content-narrow">
          <div className="contact-grid">
            <form className="contact-form" onSubmit={onSubmit}>
              {submitted ? (
                <div style={{ padding: '2rem 0', textAlign: 'center' }}>
                  <h3 style={{ fontSize: 24, marginBottom: 8 }}>Thanks — you're on the list.</h3>
                  <p style={{ color: '#6b7280' }}>
                    Our team will reach out shortly to schedule your demo.
                  </p>
                </div>
              ) : (
                <>
                  <label>
                    Full name
                    <input name="name" required placeholder="Jane Smith" />
                  </label>
                  <label>
                    Work email
                    <input name="email" type="email" required placeholder="jane@company.com" />
                  </label>
                  <label>
                    Phone
                    <input name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </label>
                  <label>
                    What are you interested in?
                    <select name="interest" defaultValue="phone">
                      <option value="phone">AI Phone Agents</option>
                      <option value="chat">AI Chat Agents</option>
                      <option value="visibility">AI Visibility</option>
                      <option value="all">Full platform</option>
                    </select>
                  </label>
                  <label>
                    Message
                    <textarea name="message" rows={4} placeholder="Tell us about your business…" />
                  </label>
                  <button className="btn btn-primary btn-lg" type="submit">
                    Book a demo
                  </button>
                </>
              )}
            </form>

            <div className="contact-aside">
              <div className="info-card">
                <div className="icon">
                  <Calendar size={18} />
                </div>
                <h3>Book a walkthrough</h3>
                <p>
                  Experience LimitlessAI firsthand — we'll tailor the demo to your industry and
                  call volume.
                </p>
              </div>
              <div className="info-card">
                <div className="icon">
                  <Phone size={18} />
                </div>
                <h3>Call us</h3>
                <p>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </p>
              </div>
              <div className="info-card">
                <div className="icon">
                  <Mail size={18} />
                </div>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
