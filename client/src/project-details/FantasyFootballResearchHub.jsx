import React, { useState } from 'react';
import './FantasyFootballResearchHub.css';
import {
  FaArrowUp, FaReact, FaNodeJs, FaGithub, FaAws, FaPython, FaGitAlt, FaLinux, FaDatabase, FaCloud, FaCubes, FaLayerGroup, FaCogs, FaTasks, FaClipboardCheck, FaLock, FaKey, FaHtml5, FaCloudDownloadAlt, FaEdit, FaTerminal, FaCookie, FaCheckCircle, FaLaptopCode, FaFlask as FaFlaskFA
} from 'react-icons/fa';
import {
  SiJavascript, SiFlask, SiRedux, SiPostgresql, SiVite, SiSqlalchemy, SiFormik, SiAxios, SiPostman, SiGnubash, SiJson, SiMui
} from 'react-icons/si';

function FantasyFootballResearchHub() {
  const images = [
    '/images/fantasy-football-1.png',
    '/images/fantasy-football-2.png',
    '/images/fantasy-football-3.png',
    '/images/fantasy-football-4.png',
    '/images/fantasy-football-5.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [activeTooltip, setActiveTooltip] = useState(null);

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

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const toggleTooltip = (index) => {
    setActiveTooltip(activeTooltip === index ? null : index);
  };

  const techStack = {
    Languages: [
      { name: 'Python', icon: <FaPython />, color: '#4B8BBE', description: 'Used for backend logic and API development with Flask' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', description: 'Used to build dynamic and interactive frontend components' },
      { name: 'SQL', icon: <FaDatabase />, color: '#61DAFB', description: 'Used for querying and managing PostgreSQL database' },
      { name: 'HTML & CSS', icon: <FaHtml5 />, color: '#E34F26', description: 'Used to structure and style the application UI' }
    ],
    "Frameworks & Libraries": [
      { name: 'Flask', icon: <SiFlask />, color: '#CCCCCC', description: 'Backend microframework used to build RESTful API endpoints' },
      { name: 'React', icon: <FaReact />, color: '#61DAFB', description: 'Frontend framework used to create reusable UI components' },
      { name: 'Redux', icon: <SiRedux />, color: '#A17ACC', description: 'Global state management for frontend data and user sessions' },
      { name: 'Vite', icon: <SiVite />, color: '#9999FF', description: 'Frontend build tool for fast development and hot module replacement' },
      { name: 'SQLAlchemy', icon: <FaDatabase />, color: '#FF6B6B', description: 'ORM used for database models and queries in Python' },
      { name: 'Formik', icon: <SiFormik />, color: '#8A6DFF', description: 'Used for managing form state and handling form submissions' },
      { name: 'Axios', icon: <FaCloudDownloadAlt />, color: '#7A42F4', description: 'HTTP client used for making API requests from React to Flask backend' }
    ],
    "Tools & Platforms": [
      { name: 'Git & GitHub', icon: <FaGithub />, color: '#CCCCCC', description: 'Version control system and remote code repository' },
      { name: 'Postman', icon: <SiPostman />, color: '#FF6C37', description: 'Used to test and document API endpoints during development' },
      { name: 'Pytest', icon: <FaFlaskFA />, color: '#5E9FDF', description: 'Used to write and run unit tests for backend logic' },
      { name: 'VS Code', icon: <FaLaptopCode />, color: '#7CAEFF', description: 'Primary development environment for writing and debugging code' }
    ],
    "Operating Systems": [
      { name: 'Linux', icon: <FaTerminal />, color: '#BBBBBB', description: 'Development environment for local testing and deployment scripts' }
    ],
    "Cloud & DevOps": [
      { name: 'AWS S3', icon: <FaAws />, color: '#FFB347', description: 'Used for storing and serving profile pictures via secure pre-signed URLs' },
      { name: 'Render', icon: <FaCloud />, color: '#00BFFF', description: 'Cloud platform used to deploy both frontend and backend services' },
      { name: 'CI/CD Pipelines', icon: <FaCogs />, color: '#FFD700', description: 'Automated deployment pipelines to push changes live' }
    ],
    Databases: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#66A3D2', description: 'Relational database used to store user, player, review, and ranking data' }
    ],
    "Security & Authentication": [
      { name: 'JWT', icon: <FaKey />, color: '#FF69B4', description: 'Used for secure user authentication and session management' },
      { name: 'HTTP-Only Cookies', icon: <FaCookie />, color: '#F4A460', description: 'Enhances security by preventing client-side access to session tokens' },
      { name: 'Input Validation', icon: <FaCheckCircle />, color: '#00FF7F', description: 'Ensures only valid data is accepted in forms and API calls' },
      { name: 'Bcrypt', icon: <FaLock />, color: '#BBBBBB', description: 'Used for hashing user passwords before storing them in the database' }
    ],
    "Development Practices": [
      { name: 'OOP', icon: <FaCubes />, color: '#FF69B4', description: 'Organized code using object-oriented programming principles' },
      { name: 'REST APIs', icon: <FaCloud />, color: '#66CCCC', description: 'RESTful routes for handling frontend/backend communication' },
      { name: 'CRUD Ops', icon: <FaEdit />, color: '#FFD700', description: 'Create, Read, Update, Delete functionality across all models' },
      { name: 'Unit Testing', icon: <FaClipboardCheck />, color: '#B0C4DE', description: 'Automated tests for backend functionality using Pytest' },
      { name: 'Agile Methodology', icon: <FaTasks />, color: '#4682B4', description: 'Iterative development focused on MVP delivery and feedback' }
    ]
  };

  return (
    <div className="project-detail-container">
      <div className="project-detail-card">
        <h1 className="project-title">Fantasy Football Research Hub</h1>
        <p className="brief-description">
          A full-stack web application that empowers fantasy football players with actionable insights, peer-driven rankings, and comprehensive player research tools. Built with Flask, React, Redux, PostgreSQL, and AWS S3.
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
              Fantasy Football Research Hub (FFRH) is a modern, community-centric platform that simplifies the research process for fantasy football managers. Users can rank players, leave and read reviews, and analyze stats in one streamlined experience. The project merges traditional analytics with social input, helping users make better, more informed decisions each week.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>Purpose and Objectives</h2></div>
            <p>
              The app was designed to fill the gap between traditional stats websites and real-world fantasy football decision-making. Objectives included enabling crowd-sourced player reviews and rankings, streamlining data access, and providing a mobile-friendly, responsive interface. Stretch goals include live player data from third-party APIs, YouTube integration for player breakdowns, and an AI-powered draft assistant.
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
                            style={{ color: tool.color || '#fff', position: 'relative' }}
                            onClick={() => toggleTooltip(`${category}-${index}`)}
                          >
                            {tool.icon && <span>{tool.icon}</span>}
                            <span>{tool.name}</span>
                            {activeTooltip === `${category}-${index}` && tool.description && (
                              <div className="tooltip-popup">
                                {tool.description}
                              </div>
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
              - JWT-based authentication and secure route protection<br />
              - Fully functional CRUD for player reviews and rankings<br />
              - Many-to-many user-player relationships for rankings<br />
              - Real-time frontend state sync using Redux Toolkit<br />
              - Profile page with sortable, filterable review list<br />
              - Virtualized review rendering using react-window for performance<br />
              - Secure AWS S3 image upload with pre-signed URLs<br />
              - Deployed on Render with .env-based config management<br />
              - Responsive design with a focus on user-friendly UI/UX
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>My Role and Contributions</h2></div>
            <p>
              As the sole developer, I led the design and implementation of the entire codebase. I architected the backend using Flask and SQLAlchemy, built secure RESTful APIs with JWT authentication, and configured deployment using Render and AWS S3. On the frontend, I built reusable components, implemented Redux-based state logic, and optimized UX with performance enhancements like virtualized lists and modal-driven interactions. I also wrote all custom CSS and handled environment configuration for production.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>Impact and Value</h2></div>
            <p>
              FFRH stands as a strong representation of my full-stack capabilities — from REST API design and secure authentication to advanced state management and UI interactivity. It demonstrates my ability to solve real-world problems with clean, scalable architecture and emphasizes my commitment to delivering thoughtful, user-centric solutions in modern web development.
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

export default FantasyFootballResearchHub;
