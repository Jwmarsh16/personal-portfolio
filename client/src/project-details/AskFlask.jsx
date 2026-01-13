// Path: client/src/project-details/AskFlask.jsx
import React, { useMemo, useState } from 'react'
import './FantasyFootballResearchHub.css' // CHANGED: reuse the shared project-detail template styles
import {
  FaArrowLeft,
  FaArrowUp,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'

function AskFlask() {
  const navigate = useNavigate()

  const images = useMemo(
    () => [
      '/images/ask-flask1.png',
      '/images/ask-flask2.png',
      '/images/ask-flask3.png',
      '/images/ask-flask4.png',
      '/images/ask-flask5.png'
    ],
    []
  )

  const liveUrl = 'https://ask-flask.onrender.com/'
  const codeUrl = 'https://github.com/Jwmarsh16/ask-flask'

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [expandedCategory, setExpandedCategory] = useState('Core')
  const [activeTooltip, setActiveTooltip] = useState(null)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category)
    setActiveTooltip(null)
  }

  const toggleTooltip = (id) => {
    setActiveTooltip(activeTooltip === id ? null : id)
  }

  const handleBackToProjects = () => {
    navigate('/')
    window.setTimeout(() => scrollToSection('projects', { focus: true }), 120)
  }

  const techStack = useMemo(
    () => ({
      Core: [
        {
          name: 'React (Vite)',
          description: 'Frontend UI with fast iteration and optimized production builds.'
        },
        {
          name: 'Flask',
          description: 'Backend API + SSE endpoints with production-style error handling.'
        },
        {
          name: 'PostgreSQL (prod) + SQLite (local)',
          description: 'DB-backed Sessions + Messages persistence with local/dev parity.'
        },
        {
          name: 'OpenAI API',
          description: 'Chat completions + embeddings integration via a typed service wrapper.'
        }
      ],
      'Streaming + UX': [
        {
          name: 'SSE streaming',
          description: 'Token streaming UI for fast, responsive chat interactions.'
        },
        {
          name: 'Markdown + PrismJS',
          description: 'Rich assistant output with syntax highlighting and code UX.'
        },
        {
          name: 'Copy buttons',
          description: 'One-click copy for code blocks with user feedback.'
        }
      ],
      'Memory + RAG': [
        {
          name: 'Pinned session memory',
          description: 'Durable session summary that stays in context across turns.'
        },
        {
          name: 'FAISS mini-RAG',
          description: 'Local vector index for retrieval; supports chunking and citations-style UX.'
        },
        {
          name: 'PII redaction',
          description: 'Basic redaction helpers to reduce sensitive data leakage risks.'
        }
      ],
      'Security + Observability': [
        {
          name: 'Security headers',
          description: 'CSP/HSTS/XFO/Referrer-Policy patterns for a hardened frontend surface.'
        },
        {
          name: 'Rate limiting (Flask-Limiter)',
          description: 'Shared budgets with JSON 429 responses and testable behavior.'
        },
        {
          name: 'Structured logging + request IDs',
          description: 'JSON logs with request IDs and latency timing for debugging.'
        }
      ],
      'Quality + Deploy': [
        {
          name: 'Pytest + Vitest',
          description: 'Backend and frontend tests covering key chat + session flows.'
        },
        {
          name: 'GitHub Actions CI',
          description: 'Automated lint/tests/coverage/type checks for portfolio-grade reliability.'
        },
        {
          name: 'Render',
          description: 'Single-service deployment (Flask serves built Vite client).'
        }
      ]
    }),
    []
  )

  const signatureHighlights = useMemo(
    () => [
      {
        title: 'SSE streaming chat UX',
        detail: 'Streaming responses with resilient error framing and polished UI behavior.'
      },
      {
        title: 'Pinned memory + context strategy',
        detail: 'Durable session summary keeps conversations coherent across long sessions.'
      },
      {
        title: 'Mini-RAG module',
        detail: 'FAISS retrieval with chunking and PII redaction patterns for safer knowledge use.'
      }
    ],
    []
  )

  return (
    <div className="project-detail-container">
      <div className="project-detail-card ffrh-card">
        <header className="ffrh-hero">
          <button
            type="button"
            className="ffrh-back"
            onClick={handleBackToProjects}
            aria-label="Back to projects"
          >
            <FaArrowLeft aria-hidden="true" /> Back to projects
          </button>

          <p className="ffrh-kicker">Case study</p>

          <h1 className="ffrh-title">Ask-Flask</h1>

          <p className="ffrh-subtitle">
            A production-style AI chat app with SSE streaming, server-backed sessions,
            pinned memory, and a mini RAG module—built with React, Flask, PostgreSQL, and
            the OpenAI API.
          </p>

          <div className="ffrh-hero-actions" aria-label="Project links">
            <a
              className="ffrh-btn ffrh-btn--primary"
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live <FaExternalLinkAlt aria-hidden="true" />
            </a>

            <a className="ffrh-btn" href={codeUrl} target="_blank" rel="noopener noreferrer">
              Code <FaGithub aria-hidden="true" />
            </a>
          </div>

          <div className="ffrh-chips" aria-label="At-a-glance stack">
            <span className="chip chip--primary">React</span>
            <span className="chip chip--primary">Flask</span>
            <span className="chip chip--primary">PostgreSQL</span>
            <span className="chip chip--soft">OpenAI API</span>
            <span className="chip chip--soft">SSE</span>
            <span className="chip chip--soft">RAG</span>
          </div>
        </header>

        <section className="ffrh-top-grid" aria-label="Project summary">
          <aside className="ffrh-proof">
            <div className="ffrh-proof-title">What this project proves</div>
            <ul className="ffrh-proof-list">
              <li>Full-stack LLM product engineering (UX, API, DB, deploy)</li>
              <li>Production-minded reliability (rate limits, headers, logging)</li>
              <li>Applied context management (pinned memory + retrieval)</li>
            </ul>
          </aside>

          <div className="ffrh-highlights">
            <div className="ffrh-proof-title">Signature highlights</div>
            <div className="ffrh-highlight-cards">
              {signatureHighlights.map((h) => (
                <div key={h.title} className="ffrh-highlight-card">
                  <div className="ffrh-highlight-title">{h.title}</div>
                  <div className="ffrh-highlight-detail">{h.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ffrh-section" aria-label="Screenshots">
          <div className="ffrh-section-head">
            <h2 className="ffrh-h2">Screenshots</h2>
            <p className="ffrh-muted">A quick tour of the UI and core flows.</p>
          </div>

          <div className="ffrh-slideshow" aria-label="Screenshot carousel">
            <button
              type="button"
              className="ffrh-slide-btn ffrh-slide-btn--left"
              onClick={prevImage}
              aria-label="Previous screenshot"
            >
              <FaChevronLeft aria-hidden="true" />
            </button>

            <img
              src={images[currentImageIndex]}
              alt={`Ask-Flask screenshot ${currentImageIndex + 1}`}
              className="ffrh-slide-image"
              loading="lazy"
            />

            <button
              type="button"
              className="ffrh-slide-btn ffrh-slide-btn--right"
              onClick={nextImage}
              aria-label="Next screenshot"
            >
              <FaChevronRight aria-hidden="true" />
            </button>
          </div>

          <div className="ffrh-indicators" aria-label="Select screenshot">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`ffrh-indicator ${index === currentImageIndex ? 'is-active' : ''}`}
                onClick={() => goToImage(index)}
                aria-label={`Go to screenshot ${index + 1}`}
                aria-pressed={index === currentImageIndex}
              />
            ))}
          </div>
        </section>

        <section className="ffrh-section" aria-label="Case study details">
          <div className="ffrh-section-head">
            <h2 className="ffrh-h2">Overview</h2>
            <p className="ffrh-muted">
              Why I built it, what it does, and the engineering decisions behind it.
            </p>
          </div>

          <div className="ffrh-grid">
            <article className="ffrh-panel">
              <h3 className="ffrh-h3">Problem</h3>
              <p>
                Most demo chat apps stop at “send a prompt, get a reply.” Real LLM products
                need streaming UX, session persistence, safety, and a coherent context
                strategy.
              </p>
            </article>

            <article className="ffrh-panel">
              <h3 className="ffrh-h3">Solution</h3>
              <p>
                Ask-Flask is a production-style AI chat app with SSE streaming, DB-backed
                sessions, pinned memory, and a mini-RAG module—designed like a real
                deployable product.
              </p>
            </article>

            <article className="ffrh-panel">
              <h3 className="ffrh-h3">Key features</h3>
              <ul className="ffrh-list">
                <li>SSE streaming chat endpoint + responsive UI</li>
                <li>Server-backed sessions (CRUD, rename, export)</li>
                <li>Pinned session memory summarization</li>
                <li>Mini-RAG module (FAISS + embeddings + PII redaction)</li>
                <li>Security headers + rate limiting + structured logging</li>
                <li>Tests + CI for portfolio-grade reliability</li>
              </ul>
            </article>

            <article className="ffrh-panel">
              <h3 className="ffrh-h3">My role</h3>
              <p>
                Sole developer. I designed the architecture, built the Flask API + SSE
                flows, implemented session persistence and memory strategy, and shipped the
                React UI with production-minded tooling and deployment.
              </p>
            </article>
          </div>
        </section>

        <section className="ffrh-section" aria-label="Tech stack">
          <div className="ffrh-section-head">
            <h2 className="ffrh-h2">Tech stack</h2>
            <p className="ffrh-muted">
              Click a category to see the tools and the “why” behind each choice.
            </p>
          </div>

          <div className="ffrh-accordion" aria-label="Tech stack categories">
            {Object.entries(techStack).map(([category, tools]) => {
              const isOpen = expandedCategory === category
              return (
                <div key={category} className="ffrh-accordion-item">
                  <button
                    type="button"
                    className="ffrh-accordion-trigger"
                    onClick={() => toggleCategory(category)}
                    aria-expanded={isOpen}
                  >
                    <span className="ffrh-accordion-title">{category}</span>
                    <span className="ffrh-accordion-icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="ffrh-accordion-panel">
                      <div className="ffrh-pill-row">
                        {tools.map((tool) => {
                          const tooltipId = `${category}:${tool.name}`
                          const tooltipOpen = activeTooltip === tooltipId

                          return (
                            <div key={tool.name} className="ffrh-pill-wrap">
                              <button
                                type="button"
                                className="ffrh-pill"
                                onClick={() => toggleTooltip(tooltipId)}
                                aria-expanded={tooltipOpen}
                                aria-label={`${tool.name} details`}
                              >
                                {tool.name}
                              </button>

                              {tooltipOpen && (
                                <div className="ffrh-tooltip" role="note">
                                  {tool.description}
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <FaArrowUp aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default AskFlask
