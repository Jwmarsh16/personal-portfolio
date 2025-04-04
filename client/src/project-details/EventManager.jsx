import React, { useState } from 'react';
import './FantasyFootballResearchHub.css';
import {
  FaArrowUp, FaReact, FaGithub, FaAws, FaPython, FaDatabase, FaCloud,
  FaCubes, FaCogs, FaTasks, FaLock, FaKey, FaHtml5, FaCloudDownloadAlt,
  FaEdit, FaTerminal, FaCookie, FaLaptopCode
} from 'react-icons/fa';
import {
  SiJavascript, SiFlask, SiRedux, SiPostgresql, SiVite, SiSqlalchemy,
  SiFormik, SiAxios, SiPostman
} from 'react-icons/si';

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
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToImage = (index) => setCurrentImageIndex(index);
  const toggleCategory = (category) => setExpandedCategory(expandedCategory === category ? null : category);
  const toggleTooltip = (index) => setActiveTooltip(activeTooltip === index ? null : index);

  const techStack = {
    Languages: [
      { name: 'Python', icon: <FaPython />, color: '#4B8BBE', description: 'Backend development and API logic via Flask' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', description: 'Interactive UI logic and data fetching' },
      { name: 'SQL', icon: <FaDatabase />, color: '#4479A1', description: 'Data modeling and queries in PostgreSQL' },
      { name: 'HTML & CSS', icon: <FaHtml5 />, color: '#E34F26', description: 'UI structure and responsive styling' }
    ],
    "Frameworks & Libraries": [
      { name: 'Flask', icon: <SiFlask />, color: '#000', description: 'Python backend framework for routing and REST APIs' },
      { name: 'React', icon: <FaReact />, color: '#61DAFB', description: 'Component-based frontend framework' },
      { name: 'Redux', icon: <SiRedux />, color: '#764ABC', description: 'State management using Redux Toolkit' },
      { name: 'Vite', icon: <SiVite />, color: '#646CFF', description: 'Fast frontend bundler for local dev and build' },
      { name: 'SQLAlchemy', icon: <SiSqlalchemy />, color: '#D32F2F', description: 'ORM for model definitions and database relationships' },
      { name: 'Formik', icon: <SiFormik />, color: '#685ED6', description: 'Form state management and client-side validation' },
      { name: 'Axios', icon: <FaCloudDownloadAlt />, color: '#0057B7', description: 'Making secure API requests from frontend' }
    ],
    "Tools & Platforms": [
      { name: 'Git & GitHub', icon: <FaGithub />, color: '#181717', description: 'Version control and code collaboration' },
      { name: 'Postman', icon: <SiPostman />, color: '#FF6C37', description: 'Testing and debugging REST endpoints' },
      { name: 'VS Code', icon: <FaLaptopCode />, color: '#007ACC', description: 'Fullstack development environment' }
    ],
    "Operating Systems": [
      { name: 'Linux', icon: <FaTerminal />, color: '#999999', description: 'Used for development and deployment scripts' }
    ],
    "Cloud & DevOps": [
      { name: 'AWS S3', icon: <FaAws />, color: '#FF9900', description: 'Secure file storage for profile images' },
      { name: 'Render', icon: <FaCloud />, color: '#00BFFF', description: 'Cloud hosting for both frontend and backend' },
      { name: 'CI/CD Pipelines', icon: <FaCogs />, color: '#FFD700', description: 'Automatic deployment on push' }
    ],
    Databases: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791', description: 'Relational DB for users, events, groups, RSVPs' }
    ],
    "Security & Authentication": [
      { name: 'JWT', icon: <FaKey />, color: '#EE4B2B', description: 'Token-based authentication for session control' },
      { name: 'HTTP-Only Cookies', icon: <FaCookie />, color: '#DEB887', description: 'Secures tokens from JavaScript access' },
      { name: 'Bcrypt', icon: <FaLock />, color: '#888888', description: 'Hashing user passwords before storing' }
    ],
    "Development Practices": [
      { name: 'OOP', icon: <FaCubes />, color: '#FF69B4', description: 'Encapsulated, modular backend logic' },
      { name: 'REST APIs', icon: <FaCloud />, color: '#66CCCC', description: 'RESTful endpoints for client-server interaction' },
      { name: 'CRUD Ops', icon: <FaEdit />, color: '#FFD700', description: 'Create, Read, Update, Delete support for all entities' },
      { name: 'Agile Methodology', icon: <FaTasks />, color: '#4682B4', description: 'Iterative development and sprint planning' }
    ]
  };

  return (
    <div className="project-detail-container">
      <div className="project-detail-card">
        <h1 className="project-title">Event Manager Application</h1>
        <p className="brief-description">
          A fullstack web app built with Flask and React that empowers users to create, manage, and collaborate on events with powerful group invitations, RSVP workflows, and secure authentication.
        </p>

        <div className="slideshow-wrapper">
          <button className="prev-button" onClick={prevImage}>&lt;</button>
          <img
            src={images[currentImageIndex]}
            alt={`Screenshot ${currentImageIndex + 1} of Event Manager`}
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
              The Event Manager Application allows users to easily create and manage events with integrated group functionality,
              RSVP tracking, and invitation handling. Hosts can invite attendees, monitor their responses, and view detailed participation lists in real-time.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>Purpose and Objectives</h2></div>
            <p>
              Designed to reduce friction in event coordination, this app automates the invitation and RSVP process while securing user sessions.
              Its goal is to help organizers focus on their events—not logistics—through responsive UX, data accuracy, and workflow automation.
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
                            style={{ color: tool.color || '#fff' }}
                            onClick={() => toggleTooltip(index)}
                          >
                            {tool.icon && <span>{tool.icon}</span>}<span>{tool.name}</span>
                            {activeTooltip === index && (
                              <div className="tooltip-popup">{tool.description}</div>
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
              • Create and edit detailed events with location, date, and description<br />
              • Invite users and dynamically update RSVP statuses<br />
              • Track confirmed and declined attendees in real-time<br />
              • Authenticate users securely using JWTs and CSRF-protected cookies<br />
              • Fully responsive interface for desktop and mobile<br />
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>My Role and Contributions</h2></div>
            <p>
              I built this project from the ground up—frontend, backend, database, and deployment. I designed the full schema in PostgreSQL,
              implemented secure APIs with Flask and JWT, styled a responsive UI in React, and handled all AWS/Render deployment tasks.
              This app reflects my ability to architect and ship scalable fullstack systems.
            </p>
          </div>

          <div className="info-box">
            <div className="section-header"><h2>Impact and Value</h2></div>
            <p>
              Event Manager demonstrates my end-to-end capabilities in modern fullstack development.
              It balances intuitive UX with backend rigor and highlights strengths in design, security, deployment, and real-world user workflows.
              This is the kind of application I want to build professionally: useful, secure, and well-engineered.
            </p>
          </div>
        </div>

        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
}

export default EventManager;
