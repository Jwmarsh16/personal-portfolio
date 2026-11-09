import { Link } from 'react-router-dom'
import { FaArrowDown, FaArrowRight } from 'react-icons/fa'
import resume from '../data/resume.json'
import AskFlaskWalkthrough from './AskFlaskWalkthrough'
import '../SkillsIntro.css'

export default function SkillsIntro() {
  return (
    <section className="home-intro page-width" aria-labelledby="hero-heading">
      <div className="home-hero">
        <div className="home-hero-copy">
          <p className="page-eyebrow">{resume.name} · {resume.location}</p>
          <h1 className="display-title" id="hero-heading">{resume.role}</h1>
          <p className="home-hero-lede">
            I build with React, Flask, and PostgreSQL. I shipped a paid Stripe product and an AI chat
            app with streaming replies.
          </p>
          <div className="home-hero-actions">
            <Link className="btn" to="/#projects">Explore my work <FaArrowDown aria-hidden="true" /></Link>
            <Link className="text-link" to="/resume">View resume <FaArrowRight aria-hidden="true" /></Link>
          </div>
        </div>

        <div className="home-feature">
          <div className="home-feature-header">
            <div>
              <p className="page-eyebrow">Featured project</p>
              <h2>Ask-Flask</h2>
            </div>
            <Link className="text-link" to="/project/ask-flask">Case study <FaArrowRight aria-hidden="true" /></Link>
          </div>
          <AskFlaskWalkthrough />
          <p className="home-feature-caption">Streaming replies, saved sessions, and pinned context</p>
        </div>
      </div>

      <div className="home-client-proof">
        <p className="page-eyebrow">Paid client work</p>
        <div>
          <h2>30 Second Billboard</h2>
          <p>Built for Ecopop with synchronized message rotation, Stripe Checkout, and verified webhooks.</p>
        </div>
        <Link className="text-link" to="/project/30-second-billboard">
          Ecopop case study <FaArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
