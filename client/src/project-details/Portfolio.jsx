// client/src/project-details/Portfolio.jsx
import React, { useMemo, useState } from 'react' // CHANGED: useMemo for stable derived lists
import './Portfolio.css' // CHANGED: decouple from FFRH CSS; use Portfolio-specific styles
import {
  FaArrowLeft, // CHANGED: standardized back-to-projects control
  FaArrowUp,
  FaChevronLeft, // CHANGED: standardized slideshow controls
  FaChevronRight, // CHANGED: standardized slideshow controls
  FaExternalLinkAlt,
  FaGithub
} from 'react-icons/fa' // CHANGED: remove icon bloat; keep only template icons
import { useNavigate } from 'react-router-dom' // CHANGED: cross-route back to Home/projects
import { scrollToSection } from '../utils/scrollToSection' // CHANGED: navigate home then scroll

function Portfolio() {
  const navigate = useNavigate() // CHANGED: used for cross-route “back to projects”

  const images = useMemo(
    () => [
      '/images/portfolio-1.png',
      '/images/portfolio-2.png',
      '/images/portfolio-3.png',
      '/images/portfolio-4.png',
      '/images/portfolio-5.png'
    ],
    []
  ) // CHANGED: memoize array to avoid re-allocations

  const liveUrl = '' // CHANGED: set when you want to link to the live portfolio
  const codeUrl = '' // CHANGED: set when you want to link to the GitHub repo

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
          description: 'SPA built with React and Vite for fast iteration and optimized builds.'
        },
        {
          name: 'React Router',
          description: 'Client-side routing for Home/About/Blogs/Resume and case-study routes.'
        },
        {
          name: 'Plain CSS (modular files)',
          description: 'One CSS file per section/component with shared global tokens.'
        }
      ],
      'UX + Interaction': [
        {
          name: 'Scroll-to-section navigation',
          description:
            'Cross-route anchor scroll helper that accounts for sticky header height.'
        },
        {
          name: 'Interactive skills marquee',
          description:
            'Horizontal auto-scroll rows with pause/play, drag-to-scroll, and resize handling.'
        },
        {
          name: 'Reduced motion support',
          description:
            'Decorative animations and auto-scroll respect prefers-reduced-motion.'
        }
      ],
      'Contact + Conversion': [
        {
          name: 'EmailJS',
          description:
            'Contact form delivery with success/error status UI and spam honeypot.'
        },
        {
          name: 'Direct email + copy UX',
          description:
            'Quick contact options via mailto plus clipboard copy affordance.'
        }
      ],
      'Quality + Deploy': [
        {
          name: 'Accessibility patterns',
          description:
            'Focus-visible rings, keyboard-friendly controls, and ARIA where appropriate.'
        },
        {
          name: 'Render',
          description:
            'Deployed as a production portfolio site with build-time configuration.'
        },
        {
          name: 'GitHub',
          description:
            'Version control and portfolio-grade history for iterative improvements.'
        }
      ]
    }),
    []
  ) // CHANGED: align stack presentation to template (no icon/pill bloat)

  const signatureHighlights = useMemo(
    () => [
      {
        title: 'Case-study layout and routing',
        detail:
          'Project pages are structured like product case studies with consistent sections and navigation.'
      },
      {
        title: 'Polished interaction design',
        detail:
          'Skills marquee controls, tabbed sections, and smooth anchor navigation built for UX clarity.'
      },
      {
        title: 'Accessible, reduced-motion friendly',
        detail:
          'Keyboard focus states and prefers-reduced-motion support keep the site usable and professional.'
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

          <h1 className="ffrh-title">Portfolio Website</h1>

          <p className="ffrh-subtitle">
            A case-study style portfolio that highlights my projects, AI-focused strengths,
            and developer story—built with React and Vite with a premium glassy dark UI.
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
            <span className="chip chip--primary">Vite</span>
            <span className="chip chip--soft">React Router</span>
            <span className="chip chip--soft">CSS</span>
            <span className="chip chip--soft">EmailJS</span>
            <span className="chip chip--soft">Render</span>
          </div>
        </header>

        {/* TOP GRID: proof + highlights */}
        <section className="ffrh-top-grid" aria-label="Project summary">
          <aside className="ffrh-proof">
            <div className="ffrh-proof-title">What this project proves</div>
            <ul className="ffrh-proof-list">
              <li>Product-style storytelling and scannable case-study structure</li>
              <li>Interactive UI patterns with performance and UX in mind</li>
              <li>Accessibility and reduced-motion support baked into the experience</li>
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
            <p className="ffrh-muted">A quick tour of the layout, sections, and interactions.</p>
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
              alt={`Portfolio screenshot ${currentImageIndex + 1}`}
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
                Portfolios often read like a “cool homepage” instead of a product site. Hiring
                teams need clarity fast: role, proof, and where to click next.
              </p>
            </article>

            <article className="ffrh-panel">
              <h3 className="ffrh-h3">Solution</h3>
              <p>
                A case-study style portfolio that makes the 15-second story obvious: what I’m
                targeting, what I shipped, and how to explore projects and contact me.
              </p>
            </article>

            <article className="ffrh-panel">
              <h3 className="ffrh-h3">Key features</h3>
              <ul className="ffrh-list">
                <li>Project grid with dedicated case-study pages</li>
                <li>Cross-route anchor scrolling (sticky header offset + focus support)</li>
                <li>Skills marquee with controls (auto-scroll + drag + reduced motion)</li>
                <li>Tabbed About section and dedicated Resume route</li>
                <li>EmailJS contact form with UX feedback + spam honeypot</li>
              </ul>
            </article>

            <article className="ffrh-panel">
              <h3 className="ffrh-h3">My role</h3>
              <p>
                Sole developer. I designed the information architecture, built reusable UI
                patterns, implemented routing and cross-route navigation, and delivered a
                polished, responsive experience with modular CSS.
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

export default Portfolio
