import React, { useState, useEffect, useRef } from 'react';
import './Nano.css';

const Nano = ({ fileContent, onSave, onExit }) => {
  const [content, setContent] = useState(fileContent);
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'x') {
      e.preventDefault();
      onSave(content);
      onExit();
    }
  };

  return (
    <div className="nano-editor" onKeyDown={handleKeyDown}>
      <div className="nano-header">
        <span>File: new_buffer</span>
        <span>GNU nano 8.0</span>
      </div>
      <textarea
        ref={editorRef}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="nano-textarea"
      />
      <div className="nano-footer">
        <span>^X Exit</span>
      </div>
    </div>
  );
};

export default Nano;
