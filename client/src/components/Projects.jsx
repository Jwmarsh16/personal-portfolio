import React from 'react';
import '../Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Fantasy Football Research Hub',
      description: 'A platform for researching fantasy football statistics, player performance, and trends, built using Flask and React.',
      technologies: ['Flask', 'React', 'Vite', 'Redux Toolkit', 'Flask-JWT-Extended', 'Flask-CORS', 'Flask RESTful', 'PostgreSQL'],
      tools: ['JWT Cookies', 'Bcrypt', 'React-Redux', 'Axios', 'SQLAlchemy'],
      languages: ['Python', 'JavaScript', 'CSS'],
      link: 'https://fantasy-football-research-hub.onrender.com',
      github: 'https://github.com/Jwmarsh16/fantasy-football-research-project',
      preview: 'https://via.placeholder.com/400x300?text=Fantasy+Football', // Example preview image URL
    },
    {
      title: 'Event Manager Application',
      description: 'A fullstack application for managing events, featuring group management, CRUD operations, and user authentication using Flask, React, and Redux.',
      technologies: ['Flask', 'React', 'Vite', 'Redux Toolkit', 'Flask JWT Extended', 'Flask-CORS', 'Flask RESTful', 'PostgreSQL'],
      tools: ['JWT Cookies', 'Bcrypt', 'React-Redux', 'SQLAlchemy'],
      languages: ['Python', 'JavaScript', 'CSS'],
      link: 'https://event-manager-dtae.onrender.com',
      github: 'https://github.com/Jwmarsh16/event-manager',
      preview: 'https://via.placeholder.com/400x300?text=Event+Manager', // Example preview image URL
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills, built with React and Vite.',
      technologies: ['React', 'Vite'],
      tools: ['CSS Modules'],
      languages: ['JavaScript', 'CSS'],
      link: 'https://personal-portfolio-qj2c.onrender.com',
      github: 'https://github.com/Jwmarsh16/personal-portfolio',
      preview: 'https://via.placeholder.com/400x300?text=Portfolio', // Example preview image URL
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item wow-animate">
              {project.preview && (
                <img
                  src={project.preview}
                  alt={`${project.title} Preview`}
                  className="project-image"
                />
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies and Frameworks:</strong> {project.technologies.join(', ')}</p>
              <p><strong>Tools:</strong> {project.tools.join(', ')}</p>
              <p><strong>Languages:</strong> {project.languages.join(', ')}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                GitHub Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
