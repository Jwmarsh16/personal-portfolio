// AboutMeTabs.jsx
import React, { useState } from 'react';
import '../AboutMeTabs.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaBriefcase, FaGraduationCap, FaFileAlt } from 'react-icons/fa';

function AboutMeTabs() {
  const [activeTab, setActiveTab] = useState('Intro');
  const navigate = useNavigate();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Intro':
        return (
          <div className="tab-content">
            <p>
              I’m a <span className="highlight">full-stack software engineer</span> who thrives on turning complex problems into elegant, scalable solutions.
              My journey into tech began after spending four years as a project manager in high-pressure nuclear inspection environments—
              where adaptability, precision, and leadership were non-negotiable. These skills now fuel my work as a developer.
            </p>
            <p>
              After graduating from <span className="highlight">Flatiron School’s immersive bootcamp</span>, I’ve been immersed in full-stack development,
              building performant, user-friendly web apps using <span className="highlight">React, Flask, PostgreSQL, and AWS S3</span>. I take pride in writing clean, reusable code,
              optimizing performance, and architecting backend systems that scale.
            </p>
            <p>
              I’m not just about code—I’m a problem-solver, a team player, and a continuous learner who seeks out challenges to grow.
              Whether it’s CI/CD automation, designing RESTful APIs, or collaborating cross-functionally, I bring curiosity and grit to every project.
            </p>
            <p>
              My ultimate goal? To join a mission-driven team where I can build impactful software, grow with talented engineers,
              and contribute to products that make people’s lives easier and better.
            </p>
          </div>
        );
      case 'Career':
        return (
          <div className="tab-content">
            <ul>
              <li>
                <strong>Project Manager – Nuclear Power Inspection</strong><br />
                2019 – 2023
              </li>
              <li>
                <strong>Software Engineering Student – Flatiron School</strong><br />
                April 2024 – August 2024
              </li>
            </ul>
          </div>
        );
      case 'Education':
        return (
          <div className="tab-content">
            <ul>
              <li>
                <strong>Flatiron School – Software Engineering Bootcamp</strong><br />
                Graduated: August 2024
              </li>
              <li>
                <strong>Other Continuing Education</strong><br />
                Online courses in Flask, React, AWS, CI/CD, and more
              </li>
            </ul>
          </div>
        );
      case 'Resume':
        navigate('/resume');
        return null;
      default:
        return null;
    }
  };

  const tabIcons = {
    Intro: <FaUser className="tab-icon" />,
    Career: <FaBriefcase className="tab-icon" />,
    Education: <FaGraduationCap className="tab-icon" />,
    Resume: <FaFileAlt className="tab-icon" />
  };

  return (
    <section className="about-tabs-section">
      <div className="about-tabs-wrapper" style={{ marginLeft: '-25rem' }}>
        <div className="code-image" style={{ marginRight: '5rem' }}>
          <img src="/images/portfolio-man.jpg" alt="Developer typing" />
        </div>
  
        <div className="tab-column">
          <div className="tabs-title">
            <h2>About Me</h2>
            <p className="about-subtext">
              A meaningful insight into my essence – as every small detail shapes the broader story of my life.
            </p>
          </div>
  
          <div className="tabs-container" style={{ marginRight: '10rem' }}>
            <div className="tabs">
              {['Intro', 'Career', 'Education', 'Resume'].map(tab => (
                <button
                  key={tab}
                  className={activeTab === tab ? 'active' : ''}
                  onClick={() => setActiveTab(tab)}
                >
                  {tabIcons[tab]} {tab}
                </button>
              ))}
            </div>
            <div className="tab-body fade-in">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default AboutMeTabs;
