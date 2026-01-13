// client/src/project-details/EventManager.jsx
import React, { useMemo, useState } from 'react'
import './EventManager.css' // CHANGED: standardize styling to match FFRH template (local copy)
import {
  FaArrowLeft, // CHANGED: standardized back-to-projects control
  FaArrowUp,
  FaChevronLeft, // CHANGED: standardized slideshow controls
  FaChevronRight, // CHANGED: standardized slideshow controls
  FaExternalLinkAlt,
  FaGithub
} from 'react-icons/fa' // CHANGED: remove icon bloat; keep only template icons
import { useNavigate } from 'react-router-dom' // CHANGED: cross-route back to Home/projects
import { scrollToSection } from '../utils/scrollToSection' // CHANGED: navigate home then scroll to #projects

function EventManager() {
  const navigate = useNavigate() // CHANGED: used for cross-route “back to projects”

  const images = useMemo(
    () => [
      '/images/event-manager1.png',
      '/images/event-manager2.png',
      '/images/event-manager3.png',
      '/images/event-manager4.png',
      '/images/event-manager5.png',
      '/images/event-manager6.png'
    ],
    []
  ) // CHANGED: memoize array to avoid re-allocations

  const liveUrl = '' // CHANGED: set when you have a live URL
  const codeUrl = '' // CHANGED: set when you have a GitHub URL

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [expandedCategory, setExpandedCategory] = useState('Core') // CHANGED: default open category (template)
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
    setActiveTooltip(null) // CHANGED: close any open tooltip when switching categories (template)
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
          description: 'Predictable state management for user/session and RSVP-driven UI state.'
        },
        {
          name: 'Flask',
          description: 'REST API backend for auth, events, groups, invites, and RSVP actions.'
        },
        {
          name: 'PostgreSQL',
          description: 'Relational persistence for users, events, groups, and RSVP records.'
        }
      ],
      'Data + Models': [
        {
          name: 'SQLAlchemy',
          description: 'ORM models + relationships for event/group membership and RSVP state.'
        },
        {
          name: 'Relational workflow modeling',
          description:
            'Designed entities and relationships so RSVP state stays consistent and queryable.'
        }
      ],
      'Auth + Security': [
        {
          name: 'JWT (HTTP-only cookies)',
          description:
            'Session auth via secure cookies to reduce token exposure and keep flows predictable.'
        },
        {
          name: 'bcrypt',
          description: 'Password hashing before persistence.'
        }
      ],
      'Cloud + Deploy': [
        {
          name: 'Render',
          description:
            'Deployment with environment-based configuration for production and local dev.'
        }
      ],
      'Quality + Tooling': [
        {
          name: 'Postman',
          description: 'API testing and workflow verification during development.'
        },
        {
          name: 'Git + GitHub',
          description: 'Version control and portfolio-grade project history.'
        }
      ]
    }),
    []
  ) // CHANGED: align stack presentation to template (no icon/pill bloat)

  const signatureHighlights = useMemo(
    () => [
      {
        title: 'Invite + RSVP workflow',
        detail:
          'End-to-end flow for hosting events, inviting groups, and tracking RSVP state in one place.'
      },
      {
        title: 'Relational data model',
        detail:
          'Users, events, groups, and RSVP status modeled for correctness and easy querying.'
      },
      {
        title: 'Secure session handling',
        detail:
          'JWT + HTTP-only cookies for predictable access control and reduced browser token exposure.'
      }
    ],
    []
  ) // CHANGED: concise “headline” strengths for this project page (template)

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

          <h1 className="ffrh-title">Event Manager Application</h1>

          <p className="ffrh-subtitle">
            A full-stack app for creating events, inviting groups, and tracking RSVPs with
            secure authentication and workflow-first UX.
          </p>

          <div className="ffrh-hero-actions" aria-label="Project links">
            {liveUrl && (
              <a
                className="ffrh-btn ffrh-btn--primary"
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live <FaExternalLinkAlt aria-hidden="true" />
              </a>
            )}

            {codeUrl && (
              <a className="ffrh-btn" href={codeUrl} target="_blank" rel="noopener noreferrer">
                Code <FaGithub aria-hidden="true" />
              </a>
            )}

            {!liveUrl && !codeUrl && (
              <p className="ffrh-muted">Live and code links coming soon.</p> // CHANGED: keep template layout without broken links
            )}
          </div>

          <div className="ffrh-chips" aria-label="At-a-glance stack">
            <span className="chip chip--primary">React</span>
            <span className="chip chip--primary">Flask</span>
            <span className="chip chip--primary">PostgreSQL</span>
            <span className="chip chip--soft">Redux Toolkit</span>
            <span className="chip chip--soft">JWT Cookies</span>
            <span className="chip chip--soft">Render</span>
          </div>
        </header>

        {/* TOP GRID: proof + highlights */}
        <section className="ffrh-top-grid" aria-label="Project summary">
          <aside className="ffrh-proof">
            <div className="ffrh-proof-title">What this project proves</div>
            <ul className="ffrh-proof-list">
              <li>Workflow-first product thinking (invites, RSVP state, host visibility)</li>
              <li>Relational modeling for real app behavior (users, events, groups, RSVPs)</li>
              <li>Secure session/auth patterns with predictable API access control</li>
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
              alt={`Event Manager screenshot ${currentImageIndex + 1}`}
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
                Coordinating an event gets messy fast: invites live across text threads, RSVP
                states drift, and hosts lose a single source of truth for who is coming.
              </p>
            </article>

            <article className="ffrh-panel">
              <h3 className="ffrh-h3">Solution</h3>
              <p>
                Event Manager centralizes the workflow: create an event, invite a group, and
                track RSVP state in one place with a responsive UI and server-backed
                authorization rules.
              </p>
            </article>

            <article className="ffrh-panel">
              <h3 className="ffrh-h3">Key features</h3>
              <ul className="ffrh-list">
                <li>Create and edit events with time, location, and description</li>
                <li>Invite users/groups and track RSVP status changes</li>
                <li>Host-friendly views for confirmed/declined attendees</li>
                <li>Secure auth flow (JWT via HTTP-only cookies)</li>
                <li>Responsive layout for desktop and mobile</li>
              </ul>
            </article>

            <article className="ffrh-panel">
              <h3 className="ffrh-h3">My role</h3>
              <p>
                Sole developer. I designed the data model, built the Flask REST API, and
                implemented a React UI that keeps RSVP state synchronized with the backend,
                plus deployment configuration and environment-based settings.
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

export default EventManager
