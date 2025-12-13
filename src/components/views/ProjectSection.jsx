import React from "react";
import { PROJECTS } from "../../data/userData";

export default function ProjectsConsoleCard() {
  return (
    <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-green-500/30 rounded-2xl shadow-[0_0_30px_rgba(0,255,0,0.15)] overflow-hidden font-mono text-green-400">
      {/* Question prompt */}
      <div className="px-6 py-4 border-b border-green-500/20 bg-[#0a0a0a]">
        <p>Quick links?</p>
      </div>

      {/* Projects List */}
      <div className="divide-y divide-green-500/20">
        {PROJECTS.map((project, idx) => (
          <a
            key={idx}
            href={project.demo}
            target="_blank"
            className="flex flex-col md:flex-row items-center md:items-start gap-4 p-6 hover:bg-green-500/5 transition"
          >
            {/* Project Preview */}
            <div className="w-full md:w-1/3 h-40 md:h-32 overflow-hidden rounded-lg border border-green-500/30 shadow-[0_0_6px_rgba(0,255,156,0.2)]">
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

              {/* Hackery-style buttons */}
              <div className="mt-3 flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  className="px-4 py-1.5 bg-green-500/20 text-green-200 text-xs font-semibold rounded-md
                             hover:bg-green-500/40 hover:shadow-[0_0_10px_rgba(0,255,156,0.4)] transition-all"
                >
                  Try now
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  className="px-4 py-1.5 bg-black/50 border border-green-500/40 text-green-200 text-xs font-semibold rounded-md
                             hover:bg-green-500/10 hover:shadow-[0_0_8px_rgba(0,255,156,0.35)] transition-all"
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
