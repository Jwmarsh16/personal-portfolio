import React, { useState } from 'react';
import './FantasyFootballResearchHub.css';
import {
  FaArrowUp, FaReact, FaCloudDownloadAlt, FaLaptopCode, FaTerminal, FaCodeBranch, FaPaintBrush, FaRocket, FaCloud, FaPalette
} from 'react-icons/fa';
import {
  SiVite, SiJavascript, SiReactrouter, SiCss3
} from 'react-icons/si';

function Portfolio() {
  const images = [
    '/images/portfolio-1.png',
    '/images/portfolio-2.png',
    '/images/portfolio-3.png',
    '/images/portfolio-4.png',
    '/images/portfolio-5.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [visibleTooltips, setVisibleTooltips] = useState({});

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const toggleTooltip = (index) => {
    setVisibleTooltips((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const techStack = {
    Frontend: [
      { name: 'React', icon: <FaReact />, color: '#61DAFB', description: 'Component-based library for building UI' },
      { name: 'Vite', icon: <SiVite />, color: '#9999FF', description: 'Fast frontend tooling and hot reloading' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', description: 'Dynamic scripting for interactivity' },
      { name: 'React Router', icon: <SiReactrouter />, color: '#E84D3D', description: 'Client-side routing for SPA navigation' },
      { name: 'EmailJS', icon: <FaCloudDownloadAlt />, color: '#D44638', description: 'Used to send form submissions via email' },
      { name: 'React Icons', icon: <FaPalette />, color: '#A8DADC', description: 'Library of UI icons used across the app' }
    ],
    Styling: [
      { name: 'CSS3', icon: <SiCss3 />, color: '#264DE4', description: 'Custom modular stylesheets for layout and effects' },
      { name: 'Custom Animations', icon: <FaPaintBrush />, color: '#DA70D6', description: 'CSS keyframes and transitions for interactivity' },
      { name: 'Dark/Neon Theme', icon: <FaRocket />, color: '#00FFC3', description: 'Styled using glowing highlights and glassmorphism' }
    ],
    Deployment: [
      { name: 'Render', icon: <FaCloud />, color: '#00BFFF', description: 'Cloud deployment for static frontend hosting' }
    ],
    Development: [
      { name: 'VS Code', icon: <FaLaptopCode />, color: '#7CAEFF', description: 'Code editor for project development' },
      { name: 'Git', icon: <FaCodeBranch />, color: '#F1502F', description: 'Version control system used for local commits' },
      { name: 'GitHub', icon: <FaCodeBranch />, color: '#CCCCCC', description: 'Remote repo for project collaboration and deployment' }
    ]
  };

  return (
    <div className="project-detail-container">
      <div className="project-detail-card">
        <h1 className="project-title">Portfolio Website</h1>
        <p className="brief-description">
          A personal portfolio website showcasing my projects, skills, and background — built using React and Vite with a fully responsive and interactive design.
        </p>

        <div className="slideshow-wrapper">
          <button className="prev-button" onClick={prevImage}>&lt;</button>
          <img
            src={images[currentImageIndex]}
            alt={`Screenshot ${currentImageIndex + 1}`}
            className="slideshow-image"
          />
          <button className="next-button" onClick={nextImage}>&gt;</button>
        </div>

        <div className="slide-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator-dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => goToImage(index)}
            ></span>
          ))}
        </div>

        <div className="info-grid">
          <div className="info-box">
            <div className="section-header"><h2>Project Overview</h2></div>
            <p>
              This portfolio serves as a centralized hub for showcasing my work, technical skills, and development journey. Designed with a clean and modern aesthetic, it enables hiring managers and collaborators to explore my projects, resume, and contact info in an engaging format.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>Purpose and Objectives</h2></div>
            <p>
              The main goal was to create a professional, visually engaging platform to represent myself as a developer. It functions as both a personal brand and a living resume — evolving with each new project and skill I add to my toolkit.
            </p>
          </div>

          <div className="info-box">
            <div className="tech-stack-container">
              <h2>Tech Stack</h2>
              <p>Click each category below to view the technologies used:</p>
              <div className="tech-categories">
                {Object.entries(techStack).map(([category, tools]) => (
                  <div className="tech-category" key={category}>
                    <h3 onClick={() => toggleCategory(category)} style={{ cursor: 'pointer' }}>{category}</h3>
                    {expandedCategory === category && (
                      <div className="tech-items">
                        {tools.map((tool, index) => (
                          <div
                            className="tech-item-pill"
                            key={index}
                            onClick={() => toggleTooltip(`${category}-${index}`)}
                            style={{ color: tool.color || '#fff' }}
                          >
                            {tool.icon && <span>{tool.icon}</span>}<span>{tool.name}</span>
                            {visibleTooltips[`${category}-${index}`] && tool.description && (
                              <div className="tooltip">{tool.description}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>Key Features</h2></div>
            <p>
              - Horizontally scrolling skills section with interactive controls<br />
              - Tabbed About Me section and dedicated resume page<br />
              - Starry night background with shooting stars<br />
              - EmailJS-powered contact form with success feedback<br />
              - Project detail pages with animated slideshows<br />
              - Fully mobile-responsive layout and performance optimization via Vite
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>My Role and Contributions</h2></div>
            <p>
              I designed and developed the entire application from scratch — planning the structure, implementing all UI/UX components, and integrating animations, routing, and interactivity. I maintained a consistent design system using global CSS variables and modular styling, ensuring clarity and performance across devices.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>Impact and Value</h2></div>
            <p>
              This site is the cornerstone of my online presence and has helped me gain visibility, receive job interviews, and share my development work with confidence. It demonstrates my ability to build polished, engaging front-end applications that align with modern best practices.
            </p>
          </div>
        </div>

        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
