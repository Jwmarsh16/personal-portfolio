import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import '../Projects.css'

function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading">
      <div className="projects-container">
        <div className="projects-header">
          <h2 id="projects-heading">Featured Projects</h2>
          <p className="projects-subtitle">
            Three projects I built, with my contributions, engineering decisions and source code.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article key={project.slug} className="project-item">
              <Link
                to={`/project/${project.slug}`}
                className="image-link"
                aria-label={`Read the ${project.title} case study`}
              >
                <img
                  src={project.screenshots[0].src}
                  alt={project.screenshots[0].alt}
                  width={project.screenshots[0].width}
                  height={project.screenshots[0].height}
                  className="project-image"
                  loading="lazy"
                  decoding="async"
                />
              </Link>

              <div className="project-body">
                <header className="project-top">
                  <h3 className="project-title">
                    <Link to={`/project/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p className="project-description">{project.description}</p>
                </header>

                <p className="project-contribution">
                  <strong>My contribution</strong>
                  {project.contribution}
                </p>

                <div className="project-stack" aria-label={`${project.title} primary stack`}>
                  <div className="project-stack-label">Primary stack</div>
                  <div className="project-chips">
                    {project.stack.map((technology) => (
                      <span key={technology} className="chip chip--primary">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  <Link
                    to={`/project/${project.slug}`}
                    className="project-action project-action--primary"
                    aria-label={`Read the ${project.title} case study`}
                  >
                    Case study
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action project-action--secondary"
                    aria-label={`Try the ${project.title} live demo (opens in a new tab)`}
                  >
                    Live demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action project-action--ghost"
                    aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
