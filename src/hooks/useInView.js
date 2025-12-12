import { useEffect, useRef } from 'react';

/**
 * Custom hook to trigger animations when elements enter viewport
 * Adds 'in-view' class to element when it's visible
 */
export const useInView = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const opts = { threshold: 0.5, ...options };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Optional: stop observing after animation triggers
        observer.unobserve(entry.target);
      }
    }, opts);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return ref;
};
