// client/src/components/Header.jsx
import React, { useEffect, useState } from 'react' // CHANGED: add useEffect for route + escape handling
import { useLocation, useNavigate, Link } from 'react-router-dom'
import '../Header.css'
import { scrollToSection } from '../utils/scrollToSection'
import { FaBars } from 'react-icons/fa'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'

  useEffect(() => {
    setMenuOpen(false) // CHANGED: close mobile menu on route change for cleaner UX
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return // CHANGED: only listen when menu is open
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false) // CHANGED: ESC closes menu (accessibility)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const handleNavClick = (sectionId) => {
    setMenuOpen(false)
    if (isHome) {
      scrollToSection(sectionId)
    } else {
      navigate('/')
      setTimeout(() => scrollToSection(sectionId), 100)
    }
  }

  const toggleMenu = () => {
    setMenuOpen((v) => !v) // CHANGED: functional setState avoids stale state
  }

  return (
    <header className={`header ${menuOpen ? 'open' : ''}`}>
      <div className="header-inner">
        <Link
          to="/"
          className="brand"
          onClick={() => setMenuOpen(false)}
          aria-label="Go to home"
        >
          Jonathan Marshall {/* CHANGED: add a simple brand for a more professional header */}
        </Link>

        <button
          type="button" // CHANGED: avoid implicit form submit
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <FaBars aria-hidden="true" />
        </button>

        <nav className="nav-bar" aria-label="Primary">
          <ul
            id="primary-navigation"
            className="nav-links"
            data-open={menuOpen ? 'true' : 'false'} // CHANGED: CSS hook without extra logic
          >
            <li>
              <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            {isHome && (
              <>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavClick('skills')}
                    className="nav-link"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavClick('projects')}
                    className="nav-link"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavClick('tools')}
                    className="nav-link"
                  >
                    Tools Used
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavClick('contact')}
                    className="nav-link"
                  >
                    Contact
                  </button>
                </li>
              </>
            )}

            <li>
              <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/resume" className="nav-link" onClick={() => setMenuOpen(false)}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="nav-link" onClick={() => setMenuOpen(false)}>
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
