// client/src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import TechnicalBlogs from './components/TechnicalBlogs'
import FantasyFootballResearchHub from './project-details/FantasyFootballResearchHub'
import EventManager from './project-details/EventManager'
import Portfolio from './project-details/Portfolio'
import Resume from './components/Resume'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ShootingStars from './components/ShootingStars' // CHANGED: extract shooting stars into a component
import Home from './pages/Home' // CHANGED: extract home route to a page component
import './App.css' // CHANGED: make App-level layout styles actually apply

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />

        <ShootingStars /> {/* CHANGED: replaces duplicated inline shooting star divs */}

        <Routes>
          <Route path="/" element={<Home />} /> {/* CHANGED: cleaner routing + stable section ids */}
          <Route path="/about" element={<AboutMe />} />
          <Route path="/blogs" element={<TechnicalBlogs />} />
          <Route path="/resume" element={<Resume />} />
          <Route
            path="/project/fantasy-football-research-hub"
            element={<FantasyFootballResearchHub />}
          />
          <Route
            path="/project/event-manager-application"
            element={<EventManager />}
          />
          <Route path="/project/portfolio-website" element={<Portfolio />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
