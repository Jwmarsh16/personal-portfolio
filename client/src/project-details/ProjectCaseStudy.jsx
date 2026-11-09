import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaArrowUp, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { projects } from '../data/projects'
import './FantasyFootballResearchHub.css'

function ProjectCaseStudy({ projectId }) {
  const project = projects.find(({ slug }) => slug === projectId)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const screenshot = project.screenshots[currentImageIndex]

  const changeScreenshot = (direction) => {
    setCurrentImageIndex((index) => (
      (index + direction + project.screenshots.length) % project.screenshots.length
    ))
  }

  const backToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
    document.getElementById('case-study-title')?.focus({ preventScroll: true })
  }

  return (
    <article className="project-detail-container">
      <div className="project-detail-card ffrh-card">
        <header className="ffrh-hero">
          <Link className="ffrh-back" to="/#projects">
            <FaArrowLeft aria-hidden="true" /> Back to projects
          </Link>
          <p className="ffrh-kicker">Project case study</p>
          <h1 className="ffrh-title" id="case-study-title" tabIndex={-1}>{project.title}</h1>
          <p className="ffrh-subtitle">{project.description}</p>

          <div className="ffrh-hero-actions" aria-label="Project links">
            <a className="ffrh-btn ffrh-btn--primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live demo <FaExternalLinkAlt aria-hidden="true" />
              <span className="ffrh-sr-only"> (opens in a new tab)</span>
            </a>
            <a className="ffrh-btn" href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              GitHub <FaGithub aria-hidden="true" />
              <span className="ffrh-sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <div className="ffrh-chips" aria-label="Primary stack">
            {project.stack.map((technology) => (
              <span key={technology} className="chip chip--primary">{technology}</span>
            ))}
          </div>
        </header>

        <section className="ffrh-summary" aria-label="My role, engineering decision and result">
          {[
            ['My role', project.role],
            ['Engineering decision', project.decision],
            ['Result', project.result]
          ].map(([title, text]) => (
            <div className="ffrh-summary-item" key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          ))}
        </section>

        <section className="ffrh-section" aria-labelledby="overview-heading">
          <h2 className="ffrh-h2" id="overview-heading">What I built</h2>
          <div className="ffrh-grid">
            <div className="ffrh-panel">
              <h3 className="ffrh-h3">The problem</h3>
              <p>{project.problem}</p>
            </div>
            <div className="ffrh-panel">
              <h3 className="ffrh-h3">Key functionality</h3>
              <ul className="ffrh-list">
                {project.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="ffrh-section" aria-labelledby="demo-heading">
          <h2 className="ffrh-h2" id="demo-heading">Try the demo</h2>
          <ol className="ffrh-list ffrh-demo-steps">
            {project.demoSteps.map((step) => <li key={step}>{step}</li>)}
          </ol>
          <p className="ffrh-muted">{project.demoNote}</p>
        </section>

        <section className="ffrh-section" aria-labelledby="screenshots-heading">
          <h2 className="ffrh-h2" id="screenshots-heading">A closer look</h2>
          <figure className="ffrh-screenshot">
            <a href={screenshot.src} target="_blank" rel="noopener noreferrer" className="ffrh-image-link" aria-label={`Open screenshot ${currentImageIndex + 1} at full size (opens in a new tab)`}>
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                className="ffrh-slide-image"
                loading="lazy"
                decoding="async"
              />
            </a>
            <figcaption className="ffrh-caption" aria-live="polite" aria-atomic="true">
              <span className="ffrh-caption-count">{currentImageIndex + 1} / {project.screenshots.length}</span>
              {screenshot.caption}
            </figcaption>
          </figure>

          <div className="ffrh-screenshot-controls" aria-label="Screenshot controls">
            <button type="button" className="ffrh-slide-btn" onClick={() => changeScreenshot(-1)} aria-label="Previous screenshot">
              <FaChevronLeft aria-hidden="true" />
            </button>
            <div className="ffrh-indicators" aria-label="Select screenshot">
              {project.screenshots.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  className={`ffrh-indicator ${index === currentImageIndex ? 'is-active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Show screenshot ${index + 1}: ${item.caption}`}
                  aria-pressed={index === currentImageIndex}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button type="button" className="ffrh-slide-btn" onClick={() => changeScreenshot(1)} aria-label="Next screenshot">
              <FaChevronRight aria-hidden="true" />
            </button>
          </div>
          <p className="ffrh-image-hint">Select an image to open it at full size.</p>
        </section>

        <section className="ffrh-section" aria-labelledby="technical-heading">
          <h2 className="ffrh-h2" id="technical-heading">Technical notes</h2>
          <div className="ffrh-technical-notes">
            {project.technicalNotes.map((note) => (
              <details className="ffrh-technical-note" key={note.title}>
                <summary>{note.title}</summary>
                <p>{note.text}</p>
              </details>
            ))}
          </div>
        </section>

        <button type="button" className="back-to-top" onClick={backToTop} aria-label="Back to top">
          <FaArrowUp aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}

ProjectCaseStudy.propTypes = {
  projectId(props, propName, componentName) {
    if (!projects.some(({ slug }) => slug === props[propName])) {
      return new Error(`Invalid ${propName} supplied to ${componentName}.`)
    }
    return null
  }
}

export default ProjectCaseStudy
