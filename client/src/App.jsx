import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SkillsIntro from './components/SkillsIntro';
import AboutMeTabs from './components/AboutMeTabs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Menu from './components/Menu';
import TechnicalBlogs from './components/TechnicalBlogs';
import FantasyFootballResearchHub from './project-details/FantasyFootballResearchHub';
import EventManager from './project-details/EventManager';
import Portfolio from './project-details/Portfolio';
import Resume from './components/Resume';
import AboutMe from './components/AboutMe'; // ✅ Added import
import './global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Header />

        {/* Shooting Star Elements */}
        <div
          className="shooting-star-container"
          style={{
            '--top': '20%',
            '--left': '5%',
            '--startX': '-141px',
            '--startY': '-265px',
            '--endX': '90vw',
            '--endY': '265px',
            '--starRotation': '110deg',
            '--duration': '24s',
            '--delay': '1s'
          }}
        >
          <div className="shooting-star"></div>
        </div>

        <div
          className="shooting-star-container"
          style={{
            '--top': '35%',
            '--left': '95%',
            '--startX': '112px',
            '--startY': '-278px',
            '--endX': '-90vw',
            '--endY': '278px',
            '--starRotation': '250deg',
            '--duration': '24s',
            '--delay': '8s'
          }}
        >
          <div className="shooting-star"></div>
        </div>

        <div
          className="shooting-star-container"
          style={{
            '--top': '70%',
            '--left': '95%',
            '--startX': '276px',
            '--startY': '117px',
            '--endX': '-90vw',
            '--endY': '-117px',
            '--starRotation': '280deg',
            '--duration': '24s',
            '--delay': '12s'
          }}
        >
          <div className="shooting-star"></div>
        </div>

        <div
          className="shooting-star-container"
          style={{
            '--top': '50%',
            '--left': '5%',
            '--startX': '-36px',
            '--startY': '298px',
            '--endX': '90vw',
            '--endY': '-298px',
            '--starRotation': '65deg',
            '--duration': '30s',
            '--delay': '18s'
          }}
        >
          <div className="shooting-star"></div>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <main>
                <SkillsIntro />
                <AboutMeTabs />
                <Projects />
                <Contact />
              </main>
            }
          />
          <Route path="/about" element={<AboutMe />} /> {/* ✅ New route added */}
          <Route path="/blogs" element={<TechnicalBlogs />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project/fantasy-football-research-hub" element={<FantasyFootballResearchHub />} />
          <Route path="/project/event-manager-application" element={<EventManager />} />
          <Route path="/project/portfolio-website" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
