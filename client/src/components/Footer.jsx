import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import '../Footer.css'

const footerLinks = [
  ['Projects', '/#projects'],
  ['Skills', '/#skills'],
  ['About', '/about'],
  ['Resume', '/resume'],
  ['Contact', '/#contact'],
  ['Tools', '/#tools'],
  ['Blogs', '/blogs']
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-top">
          <Link to="/" className="footer-brand-link">Jonathan Marshall</Link>

          <div className="footer-icons" aria-label="Social links">
            <a href="https://github.com/Jwmarsh16" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/jonathan-marshall-a2a833257/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin aria-hidden="true" />
            </a>
            <Link to="/#contact" aria-label="Contact Jonathan">
              <FaEnvelope aria-hidden="true" />
            </Link>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          {footerLinks.map(([label, to]) => <Link key={to} to={to} className="footer-link">{label}</Link>)}
        </nav>

        <p className="footer-copy">© {new Date().getFullYear()} Jonathan Marshall. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
