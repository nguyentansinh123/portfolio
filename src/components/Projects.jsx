import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import './Portfolio.css';
import { FaLink, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import useSmoothScroll from '../hooks/useSmoothScroll';
import logoImage from '../assets/logo.png';
import logo2Image from '../assets/logoo2.png';
import logo3Image from '../assets/logo3.png';
import logo4Image from '../assets/logo4.png';

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
              <img src={logoImage} alt="White Knight Logo" />
            </div>
            <div className="project-details">
              <h2>White Knight</h2>
              <p>
                White Knight is a secure, cloud-based document management system designed for handling legal documents such as NDAs.
                It enables users to upload, share, sign, and track documents with full version control and detailed activity logging.
              </p>
              <h3>Key Features</h3>
              <ul className="feature-list">
                <li>Digital signing and document revision history</li>
                <li>Role-based access control for admins, providers, and users</li>
                <li>In-app notifications and activity tracking</li>
                <li>AI-powered legal assistant for quick guidance</li>
                <li>Real Time Chat, Video Call</li>
                <li>And Many More...</li>
              </ul>
              <div className="project-tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>Express</span>
                <span>Node.js</span>
                <span>AWS</span>
                <span>DynamoDB</span>
                <span>S3</span>
                <span>IAM</span>
                <span>Tailwind CSS</span>
                <span>MongoDB</span>
                <span>Cloudinary</span>
                <span>Streamio</span>
                <span>WebRTC</span>
              </div>
              <a href="https://github.com/nguyentansinh123/NDA-Signing-Project" className="project-link-button">
                <FaLink /> Project Details
              </a>
            </div>
          </div>

          <div className="project-entry card animate">
            <div className="project-image">
              <img src={logo3Image} alt="White Knight Logo" />
            </div>
            <div className="project-details">
              <h2>Price Checking</h2>
              <p>
                A comprehensive web scraping application that collects and compares product data from major Australian supermarket chains like Coles, Woolworths, and IGA. This tool enables users to track price changes over time, compare prices across different retailers, and receive alerts for price drops on their favorite products.
              </p>
              <h3>Key Features</h3>
              <ul className="feature-list">
                <li>Product Search – Find items across multiple supermarkets simultaneously</li>
                <li>Price Comparison – Compare prices between Coles, Woolworths, and IGA</li>
                <li>Price History – Track price changes over time with interactive charts</li>
                <li>Price Alerts – Get notifications when prices drop on watched items</li>
                <li>Shopping List – Create and manage shopping lists optimized for best prices</li>
                <li>Responsive Design – Access from any device with a mobile-friendly interface</li>
                <li>Daily Updates – Automated scraping keeps prices current and accurate</li>
                <li>Performance Optimization – Efficient data retrieval and storage systems</li>
              </ul>
              <div className="project-tags">
                <span>Python</span>
                <span>BeautifulSoup</span>
                <span>Selenium</span>
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>Chart.js</span>
                <span>AWS Lambda</span>
                <span>Docker</span>
              </div>
              <a href="https://github.com/nguyentansinh123/PriceChecking" className="project-link-button">
                <FaLink /> Project Details
              </a>
            </div>
          </div>

          <div className="project-entry card animate">
            <div className="project-image">
              <img src={logo2Image} alt="White Knight Logo" />
            </div>
            <div className="project-details">
              <h2>CV AI Builder</h2>
              <p>
                CV AI Builder Pro is a powerful and intuitive web application that helps users create professional CVs with the
                assistance of AI. The app features real-time updates, automatic saving, and subscription-based AI capabilities,
                all wrapped in a beautiful, user-friendly interface.
              </p>
              <h3>Key Features</h3>
              <ul className="feature-list">
                <li>Authentication – Secure login using Clerk</li>
                <li>AI Assistance – OpenAI integration to auto-generate text and suggestions</li>
                <li>Multiple CVs – Create, preview, edit, and delete multiple CV forms</li>
                <li>Auto-save – Automatically saves inputs to PostgreSQL every 1.5 seconds of inactivity</li>
                <li>Image Upload – Upload profile pictures using Vercel Blob</li>
                <li>Subscription Management – Stripe integration with webhooks for upgrades</li>
                <li>Real-time Preview – Live CV preview as you type</li>
                <li>Customizable Templates – Adjust CV colors, image borders, and layouts</li>
                <li>PDF Export – Download your CV in PDF format</li>
                <li>Dark Mode – Toggle light/dark themes for better UX</li>
              </ul>
              <div className="project-tags">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>ShadCN/UI</span>
                <span>Prisma</span>
                <span>PostgreSQL</span>
                <span>Clerk</span>
                <span>Stripe</span>
                <span>OpenAI API</span>
                <span>Vercel Blob</span>
                <span>Vercel</span>
              </div>
              <a href="https://github.com/nguyentansinh123/CV-AI-Builder" className="project-link-button">
                <FaLink /> Project Details
              </a>
            </div>
          </div>

          <div className="project-entry card animate">
            <div className="project-image">
              <img src={logo4Image} alt="White Knight Logo" />
            </div>
            <div className="project-details">
              <h2>Student management</h2>
              <p>
                A scalable application built using a microservice architecture designed to efficiently manage student data,
                course enrollments, and academic performance. This system provides administrators and faculty with powerful
                tools to track student progress, manage course assignments, and generate insightful reports.
              </p>
              <h3>Key Features</h3>
              <ul className="feature-list">
                <li>Authentication – Secure role-based access control for admins, faculty, and students</li>
                <li>Student Dashboard – Comprehensive view of courses, grades, and assignments</li>
                <li>Course Management – Tools for creating and managing course content and schedules</li>
                <li>Attendance Tracking – Digital system for recording and monitoring student attendance</li>
                <li>Performance Analytics – Detailed reports on student and course performance metrics</li>
                <li>Notification System – Automated alerts for important deadlines and announcements</li>
                <li>Responsive Design – Accessible from desktop and mobile devices</li>
                <li>Real-time Updates – Synchronization across all services for up-to-date information</li>
              </ul>
              <div className="project-tags">
                <span>Spring Boot</span>
                <span>Spring Security</span>
                <span>Java</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>Kafka</span>
                <span>gRPC</span>
                <span>AWS</span>
                <span>PostgreSQL</span>
                <span>React</span>
              </div>
              <a href="https://github.com/nguyentansinh123/studentmanagement" className="project-link-button">
                <FaLink /> Project Details
              </a>
            </div>
          </div>
        </main>

        <section id="contact" className="contact-section">
          <h2 className="contact-title">Contact with me</h2>
          <p className="contact-subtitle">You can also get in touch with me through this form below.</p>

          <div className="contact-grid">
            <a href="hhttps://github.com/nguyentansinh123" target="_blank" rel="noopener noreferrer" className="contact-card">
              <FaGithub className="contact-icon" />
              <div className="contact-card-content">
                <h3>Github Profile</h3>
                <p>Find more of my repositories</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/sinh-nguyen-93a9b2216/" target="_blank" rel="noopener noreferrer" className="contact-card">
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
