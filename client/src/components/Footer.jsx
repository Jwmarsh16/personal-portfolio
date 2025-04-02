import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-icons">
        <a href="https://github.com/Jwmarsh16" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/jonathan-marshall-a2a833257/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="#contact"><FaEnvelope /></a>
      </div>

      <div className="footer-links">
        <a href="/#about">About Me</a>
        <a href="/#projects">Projects</a>
        <a href="/#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="/#blogs">Blogs</a>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Jonathan Marshall. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
