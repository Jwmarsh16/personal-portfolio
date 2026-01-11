// client/src/pages/Home.jsx
import React from 'react'
import SkillsIntro from '../components/SkillsIntro'
import AboutMeTabs from '../components/AboutMeTabs'
import Projects from '../components/Projects'
import ToolsUsedHome from '../components/ToolsUsedHome'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <section id="skills">
        {/* CHANGED: wrap in stable id so header scrolling always works */}
        <SkillsIntro />
      </section>

      <AboutMeTabs />

      <section id="projects">
        {/* CHANGED: wrap in stable id so header scrolling always works */}
        <Projects />
      </section>

      <section id="tools">
        <ToolsUsedHome />
      </section>

      <section id="contact">
        {/* CHANGED: wrap in stable id so header scrolling always works */}
        <Contact />
      </section>
    </main>
  )
}
