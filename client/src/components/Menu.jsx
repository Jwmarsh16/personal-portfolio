import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu toggle button is now outside of the .menu div */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Only apply .open class to the menu div */}
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <nav className="menu-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
