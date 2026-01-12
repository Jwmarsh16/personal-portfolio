// client/src/components/ToolsUsedHome.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react' // CHANGED: add hooks for smart tab arrows
import {
  FaPython,
  FaDatabase,
  FaTerminal,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaLock,
  FaKey,
  FaCloud,
  FaAws,
  FaCogs,
  FaBug,
  FaUserShield,
  FaCheckCircle,
  FaLaptopCode,
  FaCodeBranch
} from 'react-icons/fa'
import {
  SiJavascript,
  SiFlask,
  SiReact,
  SiRedux,
  SiVite,
  SiPostgresql,
  SiPostman,
  SiSqlalchemy,
  SiNodedotjs,
  SiRender
} from 'react-icons/si'
import '../ToolsUsedHome.css'

function ToolsUsedHome() {
  const tools = useMemo(
    () => ({
      languages: [
        { name: 'Python', icon: <FaPython aria-hidden="true" /> },
        { name: 'JavaScript', icon: <SiJavascript aria-hidden="true" /> },
        { name: 'SQL', icon: <FaDatabase aria-hidden="true" /> },
        { name: 'Bash', icon: <FaTerminal aria-hidden="true" /> },
        { name: 'HTML', icon: <FaHtml5 aria-hidden="true" /> },
        { name: 'CSS', icon: <FaCss3Alt aria-hidden="true" /> }
      ],
      frameworks: [
        { name: 'Flask', icon: <SiFlask aria-hidden="true" /> },
        { name: 'React', icon: <SiReact aria-hidden="true" /> },
        { name: 'Redux', icon: <SiRedux aria-hidden="true" /> },
        { name: 'Vite', icon: <SiVite aria-hidden="true" /> },
        { name: 'Node.js', icon: <SiNodedotjs aria-hidden="true" /> },
        { name: 'SQLAlchemy', icon: <SiSqlalchemy aria-hidden="true" /> }
      ],
      tools: [
        { name: 'Git', icon: <FaGit aria-hidden="true" /> },
        { name: 'GitHub', icon: <FaGithub aria-hidden="true" /> },
        { name: 'Bcrypt', icon: <FaLock aria-hidden="true" /> },
        { name: 'Pytest', icon: <FaBug aria-hidden="true" /> },
        { name: 'Postman', icon: <SiPostman aria-hidden="true" /> },
        { name: 'VS Code', icon: <FaLaptopCode aria-hidden="true" /> }
      ],
      os: [{ name: 'Linux', icon: <FaTerminal aria-hidden="true" /> }],
      cloud: [
        { name: 'AWS S3', icon: <FaAws aria-hidden="true" /> },
        { name: 'Render', icon: <SiRender aria-hidden="true" /> },
        { name: 'CI/CD Pipelines', icon: <FaCogs aria-hidden="true" /> }
      ],
      databases: [{ name: 'PostgreSQL', icon: <SiPostgresql aria-hidden="true" /> }],
      security: [
        { name: 'JWT Authentication', icon: <FaKey aria-hidden="true" /> },
        { name: 'OAuth', icon: <FaKey aria-hidden="true" /> },
        { name: 'HTTP-Only Cookies', icon: <FaLock aria-hidden="true" /> },
        { name: 'SAST/DAST', icon: <FaUserShield aria-hidden="true" /> },
        { name: 'Input Validation', icon: <FaCheckCircle aria-hidden="true" /> }
      ],
      practices: [
        { name: 'OOP', icon: <FaCodeBranch aria-hidden="true" /> },
        { name: 'REST API Development', icon: <FaCloud aria-hidden="true" /> },
        { name: 'CI/CD', icon: <FaCogs aria-hidden="true" /> },
        { name: 'CRUD', icon: <FaCodeBranch aria-hidden="true" /> },
        { name: 'Unit Testing', icon: <FaBug aria-hidden="true" /> },
        { name: 'Agile Methodology', icon: <FaUserShield aria-hidden="true" /> }
      ]
    }),
    []
  )

  const categoryMeta = useMemo(
    () => ({
      languages: { label: 'Languages', subtitle: 'What I write code in most often.' },
      frameworks: { label: 'Frameworks & Libraries', subtitle: 'What I use to ship UIs and APIs.' },
      tools: { label: 'Tools & Platforms', subtitle: 'What I use to build, test, and collaborate.' },
      cloud: { label: 'Cloud & DevOps', subtitle: 'How I deploy and automate.' },
      databases: { label: 'Databases', subtitle: 'Where app data lives.' },
      security: { label: 'Security & Authentication', subtitle: 'How I protect users and APIs.' },
      practices: { label: 'Development Practices', subtitle: 'How I build reliably and iteratively.' },
      os: { label: 'Operating Systems', subtitle: 'Where I do most dev work.' }
    }),
    []
  )

  const tabs = useMemo(
    () => ['languages', 'frameworks', 'tools', 'cloud', 'databases', 'security', 'practices', 'os'],
    []
  )

  const [activeTab, setActiveTab] = useState('languages')

  const tabsRef = useRef(null) // CHANGED: read scroll state of the category tab row
  const [showLeftArrow, setShowLeftArrow] = useState(false) // CHANGED: hide left arrow when fully left
  const [showRightArrow, setShowRightArrow] = useState(false) // CHANGED: hide right arrow when fully right

  useEffect(() => {
    const el = tabsRef.current
    if (!el) return

    const updateArrows = () => {
      const scrollable = el.scrollWidth - el.clientWidth > 1 // CHANGED: only show arrows when overflow exists
      if (!scrollable) {
        setShowLeftArrow(false) // CHANGED: hide both when not scrollable
        setShowRightArrow(false) // CHANGED: hide both when not scrollable
        return
      }

      const maxScrollLeft = el.scrollWidth - el.clientWidth
      setShowLeftArrow(el.scrollLeft > 1) // CHANGED: hide left arrow at the start
      setShowRightArrow(el.scrollLeft < maxScrollLeft - 1) // CHANGED: hide right arrow at the end
    }

    updateArrows() // CHANGED: set initial state after mount

    const onScroll = () => updateArrows() // CHANGED: keep arrow state in sync
    el.addEventListener('scroll', onScroll, { passive: true }) // CHANGED: passive scroll listener for perf

    let ro = null // CHANGED: allow environments without ResizeObserver (defensive)
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => updateArrows()) // CHANGED: respond to layout changes
      ro.observe(el)
    }

    window.addEventListener('resize', updateArrows, { passive: true }) // CHANGED: respond to viewport changes

    return () => {
      el.removeEventListener('scroll', onScroll)
      if (ro) ro.disconnect() // CHANGED: guard when ResizeObserver is unavailable
      window.removeEventListener('resize', updateArrows)
    }
  }, [])

  const activeLabel = categoryMeta[activeTab]?.label || 'Tools'
  const activeSubtitle = categoryMeta[activeTab]?.subtitle || ''
  const activeTools = tools[activeTab] || []
  const activeCount = activeTools.length

  return (
    // NOTE: Home.jsx owns id="tools" so we do NOT set it here.
    <section className="tools-used-section" aria-label="Tools used">
      <div className="tools-used-container">
        <div className="tools-used-header">
          <h2 className="tools-heading">Tools I use</h2>
          <p className="tools-subtext">
            A curated snapshot of the languages, frameworks, and tools I’ve used to ship full-stack
            projects.
          </p>
        </div>

        <div className="tools-surface">
          <div className="tools-tabs-wrap">
            {/* CHANGED: subtle arrows on mobile to signal horizontal scroll */}
            <span
              className={`tools-tabs-arrow tools-tabs-arrow--left ${showLeftArrow ? '' : 'tools-tabs-arrow--hidden'}`}
              aria-hidden="true"
            >
              ‹
            </span>
            <span
              className={`tools-tabs-arrow tools-tabs-arrow--right ${showRightArrow ? '' : 'tools-tabs-arrow--hidden'}`}
              aria-hidden="true"
            >
              ›
            </span>

            <div
              ref={tabsRef} // CHANGED: needed to measure/track horizontal scroll
              className="tools-tabs"
              role="tablist"
              aria-label="Tool categories"
            >
              {tabs.map((key) => (
                <button
                  key={key}
                  id={`tools-tab-${key}`}
                  type="button"
                  className={`category-button ${activeTab === key ? 'active' : ''}`}
                  role="tab"
                  aria-selected={activeTab === key}
                  aria-controls={`tools-panel-${key}`}
                  onClick={() => setActiveTab(key)}
                >
                  {categoryMeta[key].label}
                </button>
              ))}
            </div>
          </div>

          <div
            id={`tools-panel-${activeTab}`}
            className="tools-panel"
            role="tabpanel"
            aria-labelledby={`tools-tab-${activeTab}`}
          >
            <div className="tools-panel-header">
              <div className="tools-panel-title-wrap">
                <h3 className="tools-panel-title">{activeLabel}</h3>
                <span className="tools-panel-count" aria-label={`${activeCount} items`}>
                  {activeCount}
                </span>
              </div>

              <p className="tools-panel-subtitle">{activeSubtitle}</p>
            </div>

            <div className="tools-list" aria-label={`${activeLabel} list`}>
              {activeTools.map((tool) => (
                <span key={tool.name} className="tool-pill">
                  <span className="tool-icon" aria-hidden="true">
                    {tool.icon}
                  </span>
                  <span className="tool-name">{tool.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ToolsUsedHome
