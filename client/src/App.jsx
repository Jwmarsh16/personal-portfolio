import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import { projects } from './data/projects'
import resume from './data/resume.json'
import './App.css'

const AboutMe = lazy(() => import('./components/AboutMe'))
const TechnicalBlogs = lazy(() => import('./components/TechnicalBlogs'))
const Resume = lazy(() => import('./components/Resume'))
const ProjectCaseStudy = lazy(() => import('./project-details/ProjectCaseStudy'))

const pageTitles = {
  '/': resume.name + ' | ' + resume.role,
  '/about': 'About | ' + resume.name,
  '/blogs': 'Technical Writing | ' + resume.name,
  '/resume': 'Resume | ' + resume.name,
  ...Object.fromEntries(projects.map(project => [
    '/project/' + project.slug, project.title + ' Case Study | ' + resume.name
  ]))
}

function PageTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = pageTitles[pathname.replace(/\/$/, '') || '/'] || 'Page Not Found | ' + resume.name
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <section className="not-found">
      <p className="page-eyebrow">404</p>
      <h1 className="display-title">Page not found</h1>
      <p>Explore my projects or get in touch from the homepage.</p>
      <Link className="btn" to="/">Back to home</Link>
    </section>
  )
}

function ProjectRoute() {
  const { slug } = useParams()
  if (!projects.some(project => project.slug === slug)) return <NotFound />
  return <ProjectCaseStudy key={slug} projectId={slug} />
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
              <Route path="/project/:slug" element={<ProjectRoute />} />
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
