import { useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { FaPlay } from 'react-icons/fa'
import '../AskFlaskWalkthrough.css'

const poster = '/images/ask-flask-walkthrough.webp'
const videoSource = '/media/ask-flask-walkthrough.mp4'

export default function AskFlaskWalkthrough() {
  const [playing, setPlaying] = useState(false)
  const player = useRef(null)

  function playWalkthrough() {
    // Mount the player before starting playback in the click handler.
    flushSync(() => setPlaying(true))
    const video = player.current
    video.focus({ preventScroll: true })
    video.play().catch(() => {
      // Native controls are available if the browser blocks playback.
    })
  }

  return (
    <div className="walkthrough-player">
      {playing ? (
        <video
          ref={player}
          controls
          muted
          playsInline
          preload="none"
          poster={poster}
          aria-label="Ask-Flask walkthrough"
        >
          <source src={videoSource} type="video/mp4" />
          <track kind="captions" src="/media/ask-flask-walkthrough.vtt" srcLang="en" label="English" default />
          <a href={videoSource}>Open the Ask-Flask walkthrough</a>
        </video>
      ) : (
        <>
          <img
            src={poster}
            width="1280"
            height="720"
            alt="Ask-Flask chat with the sessions sidebar and a saved conversation."
            decoding="async"
          />
          <button className="walkthrough-play" type="button" onClick={playWalkthrough}>
            <FaPlay aria-hidden="true" />
            <span>Play walkthrough</span>
            <span className="walkthrough-duration">0:20</span>
          </button>
        </>
      )}
    </div>
  )
}
