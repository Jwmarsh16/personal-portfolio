// client/src/components/ToolsUsedHome.jsx
import React, { useMemo, useState } from 'react'
import {
  FaPython,
  FaDatabase,
  FaCodeBranch,
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
  FaLaptopCode
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

const tools = {
  languages: [
    { name: 'Python', icon: <FaPython /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'Bash', icon: <FaTerminal /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> }
  ],
  frameworks: [
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'SQLAlchemy', icon: <SiSqlalchemy /> }
  ],
  ai: [
    { name: 'OpenAI API (Chat Completions)', icon: <FaCloud /> },
    { name: 'Embeddings', icon: <FaDatabase /> },
    { name: 'SSE Token Streaming', icon: <FaCogs /> },
    { name: 'Context Window Management', icon: <FaCodeBranch /> },
    { name: 'Pinned Session Memory', icon: <FaLock /> },
    { name: 'RAG (FAISS prototype)', icon: <FaDatabase /> },
    { name: 'PII Redaction', icon: <FaUserShield /> },
    { name: 'Simple Evals', icon: <FaCheckCircle /> },
    { name: 'Micro-agents', icon: <FaCogs /> }
  ],
  tools: [
    { name: 'Git', icon: <FaGit /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Bcrypt', icon: <FaLock /> },
    { name: 'Pytest', icon: <FaBug /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'VS Code', icon: <FaLaptopCode /> }
  ],
  os: [{ name: 'Linux', icon: <FaTerminal /> }],
  cloud: [
    { name: 'AWS S3', icon: <FaAws /> },
    { name: 'Render', icon: <SiRender /> },
    { name: 'CI/CD Pipelines', icon: <FaCogs /> }
  ],
  databases: [{ name: 'PostgreSQL', icon: <SiPostgresql /> }],
  security: [
    { name: 'JWT Authentication', icon: <FaKey /> },
    { name: 'OAuth', icon: <FaKey /> },
    { name: 'HTTP-Only Cookies', icon: <FaLock /> },
    { name: 'SAST/DAST', icon: <FaUserShield /> },
    { name: 'Input Validation', icon: <FaCheckCircle /> }
  ],
  practices: [
    { name: 'OOP', icon: <FaCodeBranch /> },
    { name: 'REST API Development', icon: <FaCloud /> },
    { name: 'CI/CD', icon: <FaCogs /> },
    { name: 'CRUD', icon: <FaCodeBranch /> },
    { name: 'Unit Testing', icon: <FaBug /> },
    { name: 'Agile Methodology', icon: <FaUserShield /> }
  ]
}

const categoryLabels = {
  languages: 'Languages',
  frameworks: 'Frameworks & Libraries',
  ai: 'AI & LLM',
  tools: 'Tools & Platforms',
  os: 'Operating Systems',
  cloud: 'Cloud & DevOps',
  databases: 'Databases',
  security: 'Security & Authentication',
  practices: 'Development Practices'
}

function ToolsUsedHome() {
  const categories = useMemo(() => Object.keys(categoryLabels), [])
  const [activeTab, setActiveTab] = useState('languages')

  const activeLabel = categoryLabels[activeTab]
  const activeTools = tools[activeTab] ?? []

  const tabId = (category) => `tools-tab-${category}`
  const panelId = (category) => `tools-panel-${category}`

  return (
    // NOTE: Home.jsx owns id="tools" so we do NOT set it here.
    <div className="tools-used-section">
      <div className="tools-used-container">
        <div className="tools-used-header">
          <h2 className="tools-heading">Tools I use</h2>
          <p className="tools-subtext">
            A curated snapshot of the languages, frameworks, and practices I’ve used to
            ship full-stack projects.
          </p>
        </div>

        <div className="tools-surface">
          <div className="tools-tabs" role="tablist" aria-label="Tool categories">
            {categories.map((category) => (
              <button
                key={category}
                id={tabId(category)}
                type="button"
                className={`category-button ${activeTab === category ? 'active' : ''}`}
                onClick={() => setActiveTab(category)}
                role="tab"
                aria-selected={activeTab === category}
                aria-controls={panelId(category)}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>

          <div
            id={panelId(activeTab)}
            className="tools-panel"
            role="tabpanel"
            aria-labelledby={tabId(activeTab)}
          >
            <div className="tools-panel-header">
              <h3 className="tools-panel-title">{activeLabel}</h3>
              <p className="tools-panel-subtitle">{activeTools.length} items</p>
            </div>

            <div className="tools-list" aria-label={`${activeLabel} list`}>
              {activeTools.map((tool, index) => (
                <span key={`${activeTab}-${index}`} className="tool-pill">
                  <span className="tool-icon" aria-hidden="true">
                    {tool.icon}
                  </span>
                  <span className="tool-name">{tool.name}</span>
                  {/* CHANGED: wrap name in tool-name so CSS can guarantee it never disappears */}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToolsUsedHome
