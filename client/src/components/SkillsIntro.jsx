import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import '../SkillsIntro.css'
import { scrollToSection } from '../utils/scrollToSection'

export default function SkillsIntro() {
  const [showHeadshot, setShowHeadshot] = useState(true)

  return (
    <section className="skills-intro-wrapper" aria-labelledby="hero-heading">
      <div className="hero-container">
        <div className="hero-copy">
          <p className="hero-status">
            <span className="hero-status-dot" aria-hidden="true" />
            Open to software development roles
          </p>
          <h1 id="hero-heading" className="hero-name">
            Jonathan <span className="name-highlight">Marshall</span>
          </h1>
          <p className="hero-role">Full-Stack Software Developer</p>
          <p className="hero-summary">
            I build web applications with React, Python, and PostgreSQL, from the
            interface to the API. My work includes a paid client product with
            Stripe payments and an AI chat app with streaming responses and
            persistent conversations.
          </p>
          <p className="hero-location">Austin, TX <span aria-hidden="true">·</span> Open to remote and hybrid roles</p>
          <div className="hero-ctas">
            <button
              type="button"
              className="hero-cta hero-cta--primary"
              onClick={() => scrollToSection('projects', { focus: true })}
            >
              Explore my work <FaArrowRight aria-hidden="true" />
            </button>
            <Link to="/resume" className="hero-cta hero-cta--secondary">
              View resume
            </Link>
            <button
              type="button"
              className="hero-cta hero-cta--ghost"
              onClick={() => scrollToSection('contact', { focus: true })}
            >
              Get in touch
            </button>
          </div>
          <div className="hero-social" aria-label="Professional profiles and email">
            <a href="https://github.com/Jwmarsh16" target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-marshall-a2a833257/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a href="mailto:JWMarsh16@gmail.com">
              <FaEnvelope aria-hidden="true" /> Email
            </a>
          </div>
        </div>
        <aside className="hero-proof" aria-label="Experience at a glance">
          <div className="hero-profile">
            {showHeadshot && (
              <img
                src="/images/jonathan.webp"
                alt="Jonathan Marshall"
                className="hero-headshot"
                width="80"
                height="80"
                decoding="async"
                onError={() => setShowHeadshot(false)}
              />
            )}
            <p>Practical software.<br /><span>Clear communication.</span></p>
          </div>
          <div className="hero-proof-item">
            <p className="hero-proof-label">Paid client work</p>
            <h2>Built and deployed for Ecopop</h2>
            <p>
              Contract Software Developer, Jan–Jun 2026. Delivered a React and
              Flask MVP with PostgreSQL, Stripe Checkout, and verified webhooks.
            </p>
          </div>
          <Link className="hero-experience-link" to="/resume#experience">
            Read about my client work <FaArrowRight aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  )
}
