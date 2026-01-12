// client/src/components/AboutMeTabs.jsx
import React, { useMemo, useState } from 'react'
import '../AboutMeTabs.css'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaBriefcase, FaGraduationCap, FaFileAlt } from 'react-icons/fa'

function AboutMeTabs() {
  const [activeTab, setActiveTab] = useState('Intro')
  const navigate = useNavigate()

  const panelId = 'about-tabpanel' // CHANGED: stable id for aria-controls/labeling
  const tabId = (tab) => `about-tab-${tab.toLowerCase()}` // CHANGED: deterministic tab ids

  const tabMeta = useMemo(
    () => ({
      Intro: { label: 'Intro', icon: <FaUser className="about-tab-icon" /> }, // CHANGED: namespaced icon class
      Career: { label: 'Career', icon: <FaBriefcase className="about-tab-icon" /> }, // CHANGED
      Education: {
        label: 'Education',
        icon: <FaGraduationCap className="about-tab-icon" /> // CHANGED
      },
      Resume: { label: 'Resume', icon: <FaFileAlt className="about-tab-icon" /> } // CHANGED
    }),
    []
  )

  const tabs = ['Intro', 'Career', 'Education', 'Resume']

  const onTabClick = (tab) => {
    if (tab === 'Resume') {
      navigate('/resume')
      return
    }
    setActiveTab(tab)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Intro':
        return (
          <div className="about-tab-content">
            <p>
              I’m a <span className="about-highlight">full-stack software engineer</span> who
              turns complex problems into clean, scalable solutions. I transitioned into
              software after four years as a project manager in high-pressure nuclear
              inspection environments—where adaptability, precision, and leadership were
              non-negotiable.
            </p>
            <p>
              After graduating from <span className="about-highlight">Flatiron School</span>,
              I’ve been building full-stack web apps with{' '}
              <span className="about-highlight">React, Flask, PostgreSQL, and AWS S3</span>.
              I care about readable code, thoughtful UX, and backend design that holds up
              under real usage.
            </p>
            <p>
              I’m a strong collaborator who communicates clearly, learns fast, and enjoys
              owning problems end-to-end—whether that’s building REST APIs, improving
              performance, or tightening deployment workflows.
            </p>
            <p>
              I’m looking to join a mission-driven team where I can contribute quickly,
              keep leveling up, and ship software that makes people’s lives better.
            </p>
          </div>
        )

      case 'Career':
        return (
          <div className="about-tab-content">
            <div className="job-entry">
              <h3 className="job-title">Nuclear Project Manager</h3>
              <p className="job-company">The Merrick Group — West Hazleton, PA</p>
              <p className="job-dates">Feb 2020 – Apr 2024</p>
              <ul className="job-details">
                <li>
                  Led nuclear eddy current projects, translating complex inspection data
                  into clear recommendations that improved reactor safety.
                </li>
                <li>
                  Delivered under strict deadlines and high stakes constraints while
                  maintaining quality and compliance.
                </li>
                <li>
                  Coordinated cross-functional teams of 40+ engineers and technicians,
                  aligning stakeholders and keeping work unblocked.
                </li>
              </ul>
            </div>

            <div className="job-entry">
              <h3 className="job-title">Nuclear Technician</h3>
              <p className="job-company">BWXT — Lynchburg, VA</p>
              <p className="job-dates">Sept 2012 – Jan 2020</p>
              <ul className="job-details">
                <li>
                  Performed eddy current inspections on reactor components and steam
                  generators, documenting and analyzing results.
                </li>
                <li>
                  Collaborated closely with engineering teams to improve inspection
                  accuracy and reduce downtime.
                </li>
              </ul>
            </div>
          </div>
        )

      case 'Education':
        return (
          <div className="about-tab-content">
            <div className="education-entry">
              <h3 className="education-title">Flatiron School (Remote)</h3>
              <p className="education-dates">April 2024 – September 2024</p>
              <p className="education-details">
                Full-stack Web Development, JavaScript and Python Program
              </p>
            </div>

            <div className="education-entry">
              <h3 className="education-title">Virginia Wesleyan — Norfolk, VA</h3>
              <p className="education-dates">September 2011 – June 2012</p>
              <p className="education-details">
                Completed foundational Computer Science coursework before pursuing a
                professional opportunity in the nuclear industry.
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section className="about-tabs-section" aria-label="About section">
      <div className="about-tabs-wrapper">
        <div className="code-image">
          <img src="/images/portfolio-man.jpg" alt="Developer at a laptop" />
        </div>

        <div className="tab-column">
          <div className="tabs-title">
            <h2>About</h2>
            <p className="about-subtext">
              Background, experience, and what I care about when building software.
            </p>
          </div>

          <div className="about-tabs-container">
            <div className="about-tabs" role="tablist" aria-label="About tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  id={tabId(tab)} // CHANGED: a11y hook for aria-labelledby
                  type="button"
                  className={activeTab === tab ? 'active' : ''}
                  onClick={() => onTabClick(tab)}
                  role="tab"
                  aria-selected={activeTab === tab}
                  aria-controls={panelId} // CHANGED: link tab → tabpanel
                >
                  {tabMeta[tab].icon} {tabMeta[tab].label}
                </button>
              ))}
            </div>

            <div
              key={activeTab} // CHANGED: re-triggers fade animation when tab changes
              id={panelId} // CHANGED: referenced by aria-controls
              className="about-tab-body fade-in"
              role="tabpanel"
              aria-labelledby={tabId(activeTab)} // CHANGED: link tabpanel → active tab
            >
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeTabs
