import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import profileImage from '../assets/pfi.jpg';
import { 
  SiJavascript, 
  SiTypescript, 
  SiV, 
  SiReact, 
  SiSass, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiUikit,
} from 'react-icons/si';
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython , FaDocker,FaAws} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";
import { SiAmazondynamodb } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";

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
          <p>Hey! My Name is Sinh, I am a 21 years old Software Developer in Sydney. I like to build full-stack apps, brew strong coffee, and learn new tricks while coding.</p>
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
            <SiSpringboot />
            <FaJava />
            <FaPython />
            <FaDocker />
            <FaAws />
            <BiLogoPostgresql />
            <DiMysql />
            <FaGolang />
            <SiAmazondynamodb />
            <SiApachekafka />
          </div>
        </div>

        <div className="card profile">
          <div className="profile-pic">
            <img src={profileImage} alt="Sinh Nguyen" />
          </div>
          <h3>Sinh Nguyen</h3>
        </div>

        <div className="card starry-sky"></div>

        <div className="card quote">
          <p>"The only way to do great work is to love what you do."</p>
        </div>

        <div className="card education">
          <h2>Education</h2>
          <div>
            <h4>Bachelor of computer science <span className="date">(Oct 2022 - Dec 2025)</span></h4>
            <p>Currently in my last semester studying a Bachelor of Computer Science at the University of Wollongong (UOW), Wollongong campus.</p>
          </div>
          <div>
            <h4>CS50's Introduction to Computer Science <span className="date">(2021)</span></h4>
            <p>I took part in the online course CS50's Introduction to Computer Science by Harvard University.</p>
          </div>
          <h2>Experience</h2>
          <div>
            <h4>Internship at Sample Assist <span className="date">(August 2024 - June 2025)</span></h4>
            <p>I work as a Full Stack Developer, building applications with TypeScript and React on the frontend, and Express with AWS on the backend.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
