import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Menu from './components/Menu';
import TechnicalBlogs from './components/TechnicalBlogs'; // Import TechnicalBlogs component
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu /> {/* Menu is always visible */}
        <Header />

        <Routes>
          {/* Route for the main page with all sections */}
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
          
          {/* Route for Blogs */}
          <Route path="/blogs" element={<TechnicalBlogs />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
