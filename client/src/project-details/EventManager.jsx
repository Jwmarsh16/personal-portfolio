// client/src/project-details/EventManager.jsx
import React, { useMemo, useState } from 'react'
import './EventManager.css' // CHANGED: use EventManager-specific styles (was importing FFRH CSS)
import { FaArrowUp, FaAws, FaCloud, FaCloudDownloadAlt, FaCookie, FaCogs, FaCubes, FaDatabase, FaEdit, FaGithub, FaHtml5, FaKey, FaLaptopCode, FaLock, FaPython, FaReact, FaTasks, FaTerminal } from 'react-icons/fa'
import { SiAxios, SiFlask, SiFormik, SiJavascript, SiPostgresql, SiPostman, SiRedux, SiSqlalchemy, SiVite } from 'react-icons/si'

function EventManager() {
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
  )

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [activeTooltip, setActiveTooltip] = useState(null)

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  const goToImage = (index) => setCurrentImageIndex(index)

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  const toggleTooltip = (key) => {
    setActiveTooltip(activeTooltip === key ? null : key) // CHANGED: stable per-pill key (prevents cross-category collisions)
  }

  // NOTE: add these when you want buttons to appear (kept empty so nothing breaks in prod). // CHANGED
  const links = useMemo(
    () => ({
      live: '', // CHANGED: add live URL when ready
      github: '' // CHANGED: add GitHub URL when ready
    }),
    []
  )

  const techStack = useMemo(
    () => ({
      Languages: [
        {
          name: 'Python',
          icon: <FaPython aria-hidden="true" />,
          color: '#4B8BBE',
          description: 'Backend development and API logic via Flask'
        },
        {
          name: 'JavaScript',
          icon: <SiJavascript aria-hidden="true" />,
          color: '#F7DF1E',
          description: 'Interactive UI logic and data fetching'
        },
        {
          name: 'SQL',
          icon: <FaDatabase aria-hidden="true" />,
          color: '#4479A1',
          description: 'Data modeling and queries in PostgreSQL'
        },
        {
          name: 'HTML & CSS',
          icon: <FaHtml5 aria-hidden="true" />,
          color: '#E34F26',
          description: 'UI structure and responsive styling'
        }
      ],
      'Frameworks & Libraries': [
        {
          name: 'Flask',
          icon: <SiFlask aria-hidden="true" />,
          color: '#CCCCCC',
          description: 'Python backend framework for routing and REST APIs'
        },
        {
          name: 'React',
          icon: <FaReact aria-hidden="true" />,
          color: '#61DAFB',
          description: 'Component-based frontend framework'
        },
        {
          name: 'Redux',
          icon: <SiRedux aria-hidden="true" />,
          color: '#764ABC',
          description: 'State management (Redux Toolkit patterns)'
        },
        {
          name: 'Vite',
          icon: <SiVite aria-hidden="true" />,
          color: '#646CFF',
          description: 'Fast frontend bundler for local dev and builds'
        },
        {
          name: 'SQLAlchemy',
          icon: <SiSqlalchemy aria-hidden="true" />,
          color: '#D32F2F',
          description: 'ORM for model definitions and relationships'
        },
        {
          name: 'Formik',
          icon: <SiFormik aria-hidden="true" />,
          color: '#685ED6',
          description: 'Form state management and client-side validation'
        },
        {
          name: 'Axios',
          icon: <SiAxios aria-hidden="true" />,
          color: '#7A42F4',
          description: 'HTTP client for calling backend APIs'
        }
      ],
      'Tools & Platforms': [
        {
          name: 'Git & GitHub',
          icon: <FaGithub aria-hidden="true" />,
          color: '#CCCCCC',
          description: 'Version control and collaboration'
        },
        {
          name: 'Postman',
          icon: <SiPostman aria-hidden="true" />,
          color: '#FF6C37',
          description: 'Testing and debugging REST endpoints'
        },
        {
          name: 'VS Code',
          icon: <FaLaptopCode aria-hidden="true" />,
          color: '#7CAEFF',
          description: 'Primary development environment'
        }
      ],
      'Operating Systems': [
        {
          name: 'Linux',
          icon: <FaTerminal aria-hidden="true" />,
          color: '#BBBBBB',
          description: 'Development and deployment environment'
        }
      ],
      'Cloud & DevOps': [
        {
          name: 'AWS S3',
          icon: <FaAws aria-hidden="true" />,
          color: '#FFB347',
          description: 'File storage (assets/uploads) via secure flows'
        },
        {
          name: 'Render',
          icon: <FaCloud aria-hidden="true" />,
          color: '#00BFFF',
          description: 'Cloud platform used for deployment'
        },
        {
          name: 'CI/CD Pipelines',
          icon: <FaCogs aria-hidden="true" />,
          color: '#FFD700',
          description: 'Automated deploys on push'
        }
      ],
      Databases: [
        {
          name: 'PostgreSQL',
          icon: <SiPostgresql aria-hidden="true" />,
          color: '#336791',
          description: 'Relational DB for users, events, groups, RSVPs'
        }
      ],
      'Security & Authentication': [
        {
          name: 'JWT',
          icon: <FaKey aria-hidden="true" />,
          color: '#EE4B2B',
          description: 'Token-based authentication for session control'
        },
        {
          name: 'HTTP-Only Cookies',
          icon: <FaCookie aria-hidden="true" />,
          color: '#DEB887',
          description: 'Protects tokens from JavaScript access'
        },
        {
          name: 'Bcrypt',
          icon: <FaLock aria-hidden="true" />,
          color: '#BBBBBB',
          description: 'Password hashing before persistence'
        }
      ],
      'Development Practices': [
        {
          name: 'OOP',
          icon: <FaCubes aria-hidden="true" />,
          color: '#FF69B4',
          description: 'Encapsulated, modular backend logic'
        },
        {
          name: 'REST APIs',
          icon: <FaCloud aria-hidden="true" />,
          color: '#66CCCC',
          description: 'RESTful endpoints for client-server interaction'
        },
        {
          name: 'CRUD Ops',
          icon: <FaEdit aria-hidden="true" />,
          color: '#FFD700',
          description: 'Create, Read, Update, Delete across core entities'
        },
        {
          name: 'Agile Methodology',
          icon: <FaTasks aria-hidden="true" />,
          color: '#4682B4',
          description: 'Iterative development and scope slicing'
        }
      ]
    }),
    []
  )

  return (
    <div className="project-detail-container">
      <div className="project-detail-card">
        {/* --- Hero --- */}
        <header className="project-hero">
          <h1 className="project-title">Event Manager Application</h1>

          <p className="brief-description">
            A full-stack web app for creating events, inviting groups, and tracking RSVPs with
            secure authentication and workflow-first UX.
          </p>

          {/* CHANGED: case-study “headline” highlights (tight + scannable) */}
          <div className="project-highlights" aria-label="Project highlights">
            <div className="highlight-card">
              <div className="highlight-label">Signature highlight</div>
              <div className="highlight-value">Group invites + RSVP workflow</div>
              <div className="highlight-muted">
                Host-driven flows that keep attendee state accurate and visible.
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-label">Signature highlight</div>
              <div className="highlight-value">Secure auth (JWT + cookies)</div>
              <div className="highlight-muted">
                Session safety and predictable server-side access control.
              </div>
            </div>
          </div>

          <div className="project-badges" aria-label="Primary technologies">
            <span className="chip chip--primary">React</span>
            <span className="chip chip--primary">Flask</span>
            <span className="chip chip--primary">PostgreSQL</span>
            <span className="chip chip--soft">Redux</span>
            <span className="chip chip--soft">JWT</span>
            <span className="chip chip--soft">Render</span>
          </div>

          {/* CHANGED: optional CTAs (only render when URLs exist) */}
          {(links.live || links.github) && (
            <div className="project-links" aria-label="Project links">
              {links.live && (
                <a
                  className="project-cta project-cta--primary"
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live
                </a>
              )}

              {links.github && (
                <a
                  className="project-cta project-cta--secondary"
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View code
                </a>
              )}
            </div>
          )}
        </header>

        {/* --- Slideshow --- */}
        <div className="slideshow-wrapper" aria-label="Project screenshots">
          <button
            type="button"
            className="prev-button"
            onClick={prevImage}
            aria-label="Previous screenshot"
          >
            &lt;
          </button>

          <img
            src={images[currentImageIndex]}
            alt={`Screenshot ${currentImageIndex + 1} of Event Manager`}
            className="slideshow-image"
          />

          <button
            type="button"
            className="next-button"
            onClick={nextImage}
            aria-label="Next screenshot"
          >
            &gt;
          </button>
        </div>

        <div className="slide-indicators" role="tablist" aria-label="Screenshot selector">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`indicator-dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => goToImage(index)}
              aria-label={`Go to screenshot ${index + 1}`}
              aria-selected={index === currentImageIndex}
              role="tab"
            />
          ))}
        </div>

        {/* --- Case study sections --- */}
        <div className="info-grid">
          <div className="info-box">
            <div className="section-header">
              <h2>Problem</h2>
            </div>
            <p>
              Coordinating an event gets messy fast: invites live across text threads, RSVP
              states drift, and hosts lose a single source of truth for who is coming.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header">
              <h2>Solution</h2>
            </div>
            <p>
              Event Manager centralizes the full workflow: create an event, invite a group,
              and track RSVP state in one place with a responsive UI and server-backed
              authorization rules.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header">
              <h2>What this project proves</h2>
            </div>
            <ul className="feature-list">
              <li>Workflow-first UX with state that stays accurate end-to-end.</li>
              <li>Relational modeling for real product behavior (users, events, RSVPs).</li>
              <li>Secure session handling and predictable API access control.</li>
            </ul>
          </div>

          <div className="info-box">
            <div className="tech-stack-container">
              <h2>Tech Stack</h2>
              <p>Click each category below to view the technologies used.</p>

              <div className="tech-categories">
                {Object.entries(techStack).map(([category, tools]) => (
                  <div className="tech-category" key={category}>
                    <button
                      type="button"
                      className="tech-category-button"
                      onClick={() => toggleCategory(category)}
                      aria-expanded={expandedCategory === category}
                    >
                      {category}
                    </button>

                    {expandedCategory === category && (
                      <div className="tech-items" role="list">
                        {tools.map((tool, index) => {
                          const key = `${category}-${index}` // CHANGED: stable tooltip key
                          return (
                            <button
                              type="button"
                              className="tech-item-pill"
                              key={key}
                              style={{ color: tool.color || '#fff' }}
                              onClick={() => toggleTooltip(key)}
                              aria-label={`${tool.name}${tool.description ? ': details' : ''}`}
                            >
                              {tool.icon && <span className="tech-icon">{tool.icon}</span>}
                              <span className="tech-name">{tool.name}</span>

                              {activeTooltip === key && tool.description && (
                                <span className="tooltip-popup" role="tooltip">
                                  {tool.description}
                                </span>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="info-box">
            <div className="section-header">
              <h2>Key Features</h2>
            </div>
            <ul className="feature-list">
              <li>Create and edit events with location, time, and description.</li>
              <li>Invite users and track RSVP status changes.</li>
              <li>View confirmed and declined attendees from a single source of truth.</li>
              <li>Secure auth flow with JWT + cookie-based session handling.</li>
              <li>Responsive layout for desktop and mobile.</li>
            </ul>
          </div>

          <div className="info-box">
            <div className="section-header">
              <h2>My Role</h2>
            </div>
            <p>
              I built the project end-to-end: data model design in PostgreSQL, secure Flask
              APIs, and a React UI that keeps RSVP state synchronized with the backend. I
              also handled deployment configuration and environment-based settings.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header">
              <h2>Next Improvements</h2>
            </div>
            <ul className="feature-list">
              <li>Calendar integrations (ICS export, Google Calendar add).</li>
              <li>Invite tokens + email invite flows.</li>
              <li>Audit-friendly activity log for hosts.</li>
            </ul>
          </div>
        </div>

        <button
          type="button"
          className="back-to-top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FaArrowUp aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default EventManager
