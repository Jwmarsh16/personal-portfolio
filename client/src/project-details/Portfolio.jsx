import React, { useState } from 'react';
import './FantasyFootballResearchHub.css';

function Portfolio() {
  const images = [
    '/images/portfolio-1.png',
    '/images/portfolio-2.png',
    '/images/portfolio-3.png',
    '/images/portfolio-4.png',
    '/images/portfolio-5.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
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
            <div className="section-header"><h2>Tech Stack</h2></div>
            <p>
              <strong>Frontend:</strong> React (Vite), React Router, EmailJS, React Icons<br/>
              <strong>Styling:</strong> Modular CSS, custom animations, neon/dark theme<br/>
              <strong>Deployment:</strong> Render (static site deployment)<br/>
              <strong>Design:</strong> Starry night theme, frosted glass UI, mobile responsiveness
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>Key Features</h2></div>
            <p>
              - Horizontally scrolling skills section with interactive controls<br/>
              - Tabbed About Me section and dedicated resume page<br/>
              - Starry night background with shooting stars<br/>
              - EmailJS-powered contact form with success feedback<br/>
              - Project detail pages with animated slideshows<br/>
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
      </div>
    </div>
  );
}

export default Portfolio;
