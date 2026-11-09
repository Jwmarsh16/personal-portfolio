import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { projects } from '../data/projects'
import AskFlaskWalkthrough from '../components/AskFlaskWalkthrough'
import './ProjectCaseStudy.css'

function ProjectCaseStudy({ projectId }) {
  const project = projects.find(({ slug }) => slug === projectId)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const cover = project.screenshots[0]
  const screenshot = project.screenshots[currentImageIndex]
  const hasWalkthrough = projectId === 'ask-flask'

  function changeScreenshot(direction) {
    const count = project.screenshots.length
    setCurrentImageIndex(index => (index + direction + count) % count)
  }

  return (
    <article className="case-study page-width">
      <Link className="text-link case-back" to="/#projects"><FaArrowLeft aria-hidden="true" /> Back to work</Link>

      <div className="case-masthead">
        <header className="case-intro">
          <p className="page-eyebrow">{project.category}</p>
          <h1 className="display-title" id="case-study-title">{project.title}</h1>
          <p className="case-lede">{project.description}</p>
          <div className="case-actions" aria-label="Project links">
            {hasWalkthrough ? <Link className="btn" to="#walkthrough">Watch walkthrough</Link> : (
              <a className="btn" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                {project.liveLabel || 'Live demo'} <FaExternalLinkAlt className="external-link-icon" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            {project.codeUrl && (
              <a className="text-link" href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                Source code <FaExternalLinkAlt className="external-link-icon" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            {projectId === 'algorithm-visualizer' && <Link className="text-link" to="/#pathfinding">Compare A* and BFS</Link>}
          </div>
          <div className="case-stack" aria-label="Primary stack">
            {project.stack.map(technology => <span className="chip" key={technology}>{technology}</span>)}
          </div>
        </header>

        <figure className="case-cover">
          <a href={cover.src} target="_blank" rel="noopener noreferrer" aria-label="Open cover screenshot at full size (opens in a new tab)">
            <img src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} decoding="async" />
          </a>
          <figcaption>{cover.caption}</figcaption>
        </figure>
      </div>

      <section className="case-summary" aria-label="My role, engineering decision and result">
        {[
          ['My role', project.role],
          ['Engineering decision', project.decision],
          ['Result', project.result]
        ].map(([title, text]) => (
          <div key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        ))}
      </section>

      {hasWalkthrough && (
        <section id="walkthrough" className="case-section" aria-labelledby="walkthrough-heading">
          <p className="page-eyebrow">20-second walkthrough</p>
          <h2 className="section-title" id="walkthrough-heading">A reply that picks up where you left off</h2>
          <div className="case-walkthrough">
            <AskFlaskWalkthrough />
            <div>
              <p>Watch a response arrive in chunks, reopen the saved conversation, then ask a follow-up that uses the session’s pinned context.</p>
              <p className="case-note">Recorded in a local copy of Ask-Flask with sample model responses.</p>
              <details className="case-note-detail">
                <summary>Read the walkthrough transcript</summary>
                <ol>
                  <li>I ask for a launch plan and give a location and budget.</li>
                  <li>Flask sends the reply as it becomes available, and Ask-Flask saves the exchange.</li>
                  <li>I reopen the conversation after a reload. The history loads from the database.</li>
                  <li>I ask for the location and budget. The app passes the saved session summary to the model, which uses it to answer.</li>
                </ol>
              </details>
            </div>
          </div>
        </section>
      )}

      {project.flow && (
        <section className="case-section" aria-labelledby="payment-flow-heading">
          <p className="page-eyebrow">Engineering detail</p>
          <h2 className="section-title" id="payment-flow-heading">From checkout to a single post</h2>
          <ol className="case-flow">
            {project.flow.map(([title, text], index) => (
              <li key={title}>
                <span className="case-flow-step" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className="case-section case-details" aria-labelledby="overview-heading">
        <div>
          <h2 className="section-title" id="overview-heading">What I built</h2>
          <p>{project.problem}</p>
          <ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
        </div>
        <div>
          <h2 className="section-title" id="demo-heading">Try the project</h2>
          <ol>{project.demoSteps.map(step => <li key={step}>{step}</li>)}</ol>
          <p className="case-note">{project.demoNote}</p>
          <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            {project.liveLabel || 'Open live demo'} <FaExternalLinkAlt className="external-link-icon" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>

      {project.screenshots.length > 1 && (
        <section className="case-section" aria-labelledby="screenshots-heading">
          <h2 className="section-title" id="screenshots-heading">A closer look</h2>
          <figure className="case-gallery">
            <a href={screenshot.src} target="_blank" rel="noopener noreferrer" aria-label={'Open screenshot ' + (currentImageIndex + 1) + ' at full size (opens in a new tab)'}>
              <img src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} loading="lazy" decoding="async" />
            </a>
            <figcaption aria-live="polite" aria-atomic="true">
              <span>{currentImageIndex + 1} / {project.screenshots.length}</span> {screenshot.caption}
            </figcaption>
          </figure>
          <div className="case-gallery-controls" aria-label="Screenshot controls">
            <button type="button" className="btn btn--quiet" onClick={() => changeScreenshot(-1)} aria-label="Previous screenshot">
              <FaChevronLeft aria-hidden="true" />
            </button>
            {project.screenshots.map((item, index) => (
              <button
                key={item.src}
                type="button"
                className={index === currentImageIndex ? 'btn' : 'btn btn--quiet'}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={'Show screenshot ' + (index + 1) + ': ' + item.caption}
                aria-pressed={index === currentImageIndex}
              >
                {index + 1}
              </button>
            ))}
            <button type="button" className="btn btn--quiet" onClick={() => changeScreenshot(1)} aria-label="Next screenshot">
              <FaChevronRight aria-hidden="true" />
            </button>
          </div>
        </section>
      )}

      <section className="case-section" aria-labelledby="technical-heading">
        <h2 className="section-title" id="technical-heading">Technical notes</h2>
        <div className="case-technical">
          {project.technicalNotes.map(note => (
            <details className="case-note-detail" key={note.title}>
              <summary>{note.title}</summary>
              <p>{note.text}</p>
            </details>
          ))}
        </div>
        {project.evidence && (
          <ul className="case-evidence" aria-label="Implementation and tests">
            {project.evidence.map(({ label, url }) => (
              <li key={url}>
                <a className="text-link" href={url} target="_blank" rel="noopener noreferrer">
                  {label} <FaExternalLinkAlt className="external-link-icon" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className="case-footer">
        <Link className="text-link" to="/#projects">More work <FaArrowRight aria-hidden="true" /></Link>
        <Link className="text-link" to="#case-study-title">Back to top</Link>
        <Link className="text-link" to="/resume">View resume <FaArrowRight aria-hidden="true" /></Link>
      </div>
    </article>
  )
}

ProjectCaseStudy.propTypes = {
  projectId(props, propName, componentName) {
    if (!projects.some(({ slug }) => slug === props[propName])) {
      return new Error('Invalid ' + propName + ' supplied to ' + componentName + '.')
    }
    return null
  }
}

export default ProjectCaseStudy
