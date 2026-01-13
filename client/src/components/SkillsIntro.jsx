// Path: client/src/components/SkillsIntro.jsx
import React, { useState } from 'react' // CHANGED: add useState for graceful image fallback
import { Link } from 'react-router-dom'
import Skills from './Skills'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import '../SkillsIntro.css'
import { scrollToSection } from '../utils/scrollToSection'

function SkillsIntro() {
  const signatureHighlights = [
    'SSE streaming chat UX',
    'Pinned memory + context strategy',
    'RAG (Embeddings + FAISS)'
  ]

  const [showHeadshot, setShowHeadshot] = useState(true) // CHANGED: hide headshot if image fails to load

  return (
    <div className="skills-intro-wrapper">
      <div className="hero-container">
        <div className="hero-copy">
          <div className="hero-status" role="status" aria-label="Availability">
            <span className="hero-status-dot" aria-hidden="true" />
            Open to AI + full-stack roles
          </div>

          {/* CHANGED: add a real headshot in the hero for recruiter trust + clarity */}
          <div className="hero-headline-row">
            <div className="hero-title-block">
              <h1 className="hero-name">
                Jonathan <span className="name-highlight">Marshall</span>
              </h1>

              <p className="hero-role">AI-focused Full Stack Developer</p>
            </div>

            {showHeadshot && (
              <div className="hero-headshot-wrap" aria-label="Headshot">
                <img
                  src="/images/main.jpg" // CHANGED: uses existing file in your /public/images (adjust if needed)
                  alt="Jonathan Marshall"
                  className="hero-headshot"
                  onError={() => setShowHeadshot(false)} // CHANGED: prevents broken-image icon in UI
                />
              </div>
            )}
          </div>

          <p className="hero-summary">
            I build production-style web apps with <span className="highlight">React</span>,{' '}
            <span className="highlight">Flask</span>, and{' '}
            <span className="highlight">PostgreSQL</span>—with hands-on experience
            shipping LLM features like <span className="highlight">SSE streaming</span>,{' '}
            <span className="highlight">pinned memory + context strategy</span>, and{' '}
            <span className="highlight">RAG (embeddings + FAISS)</span>.
          </p>

          <div className="hero-ctas">
            <button
              type="button"
              className="hero-cta hero-cta--primary"
              onClick={() => scrollToSection('projects')}
            >
              View projects
            </button>

            <button
              type="button"
              className="hero-cta hero-cta--secondary"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>

            <Link to="/resume" className="hero-cta hero-cta--ghost" aria-label="View resume">
              Resume
            </Link>
          </div>

          <div className="hero-signature" aria-label="Signature strengths">
            <div className="hero-signature-label">Signature strengths</div>
            <div className="hero-signature-chips">
              {signatureHighlights.map((h) => (
                <span key={h} className="chip chip--primary">
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-social" aria-label="Social links">
            <a
              href="https://github.com/Jwmarsh16"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hero-social-link"
            >
              <FaGithub aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/jonathan-marshall-a2a833257/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hero-social-link"
            >
              <FaLinkedin aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              aria-label="Jump to contact section"
              className="hero-social-link hero-social-button"
            >
              <FaEnvelope aria-hidden="true" />
            </button>
          </div>

          <div className="hero-tech" aria-label="Primary technologies">
            <span className="chip chip--primary">React</span>
            <span className="chip chip--primary">Flask</span>
            <span className="chip chip--primary">PostgreSQL</span>
            <span className="chip chip--soft">OpenAI API</span>
            <span className="chip chip--soft">SSE</span>
            <span className="chip chip--soft">RAG</span>
            <span className="chip chip--soft">SQLAlchemy</span>
            <span className="chip chip--soft">Render</span>
          </div>
        </div>

        <div className="hero-proof" aria-label="Proof points">
          <div className="proof-card">
            <div className="proof-title">What I optimize for</div>
            <ul className="proof-list">
              <li>Clean UX with practical, shippable features</li>
              <li>Secure + reliable APIs (validation, rate limits, headers)</li>
              <li>Readable architecture with testing and iteration</li>
            </ul>
          </div>

          <div className="proof-card proof-card--subtle">
            <div className="proof-title">Based in</div>
            <div className="proof-value">Austin, TX</div>
            <div className="proof-muted">Open to remote / hybrid</div>
          </div>
        </div>
      </div>

      <div className="skills-wrapper">
        <Skills />
      </div>
    </div>
  )
}

export default SkillsIntro
