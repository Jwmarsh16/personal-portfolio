import SkillsIntro from '../components/SkillsIntro'
import Skills from '../components/Skills'
import AboutMeTabs from '../components/AboutMeTabs'
import Projects from '../components/Projects'
import ToolsUsedHome from '../components/ToolsUsedHome'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <SkillsIntro />
      <Projects />
      <section id="about">
        <AboutMeTabs />
      </section>
      <Skills />
      <section id="tools">
        <ToolsUsedHome />
      </section>
      <Contact />
    </>
  )
}
