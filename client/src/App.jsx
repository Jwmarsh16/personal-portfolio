import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import './App.css'

const AboutMe = lazy(() => import('./components/AboutMe'))
const TechnicalBlogs = lazy(() => import('./components/TechnicalBlogs'))
const Resume = lazy(() => import('./components/Resume'))
const AskFlask = lazy(() => import('./project-details/AskFlask'))
const FantasyFootballResearchHub = lazy(() => import('./project-details/FantasyFootballResearchHub'))
const AlgorithmVisualizer = lazy(() => import('./project-details/AlgorithmVisualizer'))

const pageTitles = {
  '/': 'Jonathan Marshall | Full-Stack Software Developer',
  '/about': 'About | Jonathan Marshall',
  '/blogs': 'Technical Writing | Jonathan Marshall',
  '/resume': 'Resume | Jonathan Marshall',
  '/project/ask-flask': 'Ask-Flask Case Study | Jonathan Marshall',
  '/project/fantasy-football-research-hub': 'Fantasy Football Research Hub | Jonathan Marshall',
  '/project/algorithm-visualizer': 'Algorithm Visualizer | Jonathan Marshall'
}

function PageTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = pageTitles[pathname] || 'Page Not Found | Jonathan Marshall'
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <section className="not-found">
      <p className="page-eyebrow">404</p>
      <h1>Page not found</h1>
      <p>Explore my projects or get in touch from the homepage.</p>
      <Link className="btn" to="/">Back to home</Link>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <PageTitle />
      <ScrollToTop />
      <div className="App">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Suspense fallback={<p className="route-loading" role="status">Loading page…</p>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/blogs" element={<TechnicalBlogs />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/project/ask-flask" element={<AskFlask />} />
              <Route path="/project/fantasy-football-research-hub" element={<FantasyFootballResearchHub />} />
              <Route path="/project/algorithm-visualizer" element={<AlgorithmVisualizer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
