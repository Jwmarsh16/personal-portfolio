import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'

function ScrollToTop() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      let id
      try {
        id = decodeURIComponent(hash.slice(1))
      } catch {
        return
      }

      const scrollToTarget = () => scrollToSection(id, { focus: true })
      if (scrollToTarget()) return

      // A lazy route may commit after the navigation effect runs.
      const observer = new MutationObserver(() => {
        if (scrollToTarget()) observer.disconnect()
      })
      observer.observe(document.getElementById('root'), { childList: true, subtree: true })
      return () => observer.disconnect()
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }, [pathname, hash, key])

  return null
}

export default ScrollToTop
