import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../Header.css'

const navigation = [
  { label: 'Projects', to: '/#projects' },
  { label: 'Skills', to: '/#skills' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/#contact' }
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAvatar, setShowAvatar] = useState(true)
  const location = useLocation()
  const headerInnerRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    setMenuOpen(false)
  }, [location.key])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }

    const onPointerDown = (event) => {
      if (!headerInnerRef.current?.contains(event.target)) setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])

  const currentDestination = `${location.pathname}${location.hash}`

  return (
    <header className="header">
      <div
        className="header-inner"
        ref={headerInnerRef}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false)
        }}
      >
        <Link to="/" className="brand" aria-label="Jonathan Marshall, home">
          {showAvatar && (
            <img
              src="/images/jonathan.webp"
              alt=""
              aria-hidden="true"
              className="brand-avatar"
              width="34"
              height="34"
              decoding="async"
              onError={() => setShowAvatar(false)}
            />
          )}
          <span className="brand-name">Jonathan Marshall</span>
        </Link>

        <nav className="nav-bar" aria-label="Primary">
          <button
            ref={menuButtonRef}
            type="button"
            className="hamburger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
          <ul id="primary-navigation" className="nav-links" data-open={menuOpen}>
            {navigation.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                  aria-current={currentDestination === to ? (to.includes('#') ? 'location' : 'page') : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
