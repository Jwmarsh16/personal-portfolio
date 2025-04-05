// AboutMeTabs.jsx
import React, { useState } from 'react';
import '../AboutMeTabs.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaBriefcase, FaGraduationCap, FaFileAlt } from 'react-icons/fa';

function AboutMeTabs() {
  const [activeTab, setActiveTab] = useState('Intro');
  const navigate = useNavigate();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Intro':
        return (
          <div className="tab-content">
            <p>
              I’m a <span className="highlight">full-stack software engineer</span> who
              thrives on turning complex problems into elegant, scalable solutions.
              My journey into tech began after spending four years as a project manager in
              high-pressure nuclear inspection environments—where adaptability,
              precision, and leadership were non-negotiable. These skills now fuel my work
              as a developer.
            </p>
            <p>
              After graduating from <span className="highlight">Flatiron School’s immersive bootcamp</span>, I’ve
              been immersed in full-stack development, building performant,
              user-friendly web apps using <span className="highlight">React, Flask, PostgreSQL, and AWS S3</span>.
              I take pride in writing clean, reusable code, optimizing performance, and
              architecting backend systems that scale.
            </p>
            <p>
              I’m not just about code—I’m a problem-solver, a team player, and a continuous
              learner who seeks out challenges to grow. Whether it’s CI/CD automation,
              designing RESTful APIs, or collaborating cross-functionally, I bring curiosity
              and grit to every project.
            </p>
            <p>
              My ultimate goal? To join a mission-driven team where I can build impactful
              software, grow with talented engineers, and contribute to products that make
              people’s lives easier and better.
            </p>
          </div>
        );
        case 'Career':
          return (
            <div className="tab-content">
              <div className="job-entry">
                <h3 className="job-title">Nuclear Project Manager</h3>
                <p className="job-company">The Merrick Group — West Hazleton, PA</p>
                <p className="job-dates">Feb 2020 – Apr 2024</p>
                <ul className="job-details">
                  <li>Led nuclear eddy current projects, analyzing complex data to enhance reactor safety and performance.</li>
                  <li>Implemented innovative inspection techniques, improving accuracy and reducing turnaround time.</li>
                  <li>Managed multiple projects simultaneously, meeting deadlines and maintaining strict quality standards.</li>
                  <li>Coordinated cross-functional teams of 40+ engineers and technicians with strong communication and leadership.</li>
                </ul>
              </div>
        
              <div className="job-entry">
                <h3 className="job-title">Nuclear Technician</h3>
                <p className="job-company">BWXT — Lynchburg, VA</p>
                <p className="job-dates">Sept 2012 – Jan 2020</p>
                <ul className="job-details">
                  <li>Performed eddy current inspections on nuclear plant equipment including steam generators and reactor components.</li>
                  <li>Documented and analyzed inspection results, delivering detailed technical reports to support maintenance planning.</li>
                  <li>Collaborated with engineering teams to improve inspection accuracy and reduce plant downtime.</li>
                </ul>
              </div>
            </div>
          );
        
          case 'Education':
            return (
              <div className="tab-content">
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
                    Completed foundational courses in Computer Science before pursuing a professional opportunity in the nuclear industry.
                  </p>
                </div>
              </div>
            );
          
      case 'Resume':
        navigate('/resume');
        return null;
      default:
        return null;
    }
  };

  const tabIcons = {
    Intro: <FaUser className="tab-icon" />,
    Career: <FaBriefcase className="tab-icon" />,
    Education: <FaGraduationCap className="tab-icon" />,
    Resume: <FaFileAlt className="tab-icon" />
  };

  return (
    <section className="about-tabs-section">
      <div className="about-tabs-wrapper">
        <div className="code-image">
          <img src="/images/portfolio-man.jpg" alt="Developer typing" />
        </div>

        <div className="tab-column">
          <div className="tabs-title">
            <h2>About Me</h2>
            <p className="about-subtext">
              A meaningful insight into my essence – as every small detail shapes the
              broader story of my life.
            </p>
          </div>

          <div className="tabs-container">
            <div className="tabs">
              {['Intro', 'Career', 'Education', 'Resume'].map(tab => (
                <button
                  key={tab}
                  className={activeTab === tab ? 'active' : ''}
                  onClick={() => setActiveTab(tab)}
                >
                  {tabIcons[tab]} {tab}
                </button>
              ))}
            </div>
            <div className="tab-body fade-in">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeTabs;
