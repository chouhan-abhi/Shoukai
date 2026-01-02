import React from "react";
import { PROJECTS } from "../data/userData";

export default function Launchpad() {
  return (
    <main className="h-screen w-full bg-[#0a0a0a] font-mono text-green-400">
      <section className="flex flex-col h-full border border-green-700 rounded-md overflow-hidden">
        {/* Header (matches hobbies layout) */}
        <div className="bg-[#0f0f0f] px-4 py-3 border-b border-green-700">
          <p className="text-green-600 text-sm">&gt; Quick Links</p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6 space-y-4">
          {/* Projects list */}
          <ul className="space-y-3">
            {PROJECTS.map((project, idx) => (
              <li
                key={idx}
                className="bg-[#111] px-4 py-3 rounded-md text-green-300 text-sm transition hover:bg-[#151515]"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Preview */}
                  <div className="w-full md:w-44 h-28 bg-black border border-green-700/40 rounded overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-90"
                      loading="lazy"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 flex flex-col gap-1">
                    <span className="text-green-400 font-semibold">
                      [{idx + 1}] {project.title}
                    </span>

                    <span className="text-green-500/70 text-xs leading-relaxed">
                      {project.description}
                    </span>

                    {/* Actions (same style as hobbies) */}
                    <div className="flex gap-4 text-xs mt-1">
                      {project.demo && (
                        <span
                          onClick={() =>
                            window.open(project.demo, "_blank")
                          }
                          className="cursor-pointer text-green-300 hover:text-green-100 underline"
                        >
                          live
                        </span>
                      )}
                      {project.repo && (
                        <span
                          onClick={() =>
                            window.open(project.repo, "_blank")
                          }
                          className="cursor-pointer text-green-300 hover:text-green-100 underline"
                        >
                          code
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
