import React from 'react';
import '../Skills.css';

function Skills() {
  const skills = [
    'Python',
    'JavaScript',
    'Node.js',
    'Flask',
    'React',
    'Vite',
    'Flask-JWT-Extended',
    'SQLAlchemy',
    'PostgreSQL',
    'JSON',
    'JWT',
    'Bcrypt',
    'React-Redux',
    'Axios',
    'Material-UI',
    'CRUD Operations',
    'Redux',
    'HTML & CSS',
    'Git & GitHub',
    'REST APIs',
    'Linux',
    'Full Stack Development'
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;