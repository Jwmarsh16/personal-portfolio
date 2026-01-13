// Path: client/src/project-details/AlgorithmVisualizer.jsx
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

function AlgorithmVisualizer() {
  const navigate = useNavigate()

  const images = useMemo(
    () => [
      '/images/algorithm-visualizer1.png',
      '/images/algorithm-visualizer2.png',
      '/images/algorithm-visualizer3.png',
      '/images/algorithm-visualizer4.png',
      '/images/algorithm-visualizer5.png'
    ],
    []
  )

  const liveUrl = 'https://pathfinding-algorithm-asba.onrender.com'
  const codeUrl = 'https://github.com/Jwmarsh16/pathfinding-algorithm'

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
          description: 'Interactive UI with fast dev workflow and optimized builds.'
        },
        {
          name: 'JavaScript (ES6+)',
          description: 'Core algorithm implementations and animation/control logic.'
        },
        {
          name: 'CSS',
          description: 'Grid styling, controls layout, and clear visual states.'
        }
      ],
      Algorithms: [
        {
          name: 'A*',
          description: 'Heuristic-based shortest path; great for visual + educational demos.'
        },
        {
          name: 'Dijkstra',
          description: 'Classic shortest-path baseline for correctness and comparison.'
        },
        {
          name: 'BFS/DFS',
          description: 'Exploration algorithms to show traversal behavior and tradeoffs.'
        }
      ],
      'UX + Interaction': [
        {
          name: 'Interactive grid editing',
          description: 'Place start/end nodes and walls to build scenarios quickly.'
        },
        {
          name: 'Step-by-step visualization',
          description: 'Clear visited/path states so users can “see” the algorithm run.'
        },
        {
          name: 'Controls + reset workflows',
          description: 'Fast iteration: run, clear, and test different layouts and paths.'
        }
      ],
      Deploy: [
        {
          name: 'Render',
          description: 'Deployed live so recruiters can try it instantly.'
        },
        {
          name: 'GitHub',
          description: 'Clean repo history and shareable source code.'
        }
      ]
    }),
    []
  )

  const signatureHighlights = useMemo(
    () => [
      {
        title: 'Interactive learning UX',
        detail: 'Build scenarios quickly and watch algorithms run in an intuitive way.'
      },
      {
        title: 'Multiple algorithm comparisons',
        detail: 'A* vs Dijkstra vs BFS/DFS makes tradeoffs obvious through motion.'
      },
      {
        title: 'Polished controls',
        detail: 'Fast reset/iterate loops so users can test many scenarios quickly.'
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

          <h1 className="ffrh-title">Algorithm Visualizer</h1>

          <p className="ffrh-subtitle">
            An interactive pathfinding visualizer that lets users build a grid and watch
            algorithms like A* and Dijkstra run step-by-step—built with React and Vite.
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
            <span className="chip chip--primary">Vite</span>
            <span className="chip chip--soft">A*</span>
            <span className="chip chip--soft">Dijkstra</span>
            <span className="chip chip--soft">BFS/DFS</span>
            <span className="chip chip--soft">Render</span>
          </div>
        </header>

        <section className="ffrh-top-grid" aria-label="Project summary">
          <aside className="ffrh-proof">
            <div className="ffrh-proof-title">What this project proves</div>
            <ul className="ffrh-proof-list">
              <li>Strong fundamentals (algorithms + data structures)</li>
              <li>Interactive UI engineering and state control</li>
              <li>Clear communication via visualization and UX</li>
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
            <p className="ffrh-muted">A quick tour of the UI and controls.</p>
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
              alt={`Algorithm Visualizer screenshot ${currentImageIndex + 1}`}
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
                Algorithms are hard to internalize when they’re only text on a page. Most
                learners understand much faster when they can see state changes and
                traversal patterns.
              </p>
            </article>

            <article className="ffrh-panel">
              <h3 className="ffrh-h3">Solution</h3>
              <p>
                A visual, interactive grid tool that makes pathfinding behavior obvious by
                animating visited nodes and final paths across multiple algorithms.
              </p>
            </article>

            <article className="ffrh-panel">
              <h3 className="ffrh-h3">Key features</h3>
              <ul className="ffrh-list">
                <li>Interactive grid building (walls + start/end positioning)</li>
                <li>Multiple algorithms (A*, Dijkstra, BFS/DFS)</li>
                <li>Animated traversal + shortest path visualization</li>
                <li>Fast reset/iterate workflows for experimentation</li>
              </ul>
            </article>

            <article className="ffrh-panel">
              <h3 className="ffrh-h3">My role</h3>
              <p>
                Sole developer. I implemented the algorithms, designed the visualization
                states, and built the interactive UI so users can learn through exploration.
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

export default AlgorithmVisualizer
