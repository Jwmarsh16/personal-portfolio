import React, { useState } from 'react';
import './FantasyFootballResearchHub.css';

function FantasyFootballResearchHub() {
  const images = [
    '/images/fantasy-football-1.png',
    '/images/fantasy-football-2.png',
    '/images/fantasy-football-3.png',
    '/images/fantasy-football-4.png',
    '/images/fantasy-football-5.png'
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
        <h1 className="project-title">Fantasy Football Research Hub</h1>
        <p className="brief-description">
          A platform for researching fantasy football statistics, player performance, and trends, built using Flask and React.
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
              The Fantasy Football Research Hub aggregates comprehensive player statistics and performance metrics.
              It offers fantasy managers a centralized resource to analyze historical data, monitor real-time trends,
              and make data-driven decisions.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>Purpose and Objectives</h2></div>
            <p>
              The primary purpose is to empower fantasy football managers with actionable insights.
              Objectives include delivering real-time data, offering intuitive data visualizations, and enabling informed
              decision-making for team management.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>Tech Stack</h2></div>
            <p>
              Built with Flask for the backend and React for the frontend, the project uses Redux Toolkit for state
              management, PostgreSQL for data storage, and Vite for a fast development environment. Additional libraries
              include Flask-JWT-Extended for authentication and Flask-CORS for cross-origin support.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>Key Features</h2></div>
            <p>
              Key features include interactive dashboards, real-time player statistics, historical performance graphs,
              advanced filtering options, secure user authentication, and a responsive design for an optimal viewing
              experience on all devices.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>My Role and Contributions</h2></div>
            <p>
              I spearheaded both the frontend and backend development, designing and implementing the architecture,
              integrating multiple data sources, and ensuring a seamless and intuitive user experience. I also managed API
              integrations, implemented security protocols, and optimized overall performance.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>Impact and Value</h2></div>
            <p>
              The platform has significantly increased user engagement by providing fantasy managers with the tools needed
              to make informed decisions. This has led to improved team performance for users and serves as a strong
              demonstration of my ability to create complex, data-driven applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FantasyFootballResearchHub;
