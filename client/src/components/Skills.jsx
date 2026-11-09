import '../Skills.css'

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['JavaScript', 'React', 'Redux Toolkit', 'HTML & CSS']
  },
  {
    title: 'Backend & data',
    skills: ['Python', 'Flask', 'REST APIs', 'PostgreSQL', 'SQLAlchemy']
  },
  {
    title: 'AI applications',
    skills: ['OpenAI API', 'SSE streaming', 'Context management', 'FAISS retrieval']
  },
  {
    title: 'Testing & delivery',
    skills: ['Pytest', 'Vitest', 'GitHub Actions', 'Git', 'Render']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-heading">
      <div className="skills-container">
        <div className="skills-header">
          <h2 id="skills-heading">Skills I put to work</h2>
          <p>The core tools behind my client work and featured projects.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skills-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
