import { Link } from 'react-router-dom'
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/projects'
import '../Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="projects page-width" aria-labelledby="projects-heading">
      <div className="projects-heading">
        <p className="page-eyebrow">Selected work</p>
        <h2 id="projects-heading" className="section-title">What I’ve built</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const image = project.screenshots[0]
          const caseStudy = '/project/' + project.slug
          const heading = project.slug + '-card-heading'
          return (
            <article className={index === 0 ? 'project-card project-card--client' : 'project-card'} key={project.slug} aria-labelledby={heading}>
              <Link className="project-card-image" to={caseStudy} aria-label={'Read the ' + project.title + ' case study'}>
                <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
              </Link>
              <div className="project-card-body">
                <p className="page-eyebrow">{project.category}</p>
                <h3 id={heading}><Link to={caseStudy}>{project.title}</Link></h3>
                <p>{project.contribution}</p>
                <div className="project-card-stack" aria-label="Selected technologies">
                  {project.stack.slice(0, 3).map(technology => <span key={technology} className="chip">{technology}</span>)}
                </div>
                <div className="project-card-links">
                  <Link className="text-link" to={caseStudy}>Case study <FaArrowRight aria-hidden="true" /></Link>
                  {project.slug === 'algorithm-visualizer' && <Link className="text-link" to="/#pathfinding">Try the comparison</Link>}
                  <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    {project.liveLabel || 'Live demo'} <FaExternalLinkAlt className="external-link-icon" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  {project.codeUrl && (
                    <a className="text-link" href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      GitHub <FaExternalLinkAlt className="external-link-icon" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
