import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Menu from './components/Menu';
import TechnicalBlogs from './components/TechnicalBlogs';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Header />

        {/* Shooting Star Elements with varied angles */}

        {/* Star 1: Moving at 62° */}
        <div
          className="shooting-star-container"
          style={{
            '--top': '20%',
            '--left': '5%',
            // Using an approximate magnitude of 300px:
            // cos(62°) ~ 0.47, sin(62°) ~ 0.88
            '--startX': '-141px',   // ~ -300 * 0.47
            '--startY': '-265px',   // ~ -300 * 0.88
            '--endX': '90vw',       // end point chosen to cross the screen
            '--endY': '265px',
            '--starRotation': '110deg',
             '--duration': '24s',
            '--delay': '1s'
          }}
        >
          <div className="shooting-star"></div>
        </div>

        {/* Star 2: Moving at 112° */}
        <div
          className="shooting-star-container"
          style={{
            '--top': '35%',
            '--left': '95%',
            // For 112°: cos(112°) ~ -0.37, sin(112°) ~ 0.93
            '--startX': '112px',    // opposite sign of deltaX: ~300 * 0.37
            '--startY': '-278px',   // negative of ~300 * 0.93
            '--endX': '-90vw',
            '--endY': '278px',
            '--starRotation': '250deg',
            '--duration': '24s',
            '--delay': '8s'
          }}
        >
          <div className="shooting-star"></div>
        </div>

        {/* Star 3: Moving at 203° */}
        <div
          className="shooting-star-container"
          style={{
            '--top': '70%',
            '--left': '95%',
            // For 203°: cos(203°) ~ -0.92, sin(203°) ~ -0.39
            '--startX': '276px',   // ~300 * 0.92
            '--startY': '117px',    // ~300 * 0.39
            '--endX': '-90vw',
            '--endY': '-117px',
            '--starRotation': '280deg',
            '--duration': '24s',
            '--delay': '12s'
          }}
        >
          <div className="shooting-star"></div>
        </div>

        {/* Star 4: Moving at 277° */}
        <div
          className="shooting-star-container"
          style={{
            '--top': '50%',
            '--left': '5%',
            // For 277°: cos(277°) ~ 0.12, sin(277°) ~ -0.99
            '--startX': '-36px',    // ~ -300 * 0.12
            '--startY': '298px',    // ~ 300 * 0.99
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
                <AboutMe />
                <Projects />
                <Skills />
                <Contact />
              </main>
            }
          />
          <Route path="/blogs" element={<TechnicalBlogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
