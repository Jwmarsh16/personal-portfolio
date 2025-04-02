import React, { useState } from 'react';
import './FantasyFootballResearchHub.css'; // ✅ Use same CSS for consistent styling

function EventManager() {
  const images = [
    '/images/event-manager1.png',
    '/images/event-manager2.png',
    '/images/event-manager3.png',
    '/images/event-manager4.png',
    '/images/event-manager5.png',
    '/images/event-manager6.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () =>
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

  const prevImage = () =>
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="project-detail-container">
      <div className="project-detail-card">
        <h1 className="project-title">Event Manager Application</h1>
        <p className="brief-description">
          A fullstack web application that simplifies the event planning process through robust group and invitation management, real-time RSVP tracking, and secure user authentication.
        </p>

        <div className="slideshow-wrapper">
          <button className="prev-button" onClick={prevImage}>&lt;</button>
          <img
            src={images[currentImageIndex]}
            alt={`Screenshot ${currentImageIndex + 1} of Event Manager Application`}
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
            <div className="section-header">
              <h2>Project Overview:</h2>
            </div>
            <p>
              The Event Manager Application is a full-featured event coordination tool designed to streamline how users create, manage, and participate in events. It includes role-based features for hosts and attendees, and an intuitive interface that allows users to quickly interact with upcoming events.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header">
              <h2>Purpose and Objectives:</h2>
            </div>
            <p>
              Built to eliminate the friction in planning events, the platform allows users to send and manage invitations, track RSVPs, and coordinate event logistics with ease. The primary goals were to reduce communication gaps, automate invitation workflows, and offer a secure user experience across devices.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header">
              <h2>Tech Stack:</h2>
            </div>
            <p>
              <strong>Languages:</strong> Python, JavaScript, SQL, HTML, CSS<br/>
              <strong>Frameworks & Libraries:</strong> Flask, React, Redux, Vite, SQLAlchemy<br/>
              <strong>Tools & Platforms:</strong> Git, GitHub, Visual Studio Code, Bcrypt<br/>
              <strong>Databases:</strong> PostgreSQL<br/>
              <strong>Security & Authentication:</strong> JWT Authentication, HTTP-Only Cookies, CSRF Protection<br/>
              <strong>Cloud & DevOps:</strong> Render (Deployment), AWS S3 (Secure File Storage), CI/CD Pipelines<br/>
              <strong>Development Practices:</strong> REST API Development, Object-Oriented Programming (OOP), CRUD, Agile Methodology
            </p>
          </div>

          <div className="info-box">
            <div className="section-header">
              <h2>Key Features:</h2>
            </div>
            <p>
              • Create and manage public or private events with detailed descriptions, dates, and locations<br/>
              • Invite users to events and monitor real-time RSVP status updates<br/>
              • View a dedicated dashboard with event-specific attendee lists and statuses<br/>
              • Automatically update event participant data when invitations are accepted<br/>
              • Authenticate securely using JWTs with CSRF protection and secure cookies<br/>
              • Fully responsive UI and clean visual design for modern user experience
            </p>
          </div>

          <div className="info-box">
            <div className="section-header">
              <h2>My Role and Contributions:</h2>
            </div>
            <p>
              I developed the entire project independently, from backend architecture to frontend design. I designed and implemented the data models, RESTful API, and secure authentication with JWT and CSRF protection. On the frontend, I built interactive components in React and managed global state using Redux Toolkit. I also deployed the application using Render and configured AWS S3 for static file storage.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header">
              <h2>Impact and Value:</h2>
            </div>
            <p>
              This project showcases my ability to build and deploy full-stack applications with advanced functionality and secure best practices. It demonstrates thoughtful design in both UX and data handling, offering a professional and intuitive platform that solves real-world coordination problems for groups and individuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventManager;
