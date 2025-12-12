import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="section w-full">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <div className="mb-12 animate-fadeInUp text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-color">
            Contact <span className="text-primary-color">Me</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-8 animate-slideIn">
          <p className="text-lg text-text-color/80 leading-relaxed text-center">
            Have a question or want to work together? Feel free to reach out!
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center gap-4 space-x-8 mt-10">
            {[
              {
                Icon: Github,
                link: "https://github.com",
              },
              {
                Icon: Twitter,
                link: "https://twitter.com",
              },
              {
                Icon: Linkedin,
                link: "https://linkedin.com",
              },
            ].map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-14 h-14 
                  flex items-center justify-center 
                  rounded-full 
                  bg-gradient-to-br 
                  from-primary-color via-[#8A2BE2] to-secondary-color
                  shadow-[0_0_20px_rgba(168,85,247,0.35)]
                  hover:shadow-[0_0_35px_rgba(168,85,247,0.55)]
                  transition-all duration-300 
                  hover:scale-110
                "
              >
                <Icon size={26} className="text-white drop-shadow-md" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
