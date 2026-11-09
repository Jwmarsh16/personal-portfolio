import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaBriefcase, FaGraduationCap, FaFileAlt } from 'react-icons/fa'
import '../AboutMeTabs.css'

const tabs = [
  { id: 'intro', label: 'Intro', icon: FaUser },
  { id: 'career', label: 'Career', icon: FaBriefcase },
  { id: 'education', label: 'Education', icon: FaGraduationCap },
  { id: 'resume', label: 'Resume', icon: FaFileAlt }
]

export default function AboutMeTabs() {
  const [activeTab, setActiveTab] = useState('intro')
  const tabRefs = useRef({})

  const handleTabKeyDown = (event, id) => {
    const index = tabs.findIndex((tab) => tab.id === id)
    let nextIndex
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = tabs.length - 1
    else return

    event.preventDefault()
    const nextTab = tabs[nextIndex].id
    setActiveTab(nextTab)
    tabRefs.current[nextTab]?.focus()
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'intro':
        return (
          <div className="about-tab-content">
            <p>
              I’m an Austin-based software developer and Flatiron School graduate.
              I build full-stack applications with React, Flask, and PostgreSQL,
              including paid client work and projects that explore practical AI features.
            </p>
            <p>
              Before software, I spent four years managing nuclear inspection projects.
              That work taught me to break down complex problems, communicate technical
              decisions clearly, and keep a team moving under tight deadlines.
              I bring the same care to the code and interfaces I build.
            </p>
          </div>
        )
      case 'career':
        return (
          <div className="about-tab-content">
            <div className="job-entry">
              <h3 className="job-title">Contract Software Developer</h3>
              <p className="job-company">Ecopop, Inc. · Austin, TX</p>
              <p className="job-dates">January – June 2026</p>
              <ul className="job-details">
                <li>Built and deployed a paid client MVP with React, Flask, and PostgreSQL.</li>
                <li>Implemented Stripe Checkout, webhook signature verification, and retry-safe fulfillment.</li>
              </ul>
            </div>
            <div className="job-entry">
              <h3 className="job-title">Nuclear Project Manager</h3>
              <p className="job-company">The Merrick Group · West Hazleton, PA</p>
              <p className="job-dates">February 2020 – April 2024</p>
              <ul className="job-details">
                <li>Managed nuclear inspection projects from planning through technical reporting.</li>
                <li>Coordinated teams of more than 40 engineers and technicians and translated findings into stakeholder decisions.</li>
              </ul>
            </div>
            <Link className="about-resume-link" to="/resume#experience">View full experience</Link>
          </div>
        )
      case 'education':
        return (
          <div className="about-tab-content">
            <div className="education-entry">
              <h3 className="education-title">Flatiron School</h3>
              <p className="education-dates">April – September 2024</p>
              <p>Full-stack Web Development, JavaScript and Python Program</p>
            </div>
            <div className="education-entry">
              <h3 className="education-title">Google AI Essentials</h3>
              <p className="education-dates">August – September 2025</p>
              <p>Five-course specialization through Coursera and Google.</p>
            </div>
            <div className="education-entry">
              <h3 className="education-title">Virginia Wesleyan</h3>
              <p className="education-dates">September 2011 – June 2012</p>
              <p>Completed core Computer Science coursework.</p>
            </div>
          </div>
        )
      case 'resume':
        return (
          <div className="about-tab-content">
            <p>See my technical projects, paid client work, prior experience, and education in one place.</p>
            <Link className="about-resume-link" to="/resume">View my resume</Link>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="about-tabs-section" aria-labelledby="about-heading">
      <div className="about-tabs-wrapper">
        <div className="code-image">
          <img
            src="/images/portfolio-man.webp"
            alt="Illustration of a developer at a laptop"
            width="500"
            height="500"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="tab-column">
          <div className="tabs-title">
            <h2 id="about-heading">About me</h2>
            <p className="about-subtext">Software experience built on a background in technical project leadership.</p>
          </div>
          <div className="about-tabs-container">
            <div className="about-tabs" role="tablist" aria-label="About me">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  ref={(element) => { tabRefs.current[id] = element }}
                  id={`about-tab-${id}`}
                  type="button"
                  className={activeTab === id ? 'active' : ''}
                  onClick={() => setActiveTab(id)}
                  onKeyDown={(event) => handleTabKeyDown(event, id)}
                  role="tab"
                  tabIndex={activeTab === id ? 0 : -1}
                  aria-selected={activeTab === id}
                  aria-controls="about-tabpanel"
                >
                  <Icon className="about-tab-icon" aria-hidden="true" /> {label}
                </button>
              ))}
            </div>
            <div
              id="about-tabpanel"
              className="about-tab-body"
              role="tabpanel"
              tabIndex={0}
              aria-labelledby={`about-tab-${activeTab}`}
            >
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
