import React, { useState } from 'react';
import './Portfolio.css';

function Portfolio() {
  const images = [
    '/images/portfolio1.png',
    '/images/portfolio2.png',
    '/images/portfolio3.png'
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
        <h1>Portfolio Website</h1>
        <p className="brief-description">
          A personal portfolio website showcasing my projects and skills, built with React and Vite.
        </p>

        <div className="slideshow">
          <button className="prev-button" onClick={prevImage}>&lt;</button>
          <img
            src={images[currentImageIndex]}
            alt={`Screenshot ${currentImageIndex + 1} of Portfolio Website`}
            className="slideshow-image"
          />
          <button className="next-button" onClick={nextImage}>&gt;</button>
        </div>

        <div className="section">
          <h2>Project Overview:</h2>
          <p>
            This portfolio website serves as a centralized hub for displaying my work, skills, and achievements. 
            It’s designed with a clean and modern interface that allows visitors to easily explore my projects and learn about my professional background.
          </p>
        </div>

        <div className="section">
          <h2>Purpose and Objectives:</h2>
          <p>
            The primary purpose of this project is to showcase my capabilities as a developer. 
            The website demonstrates my proficiency in front-end development, responsive design, and interactive UI/UX, 
            while also serving as a living resume that evolves as I add new projects and skills.
          </p>
        </div>

        <div className="section">
          <h2>Tech Stack:</h2>
          <p>
            The website is built using React for dynamic user interfaces and Vite for fast build times. 
            I used CSS Modules for component-level styling and React Router for seamless navigation between pages.
          </p>
        </div>

        <div className="section">
          <h2>Key Features:</h2>
          <p>
            Key features include a fully responsive design, smooth transitions and animations, a dynamic project showcase with individual detail pages, 
            interactive elements such as a contact form and blog, and performance optimizations for quick load times.
          </p>
        </div>

        <div className="section">
          <h2>My Role and Contributions:</h2>
          <p>
            I designed and developed the entire portfolio website from scratch. This involved creating the UI/UX design, implementing the responsive layout, 
            integrating dynamic components, and ensuring cross-browser compatibility. I also optimized the site for performance and accessibility.
          </p>
        </div>

        <div className="section">
          <h2>Impact and Value:</h2>
          <p>
            The portfolio website has significantly enhanced my professional presence online, leading to more job opportunities and networking connections. 
            It serves as a testament to my technical skills, attention to detail, and ability to deliver a polished and user-friendly product.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
