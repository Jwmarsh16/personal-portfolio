// client/src/components/Skills.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react'
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
import {
  SiJavascript,
  SiFlask,
  SiRedux,
  SiPostgresql,
  SiVite,
  SiPostman,
  SiGnubash,
  SiJson,
  SiMui
} from 'react-icons/si'

function Skills() {
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
  const [isDragging, setIsDragging] = useState(false)

  const containerRef = useRef(null)
  const topTrackRef = useRef(null)
  const middleTrackRef = useRef(null)
  const bottomTrackRef = useRef(null)

  const dimsRef = useRef({
    containerWidth: 0,
    commonContentWidth: 0,
    cycleDistance: 0
  })

  const offsetsRef = useRef({
    top: null,
    middle: null
  })

  const dragRef = useRef({
    pointerId: null,
    startX: 0,
    deltaX: 0
  })

  const rafRef = useRef(null)
  const prevTimeRef = useRef(null)
  const speed = 100

  const normalizeOffset = (raw) => {
    const { commonContentWidth: w, cycleDistance: d } = dimsRef.current
    if (!w || !d) return raw
    return ((((raw + 2 * w) % d) + d) % d) - 2 * w
  }

  const applyTransforms = (deltaX = 0) => {
    const top = offsetsRef.current.top
    const mid = offsetsRef.current.middle
    if (top == null || mid == null) return

    const topX = top + deltaX
    const midX = mid - deltaX

    if (topTrackRef.current) topTrackRef.current.style.transform = `translateX(${topX}px)`
    if (bottomTrackRef.current) bottomTrackRef.current.style.transform = `translateX(${topX}px)`
    if (middleTrackRef.current) middleTrackRef.current.style.transform = `translateX(${midX}px)`
  }

  const measure = () => {
    const containerWidth = containerRef.current?.clientWidth || window.innerWidth

    const topW = topTrackRef.current ? topTrackRef.current.scrollWidth / 2 : 0
    const midW = middleTrackRef.current ? middleTrackRef.current.scrollWidth / 2 : 0
    const botW = bottomTrackRef.current ? bottomTrackRef.current.scrollWidth / 2 : 0

    if (!topW || !midW || !botW) return

    const commonContentWidth = Math.max(topW, midW, botW)
    const cycleDistance = containerWidth + 2 * commonContentWidth

    dimsRef.current = { containerWidth, commonContentWidth, cycleDistance }

    if (offsetsRef.current.top == null) offsetsRef.current.top = containerWidth
    if (offsetsRef.current.middle == null) offsetsRef.current.middle = -2 * commonContentWidth

    applyTransforms(0)
  }

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) setIsPaused(true)
  }, [])

  useEffect(() => {
    measure()

    const onResize = () => measure()
    window.addEventListener('resize', onResize)

    const ro = new ResizeObserver(() => measure())
    if (containerRef.current) ro.observe(containerRef.current)

    return () => {
      window.removeEventListener('resize', onResize)
      ro.disconnect()
    }
  }, [])

  useEffect(() => {
    const animate = (time) => {
      if (prevTimeRef.current != null && !isPaused && !isDragging) {
        const dt = (time - prevTimeRef.current) / 1000
        const { containerWidth, commonContentWidth, cycleDistance } = dimsRef.current

        if (cycleDistance && commonContentWidth) {
          const nextTop = offsetsRef.current.top - speed * dt
          offsetsRef.current.top =
            nextTop <= -2 * commonContentWidth ? nextTop + cycleDistance : nextTop

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
    if (e.button != null && e.button !== 0) return

    setIsDragging(true)
    dragRef.current.pointerId = e.pointerId
    dragRef.current.startX = e.clientX
    dragRef.current.deltaX = 0

    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const moveDrag = (e) => {
    if (!isDragging) return
    if (dragRef.current.pointerId !== e.pointerId) return

    const deltaX = e.clientX - dragRef.current.startX
    dragRef.current.deltaX = deltaX
    applyTransforms(deltaX)
  }

  const endDrag = (e) => {
    if (!isDragging) return
    if (dragRef.current.pointerId !== e.pointerId) return

    const deltaX = dragRef.current.deltaX

    offsetsRef.current.top = normalizeOffset(offsetsRef.current.top + deltaX)
    offsetsRef.current.middle = normalizeOffset(offsetsRef.current.middle - deltaX)

    dragRef.current.pointerId = null
    dragRef.current.startX = 0
    dragRef.current.deltaX = 0

    setIsDragging(false)
    applyTransforms(0)
  }

  const handlePausePlay = () => {
    setIsPaused((v) => !v)
  }

  const renderRow = (skills, label, trackRef) => (
    <div
      className={`skills-row ${isDragging ? 'is-dragging' : ''}`}
      onPointerDown={beginDrag}
      onPointerMove={moveDrag}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
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
    // NOTE: Home.jsx owns id="skills" so we do NOT set it here.
    <div className="skills" aria-label="Skills">
      <div className="skills-container" ref={containerRef}>
        <div className="skills-header">
          <div className="skills-title-wrap">
            <h2 className="skills-title">Skills</h2>
            <p className="skills-hint">Drag a row to scroll • Pause to inspect</p>
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
    </div>
  )
}

export default Skills
