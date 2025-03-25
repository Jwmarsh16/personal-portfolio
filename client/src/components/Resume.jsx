// Resume.jsx
import React from 'react';

function Resume() {
  return (
    <section className="resume-page">
      <h1>My Resume</h1>
      <p>
        You can view or download my full resume below:
      </p>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        View Resume PDF
      </a>
    </section>
  );
}

export default Resume;