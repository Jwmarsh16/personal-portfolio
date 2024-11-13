import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import useLocation and Link
import '../Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <nav>
        <ul>
          {location.pathname === '/blogs' ? (
            // Only show the "Blogs" link if on the /blogs route
            <li><Link to="/blogs">Blogs</Link></li>
          ) : (
            // Display the full navigation menu on other routes
            <>
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><Link to="/blogs">Blogs</Link></li> {/* Link to Blogs page */}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
