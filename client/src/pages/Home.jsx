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
      {/* CHANGED: Home owns the #skills anchor (Skills.jsx does NOT). */}
      <section id="skills">
        <SkillsIntro />
      </section>

      {/* Stable About anchor for footer/linking */}
      <section id="about">
        <AboutMeTabs />
      </section>

      {/* Projects.jsx already owns id="projects" */}
      <Projects />

      {/* Home owns #tools */}
      <section id="tools">
        <ToolsUsedHome />
      </section>

      {/* Contact.jsx already owns id="contact" */}
      <Contact />
    </main>
  )
}
