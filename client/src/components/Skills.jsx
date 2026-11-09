import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import '../Skills.css'

const skillGroups = [
  ['Frontend', 'React, JavaScript, Redux Toolkit, HTML, and CSS', '/project/fantasy-football-research-hub'],
  ['Backend and data', 'Python, Flask, REST APIs, SQLAlchemy, and PostgreSQL', '/project/30-second-billboard'],
  ['AI applications', 'OpenAI API, streamed responses, session context, and FAISS retrieval', '/project/ask-flask'],
  ['Testing and delivery', 'Pytest, Vitest, GitHub Actions, Git, and Render', '/project/ask-flask#technical-heading']
]

export default function Skills() {
  return (
    <section id="skills" className="skills page-width" aria-labelledby="skills-heading">
      <div id="tools">
        <p className="page-eyebrow">How I build</p>
        <h2 className="section-title" id="skills-heading">Skills in practice</h2>
        <ul className="skills-list">
          {skillGroups.map(([title, skills, link]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{skills}</p>
              <Link className="text-link" to={link} aria-label={'See ' + title.toLowerCase() + ' in practice'}>
                See it in a project <FaArrowRight aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
