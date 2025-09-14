import React, { useState, useRef, useEffect } from 'react';
import './TitleBar.css';

const TitleBar = ({ onMouseDown, onMinimize, onMaximize, onClose }) => {
  const [isSocialsMenuOpen, setIsSocialsMenuOpen] = useState(false);
  const socialsMenuRef = useRef(null);

  const toggleSocialsMenu = (e) => {
    e.stopPropagation();
    setIsSocialsMenuOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (socialsMenuRef.current && !socialsMenuRef.current.contains(event.target)) {
      setIsSocialsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="title-bar" onMouseDown={onMouseDown}>
      <div className="title-bar-left">
        <div className="socials-menu-container" ref={socialsMenuRef}>
          <div className="socials-menu-button" onClick={toggleSocialsMenu}>
            Socials
          </div>
          {isSocialsMenuOpen && (
            <div className="socials-dropdown-menu">
              <a href="https://github.com/caffeind" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/caffeind" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          )}
        </div>
        <div className="title-bar-text">user@portfolio: ~</div>
      </div>
      <div className="title-bar-controls">
        <div className="button minimize" onClick={(e) => {
          e.stopPropagation();
          onMinimize && onMinimize();
        }}></div>
        <div className="button maximize" onClick={(e) => {
          e.stopPropagation();
          onMaximize && onMaximize();
        }}></div>
        <div className="button close" onClick={(e) => {
          e.stopPropagation();
          onClose && onClose();
        }}></div>
      </div>
    </div>
  );
};

export default TitleBar;
