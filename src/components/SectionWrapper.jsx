import React from 'react';
import { useInView } from '../hooks/useInView';

/**
 * SectionWrapper component
 * Wraps sections with scroll-triggered animation for "moving window" effect
 */
export default function SectionWrapper({ children, id }) {
  const ref = useInView({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className="scroll-section w-full"
      data-section={id}
    >
      {children}
    </div>
  );
}
