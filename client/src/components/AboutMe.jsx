import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section id="about" className="about-me">
      <div className="about-me-container">
        <h2>About Me</h2>
        <p>
          Hi! I'm Jonathan Marshall, a passionate fullstack developer with experience in building dynamic web applications. 
          I enjoy working with both backend and frontend technologies like Flask, Vite, SQLAlchemy, and React/Redux. 
          My goal is to create intuitive, engaging, and impactful user experiences.
        </p>
        <p>
          I love solving challenging problems and continuously learning new technologies to enhance my skills. 
          When I'm not coding, you can find me exploring new places, playing video games, or staying active with sports and fitness.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;