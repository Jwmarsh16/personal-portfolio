import React, { useState } from 'react';
import {
  FaPython, FaDatabase, FaCodeBranch, FaTerminal, FaHtml5, FaCss3Alt, FaGit, FaGithub, FaLock, FaKey, FaCloud, FaAws, FaCogs, FaBug, FaUserShield, FaCheckCircle, FaLaptopCode
} from 'react-icons/fa';
import {
  SiJavascript, SiFlask, SiReact, SiRedux, SiVite, SiPostgresql, SiPostman, SiSqlalchemy, SiNodedotjs, SiBabel, SiRender, SiJson
} from 'react-icons/si';
import '../ToolsUsedHome.css';

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
  tools: [
    { name: 'Git', icon: <FaGit /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Bcrypt', icon: <FaLock /> },
    { name: 'Pytest', icon: <FaBug /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'VS Code', icon: <FaLaptopCode /> }
  ],
  os: [
    { name: 'Linux', icon: <FaTerminal /> }
  ],
  cloud: [
    { name: 'AWS S3', icon: <FaAws /> },
    { name: 'Render', icon: <SiRender /> },
    { name: 'CI/CD Pipelines', icon: <FaCogs /> }
  ],
  databases: [
    { name: 'PostgreSQL', icon: <SiPostgresql /> }
  ],
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
};

const categoryLabels = {
  languages: 'Languages',
  frameworks: 'Frameworks & Libraries',
  tools: 'Tools & Platforms',
  os: 'Operating Systems',
  cloud: 'Cloud & DevOps',
  databases: 'Databases',
  security: 'Security & Authentication',
  practices: 'Development Practices'
};

function ToolsUsedHome() {
  const [activeTab, setActiveTab] = useState('languages');

  return (
    <section className="tools-used-section fade-in">
      <h2 className="tools-heading">Tools that I have used.</h2>
      <p className="tools-subtext">
        Here's a curated list of tools and technologies that I have utilized in my projects to build innovative solutions.
      </p>

      <div className="tools-tab-wrapper">
        <div className="tools-categories-vertical">
          {Object.keys(tools).map((category) => (
            <button
              key={category}
              className={activeTab === category ? 'active' : ''}
              onClick={() => setActiveTab(category)}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <div className="tools-list animated">
          {tools[activeTab].map((tool, index) => (
            <span key={index} className="tool-pill">
              <span className="tool-icon">{tool.icon}</span>
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsUsedHome;
