import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import '../Header.css';
import { scrollToSection } from '../utils/scrollToSection';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  // Custom handler to navigate to home and scroll to section
  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100); // Give the DOM time to load
    }
  };

  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-links">
          {location.pathname === '/blogs' ? (
            <li><Link to="/blogs">Blogs</Link></li>
          ) : (
            <>
              <li><Link to="/about">About Me</Link></li>
              <li><button onClick={() => handleNavClick('projects')}>Projects</button></li>
              <li><button onClick={() => handleNavClick('skills')}>Skills</button></li>
              <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
              <li><Link to="/blogs">Blogs</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
