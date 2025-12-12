// src/components/Footer.jsx
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-panel-color/50 mt-20 border-t border-border-color">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between py-8 sm:flex-row">
          <div className="text-sm text-text-color/80">
            © {new Date().getFullYear()} Shoukai. All rights reserved.
          </div>
          <div className="flex mt-4 sm:mt-0 space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-color/80 hover:text-text-color">
              <Github size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-color/80 hover:text-text-color">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-color/80 hover:text-text-color">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;