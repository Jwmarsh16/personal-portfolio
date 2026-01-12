// client/src/project-details/FantasyFootballResearchHub.jsx
import React, { useMemo, useState } from 'react' // CHANGED: useMemo for stable derived lists
import './FantasyFootballResearchHub.css'
import {
  FaArrowLeft,
  FaArrowUp,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub
} from 'react-icons/fa' // CHANGED: remove unused icon imports
import { useNavigate } from 'react-router-dom' // CHANGED: back to projects (home) navigation
import { scrollToSection } from '../utils/scrollToSection' // CHANGED: navigate home then scroll

function FantasyFootballResearchHub() {
  const navigate = useNavigate() // CHANGED: used for cross-route “back to projects”

  const images = useMemo(
    () => [
      '/images/fantasy-football-1.png',
      '/images/fantasy-football-2.png',
      '/images/fantasy-football-3.png',
      '/images/fantasy-football-4.png',
      '/images/fantasy-football-5.png'
    ],
    []
  ) // CHANGED: memoize array to avoid re-allocations

  const liveUrl = 'https://fantasy-football-research-hub.onrender.com' // CHANGED: replace with real live URL
  const codeUrl = 'https://github.com/Jwmarsh16/fantasy-football-research-project' // CHANGED: replace with real repo URL

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [expandedCategory, setExpandedCategory] = useState('Core') // CHANGED: default open category
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
    setActiveTooltip(null) // CHANGED: close any open tooltip when switching categories
  }

  const toggleTooltip = (id) => {
    setActiveTooltip(activeTooltip === id ? null : id)
  }

  const handleBackToProjects = () => {
    navigate('/') // CHANGED: projects live on Home
    window.setTimeout(() => scrollToSection('projects', { focus: true }), 120) // CHANGED: scroll after route mounts
  }

  const techStack = useMemo(
    () => ({
      Core: [
        {
          name: 'React (Vite)',
          description: 'Component-based UI with fast dev server and optimized builds.'
        },
        {
          name: 'Redux Toolkit',
          description:
            'Predictable state management for rankings, reviews, and user session state.'
        },
        {
          name: 'Flask',
          description: 'REST API backend for auth, rankings, reviews, and app data.'
        },
        {
          name: 'PostgreSQL',
          description: 'Primary relational database for users, players, rankings, and reviews.'
        }
      ],
      'Data + Models': [
        {
          name: 'SQLAlchemy',
          description:
            'ORM models and query layer for relational data and ranking relationships.'
        },
        {
          name: 'Many-to-many relationships',
          description:
            'Models user ↔ player ranking relationships without duplicating player data.'
        }
      ],
      'Auth + Security': [
        {
          name: 'JWT (HTTP-only cookies)',
          description:
            'Authentication via secure cookies to reduce token exposure in the browser.'
        },
        {
          name: 'bcrypt',
          description: 'Password hashing before persistence.'
        }
      ],
      'Cloud + Deploy': [
        {
          name: 'AWS S3 (presigned URLs)',
          description:
            'Secure profile image upload and access without exposing long-lived credentials.'
        },
        {
          name: 'Render',
          description:
            'Cloud deployment with environment-based configuration for production.'
        }
      ],
      'Quality + Tooling': [
        {
          name: 'Postman',
          description: 'API testing during development.'
        },
        {
          name: 'Pytest',
          description: 'Unit tests for backend behavior and stability.'
        }
      ]
    }),
    []
  ) // CHANGED: case-study friendly stack presentation (no icon bloat)

  const signatureHighlights = useMemo(
    () => [
      {
        title: 'Virtualized review lists',
        detail:
          'Uses list virtualization to keep UI fast even with large review volumes.'
      },
      {
        title: 'Secure S3 uploads',
        detail: 'Presigned URLs for profile images with a clean backend handoff.'
      },
      {
        title: 'Relational ranking model',
        detail: 'Many-to-many ranking relationships designed for scale and clarity.'
      }
    ],
    []
  ) // CHANGED: concise “headline” strengths for this project page

  return (
    <div className="project-detail-container">
      <div className="project-detail-card ffrh-card">
        {/* HERO */}
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

          <h1 className="ffrh-title">Fantasy Football Research Hub</h1>

          <p className="ffrh-subtitle">
            A community-driven fantasy research platform with rankings, reviews, and
            streamlined player discovery—built with React, Flask, PostgreSQL, and AWS S3.
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

            <a
              className="ffrh-btn"
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code <FaGithub aria-hidden="true" />
            </a>
          </div>

          <div className="ffrh-chips" aria-label="At-a-glance stack">
            <span className="chip chip--primary">React</span>
            <span className="chip chip--primary">Flask</span>
            <span className="chip chip--primary">PostgreSQL</span>
            <span className="chip chip--soft">Redux Toolkit</span>
            <span className="chip chip--soft">AWS S3</span>
            <span className="chip chip--soft">JWT Cookies</span>
          </div>
        </header>

        {/* TOP GRID: proof + highlights */}
        <section className="ffrh-top-grid" aria-label="Project summary">
          <aside className="ffrh-proof">
            <div className="ffrh-proof-title">What this project proves</div>
            <ul className="ffrh-proof-list">
              <li>End-to-end full-stack ownership (API, DB, UX, deploy)</li>
              <li>Security-minded auth and safe file upload patterns</li>
              <li>Performance awareness with practical UI optimization</li>
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

        {/* GALLERY */}
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
              alt={`Fantasy Football Research Hub screenshot ${currentImageIndex + 1}`}
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

        {/* CASE STUDY BODY */}
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
                Fantasy research often lives across disconnected sources: stats sites for
                numbers, YouTube for context, and group chats for “real opinions.” It’s
                hard to combine analytics with community signal in one place.
              </p>
            </article>

            <article className="ffrh-panel">
              <h3 className="ffrh-h3">Solution</h3>
              <p>
                A community-centric platform that centralizes player research by combining
                rankings and reviews with a clean UI and scalable backend.
              </p>
            </article>

            <article className="ffrh-panel">
              <h3 className="ffrh-h3">Key features</h3>
              <ul className="ffrh-list">
                <li>Authentication + protected flows (JWT via HTTP-only cookies)</li>
                <li>CRUD for rankings and player reviews</li>
                <li>Many-to-many ranking relationships for flexible user rankings</li>
                <li>Performance-minded UI patterns (virtualized lists)</li>
                <li>AWS S3 profile image upload via presigned URLs</li>
                <li>Render deployment with environment-based configuration</li>
              </ul>
            </article>

            <article className="ffrh-panel">
              <h3 className="ffrh-h3">My role</h3>
              <p>
                Sole developer. I designed the data model, built the Flask REST API,
                implemented auth and secure uploads, and shipped the React + Redux UI with
                production-style deployment practices.
              </p>
            </article>
          </div>
        </section>

        {/* TECH STACK (accordion) */}
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

        {/* BACK TO TOP */}
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

export default FantasyFootballResearchHub
