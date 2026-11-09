import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import resume from '../data/resume.json'
import '../AboutMe.css'

export default function AboutMe() {
  return (
    <article className="about-page page-width" aria-labelledby="about-page-heading">
      <header className="about-page-hero">
        <div>
          <p className="page-eyebrow">About · {resume.location}</p>
          <h1 className="display-title" id="about-page-heading">{resume.name}</h1>
          <p className="about-page-role">{resume.role}</p>
          <p className="about-page-lede">
            I build software with the same care I brought to nuclear inspection projects. I like
            turning a complicated problem into a clear plan, making it easy for people to see
            what’s happening, and checking the cases that are easy to miss.
          </p>
          <div className="about-page-actions">
            <Link className="btn" to="/resume">View resume <FaArrowRight aria-hidden="true" /></Link>
            <Link className="text-link" to="/#contact">Get in touch <FaArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
        <figure className="about-page-photo">
          <img src="/images/jonathan.webp" width="312" height="384" alt={resume.name} decoding="async" />
        </figure>
      </header>

      <section className="about-page-story" aria-labelledby="about-story-heading">
        <div>
          <p className="page-eyebrow">My background</p>
          <h2 className="section-title" id="about-story-heading">How I work</h2>
        </div>
        <div>
          <p>
            I spent four years managing nuclear inspection projects. I coordinated schedules and
            quality standards across teams of engineers and technicians and explained technical
            findings to people who needed to make decisions about the work.
          </p>
          <p>
            I took that approach into software after graduating from Flatiron School. For Ecopop, I
            built the interface and backend for 30 Second Billboard and worked through what should
            happen when Stripe delivers the same event twice.
          </p>
          <p>
            On Ask-Flask, I worked through a different kind of continuity problem. I wanted the chat
            to feel responsive while a reply was streaming and still have the conversation there
            when someone came back.
          </p>
          <div className="about-page-actions">
            <Link className="text-link" to="/project/30-second-billboard">Ecopop case study <FaArrowRight aria-hidden="true" /></Link>
            <Link className="text-link" to="/project/ask-flask">Ask-Flask case study <FaArrowRight aria-hidden="true" /></Link>
            <Link className="text-link" to="/blogs">Technical writing <FaArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </article>
  )
}
