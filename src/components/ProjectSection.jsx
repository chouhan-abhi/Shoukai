import React from "react";
import { projects } from "../data/projects";

export default function ProjectsConsoleCard() {
  return (
    <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-green-500/30 rounded-2xl shadow-[0_0_30px_rgba(0,255,0,0.15)] overflow-hidden font-mono text-green-400">
      {/* Top Developer Info */}
      <div className="px-6 py-4 border-b border-green-500/20 bg-[#050505]">
        <h2 className="text-xl font-bold">Dracket | Abhishek Chouhan</h2>
        <p className="text-sm opacity-80">Frontend Developer</p>
      </div>

      {/* Question prompt */}
      <div className="px-6 py-4 border-b border-green-500/20 bg-[#0a0a0a]">
        <p className="text-sm">Show featured projects?</p>
      </div>

      {/* Projects List */}
      <div className="divide-y divide-green-500/20">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.demo}
            target="_blank"
            className="flex flex-col md:flex-row items-center md:items-start gap-4 p-6 hover:bg-green-500/5 transition"
          >
            {/* Project Preview */}
            <div className="w-full md:w-1/3 h-40 md:h-32 overflow-hidden rounded-lg border border-green-500/30">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm mt-1 opacity-80 leading-snug">
                {project.description}
              </p>
              <div className="mt-2 flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-green-200 hover:underline text-xs"
                >
                  Live Demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  className="text-green-200 hover:underline text-xs"
                >
                  GitHub
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
