// client/src/components/Contact.jsx
import React, { useEffect, useRef, useState } from 'react' // CHANGED: add useRef for one-time EmailJS init guard
import emailjs from 'emailjs-com'
import '../Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
    company: '' // CHANGED: honeypot field to reduce spam bots
  })

  const [isSending, setIsSending] = useState(false) // CHANGED: prevent double submits + show UI state
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState({ type: 'idle', message: '' }) // CHANGED: user-visible success/error messaging

  const initRef = useRef(false) // CHANGED: React StrictMode runs effects twice in dev

  // CHANGED: prefer env vars (industry standard), but keep safe fallbacks
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'mUITg9eix2eRYCyg3'
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_muy1ltk'
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_f0nuyh6'

  const DIRECT_EMAIL = 'JWMarsh16@gmail.com' // CHANGED: clear fallback path for recruiters

  useEffect(() => {
    if (initRef.current) return // CHANGED: guard against double init in dev
    initRef.current = true // CHANGED

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY) // CHANGED: init once, uses env-first config
    } catch (e) {
      // CHANGED: surface a friendly error if EmailJS fails to initialize
      setStatus({
        type: 'error',
        message: 'Contact form unavailable right now. Please email me directly.'
      })
    }
  }, [EMAILJS_PUBLIC_KEY])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value })) // CHANGED: functional update (safer)
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DIRECT_EMAIL) // CHANGED: recruiter-friendly one-click copy
      setStatus({ type: 'success', message: 'Email copied to clipboard.' })
    } catch {
      setStatus({
        type: 'error',
        message: 'Copy failed. Please select and copy the email manually.'
      })
    }
  }

  const resetForm = () => {
    setFormData({ from_name: '', reply_to: '', message: '', company: '' }) // CHANGED: reset including honeypot
    setSubmitted(false) // CHANGED: allow sending a new message
    setStatus({ type: 'idle', message: '' }) // CHANGED
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isSending) return // CHANGED: hard guard against double clicks

    // CHANGED: honeypot detection (quietly "succeed" for bots)
    if (formData.company && formData.company.trim().length > 0) {
      setSubmitted(true)
      setStatus({ type: 'success', message: 'Thanks! I will respond soon.' })
      return
    }

    setIsSending(true) // CHANGED
    setStatus({ type: 'idle', message: '' }) // CHANGED: clear prior status

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.from_name,
        reply_to: formData.reply_to,
        message: formData.message
      }) // CHANGED: send controlled state instead of querying DOM by id

      setSubmitted(true)
      setStatus({
        type: 'success',
        message: "Thanks for reaching out! I'll get back to you soon."
      }) // CHANGED: consistent success UX
    } catch {
      setStatus({
        type: 'error',
        message:
          'Something went wrong sending your message. Please email me directly.'
      }) // CHANGED: professional error copy + direct fallback
    } finally {
      setIsSending(false) // CHANGED
    }
  }

  return (
    <section id="contact" className="contact" aria-label="Contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact</h2>
          <p className="contact-subtitle">
            Want to chat about AI apps, full-stack work, or a role? Send a note.
            {/* CHANGED: recruiter-first framing */}
          </p>
        </div>

        <div className="contact-grid">
          <aside className="contact-aside" aria-label="Direct contact options">
            <div className="contact-aside-card">
              <div className="contact-aside-title">Email</div>
              <a className="contact-email" href={`mailto:${DIRECT_EMAIL}`}>
                {DIRECT_EMAIL}
              </a>

              <div className="contact-aside-actions">
                <button
                  type="button"
                  className="contact-action contact-action--secondary"
                  onClick={handleCopyEmail}
                >
                  Copy email
                </button>

                <a
                  className="contact-action contact-action--ghost"
                  href={`mailto:${DIRECT_EMAIL}`}
                >
                  Open mail
                </a>
              </div>

              <p className="contact-aside-hint">
                Prefer LinkedIn? Use the icon in the header/footer.
                {/* CHANGED: simple guidance without adding extra UI */}
              </p>
            </div>

            <div
              className={`contact-status contact-status--${status.type}`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </div>
          </aside>

          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success" aria-live="polite">
                <p className="contact-success-title">Message sent</p>
                <p className="contact-success-body">
                  Thanks for reaching out. I’ll reply as soon as I can.
                </p>

                <button
                  type="button"
                  className="contact-action contact-action--primary"
                  onClick={resetForm}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {/* CHANGED: honeypot field (hidden) */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="contact-honeypot"
                  aria-hidden="true"
                />

                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    autoComplete="name" // CHANGED: better UX
                    required
                    maxLength={80} // CHANGED: lightweight validation
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="reply_to"
                    value={formData.reply_to}
                    onChange={handleChange}
                    autoComplete="email" // CHANGED
                    inputMode="email" // CHANGED
                    required
                    maxLength={120} // CHANGED
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10} // CHANGED: reduces empty pings
                    maxLength={2000} // CHANGED: prevents huge payloads
                    spellCheck // CHANGED
                    placeholder="What would you like to build or discuss?"
                  />
                </div>

                <button
                  type="submit"
                  className="contact-action contact-action--primary"
                  disabled={isSending} // CHANGED: disable while sending
                  aria-busy={isSending} // CHANGED: accessibility
                >
                  {isSending ? 'Sending…' : 'Send message'}
                </button>

                <p className="contact-fineprint">
                  I typically respond within 1–2 business days.
                  {/* CHANGED: sets expectation without overpromising */}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
