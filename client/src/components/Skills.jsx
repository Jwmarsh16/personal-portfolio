import React from 'react';
import '../Skills.css';
import {
  FaPython, FaNodeJs, FaReact, FaGithub, FaCloud, FaCubes, FaLayerGroup, FaCogs, FaTasks,
  FaClipboardCheck, FaLock, FaKey, FaHtml5, FaCloudDownloadAlt, FaDatabase, FaEdit,
  FaTerminal, FaLockOpen, FaCookie, FaAws, FaFlask as FaFlaskFA, FaCheckCircle,
  FaShieldAlt, FaLaptopCode
} from 'react-icons/fa';
import {
  SiJavascript, SiFlask, SiRedux, SiPostgresql, SiVite, SiPostman,
  SiGnubash, SiJson, SiMui
} from 'react-icons/si';

function Skills() {
  const topRow = [
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
  ];

  const middleRow = [
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
  ];

  const bottomRow = [
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
  ];

  const renderRow = (skills, direction, label) => (
    <div className={`skills-row ${direction}`}>
      <div className="scroll-track">
        {[...skills, ...skills].map((skill, index) => (
          <div key={`${label}-${index}`} className="skill-card">
            <span className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        {renderRow(topRow, 'scroll-left', 'top')}
        {renderRow(middleRow, 'scroll-right', 'middle')}
        {renderRow(bottomRow, 'scroll-left', 'bottom')}
      </div>
    </section>
  );
}

export default Skills;
