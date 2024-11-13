import React from 'react';
import '../TechnicalBlogs.css';

const blogs = [
  {
    date: 'Aug 22, 2024',
    title: 'The Future of Software Engineering: Key Trends and Innovations in Software Engineering',
    summary: "In this blog, I’m going to explain some of the key trends, cool new technologies, and best practices that are shaping how software is developed today.",
    link: 'https://medium.com/@khrscrfs/the-future-of-software-engineering-trends-technologies-and-best-practices-c90124f89573'
  },
  {
    date: 'Jul 31, 2024',
    title: "Key Industry Trends, New Technologies, and Best Practices in Software Engineering",
    summary: "As a software engineering bootcamp student, I’ve had the opportunity to work with JavaScript, Python, React, and Flask. These are some of the tools that are essential in software engineering.",
    link: 'https://medium.com/@khrscrfs/exploring-key-industry-trends-innovative-technologies-and-best-practices-in-software-engineering-6486aaf11069'
  },
  {
    date: 'Jul 9, 2024',
    title: "AI in SE",
    summary: "After smartphones, AI may be the most life-altering technology ever created. We are only at the beginning of the AI era, and the capabilities of AI are mind-blowing.",
    link: 'https://medium.com/@khrscrfs/ai-in-se-404e547f8606'
  },
  {
    date: 'Jun 11, 2024',
    title: "Understanding State in React: A Beginner’s Guide",
    summary: "Learning React? One key concept to understand is “State.” State helps make your components interactive. Let’s dive into what state is, why it matters, and how to use it in your React components.",
    link: 'https://medium.com/@khrscrfs/understanding-state-in-react-a-beginners-guide-5da6712eb4b7'
  },
  {
    date: 'May 17, 2024',
    title: "Good Strategies for Taking On a Coding Project When You Feel Lost",
    summary: "Starting a coding project or assignment can often feel like standing at the base of a mountain, unsure of where to begin the climb.",
    link: 'https://medium.com/@khrscrfs/good-strategies-for-taking-on-a-coding-project-when-you-feel-lost-4c070a013c5f'
  },
  // Add more blog entries here as needed
];

const TechnicalBlogs = () => {
  return (
    <section className="technical-blogs">
      <h2>My Writing</h2>
      <p>Here you'll find my writing on topics ranging from coding and the web industry to linguistics and natural language processing. If you'd like to chat about anything I've written, say hi on <a href="https://bluesky.com" target="_blank" rel="noopener noreferrer">Bluesky</a>.</p>
      
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <article key={index} className="blog-entry">
            <span className="blog-date">{blog.date}</span>
            <h3>
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="blog-title">
                {blog.title}
              </a>
            </h3>
            <p>{blog.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TechnicalBlogs;
