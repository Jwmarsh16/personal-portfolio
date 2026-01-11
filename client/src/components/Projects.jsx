// client/src/components/Projects.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import '../Projects.css'

function Projects() {
  const projects = [
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
    {
      title: 'Event Manager Application',
      description:
        'A fullstack application for managing events, featuring group management, CRUD operations, and user authentication using Flask, React, and Redux.',
      technologies: [
        'Flask',
        'React',
        'Vite',
        'Redux Toolkit',
        'Flask JWT Extended',
        'Flask-CORS',
        'Flask RESTful',
        'PostgreSQL'
      ],
      tools: ['JWT Cookies', 'Bcrypt', 'React-Redux', 'SQLAlchemy'],
      languages: ['Python', 'JavaScript', 'CSS'],
      link: 'https://event-manager-dtae.onrender.com',
      github: 'https://github.com/Jwmarsh16/event-manager',
      preview: '/images/event-manager-project.png'
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio website showcasing my projects and skills, built with React and Vite.',
      technologies: ['React', 'Vite'],
      tools: ['CSS Modules'],
      languages: ['JavaScript', 'CSS'],
      link: 'https://personal-portfolio-qj2c.onrender.com',
      github: 'https://github.com/Jwmarsh16/personal-portfolio',
      preview: '/images/portfolio.png'
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
            {/* CHANGED: adds a professional “why this section matters” line */}
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => {
            const slug = createSlug(project.title)
            const primaryTech = project.technologies.slice(0, 6) // CHANGED: show top tech as chips (reduces clutter)

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
                      loading="lazy" // CHANGED: improves performance on initial load
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
                    {renderChips(primaryTech, 'primary')}{' '}
                    {/* CHANGED: modern chip UI instead of long comma lists */}
                  </div>

                  <details className="project-more">
                    <summary className="project-more-summary">
                      View full tech details
                      {/* CHANGED: keeps page scannable while preserving full info */}
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
