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
    setMenuOpen(false); // Close menu after click
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

  return (
    <header className={`header ${menuOpen ? 'open' : ''}`}>
      <div className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </div>
      <nav className="nav-bar">
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Me</Link>
          </li>
          <li>
            <button onClick={() => handleNavClick('skills')}>Skills</button>
          </li>
          <li>
            <button onClick={() => handleNavClick('projects')}>Projects</button>
          </li>
          <li>
            <button onClick={() => handleNavClick('contact')}>Contact</button>
          </li>
          <li>
            <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
