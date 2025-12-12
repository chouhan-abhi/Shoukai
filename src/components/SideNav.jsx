// src/components/SideNav.jsx
import React from 'react';
import { useScrollspy } from '../hooks/useScrollspy';

const sections = [
  { id: 'hero', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'photography', title: 'Photography' },
  { id: 'contact', title: 'Contact' },
];

const SideNav = () => {
  const activeSection = useScrollspy(sections);

  return (
    <aside className="fixed top-0 right-0 h-full w-64 p-6 z-50 hidden md:flex items-center justify-center pointer-events-none">
      <nav className="relative h-full w-full pointer-events-auto">
        {/* vertical timeline line with gradient */}
        <div className="absolute top-6 bottom-6 right-12 w-[2px] bg-gradient-to-b from-primary-color via-secondary-color to-accent-color opacity-60" aria-hidden="true"></div>

        <ul className="flex flex-col items-end gap-8 h-full justify-center">
          {sections.map((section, idx) => {
            const isActive = activeSection === section.id;
            return (
              <li key={section.id} className="w-full flex items-center justify-end">
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(section.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`group flex items-center gap-3 transition-all duration-300 transform ${isActive ? 'scale-105' : 'hover:translate-x-[-4px]'} `}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {/* label (on the left of the line) */}
                  <span
                    className={`whitespace-nowrap px-3 py-1.5 rounded-md glass-card text-sm transition-colors duration-300 ${isActive ? 'bg-blue-50 dark:bg-slate-700 text-primary-color font-semibold shadow-md' : 'text-text-secondary dark:text-text-secondary-dark hover:text-primary-color'}`}
                  >
                    {section.title}
                  </span>

                  {/* node on the timeline */}
                  <span className="relative">
                    <span
                      className={`block h-3 w-3 rounded-full transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-primary-color to-secondary-color scale-125 shadow-lg shadow-primary-color/50' : 'bg-border-color group-hover:bg-primary-color'}`}
                      style={{ transformOrigin: 'center' }}
                    />
                    {/* pulse for active */}
                    {isActive && (
                      <span className="absolute inset-0 -translate-y-1 animate-ping rounded-full bg-primary-color/40" aria-hidden="true" />
                    )}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;

