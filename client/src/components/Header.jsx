// Path: client/src/components/Header.jsx
import React, { useEffect, useRef, useState } from 'react' // CHANGED: add useState for avatar fallback
import { useLocation, useNavigate, Link } from 'react-router-dom'
import '../Header.css'
import { scrollToSection } from '../utils/scrollToSection'
import { FaBars } from 'react-icons/fa'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAvatar, setShowAvatar] = useState(true) // CHANGED: hide avatar if image fails to load
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'

  const headerInnerRef = useRef(null) // CHANGED: used to detect outside clicks on mobile menu

  useEffect(() => {
    setMenuOpen(false) // CHANGED: close mobile menu on route change for cleaner UX
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return // CHANGED: only listen when menu is open

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false) // CHANGED: ESC closes menu (accessibility)
    }

    // CHANGED: close menu when clicking outside the header area (mobile UX polish)
    const onPointerDown = (e) => {
      const root = headerInnerRef.current
      if (!root) return
      if (!root.contains(e.target)) setMenuOpen(false) // CHANGED: outside click closes menu
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('pointerdown', onPointerDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])

  const handleNavClick = (sectionId) => {
    setMenuOpen(false)

    // CHANGED: focus the section after scroll for better a11y (uses your helper)
    const scrollOptions = { focus: true } // CHANGED: centralize options for consistent behavior

    if (isHome) {
      scrollToSection(sectionId, scrollOptions) // CHANGED: pass focus option
    } else {
      navigate('/')
      setTimeout(() => scrollToSection(sectionId, scrollOptions), 100) // CHANGED: pass focus option
    }
  }

  const toggleMenu = () => {
    setMenuOpen((v) => !v) // CHANGED: functional setState avoids stale state
  }

  return (
    <header className={`header ${menuOpen ? 'open' : ''}`}>
      <div className="header-inner" ref={headerInnerRef}>
        {/* CHANGED: attach ref for outside-click detection */}

        <Link
          to="/"
          className="brand"
          onClick={() => setMenuOpen(false)}
          aria-label="Go to home"
        >
          {/* CHANGED: small avatar next to name (adds credibility + polish) */}
          {showAvatar && (
            <img
              src="/images/jonathan.jpg" // CHANGED: correct public path
              alt=""
              aria-hidden="true"
              className="brand-avatar"
              width="34" // CHANGED: reduce layout shift
              height="34" // CHANGED: reduce layout shift
              onError={() => setShowAvatar(false)} // CHANGED: hide if missing/broken
              decoding="async" // CHANGED: small perf win
            />
          )}
          <span className="brand-name">Jonathan Marshall</span> {/* CHANGED */}
        </Link>

        <button
          type="button"
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-haspopup="menu" // CHANGED: more explicit semantics for assistive tech
        >
          <FaBars aria-hidden="true" />
        </button>

        <nav className="nav-bar" aria-label="Primary">
          <ul
            id="primary-navigation"
            className="nav-links"
            data-open={menuOpen ? 'true' : 'false'}
          >
            <li>
              <Link
                to="/"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
                aria-current={isHome ? 'page' : undefined} // CHANGED: indicate active route
              >
                Home
              </Link>
            </li>

            {/* CHANGED: allow section navigation from ANY route (navigate home + scroll) */}
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

            <li>
              <Link
                to="/about"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
                aria-current={location.pathname === '/about' ? 'page' : undefined} // CHANGED: active route
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
                aria-current={location.pathname === '/resume' ? 'page' : undefined} // CHANGED: active route
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
                aria-current={location.pathname === '/blogs' ? 'page' : undefined} // CHANGED: active route
              >
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
