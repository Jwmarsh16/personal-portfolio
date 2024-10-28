import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Event Manager Application',
      description: 'A fullstack application for managing events, featuring group management, CRUD operations, and user authentication using Flask, React, and Redux.',
      technologies: ['Flask', 'React', 'Redux', 'SQLAlchemy'],
      link: 'https://github.com/Jwmarsh16/event-manager',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills, built with React and Vite.',
      technologies: ['React', 'Vite', 'CSS'],
      link: 'https://github.com/Jwmarsh16/personal-portfolio',
    },
    {
      title: 'Fantasy Football Research Hub',
      description: 'A platform for researching fantasy football statistics, player performance, and trends, built using Flask and React.',
      technologies: ['Flask', 'React', 'SQLAlchemy', 'REST APIs'],
      link: 'https://github.com/Jwmarsh16/fantasy-football-research-project',
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
