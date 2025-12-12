import { projects, skills, experience, education } from "../data/projects";
import PhotographySection from "./PhotographySection";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans px-8 py-16 flex flex-col items-start space-y-20 max-w-4xl mx-auto">
      {/* ---------- Hero Section ---------- */}
      <section className="w-full space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]">
          Hi, I’m Abhishek
        </h1>
        <p className="text-white/70 text-lg md:text-xl">
          Frontend Engineer at Sequoia | Formerly Leadsquared & SAP Labs | MTech BITS Pilani (WILP) | Passionate Web Developer
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="#projects"
            className="px-6 py-2 bg-green-600 hover:bg-green-700 transition rounded-lg font-medium"
          >
            Projects
          </a>
          <a
            href="#about"
            className="px-6 py-2 border border-green-600 hover:bg-green-800 transition rounded-lg font-medium"
          >
            About Me
          </a>
        </div>
      </section>

      {/* ---------- Skills Section ---------- */}
      <section className="w-full space-y-4">
        <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-1 border border-green-600 rounded-lg hover:bg-green-700 transition text-white text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- Professional Experience Timeline ---------- */}
      <section className="w-full relative">
        <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)] mb-8">Professional Experience</h2>
        <div className="relative border-l-2 border-green-600 pl-8 space-y-12">
          {experience.map((job, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-11 top-2 w-6 h-6 bg-green-400 rounded-full border-2 border-[#0a0a0a] drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]"></div>
              <h3 className="font-bold text-white text-lg drop-shadow-[0_0_5px_rgba(0,255,0,0.7)]">{job.role} - {job.company}</h3>
              <p className="text-white/70 text-sm">{job.duration} | {job.location}</p>
              <p className="text-white/60 mt-2">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Education Timeline ---------- */}
      <section className="w-full relative">
        <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)] mb-8">Education</h2>
        <div className="relative border-l-2 border-green-600 pl-8 space-y-12">
          {education.map((edu, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-11 top-2 w-6 h-6 bg-green-400 rounded-full border-2 border-[#0a0a0a] drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]"></div>
              <h3 className="font-bold text-white text-lg drop-shadow-[0_0_5px_rgba(0,255,0,0.7)]">{edu.degree}</h3>
              <p className="text-white/70 text-sm">{edu.institution} | {edu.duration}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Projects Section ---------- */}
      <section id="projects" className="w-full space-y-6">
        <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)] mb-6">Featured Projects</h2>
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.demo}
              target="_blank"
              className="flex flex-col md:flex-row bg-[#111111] border border-green-600 rounded-xl overflow-hidden hover:bg-[#1a1a1a] transition cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/3 h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_5px_rgba(0,255,0,0.7)]">{project.title}</h3>
                <p className="text-white/60 mt-2">{project.description}</p>
                <div className="flex gap-2 mt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="px-4 py-1 bg-green-600 hover:bg-green-700 transition rounded-lg text-black font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    className="px-4 py-1 border border-green-600 hover:bg-green-800 transition rounded-lg text-white font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ---------- Photography Section ---------- */}
      <PhotographySection />
    </main>
  );
}
