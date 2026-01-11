// client/src/components/Footer.jsx
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom' // CHANGED: use router-friendly navigation
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import '../Footer.css'
import { scrollToSection } from '../utils/scrollToSection' // CHANGED: consistent smooth scrolling like Header

function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleSectionNav = (sectionId) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId)
    } else {
      navigate('/')
      setTimeout(() => scrollToSection(sectionId), 100) // CHANGED: wait for home content to mount
    }
  }

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-brand-link" aria-label="Go to home">
              Jonathan Marshall
            </Link>
          </div>

          <div className="footer-icons" aria-label="Social links">
            <a
              href="https://github.com/Jwmarsh16"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-marshall-a2a833257/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => handleSectionNav('contact')}
              aria-label="Jump to contact section"
              className="footer-icon-button"
            >
              <FaEnvelope aria-hidden="true" />
            </button>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <button type="button" onClick={() => handleSectionNav('projects')} className="footer-link">
            Projects
          </button>
          <button type="button" onClick={() => handleSectionNav('skills')} className="footer-link">
            Skills
          </button>
          <button type="button" onClick={() => handleSectionNav('tools')} className="footer-link">
            Tools
          </button>
          <button type="button" onClick={() => handleSectionNav('contact')} className="footer-link">
            Contact
          </button>

          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/resume" className="footer-link">
            Resume
          </Link>
          <Link to="/blogs" className="footer-link">
            Blogs
          </Link>
        </nav>

        <p className="footer-copy">
          © {new Date().getFullYear()} Jonathan Marshall. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
