import React from 'react';
import '../Resume.css';

function Resume() {
  return (
    <section className="resume-container fade-in">
      <h1 className="resume-title">Jonathan Marshall</h1>
      <p className="resume-subheading">Austin, TX 78701 • JWMarsh16@gmail.com • 757-969-2803</p>
      <div className="resume-links">
        <a href="https://www.linkedin.com/in/jonathan-marshall-a2a833257/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Jwmarsh16" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://medium.com/@khrscrfs" target="_blank" rel="noopener noreferrer">Technical Blogs</a>
      </div>

      <div className="resume-section">
        <h2>Software Developer</h2>
        <p>
          Software Developer experienced in building full-stack web applications using Python, JavaScript, SQL, Flask, and React.
          I enjoy the process of breaking down complex problems and building practical solutions, whether it’s optimizing a database query,
          designing an intuitive user interface, or improving API efficiency. Strong foundational knowledge in REST API development,
          object-oriented programming, and database design with PostgreSQL. Experienced in Agile methodologies and integrating security best
          practices, including JWT authentication and secure cookie handling. Committed to continuous learning, collaborating within teams, and
          delivering efficient, secure, and scalable software solutions.
        </p>
      </div>

      <div className="resume-section">
        <h2>Technical Skills</h2>
        <ul className="resume-list">
          <li><strong>Languages:</strong> Python, JavaScript, SQL, Bash, HTML, CSS</li>
          <li><strong>Frameworks and Libraries:</strong> Flask, React, Redux, Vite, Node.js, SQLAlchemy</li>
          <li><strong>Tools and Platforms:</strong> Git, GitHub, Bcrypt, Pytest, Postman, Visual Studio Code</li>
          <li><strong>Operating Systems:</strong> Linux</li>
          <li><strong>Cloud & DevOps:</strong> AWS S3 (Secure File Storage), Render (Deployment), CI/CD Pipelines</li>
          <li><strong>Databases:</strong> PostgreSQL</li>
          <li><strong>Security & Authentication:</strong> JWT Authentication, OAuth, HTTP-Only Cookies, SAST/DAST, Input Validation</li>
          <li><strong>Development Practices:</strong> OOP, REST API Development, CI/CD, CRUD, Unit Testing, Agile Methodology</li>
        </ul>
      </div>

      <div className="resume-section">
        <h2>Technical Projects</h2>

        <h3>
          Fantasy Football Research Hub —&nbsp;
          <a href="https://github.com/Jwmarsh16/fantasy-football-research-project" target="_blank" rel="noopener noreferrer">GitHub</a> |&nbsp;
          <a href="https://youtu.be/-ahPG1RipGc" target="_blank" rel="noopener noreferrer">Demo</a> |&nbsp;
          <a href="https://fantasy-football-research-hub.onrender.com" target="_blank" rel="noopener noreferrer">Live Site</a>
        </h3>
        <p><em>(Guest Credentials: user@user.com / password)</em></p>
        <ul>
          <li>Engineered a full-stack application with React + Vite (frontend), Flask (backend), and PostgreSQL (database).</li>
          <li>Implemented AWS S3 for secure image storage, using pre-signed URLs for optimized retrieval and scalability.</li>
          <li>Designed and implemented a secure RESTful API with JWT authentication and HTTP-only cookies, integrating React, Redux, and Flask for seamless data flow.</li>
          <li>Developed a scalable relational database with PostgreSQL using SQLAlchemy ORM.</li>
          <li>Debugged and tested the full stack using Postman, Pytest, DevTools, and SQLAlchemy logs to ensure reliability.</li>
        </ul>

        <h3>
          Event Manager —&nbsp;
          <a href="https://github.com/Jwmarsh16/event-manager" target="_blank" rel="noopener noreferrer">GitHub</a> |&nbsp;
          <a href="https://youtu.be/og-UTUuv5gM" target="_blank" rel="noopener noreferrer">Demo</a> |&nbsp;
          <a href="https://event-manager-dtae.onrender.com" target="_blank" rel="noopener noreferrer">Live Site</a>
        </h3>
        <ul>
          <li>Developed a full-stack application using Python, JavaScript, and SQL.</li>
          <li>Deployed the application on Render with seamless CI/CD pipelines, debugging cross-origin issues and configuring environment variables for a scalable, production-ready system.</li>
          <li>Streamlined SQL queries and optimized many-to-many relationships with SQLAlchemy for efficient data handling.</li>
        </ul>
      </div>

      <div className="resume-section">
        <h2>Experience</h2>

        <h3>The Merrick Group, West Hazleton, PA — Nuclear Project Manager</h3>
        <p><em>February 2020 - April 2024</em></p>
        <ul>
          <li>Led nuclear eddy current projects, analyzing complex data to enhance reactor safety. Implemented innovative inspection techniques, resulting in improved accuracy.</li>
          <li>Managed multiple nuclear projects simultaneously, consistently meeting deadlines and quality standards.</li>
          <li>Coordinated cross-functional teams of 40+ engineers and technicians. Fostered open communication, leading to seamless project execution and knowledge sharing.</li>
        </ul>

        <h3>BWXT, Lynchburg, VA — Nuclear Technician</h3>
        <p><em>September 2012 - January 2020</em></p>
        <ul>
          <li>Performed eddy current inspections on a variety of nuclear plant equipment, including heat exchangers, steam generators, and reactor components, to detect surface and subsurface defects.</li>
          <li>Documented and reported inspection results, created detailed analysis reports, and communicated findings to engineering teams to support decision-making and maintenance planning.</li>
        </ul>
      </div>

      <div className="resume-section">
        <h2>Education</h2>
        <ul>
          <li><strong>Flatiron School (remote):</strong> Full-Stack Web Development, JavaScript and Python Program — <em>April 2024 - September 2024</em></li>
          <li><strong>Virginia Wesleyan, Norfolk, VA:</strong> Completed foundational courses in Computer Science — <em>September 2011 - June 2012</em></li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
