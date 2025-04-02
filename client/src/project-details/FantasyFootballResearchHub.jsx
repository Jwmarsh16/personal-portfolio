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
          A full-stack web application for researching fantasy football player stats, analyzing rankings, and gaining community-driven insights — built using Flask, React, PostgreSQL, and AWS.
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
              Fantasy Football Research Hub (FFRH) is a comprehensive platform designed to centralize player research by allowing users to rank NFL players, write and read community reviews, and analyze player performance. It bridges the gap between data-driven analysis and peer insights, making it easier for fantasy football managers to make informed roster decisions.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>Purpose and Objectives</h2></div>
            <p>
              FFRH was created to provide a singular, intuitive destination for fantasy football research. The main objectives include enabling community-based player rankings, offering review functionality for peer feedback, and visualizing statistical trends. Future goals include integrating live sports data APIs and AI-based draft suggestions.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>Tech Stack</h2></div>
            <p>
              <strong>Frontend:</strong> React (Vite), Redux Toolkit, Formik + Yup, Axios, React Router<br/>
              <strong>Backend:</strong> Flask, Flask-RESTful, Flask-JWT-Extended, Flask-CORS, SQLAlchemy<br/>
              <strong>Database:</strong> PostgreSQL (hosted on Render)<br/>
              <strong>Deployment:</strong> Render (frontend & backend), AWS S3 (for profile images)<br/>
              <strong>Security:</strong> JWT auth, bcrypt password hashing, CORS and pre-signed S3 URLs
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>Key Features</h2></div>
            <p>
              - Full user authentication using JWT with secure route protection<br/>
              - Users can rank players (1–10) and write reviews<br/>
              - Many-to-many relationship for rankings, one-to-many for reviews<br/>
              - Dynamic player stats and community insights per player<br/>
              - User profile page with sortable and filterable review lists<br/>
              - Modal-based review editing, virtualized list for performance<br/>
              - Fully responsive UI, optimized with Vite for fast load times
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>My Role and Contributions</h2></div>
            <p>
              I developed the entire application from the ground up, implementing both the backend and frontend systems. On the backend, I built RESTful APIs, managed the database models and relationships, and handled authentication and deployment. On the frontend, I implemented all components, state logic, and styling. I also configured AWS S3 for secure file handling and optimized performance with Redux slices, virtualized lists, and database indexing.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>Impact and Value</h2></div>
            <p>
              FFRH showcases my ability to design and implement scalable, secure, full-stack applications. It highlights my skills in frontend design, backend architecture, database modeling, and cloud integration. The platform provides fantasy football players with a uniquely collaborative and data-rich experience that is both practical and innovative.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FantasyFootballResearchHub;
