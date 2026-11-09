import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Skills from './Skills'
import '../AboutMe.css'

const toolTabs = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Data & Cloud' },
  { id: 'others', label: 'Workflow' }
]

function AboutMe() {
  const [activeTab, setActiveTab] = useState('frontend')
  const tabRefs = useRef({})

  const handleTabKeyDown = (event, id) => {
    const index = toolTabs.findIndex((tab) => tab.id === id)
    let nextIndex
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % toolTabs.length
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + toolTabs.length) % toolTabs.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = toolTabs.length - 1
    else return

    event.preventDefault()
    const nextTab = toolTabs[nextIndex].id
    setActiveTab(nextTab)
    tabRefs.current[nextTab]?.focus()
  }


  const headlineHighlights = [
    'SSE streaming chat UX',
    'Pinned memory + context management',
    'RAG (Embeddings + FAISS)'
  ]

  const tools = {
    frontend: [
      'HTML',
      'CSS',
      'JavaScript (ES6+)',
      'React',
      'React Router',
      'Redux Toolkit',
      'Vite',
      'Markdown (react-markdown)',
      'PrismJS'
    ],
    backend: [
      'Python',
      'Flask',
      'REST APIs',
      'SQLAlchemy',
      'Pydantic',
      'SSE streaming',
      'OpenAI API',
      'JWT (HTTP-only cookies)',
      'Gunicorn',
      'Rate limiting (Flask-Limiter)'
    ],
    database: ['PostgreSQL', 'SQLite', 'Alembic', 'Render', 'AWS S3'],
    others: [
      'Git',
      'GitHub',
      'GitHub Actions',
      'Pytest',
      'Vitest',
      'Postman/Insomnia',
      'Linux',
      'VS Code'
    ]
  }

  const renderTools = (category) => (
    <div
      key={category}
      className="about-tools-panel"
      id={`about-tools-panel-${category}`}
      role="tabpanel"
      tabIndex={0}
      hidden={activeTab !== category}
      aria-labelledby={`about-tools-tab-${category}`}
    >
      <ul className="tool-tags">
        {tools[category].map((tool) => (
          <li key={tool} className="tool-pill">{tool}</li>
        ))}
      </ul>
    </div>
  )

  return (
    <section id="about" className="about-me fade-in" aria-label="About page">
      <div className="about-page-container">
        <header className="about-hero">
          <div className="about-hero-title">
            <h1 className="about-name">Jonathan Marshall</h1>
            <h2 className="about-role">AI Software Developer</h2>
            <p className="about-tagline">Builder. Problem-solver. Lifelong learner.</p>
          </div>
          <p className="about-summary">
            I build production-style AI web apps with{' '}
            <span className="about-highlight">React, Flask, and PostgreSQL</span>.
            My signature strengths are shipping{' '}
            <span className="about-highlight">streaming chat UX (SSE)</span>, managing
            long-running conversations with{' '}
            <span className="about-highlight">pinned memory + context strategy</span>, and
            extending assistants with{' '}
            <span className="about-highlight">RAG (embeddings + FAISS)</span>.
          </p>
          <div className="about-signature" aria-label="Signature strengths">
            <p className="about-signature-label">Signature strengths</p>
            <div className="about-signature-chips">
              {headlineHighlights.map((h) => (
                <span key={h} className="chip chip--primary">
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="about-hero-cta">
            <Link to="/resume" className="resume-link">
              📄 View My Resume
            </Link>
            <p className="about-cta-note">Open to AI/full-stack roles • Austin, TX</p>
          </div>
        </header>

        <div className="about-skills-wrapper">
          <Skills />
        </div>

        <div className="about-content-container">
          <div className="about-split-card">
            <div className="about-card">
              <h3>My Journey</h3>
              <p>
                I’m Jon—a <span className="about-highlight">full-stack developer</span>{' '}
                who likes owning problems end-to-end: designing an API, building the UI,
                tightening edge cases, and shipping.
              </p>
              <p>
                I bring leadership and adaptability from four years as a{' '}
                <span className="about-highlight">nuclear project manager</span>, where I
                coordinated cross-functional teams, managed strict standards, and made
                fast decisions under pressure.
              </p>
              <p>
                That experience shaped how I build software now: with a focus on{' '}
                <span className="about-highlight">clarity, reliability, and momentum</span>.
              </p>
            </div>

            <img
              src="/images/my-journey.webp"
              alt="My Journey"
              className="about-img"
              width="1024"
              height="1024"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="about-card">
            <h3>Breaking into Tech</h3>
            <p>
              I graduated from <span className="about-highlight">Flatiron School</span>{' '}
              and immediately started building portfolio-grade products with real
              constraints: authentication, data modeling, deployments, and performance
              tuning.
            </p>
            <p>
              Recently, I’ve been focused on AI product engineering, including{' '}
              <span className="about-highlight">LLM UX patterns</span>, streaming
              experiences, and building features like pinned memory and small RAG
              prototypes.
            </p>
          </div>
          <div className="about-card">
            <h3>What I’ve Built</h3>
            <p>
              <strong>Ask-Flask</strong> – An AI chat app where I shipped a fast,
              production-feeling experience using{' '}
              <span className="about-highlight">SSE streaming</span>,{' '}
              <span className="about-highlight">pinned session memory</span>, and a{' '}
              <span className="about-highlight">RAG prototype (embeddings + FAISS)</span>.
              Built with <span className="about-highlight">React (Vite)</span>,{' '}
              <span className="about-highlight">Flask</span>, and{' '}
              <span className="about-highlight">SQLAlchemy</span> using the{' '}
              <span className="about-highlight">OpenAI API</span>.
            </p>
            <p>
              <strong>Fantasy Football Research Hub</strong> – A full-stack platform for
              rankings, reviews, and player analysis. Built with{' '}
              <span className="about-highlight">React, Flask, PostgreSQL</span>, and{' '}
              <span className="about-highlight">AWS S3</span> for backend profile-image uploads and signed image retrieval.
            </p>
            <p>
              <strong>Event Manager</strong> – A group-based event coordination tool with
              CRUD flows, authentication, and secure backend logic.
            </p>
          </div>

          <div className="about-card">
            <h3>Engineering Highlights</h3>
            <p className="about-card-subtext">
              The four areas I lead with, because they show up in real product work.
            </p>

            <div className="about-highlights-grid">
              <div className="about-highlight-card">
                <h4 className="about-highlight-title">Streaming Chat UX (SSE)</h4>
                <ul className="about-highlight-list">
                  <li>Token streaming for instant feedback and “alive” chat UI</li>
                  <li>Markdown + code blocks with Prism highlighting</li>
                  <li>Unified error handling that works in stream and non-stream paths</li>
                </ul>
              </div>

              <div className="about-highlight-card">
                <h4 className="about-highlight-title">Pinned Memory + Context Strategy</h4>
                <ul className="about-highlight-list">
                  <li>Durable session memory that stays compact and useful</li>
                  <li>Context window management (what to keep, trim, summarize)</li>
                  <li>Designing UX around long-running sessions, not one-off prompts</li>
                </ul>
              </div>

              <div className="about-highlight-card">
                <h4 className="about-highlight-title">RAG (Embeddings + FAISS)</h4>
                <ul className="about-highlight-list">
                  <li>Text chunking + embeddings for retrieval</li>
                  <li>FAISS index for fast similarity search</li>
                  <li>Light evals and “why this answer” transparency patterns</li>
                </ul>
              </div>

              <div className="about-highlight-card">
                <h4 className="about-highlight-title">Production Mindset</h4>
                <ul className="about-highlight-list">
                  <li>Security headers, auth patterns, and rate limiting</li>
                  <li>Structured logs + request IDs for debugging</li>
                  <li>CI checks and tests to protect shipped behavior</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-card">
            <h3>Timeline</h3>
            <ol className="about-timeline">
              <li className="about-timeline-item">
                <div className="about-timeline-meta">
                  <span className="about-timeline-date">2012–2020</span>
                  <span className="about-timeline-title">Nuclear Technician • BWXT</span>
                </div>
                <p className="about-timeline-body">
                  Built a foundation in quality, documentation, and precision work in
                  high-standard environments.
                </p>
              </li>

              <li className="about-timeline-item">
                <div className="about-timeline-meta">
                  <span className="about-timeline-date">2020–2024</span>
                  <span className="about-timeline-title">
                    Nuclear Project Manager • The Merrick Group
                  </span>
                </div>
                <p className="about-timeline-body">
                  Led cross-functional teams and delivered under strict deadlines and
                  constraints—skills I now apply to shipping software.
                </p>
              </li>

              <li className="about-timeline-item">
                <div className="about-timeline-meta">
                  <span className="about-timeline-date">2024</span>
                  <span className="about-timeline-title">Flatiron School • Full-stack</span>
                </div>
                <p className="about-timeline-body">
                  Transitioned into software and started building full-stack projects with
                  real deployments and end-to-end ownership.
                </p>
              </li>

              <li className="about-timeline-item">
                <div className="about-timeline-meta">
                  <span className="about-timeline-date">2025–Now</span>
                  <span className="about-timeline-title">AI Product Engineering</span>
                </div>
                <p className="about-timeline-body">
                  Building production-style AI apps (streaming chat UX, session memory,
                  reliability and security patterns) and leveling up quickly.
                </p>
              </li>
            </ol>
          </div>

          <div className="about-card about-tools-section">
            <h3 className="tools-heading">Toolbox</h3>
            <p className="tools-subtext">Tools and technologies I’ve used in shipped projects.</p>

            <div className="tab-buttons" role="tablist" aria-label="Tool categories">
              {toolTabs.map(({ id, label }) => (
                <button
                  key={id}
                  ref={(element) => { tabRefs.current[id] = element }}
                  id={`about-tools-tab-${id}`}
                  type="button"
                  className={activeTab === id ? 'active' : ''}
                  onClick={() => setActiveTab(id)}
                  onKeyDown={(event) => handleTabKeyDown(event, id)}
                  role="tab"
                  tabIndex={activeTab === id ? 0 : -1}
                  aria-selected={activeTab === id}
                  aria-controls={`about-tools-panel-${id}`}
                >
                  {label}
                </button>
              ))}
            </div>

            {toolTabs.map(({ id }) => renderTools(id))}
          </div>

          <div className="about-card">
            <h3>Core Strengths</h3>
            <ul className="pills">
              <li>End-to-end ownership</li>
              <li>Fast learner</li>
              <li>Clean UI + strong APIs</li>
              <li>Performance-minded</li>
              <li>Security & reliability mindset</li>
              <li>Clear communication</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>What I’m Looking For</h3>
            <p>
              I’m seeking a <span className="about-highlight">software engineering role</span>{' '}
              where I can build real products, collaborate with strong teammates, and keep
              leveling up.
            </p>
            <p>
              I’m actively improving in{' '}
              <span className="about-highlight">TypeScript, Docker, and DevOps</span>, and
              I’m excited to work on teams that value{' '}
              <span className="about-highlight">shipping, iteration, and quality</span>.
            </p>
          </div>

          <div className="about-split-card">
            <img
              src="/images/beyond-tech.webp"
              alt="Beyond Tech"
              className="about-img"
              width="1024"
              height="1024"
              loading="lazy"
              decoding="async"
            />

            <div className="about-card">
              <h3>Beyond Tech</h3>
              <p>
                Outside of coding, I’m into{' '}
                <span className="about-highlight">sports, fitness, hiking, games</span>, and
                live music.
              </p>
              <p>
                I enjoy building with people who are{' '}
                <span className="about-highlight">curious, driven, and collaborative</span>.
                If that’s you, let’s connect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
