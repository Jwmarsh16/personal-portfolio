// client/src/components/TechnicalBlogs.jsx
import React, { useMemo } from 'react' // CHANGED: useMemo for stable featured/rest lists
import { Link, useNavigate } from 'react-router-dom' // CHANGED: add CTAs + contact jump behavior
import '../TechnicalBlogs.css'
import { scrollToSection } from '../utils/scrollToSection' // CHANGED: scroll after navigating home for Contact

const blogs = [
  {
    date: 'Aug 22, 2024',
    title:
      'The Future of Software Engineering: Key Trends and Innovations in Software Engineering',
    summary:
      "In this blog, I’m going to explain some of the key trends, cool new technologies, and best practices that are shaping how software is developed today.",
    link: 'https://medium.com/@khrscrfs/the-future-of-software-engineering-trends-technologies-and-best-practices-c90124f89573',
    tags: ['Industry', 'Trends'], // CHANGED: tags for case-study scanability
    readTime: '6 min', // CHANGED: quick “proof” metadata
    featured: true // CHANGED: featured spotlight
  },
  {
    date: 'Jul 31, 2024',
    title:
      'Key Industry Trends, New Technologies, and Best Practices in Software Engineering',
    summary:
      'As a software engineering bootcamp student, I’ve had the opportunity to work with JavaScript, Python, React, and Flask. These are some of the tools that are essential in software engineering.',
    link: 'https://medium.com/@khrscrfs/exploring-key-industry-trends-innovative-technologies-and-best-practices-in-software-engineering-6486aaf11069',
    tags: ['Industry', 'Tooling'], // CHANGED
    readTime: '5 min' // CHANGED
  },
  {
    date: 'Jul 9, 2024',
    title: 'AI in SE',
    summary:
      'After smartphones, AI may be the most life-altering technology ever created. We are only at the beginning of the AI era, and the capabilities of AI are mind-blowing.',
    link: 'https://medium.com/@khrscrfs/ai-in-se-404e547f8606',
    tags: ['AI', 'Software Engineering'], // CHANGED
    readTime: '4 min' // CHANGED
  },
  {
    date: 'Jun 11, 2024',
    title: 'Understanding State in React: A Beginner’s Guide',
    summary:
      'Learning React? One key concept to understand is “State.” State helps make your components interactive. Let’s dive into what state is, why it matters, and how to use it in your React components.',
    link: 'https://medium.com/@khrscrfs/understanding-state-in-react-a-beginners-guide-5da6712eb4b7',
    tags: ['React', 'Frontend'], // CHANGED
    readTime: '7 min' // CHANGED
  },
  {
    date: 'May 17, 2024',
    title: 'Good Strategies for Taking On a Coding Project When You Feel Lost',
    summary:
      'Starting a coding project or assignment can often feel like standing at the base of a mountain, unsure of where to begin the climb.',
    link: 'https://medium.com/@khrscrfs/good-strategies-for-taking-on-a-coding-project-when-you-feel-lost-4c070a013c5f',
    tags: ['Process', 'Mindset'], // CHANGED
    readTime: '5 min' // CHANGED
  }
  // Add more blog entries here as needed
]

const TechnicalBlogs = () => {
  const navigate = useNavigate() // CHANGED: used for “go home then scroll” CTA

  const { featuredBlog, restBlogs } = useMemo(() => {
    const featured = blogs.find((b) => b.featured) || blogs[0] // CHANGED: deterministic featured selection
    const rest = blogs.filter((b) => b.link !== featured.link) // CHANGED: stable key-based filtering
    return { featuredBlog: featured, restBlogs: rest }
  }, [])

  const handleContactClick = () => {
    navigate('/') // CHANGED: go home first (contact section is on Home)
    window.setTimeout(() => scrollToSection('contact', { focus: true }), 120) // CHANGED: scroll after route mounts
  }

  return (
    <section className="technical-blogs" aria-label="Technical writing">
      <div className="technical-blogs-container">
        {/* CHANGED: case-study style hero */}
        <header className="blogs-hero">
          <p className="blogs-kicker">Technical writing</p> {/* CHANGED */}
          <h1 className="blogs-title">Engineering notes &amp; learnings</h1> {/* CHANGED */}
          <p className="blogs-intro">
            Clear explanations are part of how I ship. These posts show how I think
            about building software, learning quickly, and communicating tradeoffs.
          </p>{' '}
          {/* CHANGED */}
        </header>

        {/* CHANGED: “proof” + featured spotlight */}
        <div className="blogs-top-grid">
          <aside className="blogs-proof-card" aria-label="What this writing demonstrates">
            <div className="blogs-proof-title">What this writing demonstrates</div> {/* CHANGED */}
            <ul className="blogs-proof-list">
              <li>Breaking complex topics into practical mental models</li> {/* CHANGED */}
              <li>Engineering judgment, not just tutorials</li> {/* CHANGED */}
              <li>Communication that helps teams move faster</li> {/* CHANGED */}
            </ul>
          </aside>

          <article className="blogs-featured" aria-label="Featured post">
            <div className="blogs-featured-label">Featured</div> {/* CHANGED */}
            <div className="blogs-meta">
              <span className="blogs-date">{featuredBlog.date}</span>
              <span className="blogs-meta-sep" aria-hidden="true">
                •
              </span>
              <span className="blogs-readtime">{featuredBlog.readTime}</span>
            </div>

            <h2 className="blogs-card-title">
              <a
                href={featuredBlog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blogs-link"
              >
                {featuredBlog.title}
              </a>
            </h2>

            <p className="blogs-summary">{featuredBlog.summary}</p>

            <div className="blogs-tags" aria-label="Tags">
              {featuredBlog.tags?.map((tag) => (
                <span key={tag} className="chip chip--primary">
                  {tag}
                </span> // CHANGED: reuse global chip styles
              ))}
            </div>

            <div className="blogs-actions">
              <a
                href={featuredBlog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blogs-button blogs-button--primary"
              >
                Read on Medium
              </a>
            </div>
          </article>
        </div>

        {/* CHANGED: posts grid (case-study cards) */}
        <div className="blogs-section-head">
          <h2 className="blogs-section-title">More posts</h2> {/* CHANGED */}
          <p className="blogs-section-subtext">
            Short, scannable writing on engineering fundamentals and emerging tech.
          </p>{' '}
          {/* CHANGED */}
        </div>

        <div className="blogs-grid" aria-label="Blog posts">
          {restBlogs.map((blog) => (
            <article key={blog.link} className="blogs-card">
              <div className="blogs-meta">
                <span className="blogs-date">{blog.date}</span>
                <span className="blogs-meta-sep" aria-hidden="true">
                  •
                </span>
                <span className="blogs-readtime">{blog.readTime}</span>
              </div>

              <h3 className="blogs-card-title">
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blogs-link"
                >
                  {blog.title}
                </a>
              </h3>

              <p className="blogs-summary">{blog.summary}</p>

              <div className="blogs-tags" aria-label="Tags">
                {blog.tags?.map((tag) => (
                  <span key={tag} className="chip chip--soft">
                    {tag}
                  </span> // CHANGED: softer chips for non-featured tags
                ))}
              </div>

              <div className="blogs-actions">
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blogs-button"
                >
                  Read
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CHANGED: bottom CTAs (case-study finish) */}
        <footer className="blogs-footer-cta" aria-label="Next actions">
          <div className="blogs-footer-copy">
            <div className="blogs-footer-title">Want the shipped work behind these notes?</div> {/* CHANGED */}
            <div className="blogs-footer-subtext">
              Check out my projects, or reach out directly.
            </div>
          </div>

          <div className="blogs-footer-actions">
            <button
              type="button"
              className="blogs-button blogs-button--primary"
              onClick={handleContactClick}
            >
              Contact
            </button>
            <Link to="/resume" className="blogs-button">
              Resume
            </Link>
            <Link to="/" className="blogs-button">
              View projects
            </Link>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default TechnicalBlogs
