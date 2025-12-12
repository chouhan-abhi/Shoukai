import React, { useEffect } from 'react';
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  useEffect(() => {
    console.log('Hero mounted');
  }, []);

  return (
    <div className="section overflow-hidden">
      <div className="section-wrapper flex flex-col h-screen md:flex-row items-center justify-between">

        {/* === LEFT TEXT BLOCK === */}
        <div className="max-w-2xl animate-fadeInUp">
          <p className="text-sm md:text-base tracking-wide text-primary-color font-semibold uppercase mb-2">
            Software Engineer
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Hi, I'm <span className="text-primary-color">Abhishek Chouhan</span>
           <i className="font-normal text-lg ml-2"> (Dracket)</i>
          </h1>

          <p className="text-lg text-text-color/80 max-w-lg leading-relaxed mb-10">
            I build fast, intuitive, and thoughtful web applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* === RIGHT VISUAL === */}
        <div className="w-full md:w-1/2 flex justify-center animate-slideIn">
          <div className="rounded-full shadow-xl hero-blob">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQFoA1umsW6ADQ/profile-displayphoto-scale_400_400/B56ZiYiKKEG0Ag-/0/1754905750976?e=1767225600&v=beta&t=XBYcoCkx0cudaGXMV0nRdveJD0hRYioKQ0XitflFva4"
              alt="Hero Visual"
              className="w-72 h-72 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
