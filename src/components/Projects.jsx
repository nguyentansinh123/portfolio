import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import './Portfolio.css';
import { FaLink, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import useSmoothScroll from '../hooks/useSmoothScroll';

const Projects = () => {
  useSmoothScroll();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="portfolio-container">
      <Link to="/" className="exit-button">Back to Terminal</Link>
      <div className="portfolio-grid">
        <header className="portfolio-header">
          <nav>
            <Link to="/portfolio">Home</Link>
            <Link to="/projects">Projects</Link>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main className="projects-content">
          <div className="project-entry card animate">
            <div className="project-image">
              <img src="https://i.imgur.com/j6rD1j2.png" alt="Wild-Kamera.com" />
            </div>
            <div className="project-details">
              <h2>Wild-Kamera.com</h2>
              <p>Wild-Kamera.com is a Shopware Website that sells Wildlife Cameras and Accessories for Hunters and Photographers. The website is built using Shopware 6, a popular e-commerce platform in Germany. The website is built using PHP, JavaScript, CSS, and MySQL.</p>
              <div className="project-tags">
                <span>PHP</span>
                <span>Shopware</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>MySQL</span>
              </div>
              <a href="https://wild-kamera.com" target="_blank" rel="noopener noreferrer" className="project-link-button">
                <FaLink /> Visit Site
              </a>
            </div>
          </div>
          <div className="project-entry card animate">
            <div className="project-image">
              <div className="video-placeholder">
                  <p className="video-title">ZU FREUNDLICH</p>
                  <div className="play-button-container">
                      <div className="play-button"></div>
                  </div>
              </div>
            </div>
            <div className="project-details">
              <h2>Zu Freundlich RP</h2>
              <p>Zu Freundlich RP is a FiveM Roleplay Server based in Germany. The server was built using LUA, ESX Framework, and MySQL. The server has a custom economy system, custom vehicles, custom scripts, and custom jobs.</p>
              <div className="project-tags">
                <span>LUA</span>
                <span>ESX Framework</span>
                <span>MySQL</span>
              </div>
              <a href="#" className="project-link-button coming-soon">
                <FaLink /> Coming Soon!
              </a>
            </div>
          </div>
        </main>

        <section id="contact" className="contact-section">
          <h2 className="contact-title">Contact with me</h2>
          <p className="contact-subtitle">You can also get in touch with me through this form below.</p>
          
          <div className="contact-grid">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-card">
              <FaGithub className="contact-icon" />
              <div className="contact-card-content">
                <h3>Github Profile</h3>
                <p>Find more of my repositories</p>
              </div>
            </a>
            
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-card">
              <FaLinkedin className="contact-icon" />
              <div className="contact-card-content">
                <h3>LinkedIn</h3>
                <p>Connect with me professionally</p>
              </div>
            </a>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="your.email@example.com" 
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Enter your message here" 
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                rows="6"
              ></textarea>
            </div>
            <button type="submit" className="send-message-btn">SEND MESSAGE</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Projects;
