import React, { useState, useRef, useEffect } from 'react';
import TitleBar from './TitleBar';
import './WindowManager.css';

const WindowManager = ({ children, initialSize = { width: '80%', height: '80vh' } }) => {
  // Create a ref to hold the initial setup flag
  const isInitializedRef = useRef(false);
  
  const [windowState, setWindowState] = useState({
    isMinimized: false,
    isMaximized: false,
    isDragging: false,
    isResizing: false,
    position: { x: 0, y: 0 }, // This will be updated in useEffect
    size: { width: initialSize.width, height: initialSize.height },
    dragOffset: { x: 0, y: 0 },
    resizeDirection: null,
    zIndex: 1
  });
  
  const windowRef = useRef(null);
  
  // Store original size and position before maximizing
  const originalSizeRef = useRef({ width: initialSize.width, height: initialSize.height });
  const originalPositionRef = useRef({ x: 0, y: 0 });
  
  // Initialize window position to center when component mounts
  useEffect(() => {
    if (!isInitializedRef.current && windowRef.current) {
      const windowWidth = parseInt(initialSize.width);
      const windowHeight = parseInt(initialSize.height);
      
      // Calculate center position
      const centerX = Math.max(0, (window.innerWidth - windowWidth) / 2);
      const centerY = Math.max(0, (window.innerHeight - windowHeight) / 2);
      
      // Update position
      setWindowState(prev => ({
        ...prev,
        position: { x: centerX, y: centerY }
      }));
      
      // Save to original position
      originalPositionRef.current = { x: centerX, y: centerY };
      
      // Mark as initialized
      isInitializedRef.current = true;
    }
  }, [initialSize]);
  
  // Handle window actions
  const handleMinimize = () => {
    setWindowState(prev => ({
      ...prev,
      isMinimized: !prev.isMinimized
    }));
  };

  const handleMaximize = () => {
    if (windowState.isMaximized) {
      // Restore to original size and position
      setWindowState(prev => ({
        ...prev,
        isMaximized: false,
        size: originalSizeRef.current,
        position: originalPositionRef.current
      }));
    } else {
      // Save current size and position
      originalSizeRef.current = windowState.size;
      originalPositionRef.current = windowState.position;
      
      // Maximize
      setWindowState(prev => ({
        ...prev,
        isMaximized: true,
        position: { x: 0, y: 0 },
        size: { width: '100%', height: '100%' }
      }));
    }
  };

  const handleClose = () => {
    // You can implement closing behavior here
    // For now, we'll just minimize
    handleMinimize();
  };

  // Dragging handlers
  const handleMouseDown = (e) => {
    // Only start dragging when clicking on the title bar, not on controls
    if (e.target.classList.contains('title-bar') || 
        e.target.classList.contains('title-bar-text')) {
      // Get current window position from DOM
      const windowRect = windowRef.current.getBoundingClientRect();
      
      // Calculate cursor offset relative to window corner
      const offsetX = e.clientX - windowRect.left;
      const offsetY = e.clientY - windowRect.top;
      
      setWindowState(prev => ({
        ...prev,
        isDragging: true,
        dragOffset: {
          x: offsetX,
          y: offsetY
        },
        zIndex: 10 // Bring to front when dragging
      }));
      
      // Prevent text selection during drag
      e.preventDefault();
    }
  };

  // Resizing handlers
  const handleResizeMouseDown = (direction, e) => {
    e.preventDefault();
    e.stopPropagation();
    const windowRect = windowRef.current.getBoundingClientRect();
    setWindowState(prev => ({
      ...prev,
      isResizing: true,
      resizeDirection: direction,
      dragOffset: {
        x: e.clientX,
        y: e.clientY
      },
      zIndex: 10
    }));
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (windowState.isDragging && !windowState.isMaximized) {
        // Calculate new position based on mouse position and drag offset
        const newX = e.clientX - windowState.dragOffset.x;
        const newY = e.clientY - windowState.dragOffset.y;
        
        // Apply new position
        setWindowState(prev => ({
          ...prev,
          position: {
            x: newX,
            y: newY
          }
        }));
      } else if (windowState.isResizing && !windowState.isMaximized) {
        const { resizeDirection, dragOffset, position, size } = windowState;
        const dx = e.clientX - dragOffset.x;
        const dy = e.clientY - dragOffset.y;
        
        const newState = { ...windowState };
        
        // Update size based on resize direction
        if (resizeDirection.includes('e')) { // east/right
          newState.size = {
            ...size,
            width: `${parseInt(size.width) + dx}px`
          };
        }
        if (resizeDirection.includes('w')) { // west/left
          newState.size = {
            ...size,
            width: `${parseInt(size.width) - dx}px`
          };
          newState.position = {
            ...position,
            x: position.x + dx
          };
        }
        if (resizeDirection.includes('s')) { // south/bottom
          newState.size = {
            ...size,
            height: `${parseInt(size.height) + dy}px`
          };
        }
        if (resizeDirection.includes('n')) { // north/top
          newState.size = {
            ...size,
            height: `${parseInt(size.height) - dy}px`
          };
          newState.position = {
            ...position,
            y: position.y + dy
          };
        }
        
        // Update drag offset for next move calculation
        newState.dragOffset = {
          x: e.clientX,
          y: e.clientY
        };
        
        setWindowState(newState);
      }
    };

    const handleMouseUp = () => {
      setWindowState(prev => ({
        ...prev,
        isDragging: false,
        isResizing: false,
        resizeDirection: null
      }));
    };

    if (windowState.isDragging || windowState.isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [windowState]);

  // Calculate window style based on state
  const windowStyle = {
    width: windowState.size.width,
    height: windowState.isMinimized ? '32px' : windowState.size.height,
    left: `${windowState.position.x}px`,
    top: `${windowState.position.y}px`,
    transition: windowState.isDragging || windowState.isResizing ? 'none' : 'all 0.3s',
    zIndex: windowState.zIndex
  };

  // Handler to remove focus outline
  const handleFocus = () => {
    // Focus handling without showing outline
  };
  
  return (
    <div 
      className={`window-manager ${windowState.isMaximized ? 'maximized' : ''}`} 
      style={windowStyle}
      ref={windowRef}
      tabIndex="-1"
      onFocus={handleFocus}
    >
      <TitleBar 
        onMouseDown={handleMouseDown}
        onMinimize={handleMinimize}
        onMaximize={handleMaximize}
        onClose={handleClose}
      />
      
      <div className={`window-content ${windowState.isMinimized ? 'minimized' : ''}`}>
        {children}
      </div>
      
      {/* Resize handles */}
      {!windowState.isMaximized && !windowState.isMinimized && (
        <>
          <div className="resize-handle n" onMouseDown={(e) => handleResizeMouseDown('n', e)}></div>
          <div className="resize-handle e" onMouseDown={(e) => handleResizeMouseDown('e', e)}></div>
          <div className="resize-handle s" onMouseDown={(e) => handleResizeMouseDown('s', e)}></div>
          <div className="resize-handle w" onMouseDown={(e) => handleResizeMouseDown('w', e)}></div>
          <div className="resize-handle ne" onMouseDown={(e) => handleResizeMouseDown('ne', e)}></div>
          <div className="resize-handle se" onMouseDown={(e) => handleResizeMouseDown('se', e)}></div>
          <div className="resize-handle sw" onMouseDown={(e) => handleResizeMouseDown('sw', e)}></div>
          <div className="resize-handle nw" onMouseDown={(e) => handleResizeMouseDown('nw', e)}></div>
        </>
      )}
    </div>
  );
};

export default WindowManager;
