import React from 'react';
import { useInView } from '../hooks/useInView';

/**
 * SectionWrapper component
 * Wraps sections with scroll-triggered animation for "moving window" effect
 */
export default function SectionWrapper({ children }) {
  const ref = useInView({ threshold: 0.5 });

  // If the wrapped child is a section with an id, expose it on the wrapper
  const child = React.Children.only(children);
  const sectionId = child?.props?.id;

  return (
    <div
      ref={ref}
      className="scroll-section w-full"
      {...(sectionId ? { ['data-section']: sectionId } : {})}
    >
      {children}
    </div>
  );
}
