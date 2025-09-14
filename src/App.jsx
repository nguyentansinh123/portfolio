import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Terminal from './components/Terminal';
import WindowManager from './components/WindowManager';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import './App.css';

function App() {
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(fontLink);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<TerminalPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

const TerminalPage = () => (
  <div className="App">
    <WindowManager initialSize={{ width: '800px', height: '600px' }}>
      <Terminal />
    </WindowManager>
    <Link to="/portfolio" className="portfolio-button">
      View My Portfolio
    </Link>
  </div>
);

export default App;
