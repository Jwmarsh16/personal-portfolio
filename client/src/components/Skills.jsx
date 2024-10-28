import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    'JavaScript',
    'React',
    'Redux',
    'HTML & CSS',
    'Flask',
    'SQLAlchemy',
    'Python',
    'Vite',
    'Git & GitHub',
    'REST APIs'
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