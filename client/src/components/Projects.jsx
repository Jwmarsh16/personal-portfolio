import React from 'react';
import { Link } from 'react-router-dom';
import '../Projects.css';

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
  ];

  const createSlug = (title) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => {
            const slug = createSlug(project.title);
            return (
              <div key={index} className="project-item wow-animate">
                {project.preview && (
                  <Link to={`/project/${slug}`} className="image-link">
                    <img
                      src={project.preview}
                      alt={`${project.title} Preview`}
                      className="project-image"
                    />
                  </Link>
                )}

                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>
                <p>
                  <strong>Tools:</strong> {project.tools.join(', ')}
                </p>
                <p>
                  <strong>Languages:</strong> {project.languages.join(', ')}
                </p>
                <div className="project-buttons">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Visit Site
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    GitHub Repo
                  </a>
                  <Link to={`/project/${slug}`} className="details-link">
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
