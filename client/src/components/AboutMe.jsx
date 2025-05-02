import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Skills from './Skills';
import '../AboutMe.css';

function AboutMe() {
  const [activeTab, setActiveTab] = useState('frontend');

  const tools = {
    frontend: [
      'HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'C++', 'EJS', 'React',
      'Redux', 'Tailwind CSS', 'Next.js', 'Vue.js', 'GSAP', 'Redux Toolkit', 'Ant Design'
    ],
    backend: [
      'Node.js', 'Express', 'Flask', 'Django', 'Flask-JWT-Extended', 'JWT', 'bcrypt', 'OAuth', 'CI/CD', 'Linux'
    ],
    database: [
      'PostgreSQL', 'MySQL', 'SQLite', 'SQLAlchemy', 'AWS S3', 'Render', 'Prisma'
    ],
    others: [
      'GitHub', 'Git', 'Material UI', 'Bootstrap', 'Shadcn', 'Next UI', 'JSON', 'Postman', 'Vite'
    ]
  };

  const renderTools = (category) => (
    <div className="tool-tags">
      {tools[category].map((tool, index) => (
        <span key={index} className="tool-pill">{tool}</span>
      ))}
    </div>
  );

  return (
    <section id="about" className="about-me fade-in">
      {/* 🧠 About Header - top-left aligned */}
      <div className="about-header top-left">
        <h1>Jonathan Marshall</h1>
        <h2 className="sub-role">Full Stack Software Engineer</h2>
        <p className="tagline">Problem-solver. Builder. Lifelong learner.</p>
        <p className="summary">
        I’m a software engineer with a background in high-stakes project management, now focused on building scalable full-stack applications. I approach every challenge with curiosity, creativity, and a hunger to learn.
        </p>
        <Link to="/resume" className="resume-link">📄 View My Resume</Link>

      </div>

      {/* 🛠️ Horizontal Skills */}
      <div className="about-skills-wrapper">
        <Skills />
      </div>

      <div className="about-content-container">
        {/* 👨‍💻 My Journey (image on right) */}
        <div className="about-split-card reverse">
          <div className="about-card">
            <h3>👨‍💻 My Journey</h3>
            <p>
              Hi, I’m Jon—a <span className="highlight">full-stack software engineer</span> passionate about solving complex problems and building impactful applications.
              I thrive at the intersection of <span className="highlight">technology, creativity, and problem-solving</span>, bringing a <span className="highlight">relentless drive for learning</span> and a knack for tackling tough challenges head-on.
            </p>
            <p>
              I bring precision, leadership, and adaptability from my time as a <span className="highlight">project manager at nuclear power plants</span>. For four years, I oversaw eddy current inspections in high-stakes environments where fast decision-making and clear communication were essential.
            </p>
            <p>
            That experience shaped how I build software today: with a focus on <span className="highlight">efficiency, clarity, and reliability under pressure</span>.
            </p>
          </div>
          <img src="/images/my-journey.png" alt="My Journey" className="about-img" />
        </div>

        {/* 🚀 Tech Transition */}
        <div className="about-card">
          <h3>🚀 Breaking into Tech</h3>
          <p>
            My transition into tech was fueled by an <span className="highlight">unshakable passion for coding</span> and continuous learning. I completed an intensive <span className="highlight">software engineering bootcamp at Flatiron School</span>,
            where I learned <span className="highlight">full-stack development</span>, API design, authentication, and database management.
          </p>
          <p>
            Since then, I’ve expanded into <span className="highlight">CI/CD pipelines, cloud deployments, AI-assisted workflows, and scalable architecture</span>, refining my skills in <span className="highlight">Python, Flask, React, Redux, SQL, and AWS S3</span>—and I’m always looking to level up. 
          </p>
        </div>

        {/* 🛠️ Projects */}
        <div className="about-card">
          <h3>🛠️ What I've Built</h3>
          <p>
            <strong>Fantasy Football Research Hub</strong> – A full-stack fantasy football platform where users create rankings, submit reviews, and analyze player data. Built with <span className="highlight">React, Flask, PostgreSQL, and AWS S3</span>, it highlights my ability to <span className="highlight">design scalable systems</span> and optimize performance.
          </p>
          <p>
            <strong>Event Manager</strong> – A group-based event coordination tool featuring full CRUD, authentication, and secure backend logic.
          </p>
          <p>
            <strong>Portfolio Website</strong> – A responsive, animated personal portfolio that reflects my personality, design sensibility, and engineering strengths.
          </p>
        </div>

        {/* 🔧 Tools Section (moved here) */}
        <div className="about-tools-section">
          <h2 className="tools-heading">Tools that I have used.</h2>
          <p className="tools-subtext">
            Here's a curated list of tools and technologies that I have utilized in my projects to build innovative solutions.
          </p>

          <div className="tab-buttons">
            <button className={activeTab === 'frontend' ? 'active' : ''} onClick={() => setActiveTab('frontend')}>
              🖥️ Frontend Development
            </button>
            <button className={activeTab === 'backend' ? 'active' : ''} onClick={() => setActiveTab('backend')}>
              🔧 Backend Development
            </button>
            <button className={activeTab === 'database' ? 'active' : ''} onClick={() => setActiveTab('database')}>
              🗄️ Database Management
            </button>
            <button className={activeTab === 'others' ? 'active' : ''} onClick={() => setActiveTab('others')}>
              🧩 Others
            </button>
          </div>

          {renderTools(activeTab)}
        </div>

        {/* 🧠 Strengths */}
        <div className="about-card">
          <h3>🧠 Core Strengths</h3>
          <ul className="pills">
            <li>Creative Problem Solving</li>
            <li>Fast Learner</li>
            <li>Frontend + Backend Mastery</li>
            <li>Clean Code Architecture</li>
            <li>Strong Communication</li>
            <li>UI/UX Oriented</li>
          </ul>
        </div>

        {/* 🎯 Goals */}
        <div className="about-card">
          <h3>🎯 What I'm Looking For</h3>
          <p>
            I’m seeking a <span className="highlight">software engineering role</span> where I can apply my technical knowledge, leadership, and growth mindset to real-world challenges.
          </p>
          <p>
            I’m especially eager to level up in <span className="highlight">TypeScript, Docker, and DevOps tools</span>, and work alongside teams who value <span className="highlight">innovation, collaboration, continuous improvement</span>.
          </p>
        </div>

        {/* 🏈 Beyond Tech (image on left) */}
        <div className="about-split-card reverse">
          <img src="/images/beyond-tech.png" alt="Beyond Tech" className="about-img" />
          <div className="about-card">
            <h3>🏈 Beyond Tech</h3>
            <p>
              More than just writing code, I want to <span className="highlight">build products that matter</span>, <span className="highlight">contribute to impactful work</span>, and <span className="highlight">push myself to grow every day</span>.
            </p>
            <p>
              Outside of coding, I’m passionate about <span className="highlight">sports, video games, fitness, hiking, and concerts</span>.
              I enjoy working with people who are <span className="highlight">driven, curious, and excited about technology</span>—if that’s you, let’s connect!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
