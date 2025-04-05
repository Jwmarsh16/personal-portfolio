import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import '../Header.css';
import { scrollToSection } from '../utils/scrollToSection';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isHome = location.pathname === '/';

  return (
    <header className={`header ${menuOpen ? 'open' : ''}`}>
      <div className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </div>
      <nav className="nav-bar">
        <ul className="nav-links">
          <li>
            <Link to="/" className="home-link" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>

          {isHome && (
            <>
              <li>
                <button onClick={() => handleNavClick('skills')} className="nav-link">Skills</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('projects')} className="nav-link">Projects</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('tools')} className="nav-link">Tools Used</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="nav-link">Contact</button>
              </li>
            </>
          )}

          <li>
            <Link to="/about" className="about-link" onClick={() => setMenuOpen(false)}>About Me</Link>
          </li>
          <li>
            <Link to="/resume" className="resume-link" onClick={() => setMenuOpen(false)}>Resume</Link>
          </li>
          <li>
            <Link to="/blogs" className="blog-link" onClick={() => setMenuOpen(false)}>Blogs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
