// client/src/components/ShootingStars.jsx
import React from 'react'

function ShootingStars() {
  // CHANGED: extracted from App.jsx to keep routing/layout clean and maintainable
  const stars = [
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

  return (
    <>
      {stars.map((styleVars, idx) => (
        <div
          key={idx}
          className="shooting-star-container"
          style={styleVars}
          aria-hidden="true" // CHANGED: decorative only
        >
          <div className="shooting-star" />
        </div>
      ))}
    </>
  )
}

export default ShootingStars
