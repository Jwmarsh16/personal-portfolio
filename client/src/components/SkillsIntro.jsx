// SkillsIntro.jsx
import React from 'react';
import Skills from './Skills';
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
              🚀 A <span className="highlight">passionate Software Developer</span> based in <span className="highlight">Austin, Texas</span>. Open to
              opportunities and freelance projects.
            </p>
            <p>
              🛠️ My main tech stack currently is <span className="highlight">Flask, React, PostgreSQL, and AWS S3</span>.
              I specialize in building <span className="highlight">complex, fast, and functional</span> digital products
              that deliver exceptional user experiences.
            </p>
          </div>
        </div>
        <div className="skills-wrapper">
          <Skills />
        </div>
      </section>
    );
  }

export default SkillsIntro;