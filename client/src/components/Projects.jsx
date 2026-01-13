// Path: client/src/components/Projects.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import '../Projects.css'

function Projects() {
  const projects = [
    // CHANGED: Ask-Flask is now featured (replaces Event Manager + Portfolio cards)
    {
      title: 'Ask-Flask',
      description:
        'A production-style AI chat app with SSE streaming, server-backed sessions, pinned memory, and a mini RAG module (FAISS + PII redaction).',
      technologies: [
        'React',
        'Vite',
        'Flask',
        'PostgreSQL',
        'OpenAI API',
        'SSE',
        'SQLAlchemy',
        'Pydantic v2',
        'FAISS'
      ],
      tools: [
        'Flask-Limiter',
        'Flask-Talisman',
        'Alembic',
        'Pytest',
        'Vitest',
        'GitHub Actions',
        'PrismJS',
        'react-markdown'
      ],
      languages: ['Python', 'JavaScript', 'SQL', 'CSS'],
      link: 'https://ask-flask.onrender.com/',
      github: 'https://github.com/Jwmarsh16/ask-flask',
      preview: '/images/ask-flask1.png' // CHANGED: uses existing image in /public/images
    },
    {
      title: 'Fantasy Football Research Hub',
      description:
        'A platform for researching fantasy football statistics, player performance, and trends, built using Flask and React.',
      technologies: [
        'Flask',
        'React',
        'Vite',
        'Redux Toolkit',
        'Flask-JWT-Extended',
        'Flask-CORS',
        'Flask RESTful',
        'PostgreSQL'
      ],
      tools: ['JWT Cookies', 'Bcrypt', 'React-Redux', 'Axios', 'SQLAlchemy'],
      languages: ['Python', 'JavaScript', 'CSS'],
      link: 'https://fantasy-football-research-hub.onrender.com',
      github: 'https://github.com/Jwmarsh16/fantasy-football-research-project',
      preview: '/images/fantasy-football.png'
    },
    // CHANGED: Algorithm Visualizer is now featured (replaces Event Manager + Portfolio cards)
    {
      title: 'Algorithm Visualizer',
      description:
        'An interactive pathfinding visualizer that lets users build a grid, place walls, and watch algorithms like A* and Dijkstra run step-by-step.',
      technologies: ['React', 'Vite', 'Pathfinding', 'A*', 'Dijkstra', 'BFS/DFS'],
      tools: ['Render', 'GitHub'],
      languages: ['JavaScript', 'CSS'],
      link: 'https://pathfinding-algorithm-asba.onrender.com',
      github: 'https://github.com/Jwmarsh16/pathfinding-algorithm',
      preview: '/images/algorithm-visualizer1.png' // CHANGED: uses existing image in /public/images
    }
  ]

  const createSlug = (title) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  const renderChips = (items, variant = 'default') => (
    <div className="project-chips">
      {items.map((item) => (
        <span key={item} className={`chip chip--${variant}`}>
          {item}
        </span>
      ))}
    </div>
  )

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p className="projects-subtitle">
            Case-study style write-ups with live demos and source code.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => {
            const slug = createSlug(project.title)
            const primaryTech = project.technologies.slice(0, 6)

            return (
              <article key={index} className="project-item wow-animate">
                {project.preview && (
                  <Link
                    to={`/project/${slug}`}
                    className="image-link"
                    aria-label={`View details for ${project.title}`}
                  >
                    <img
                      src={project.preview}
                      alt={`${project.title} preview`}
                      className="project-image"
                      loading="lazy"
                    />
                  </Link>
                )}

                <div className="project-body">
                  <header className="project-top">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </header>

                  <div className="project-stack">
                    <div className="project-stack-label">Primary stack</div>
                    {renderChips(primaryTech, 'primary')}
                  </div>

                  <details className="project-more">
                    <summary className="project-more-summary">
                      View full tech details
                    </summary>

                    <div className="project-more-grid">
                      <div className="project-more-block">
                        <div className="project-more-title">Technologies</div>
                        {renderChips(project.technologies)}
                      </div>

                      <div className="project-more-block">
                        <div className="project-more-title">Tools</div>
                        {renderChips(project.tools, 'soft')}
                      </div>

                      <div className="project-more-block">
                        <div className="project-more-title">Languages</div>
                        {renderChips(project.languages, 'soft')}
                      </div>
                    </div>
                  </details>

                  <div className="project-actions">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action project-action--primary"
                      aria-label={`Open live site for ${project.title}`}
                    >
                      Live
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action project-action--secondary"
                      aria-label={`Open GitHub repository for ${project.title}`}
                    >
                      Code
                    </a>

                    <Link
                      to={`/project/${slug}`}
                      className="project-action project-action--ghost"
                      aria-label={`Open case study for ${project.title}`}
                    >
                      Case study
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
