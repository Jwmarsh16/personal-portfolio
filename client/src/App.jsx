// Path: client/src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import TechnicalBlogs from './components/TechnicalBlogs'
import FantasyFootballResearchHub from './project-details/FantasyFootballResearchHub'
import AskFlask from './project-details/AskFlask' // CHANGED: new project page
import AlgorithmVisualizer from './project-details/AlgorithmVisualizer' // CHANGED: new project page
import Resume from './components/Resume'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ShootingStars from './components/ShootingStars'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />

        <ShootingStars />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/blogs" element={<TechnicalBlogs />} />
          <Route path="/resume" element={<Resume />} />

          <Route
            path="/project/fantasy-football-research-hub"
            element={<FantasyFootballResearchHub />}
          />

          <Route path="/project/ask-flask" element={<AskFlask />} /> {/* CHANGED */}
          <Route
            path="/project/algorithm-visualizer"
            element={<AlgorithmVisualizer />}
          />{' '}
          {/* CHANGED */}
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
