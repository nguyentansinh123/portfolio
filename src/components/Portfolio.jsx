import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import { SiJavascript, SiTypescript, SiV, SiReact, SiSass, SiTailwindcss, SiExpress, SiMongodb, SiUikit } from 'react-icons/si';

const Portfolio = () => {
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

        <div className="card who-am-i">
          <h2>Who am I?</h2>
          <p>Hey! My Name is Tim Gatzke, I am a Full Stack Developer and I am currently a student in Germany. I am passionate about creating software solutions and I am always looking for new challenges. If you have a project that you would like to work on, feel free to contact me.</p>
        </div>

        <div className="card student-dev">
          <h3>Stundent & Full Stack Developer</h3>
        </div>

        <div className="card technologies">
          <h2>Technologies I have worked with</h2>
          <div className="tech-icons">
            <SiJavascript />
            <SiTypescript />
            <SiV />
            <SiReact />
            <SiSass />
            <SiTailwindcss />
            <SiExpress />
            <SiMongodb />
            <SiUikit />
          </div>
        </div>

        <div className="card profile">
          <div className="profile-pic"></div>
          <h3>Tim Gatzke</h3>
        </div>

        <div className="card starry-sky"></div>

        <div className="card quote">
          <p>"The only way to do great work is to love what you do."</p>
        </div>

        <div className="card education">
          <h2>Education</h2>
          <div>
            <h4>High School <span className="date">(2019 - Today)</span></h4>
            <p>I am currently attending the 10th class of a Gemeinschaftsschule in Germany.</p>
          </div>
          <div>
            <h4>CS50's Introduction to Computer Science <span className="date">(2021)</span></h4>
            <p>I took part in the online course CS50's Introduction to Computer Science by Harvard University.</p>
          </div>
          <div>
            <h4>CS50's Introduction to Game Development <span className="date">(2022)</span></h4>
            <p>I took part in the online course CS50's Introduction to Game Development by Harvard University in order to learn more about game development with Lua and C#.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
