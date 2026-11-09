import { Link } from 'react-router-dom'
import resume from '../data/resume.json'
import '../Resume.css'

function Resume() {
  return (
    <article className="resume-container" aria-labelledby="resume-title">
      <header className="resume-header">
        <div>
          <p className="page-eyebrow">Resume · Updated {resume.updated}</p>
          <h1 id="resume-title" className="resume-title display-title">{resume.name}</h1>
          <p className="resume-role">{resume.role}</p>
          <p className="resume-subheading">
            {resume.location} · <a href={`mailto:${resume.email}`}>{resume.email}</a> ·{' '}
            <a href={`tel:${resume.phone.replaceAll('-', '')}`}>{resume.phone}</a>
          </p>
        </div>
        <a className="resume-download btn" href="/resume.pdf" download="Jonathan-Marshall-Resume.pdf">
          Download resume (PDF)
        </a>
      </header>

      <nav className="resume-links" aria-label="Professional profiles">
        {resume.links.map(link => (
          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
        ))}
      </nav>
      <p className="resume-summary">{resume.summary}</p>

      <section id="experience" className="resume-section" aria-labelledby="resume-experience">
        <h2 className="section-title" id="resume-experience">Experience</h2>
        {resume.experience.map(job => (
          <div className="resume-entry" key={job.company}>
            <div className="resume-entry-heading">
              <h3>{job.role}</h3>
              <p className="resume-dates">{job.dates}</p>
            </div>
            <p className="resume-entry-subtitle">{job.company} · {job.location}</p>
            {job.url && (
              <div className="resume-project-links">
                {job.caseStudy && <Link to={job.caseStudy}>Case study</Link>}
                <a href={job.url} target="_blank" rel="noopener noreferrer">View {job.linkLabel}</a>
              </div>
            )}
            <ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
          </div>
        ))}
      </section>

      <section className="resume-section" aria-labelledby="resume-projects">
        <h2 className="section-title" id="resume-projects">Technical projects</h2>
        {resume.projects.map(project => (
          <div className="resume-entry" key={project.name}>
            <div className="resume-entry-heading">
              <h3>{project.name}</h3>
              <p className="resume-dates">{project.dates}</p>
            </div>
            <p className="resume-entry-subtitle">{project.description}</p>
            <div className="resume-project-links" aria-label={`${project.name} links`}>
              <Link to={project.caseStudy}>Case study</Link>
              <a href={project.code} target="_blank" rel="noopener noreferrer">Source code</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live demo</a>
            </div>
            <ul>{project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
          </div>
        ))}
      </section>

      <section className="resume-section" aria-labelledby="resume-skills">
        <h2 className="section-title" id="resume-skills">Technical skills</h2>
        <dl className="resume-skills">
          {resume.skills.map(skill => (
            <div key={skill.label}><dt>{skill.label}</dt><dd>{skill.items}</dd></div>
          ))}
        </dl>
      </section>

      <section className="resume-section" aria-labelledby="resume-education">
        <h2 className="section-title" id="resume-education">Education</h2>
        {resume.education.map(education => (
          <div className="resume-entry" key={education.school}>
            <div className="resume-entry-heading">
              <h3>{education.school}</h3>
              <p className="resume-dates">{education.dates}</p>
            </div>
            <p className="resume-entry-subtitle">{education.location}</p>
            <p>{education.detail}</p>
            {education.credential && <a href={education.credential} target="_blank" rel="noopener noreferrer">Verify credential on Coursera</a>}
          </div>
        ))}
      </section>
    </article>
  )
}

export default Resume
