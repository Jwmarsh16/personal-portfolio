import React, { useState } from 'react';
import './EventManager.css';

function EventManager() {
  // Array of screenshot images (ensure these files exist in your public/images folder)
  const images = [
    '/images/event-manager1.png',
    '/images/event-manager2.png',
    '/images/event-manager3.png'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () =>
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

  const prevImage = () =>
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );

  return (
    <div className="project-detail-container">
      <div className="project-detail">
        <h1>Event Manager Application</h1>
        <p className="brief-description">
          A fullstack application for managing events, featuring group management, comprehensive CRUD operations, 
          and secure user authentication using Flask, React, and Redux.
        </p>

        <div className="slideshow">
          <button className="prev-button" onClick={prevImage}>&lt;</button>
          <img
            src={images[currentImageIndex]}
            alt={`Screenshot ${currentImageIndex + 1} of Event Manager Application`}
            className="slideshow-image"
          />
          <button className="next-button" onClick={nextImage}>&gt;</button>
        </div>

        <div className="section">
          <h2>Project Overview:</h2>
          <p>
            The Event Manager Application provides a robust platform for organizing events, managing user groups, 
            and streamlining communication between organizers and participants. It centralizes event data and facilitates efficient event management.
          </p>
        </div>

        <div className="section">
          <h2>Purpose and Objectives:</h2>
          <p>
            The purpose of this project is to simplify event planning by automating processes such as registration, 
            group management, and real-time updates. Objectives include reducing administrative overhead, increasing user engagement, 
            and delivering a secure, scalable solution for event organizers.
          </p>
        </div>

        <div className="section">
          <h2>Tech Stack:</h2>
          <p>
            The application is built with Flask (backend) and React (frontend), with Redux Toolkit for state management. 
            It utilizes PostgreSQL for database storage, Flask-JWT-Extended for secure authentication, Flask-CORS for handling cross-origin requests, 
            and Vite for a fast development experience.
          </p>
        </div>

        <div className="section">
          <h2>Key Features:</h2>
          <p>
            Key features include dynamic event creation, real-time notifications, secure user authentication, robust CRUD operations, 
            and a responsive design that adapts seamlessly across devices.
          </p>
        </div>

        <div className="section">
          <h2>My Role and Contributions:</h2>
          <p>
            I led the design and development of the application, architecting both the frontend and backend systems. 
            My responsibilities included API integration, implementing secure authentication protocols, and ensuring a smooth user experience 
            through responsive design and rigorous testing.
          </p>
        </div>

        <div className="section">
          <h2>Impact and Value:</h2>
          <p>
            The Event Manager Application has streamlined event operations, reducing planning time by 40% and significantly improving 
            user satisfaction. It demonstrates my ability to deliver comprehensive full-stack solutions that drive efficiency and user engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventManager;
