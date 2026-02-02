import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { processCommand } from '../utils/commands';
import getWelcomeMessage from '../utils/welcome';
import Nano from './Nano';

const Shell = () => {
  const [input, setInput] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);
  const [history, setHistory] = useState([
    { command: '', output: getWelcomeMessage() }
  ]);
  const [currentDir, setCurrentDir] = useState('~');
  const [isNanoMode, setIsNanoMode] = useState(false);
  const [nanoFile, setNanoFile] = useState({ name: '', content: '' });
  const terminalRef = useRef(null);
  
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  useEffect(() => {
    if (terminalRef.current && !isNanoMode) {
      terminalRef.current.focus();
      
      // Animate terminal content on mount
      const historyElements = terminalRef.current.querySelectorAll('.prompt, .welcome-container');
      gsap.fromTo(
        historyElements,
        { opacity: 0, x: -20 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.5, 
          stagger: 0.1,
          ease: 'power2.out'
        }
      );
    }
  }, [isNanoMode]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      
      // Animate new entries
      const lastEntry = terminalRef.current.lastElementChild;
      if (lastEntry) {
        gsap.fromTo(
          lastEntry,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        );
      }
    }
  }, [history]);

  const handleKeyDown = (e) => {
    if (isNanoMode) return;

    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) {
        setCommandHistory(prev => [input, ...prev.slice(0, 49)]); // Keep last 50 commands
        setHistoryIndex(-1); // Reset history index
      }
      processCommand(input, currentDir, setCurrentDir, setHistory, setIsNanoMode, setNanoFile, commandHistory);
      setInput('');
      setCursorPosition(0);
    } else if (e.key === 'Backspace') {
        if (cursorPosition > 0) {
            setInput(input.slice(0, cursorPosition - 1) + input.slice(cursorPosition));
            setCursorPosition(cursorPosition - 1);
        }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      // Navigate up through command history
      const nextIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      if (nextIndex >= 0 && commandHistory.length > 0) {
        const newV = commandHistory[nextIndex]
        setInput(newV);
        setCursorPosition(newV.length)
        setHistoryIndex(nextIndex);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      // Navigate down through command history
      const nextIndex = Math.max(historyIndex - 1, -1);
      if (nextIndex >= 0) {
        const newV = commandHistory[nextIndex]
        setInput(newV);
        setCursorPosition(newV.length)
      } else {
        setInput(''); // Clear input if we're at the beginning of history
        setCursorPosition(0)
      }
      setHistoryIndex(nextIndex);
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCursorPosition(Math.max(0, cursorPosition - 1));
    } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCursorPosition(Math.min(input.length, cursorPosition + 1));
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      setInput(input.slice(0, cursorPosition) + e.key + input.slice(cursorPosition));
      setCursorPosition(cursorPosition + 1);
    }
  };

  const handleSaveNano = (content) => {
    processCommand(`__save_nano__ ${nanoFile.name} "${content}"`, currentDir, setCurrentDir, setHistory, setIsNanoMode, setNanoFile);
  };

  if (isNanoMode) {
    return (
      <Nano 
        fileName={nanoFile.name}
        fileContent={nanoFile.content}
        onSave={handleSaveNano}
        onExit={() => setIsNanoMode(false)}
      />
    );
  }

  return (
    <div 
      className="shell" 
      ref={terminalRef} 
      tabIndex={0} 
      onKeyDown={handleKeyDown}
      onClick={() => terminalRef.current && terminalRef.current.focus()}
      style={{ outline: 'none' }}
    >
      {history.map((entry, index) => (
        <div key={index}>
          {entry.command && (
            <div className="prompt">
              <span>user@portfolio:{currentDir}$ </span>{entry.command}
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: entry.output }}></div>
        </div>
      ))}
      <div className="prompt">
        <span>user@portfolio:{currentDir}$ </span>
        <span className="input-area">
            {input.slice(0, cursorPosition)}
            <span className="cursor"></span>
            {input.slice(cursorPosition)}
        </span>
      </div>
    </div>
  );
};

export default Shell;
