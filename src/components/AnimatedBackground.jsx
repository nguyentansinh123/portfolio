import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const particleCount = 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 2-6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random starting position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      container.appendChild(particle);
      particlesRef.current.push(particle);

      // Animate particle
      gsap.to(particle, {
        x: `${(Math.random() - 0.5) * 200}px`,
        y: `${(Math.random() - 0.5) * 200}px`,
        opacity: Math.random(),
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    // Create floating geometric shapes
    const shapes = ['circle', 'square', 'triangle'];
    for (let i = 0; i < 10; i++) {
      const shape = document.createElement('div');
      shape.className = `floating-shape ${shapes[Math.floor(Math.random() * shapes.length)]}`;
      
      shape.style.left = `${Math.random() * 100}%`;
      shape.style.top = `${Math.random() * 100}%`;
      
      container.appendChild(shape);

      gsap.to(shape, {
        y: `${(Math.random() - 0.5) * 300}px`,
        x: `${(Math.random() - 0.5) * 300}px`,
        rotation: Math.random() * 360,
        duration: Math.random() * 20 + 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    return () => {
      // Cleanup
      particlesRef.current.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return <div ref={containerRef} className="animated-background"></div>;
};

export default AnimatedBackground;
