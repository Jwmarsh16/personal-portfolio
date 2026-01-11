// client/src/components/Skills.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react' // CHANGED: useMemo + refs for pro-grade animation perf
import '../Skills.css'
import {
  FaPython,
  FaNodeJs,
  FaReact,
  FaGithub,
  FaCloud,
  FaCubes,
  FaLayerGroup,
  FaCogs,
  FaTasks,
  FaClipboardCheck,
  FaLock,
  FaKey,
  FaHtml5,
  FaCloudDownloadAlt,
  FaDatabase,
  FaEdit,
  FaTerminal,
  FaLockOpen,
  FaCookie,
  FaAws,
  FaFlask as FaFlaskFA,
  FaCheckCircle,
  FaShieldAlt,
  FaLaptopCode,
  FaPause,
  FaPlay
} from 'react-icons/fa'
import { SiJavascript, SiFlask, SiRedux, SiPostgresql, SiVite, SiPostman, SiGnubash, SiJson, SiMui } from 'react-icons/si'

function Skills() {
  // CHANGED: memoize rows to avoid re-creating large arrays each render
  const topRow = useMemo(
    () => [
      { name: 'Python', icon: <FaPython />, color: '#306998' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'SQL', icon: <FaDatabase />, color: '#336791' },
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Flask', icon: <SiFlask />, color: '#000000' },
      { name: 'React', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
      { name: 'Git & GitHub', icon: <FaGithub />, color: '#181717' },
      { name: 'REST APIs', icon: <FaCloud />, color: '#4b8bbe' },
      { name: 'OOP', icon: <FaCubes />, color: '#C71585' },
      { name: 'Full Stack Development', icon: <FaLayerGroup />, color: '#808080' }
    ],
    []
  )

  const middleRow = useMemo(
    () => [
      { name: 'CI/CD Pipelines', icon: <FaCogs />, color: '#FF9900' },
      { name: 'Agile Methodology', icon: <FaTasks />, color: '#0052CC' },
      { name: 'Unit Testing', icon: <FaClipboardCheck />, color: '#E5E5E5' },
      { name: 'Bcrypt', icon: <FaLock />, color: '#2F4F4F' },
      { name: 'JWT', icon: <FaKey />, color: '#D63AFF' },
      { name: 'Flask-JWT-Extended', icon: <FaKey />, color: '#D63AFF' },
      { name: 'HTML & CSS', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'Axios', icon: <FaCloudDownloadAlt />, color: '#671ddf' },
      { name: 'SQLAlchemy', icon: <FaDatabase />, color: '#CE4441' },
      { name: 'CRUD Ops', icon: <FaEdit />, color: '#fcba03' },
      { name: 'Linux', icon: <FaTerminal />, color: '#333333' },
      { name: 'Vite', icon: <SiVite />, color: '#646CFF' }
    ],
    []
  )

  const bottomRow = useMemo(
    () => [
      { name: 'OAuth', icon: <FaLockOpen />, color: '#3C3C3D' },
      { name: 'HTTP-Only Cookies', icon: <FaCookie />, color: '#D2691E' },
      { name: 'AWS S3', icon: <FaAws />, color: '#FF9900' },
      { name: 'Render', icon: <FaCloud />, color: '#009BFF' },
      { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
      { name: 'Pytest', icon: <FaFlaskFA />, color: '#3776AB' },
      { name: 'Input Validation', icon: <FaCheckCircle />, color: '#008000' },
      { name: 'Bash', icon: <SiGnubash />, color: '#4EAA25' },
      { name: 'JSON', icon: <SiJson />, color: '#222222' },
      { name: 'Material-UI', icon: <SiMui />, color: '#0081CB' },
      { name: 'SAST/DAST', icon: <FaShieldAlt />, color: '#990000' },
      { name: 'VS Code', icon: <FaLaptopCode />, color: '#007ACC' }
    ],
    []
  )

  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false) // CHANGED: used for UI cursor state

  // Refs for DOM nodes (we apply transforms directly for smoother animation)
  const containerRef = useRef(null) // CHANGED: measure width safely
  const topTrackRef = useRef(null) // CHANGED: direct transform updates
  const middleTrackRef = useRef(null)
  const bottomTrackRef = useRef(null)

  // Runtime state stored in refs (prevents 60fps React re-renders)
  const dimsRef = useRef({
    containerWidth: 0,
    commonContentWidth: 0,
    cycleDistance: 0
  }) // CHANGED: professional animation approach

  const offsetsRef = useRef({
    top: null,
    middle: null
  }) // CHANGED: persisted offsets without re-render

  const dragRef = useRef({
    pointerId: null,
    startX: 0,
    deltaX: 0
  }) // CHANGED: pointer drag state in a ref

  const rafRef = useRef(null)
  const prevTimeRef = useRef(null)
  const speed = 100 // px/sec (same as before)

  const normalizeOffset = (raw) => {
    const { commonContentWidth: w, cycleDistance: d } = dimsRef.current
    if (!w || !d) return raw
    // Normalize into [-2w, -2w + d) which maps cleanly to the same loop
    return ((((raw + 2 * w) % d) + d) % d) - 2 * w // CHANGED: stable wrap math
  }

  const applyTransforms = (deltaX = 0) => {
    const top = offsetsRef.current.top
    const mid = offsetsRef.current.middle
    if (top == null || mid == null) return

    const topX = top + deltaX
    const midX = mid - deltaX // middle moves opposite

    if (topTrackRef.current) {
      topTrackRef.current.style.transform = `translateX(${topX}px)` // CHANGED: direct DOM transform for perf
    }
    if (bottomTrackRef.current) {
      bottomTrackRef.current.style.transform = `translateX(${topX}px)` // CHANGED: bottom locked to top
    }
    if (middleTrackRef.current) {
      middleTrackRef.current.style.transform = `translateX(${midX}px)` // CHANGED: opposite direction
    }
  }

  const measure = () => {
    const containerWidth = containerRef.current?.clientWidth || window.innerWidth

    // One “copy width” = scrollWidth / 2 because we render [...skills, ...skills]
    const topW = topTrackRef.current ? topTrackRef.current.scrollWidth / 2 : 0
    const midW = middleTrackRef.current ? middleTrackRef.current.scrollWidth / 2 : 0
    const botW = bottomTrackRef.current ? bottomTrackRef.current.scrollWidth / 2 : 0

    if (!topW || !midW || !botW) return

    const commonContentWidth = Math.max(topW, midW, botW)
    const cycleDistance = containerWidth + 2 * commonContentWidth

    dimsRef.current = { containerWidth, commonContentWidth, cycleDistance } // CHANGED: store in ref (no re-render)

    // Initialize offsets only once
    if (offsetsRef.current.top == null) {
      offsetsRef.current.top = containerWidth // CHANGED: start off-screen right
    }
    if (offsetsRef.current.middle == null) {
      offsetsRef.current.middle = -2 * commonContentWidth // CHANGED: start off-screen left
    }

    applyTransforms(0) // CHANGED: ensure correct initial paint
  }

  // CHANGED: prefer reduced motion => start paused (still user-controllable)
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) setIsPaused(true) // CHANGED: professional accessibility default
  }, [])

  // Measure on mount + on resize using ResizeObserver (industry standard)
  useEffect(() => {
    measure() // CHANGED: initial measure

    const onResize = () => measure()
    window.addEventListener('resize', onResize)

    const ro = new ResizeObserver(() => measure()) // CHANGED: responsive to font/layout changes
    if (containerRef.current) ro.observe(containerRef.current)

    return () => {
      window.removeEventListener('resize', onResize)
      ro.disconnect()
    }
  }, [])

  // Animation loop (DOM transforms; no per-frame React state)
  useEffect(() => {
    const animate = (time) => {
      if (prevTimeRef.current != null && !isPaused && !isDragging) {
        const dt = (time - prevTimeRef.current) / 1000
        const { containerWidth, commonContentWidth, cycleDistance } = dimsRef.current

        if (cycleDistance && commonContentWidth) {
          // top/bottom: scroll left
          const nextTop = offsetsRef.current.top - speed * dt
          offsetsRef.current.top =
            nextTop <= -2 * commonContentWidth ? nextTop + cycleDistance : nextTop

          // middle: scroll right
          const nextMid = offsetsRef.current.middle + speed * dt
          offsetsRef.current.middle =
            nextMid >= containerWidth ? nextMid - cycleDistance : nextMid

          applyTransforms(0)
        }
      }

      prevTimeRef.current = time
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isPaused, isDragging])

  const beginDrag = (e) => {
    // Only left click / primary pointer
    if (e.button != null && e.button !== 0) return // CHANGED: ignore right/middle clicks

    setIsDragging(true)
    dragRef.current.pointerId = e.pointerId
    dragRef.current.startX = e.clientX
    dragRef.current.deltaX = 0

    e.currentTarget.setPointerCapture(e.pointerId) // CHANGED: reliable drag even if cursor leaves row
  }

  const moveDrag = (e) => {
    if (!isDragging) return
    if (dragRef.current.pointerId !== e.pointerId) return

    const deltaX = e.clientX - dragRef.current.startX
    dragRef.current.deltaX = deltaX

    applyTransforms(deltaX) // CHANGED: immediate visual feedback while dragging
  }

  const endDrag = (e) => {
    if (!isDragging) return
    if (dragRef.current.pointerId !== e.pointerId) return

    const deltaX = dragRef.current.deltaX

    // Commit offsets with wrap normalization
    offsetsRef.current.top = normalizeOffset(offsetsRef.current.top + deltaX) // CHANGED: commit drag
    offsetsRef.current.middle = normalizeOffset(offsetsRef.current.middle - deltaX)

    dragRef.current.pointerId = null
    dragRef.current.startX = 0
    dragRef.current.deltaX = 0

    setIsDragging(false)
    applyTransforms(0) // CHANGED: snap to committed offsets
  }

  const handlePausePlay = () => {
    setIsPaused((v) => !v) // CHANGED: functional setState
  }

  const renderRow = (skills, label, trackRef) => (
    <div
      className={`skills-row ${isDragging ? 'is-dragging' : ''}`}
      onPointerDown={beginDrag} // CHANGED: pointer events support mouse + touch
      onPointerMove={moveDrag} // CHANGED
      onPointerUp={endDrag} // CHANGED
      onPointerCancel={endDrag} // CHANGED: handle OS/browser cancel
      role="group"
      aria-label={`${label} skills row (drag to scroll)`}
    >
      <div className="scroll-track" ref={trackRef}>
        {[...skills, ...skills].map((skill, index) => (
          <div key={`${label}-${index}`} className="skill-card">
            <span className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    // CHANGED: remove id="skills" here to avoid duplicate IDs (Home page wraps the section)
    <section className="skills" aria-label="Skills">
      <div className="skills-container" ref={containerRef}>
        <div className="skills-header">
          <div className="skills-title-wrap">
            <h2 className="skills-title">Skills</h2> {/* CHANGED: real heading (was empty) */}
            <p className="skills-hint">Drag a row to scroll • Pause to inspect</p> {/* CHANGED: micro UX */}
          </div>

          <div className="skills-controls">
            <button
              type="button"
              onClick={handlePausePlay}
              aria-pressed={isPaused}
              className="skills-control-btn"
            >
              {isPaused ? <FaPlay aria-hidden="true" /> : <FaPause aria-hidden="true" />}{' '}
              {isPaused ? 'Play' : 'Pause'}
            </button>
          </div>
        </div>

        {renderRow(topRow, 'Top', topTrackRef)}
        {renderRow(middleRow, 'Middle', middleTrackRef)}
        {renderRow(bottomRow, 'Bottom', bottomTrackRef)}
      </div>
    </section>
  )
}

export default Skills
