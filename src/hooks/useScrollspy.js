// src/hooks/useScrollspy.js
import { useState, useEffect } from 'react';

export const useScrollspy = (sections, options) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;
      let nearest = { id: null, distance: Infinity };

      sections.forEach(section => {
        // Prefer the SectionWrapper wrapper which exposes data-section
        const wrapper = document.querySelector(`[data-section="${section.id}"]`) || document.getElementById(section.id);
        if (wrapper) {
          const rect = wrapper.getBoundingClientRect();
          const mid = rect.top + rect.height / 2;
          const distance = Math.abs(mid - centerY);

          if (distance < nearest.distance) {
            nearest = { id: section.id, distance };
          }
        }
      });

      if (nearest.id !== activeSection) {
        setActiveSection(nearest.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // run once to init
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sections, activeSection]);

  return activeSection;
};
