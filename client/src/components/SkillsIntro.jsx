// SkillsIntro.jsx
import React from 'react';
import Skills from './Skills';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../SkillsIntro.css';

function SkillsIntro() {
  return (
    <section className="skills-intro-wrapper">
      <div className="summary-wrapper">
        <div className="summary-intro">
          <h1>
            Hi 👋, I’m <span className="name-highlight">Jonathan Marshall</span>
          </h1>
          <h2 className="role-highlight">Full Stack Developer</h2>
          <p>
            🚀 A <span className="highlight">passionate Software Developer</span> based in{' '}
            <span className="highlight">Austin, Texas</span>. Open to opportunities and freelance projects.
          </p>
          <p>
            🛠️ My main tech stack currently is <span className="highlight">Flask, React, PostgreSQL, and AWS S3</span>.
            I specialize in building <span className="highlight">complex, fast, and functional</span> digital products
            that deliver exceptional user experiences.
          </p>

          {/* ✅ Social Icons */}
          <div className="skills-social-icons">
            <a href="https://github.com/Jwmarsh16" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-marshall-a2a833257/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="#contact" aria-label="Contact">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="skills-wrapper">
        <Skills />
      </div>
    </section>
  );
}

export default SkillsIntro;
