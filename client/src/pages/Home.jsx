import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import SkillsIntro from '../components/SkillsIntro'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import PathfindingComparison from '../components/PathfindingComparison'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <SkillsIntro />
      <Projects />
      <PathfindingComparison />
      <Skills />
      <section id="about" className="home-about page-width" aria-labelledby="home-about-heading">
        <div>
          <p className="page-eyebrow">About me</p>
          <h2 className="section-title" id="home-about-heading">From nuclear inspections to software</h2>
        </div>
        <div>
          <p>I used to coordinate nuclear inspection projects. I still lean on the same habits when I build software. I break down the problem, make decisions visible, and check what happens when something goes wrong.</p>
          <Link className="text-link" to="/about">More about my background <FaArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
      <Contact />
    </>
  )
}
