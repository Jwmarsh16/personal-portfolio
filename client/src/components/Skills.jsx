import React from 'react';
import '../Skills.css';

function Skills() {
  const skills = [
    'Python',
    'JavaScript',
    'SQL',
    'Node.js',
    'Flask',
    'React',
    'Redux',
    'PostgreSQL',
    'Git & GitHub',
    'REST APIs',
    'Object-Oriented Programming (OOP)',
    'Full Stack Development',
    'CI/CD Pipelines',
    'Agile Methodology',
    'Unit Testing',
    'Bcrypt',
    'JWT',
    'Flask-JWT-Extended',
    'HTML & CSS',
    'Axios',
    'SQLAlchemy',
    'CRUD Operations',
    'Linux',
    'Vite',
    'OAuth',
    'HTTP-Only Cookies',
    'AWS S3 (Secure File Storage)',
    'Render (Deployment)',
    'Postman',
    'Pytest',
    'Input Validation',
    'Bash',
    'JSON',
    'Material-UI',
    'SAST/DAST',
    'Visual Studio Code'
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