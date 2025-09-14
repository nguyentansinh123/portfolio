import { useEffect } from 'react';

/**
 * Custom hook to enable smooth scrolling for anchor links
 */
const useSmoothScroll = () => {
  useEffect(() => {
    // Function to handle smooth scrolling when clicking on anchor links
    const handleAnchorClick = (e) => {
      const target = e.target;
      
      // Check if the clicked element is an anchor link with a hash
      if (
        target.tagName.toLowerCase() === 'a' && 
        target.getAttribute('href') && 
        target.getAttribute('href').startsWith('#')
      ) {
        const hash = target.getAttribute('href');
        const element = document.querySelector(hash);
        
        if (element) {
          e.preventDefault();
          
          // Scroll smoothly to the element
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });

          // Update URL hash without causing a page jump
          window.history.pushState(null, null, hash);
        }
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleAnchorClick);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
};

export default useSmoothScroll;