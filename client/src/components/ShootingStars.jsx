// client/src/components/ShootingStars.jsx
import React, { useEffect, useState } from 'react'

const STARS = [
  {
    '--top': '20%',
    '--left': '5%',
    '--startX': '-141px',
    '--startY': '-265px',
    '--endX': '90vw',
    '--endY': '265px',
    '--starRotation': '110deg',
    '--duration': '24s',
    '--delay': '1s'
  },
  {
    '--top': '35%',
    '--left': '95%',
    '--startX': '112px',
    '--startY': '-278px',
    '--endX': '-90vw',
    '--endY': '278px',
    '--starRotation': '250deg',
    '--duration': '24s',
    '--delay': '8s'
  },
  {
    '--top': '70%',
    '--left': '95%',
    '--startX': '276px',
    '--startY': '117px',
    '--endX': '-90vw',
    '--endY': '-117px',
    '--starRotation': '280deg',
    '--duration': '24s',
    '--delay': '12s'
  },
  {
    '--top': '50%',
    '--left': '5%',
    '--startX': '-36px',
    '--startY': '298px',
    '--endX': '90vw',
    '--endY': '-298px',
    '--starRotation': '65deg',
    '--duration': '30s',
    '--delay': '18s'
  }
]

export default function ShootingStars() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')

    const sync = () => setEnabled(!media.matches) // CHANGED: disable animation if user prefers reduced motion
    sync()

    if (media.addEventListener) {
      media.addEventListener('change', sync) // CHANGED: modern listener
      return () => media.removeEventListener('change', sync)
    }

    // Fallback for older browsers
    media.addListener(sync) // CHANGED: legacy listener
    return () => media.removeListener(sync)
  }, [])

  if (!enabled) return null // CHANGED: professional accessibility polish

  return (
    <>
      {STARS.map((vars, idx) => (
        <div
          key={idx}
          className="shooting-star-container"
          style={vars} // CHANGED: data-driven config instead of duplicated markup
          aria-hidden="true"
        >
          <div className="shooting-star" />
        </div>
      ))}
    </>
  )
}
