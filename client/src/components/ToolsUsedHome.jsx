import { useEffect, useMemo, useRef, useState } from 'react'
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
        { name: 'HTTP-Only Cookies', icon: <FaLock aria-hidden="true" /> },
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

  const tabsRef = useRef(null)
  const tabButtonRefs = useRef({})
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  useEffect(() => {
    const el = tabsRef.current
    if (!el) return

    const updateArrows = () => {
      const scrollable = el.scrollWidth - el.clientWidth > 1
      if (!scrollable) {
        setShowLeftArrow(false)
        setShowRightArrow(false)
        return
      }

      const maxScrollLeft = el.scrollWidth - el.clientWidth
      setShowLeftArrow(el.scrollLeft > 1)
      setShowRightArrow(el.scrollLeft < maxScrollLeft - 1)
    }

    updateArrows()

    const onScroll = () => updateArrows()
    el.addEventListener('scroll', onScroll, { passive: true })

    let ro = null
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => updateArrows())
      ro.observe(el)
    }

    window.addEventListener('resize', updateArrows, { passive: true })

    return () => {
      el.removeEventListener('scroll', onScroll)
      if (ro) ro.disconnect()
      window.removeEventListener('resize', updateArrows)
    }
  }, [])

  const handleTabKeyDown = (event, key) => {
    const index = tabs.indexOf(key)
    let nextIndex
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = tabs.length - 1
    else return

    event.preventDefault()
    const nextTab = tabs[nextIndex]
    setActiveTab(nextTab)
    const button = tabButtonRefs.current[nextTab]
    button?.focus({ preventScroll: true })
    button?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'auto' })
  }

  return (
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
              ref={tabsRef}
              className="tools-tabs"
              role="tablist"
              aria-label="Tool categories"
            >
              {tabs.map((key) => (
                <button
                  key={key}
                  id={`tools-tab-${key}`}
                  ref={(element) => { tabButtonRefs.current[key] = element }}
                  type="button"
                  className={`category-button ${activeTab === key ? 'active' : ''}`}
                  role="tab"
                  tabIndex={activeTab === key ? 0 : -1}
                  onKeyDown={(event) => handleTabKeyDown(event, key)}
                  aria-selected={activeTab === key}
                  aria-controls={`tools-panel-${key}`}
                  onClick={() => setActiveTab(key)}
                >
                  {categoryMeta[key].label}
                </button>
              ))}
            </div>
          </div>

          {tabs.map((key) => (
            <div
              key={key}
              id={`tools-panel-${key}`}
              className="tools-panel"
              role="tabpanel"
              tabIndex={0}
              hidden={activeTab !== key}
              aria-labelledby={`tools-tab-${key}`}
            >
              <div className="tools-panel-header">
                <div className="tools-panel-title-wrap">
                  <h3 className="tools-panel-title">{categoryMeta[key].label}</h3>
                  <span className="tools-panel-count" aria-label={`${tools[key].length} items`}>
                    {tools[key].length}
                  </span>
                </div>
                <p className="tools-panel-subtitle">{categoryMeta[key].subtitle}</p>
              </div>
              <ul className="tools-list" aria-label={`${categoryMeta[key].label} list`}>
                {tools[key].map((tool) => (
                  <li key={tool.name} className="tool-pill">
                    <span className="tool-icon" aria-hidden="true">{tool.icon}</span>
                    <span className="tool-name">{tool.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToolsUsedHome
