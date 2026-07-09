import { useState, type FormEvent } from 'react'
import { Calendar, Mail, Phone } from 'lucide-react'
import { contactInfo } from '../data/site'
import { PageHero, usePageTitle } from '../components/PageHero'

export default function ContactPage() {
  usePageTitle(
    'Book a Demo — AI Phone & Chat Agents for Canadian Businesses | LimitlessAI',
    'Book a demo call with LimitlessAI. Tell us about your call and chat volume and we will show you how AI phone agents, chat agents, and visibility analytics work for your Canadian business — no obligation.',
  )
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Book a Demo"
        title="Book your LimitlessAI demo call"
        description="Tell us a bit about your business and call/chat volume. A member of our team will follow up to schedule a live walkthrough tailored to your industry — no pressure, no obligation."
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
                    Book my demo call
                  </button>
                </>
              )}
            </form>

            <div className="contact-aside">
              <div className="info-card">
                <div className="icon">
                  <Calendar size={18} />
                </div>
                <h3>What to expect</h3>
                <p>
                  A LimitlessAI team member follows up within 1 business day to schedule a live
                  walkthrough tailored to your industry and call/chat volume — no pressure, no
                  obligation.
                </p>
              </div>
              <div className="info-card">
                <div className="icon">
                  <Phone size={18} />
                </div>
                <h3>Prefer to call?</h3>
                <p>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </p>
              </div>
              <div className="info-card">
                <div className="icon">
                  <Mail size={18} />
                </div>
                <h3>Prefer email?</h3>
                <p>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section" style={{ background: '#fafafa', paddingTop: '2rem' }}>
        <div className="content-narrow center">
          <h2 className="section-title">What happens after you book</h2>
          <p className="section-sub">
            Every demo is tailored to your business — here's what to expect once you submit the
            form above.
          </p>
          <div className="steps-grid" style={{ textAlign: 'left' }}>
            {[
              {
                title: 'We review your business',
                desc: 'We look at your industry, call/chat volume, and current setup so the call is relevant from minute one.',
              },
              {
                title: 'We schedule a live walkthrough',
                desc: 'Pick a time that works — we\'ll show AI phone agents, chat agents, or visibility analytics based on what you selected.',
              },
              {
                title: 'You see it on your own scenario',
                desc: 'We walk through real call and chat flows for your business so you can judge fit before committing to anything.',
              },
            ].map((s, i) => (
              <div className="step-card" key={s.title}>
                <div className={`step-num ${['amber', 'pink', 'purple'][i]}`}>{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
