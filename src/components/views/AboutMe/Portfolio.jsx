import { Linkedin, Github, Twitter, Globe } from "lucide-react";
import {
  PROJECTS,
  SKILLS,
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
  AWARDS,
} from "../../../data/userData"; // import all your constants

export default function Portfolio() {
  return (
    <main
      id="print-portfolio"
      className="
    min-h-screen
    print:min-h-0
    print:h-auto
    print:overflow-visible
    bg-[#0a0a0a]
    text-white
    font-sans
    px-8
    py-16
    flex
    flex-col
    items-start
    space-y-24
    max-w-5xl
  "
    >

      <button
        onClick={() => window.print()}
        className="
        print:hidden
            fixed top-6 right-6 z-50
            px-4 py-2 text-sm
            font-semibold
            bg-green-500/10 text-green-300
            border border-green-500/30
            rounded-md
            hover:bg-green-500/20
            hover:shadow-[0_0_10px_rgba(0,255,156,0.4)]
            transition"
      >
        Download PDF
      </button>
      <section className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]">
          Abhishek Chouhan
        </h1>
        <p className="text-white/70 text-lg md:text-xl">
          Frontend Engineer at Sequoia | Formerly Leadsquared & SAP Labs | MTech
          BITS Pilani | Passionate Web Developer
        </p>
        <p className="text-white/60 text-sm">Bengaluru, Karnataka, India
        </p>
      </section>

      {/* Summary */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]">
          Summary
        </h2>
        <p className="text-white/70 leading-relaxed text-sm">
          Frontend Engineer at Sequoia with 6.5+ years of experience in building
          scalable web apps, improving UX, implementing CI/CD pipelines, and
          enhancing system security. Delivered high-impact projects like Manage
          Activities Tab, Calendar & Recurring Task, and performance/security
          improvements. Passionate about creating user-centric web solutions and
          continually growing as a software engineer.
        </p>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-1 border border-green-600 rounded-lg hover:bg-green-700 transition text-white text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="relative">
        <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)] mb-8">
          Professional Experience
        </h2>
        <div className="relative border-l-2 border-green-600 pl-8 space-y-12">
          {EXPERIENCE.map((job, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-11 top-2 w-6 h-6 bg-green-400 rounded-full border-2 border-[#0a0a0a] drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]"></div>
              <h3 className="font-bold text-white text-lg drop-shadow-[0_0_5px_rgba(0,255,0,0.7)]">
                {job.role}
              </h3>
              <p className="text-white/70 text-sm">
                {job.duration} | {job.location}
              </p>
              <p className="text-white/60 mt-2 whitespace-pre-line">
                {job.description}
              </p>
              {job.skills && (
                <div className="mt-1 flex flex-wrap gap-2 text-xs text-green-400">
                  {job.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 border border-green-500 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
     <section className="relative break-inside-avoid-page">

        <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)] mb-8">
          Education
        </h2>
        <div className="relative border-l-2 border-green-600 pl-8 space-y-12">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-11 top-2 w-6 h-6 bg-green-400 rounded-full border-2 border-[#0a0a0a] drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]"></div>
              <h3 className="font-bold text-white text-lg drop-shadow-[0_0_5px_rgba(0,255,0,0.7)]">
                {edu.degree}
              </h3>
              <p className="text-white/70 text-sm">
                {edu.institution} | {edu.duration}
              </p>
              {edu.skills && (
                <div className="mt-1 flex flex-wrap gap-2 text-xs text-green-400">
                  {edu.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 border border-green-500 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="space-y-6 print:space-y-1">
        <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,156,0.6)] mb-6">
          Featured Projects
        </h2>
        <div className="space-y-5">
          {PROJECTS.map((p, i) => (
            <a
              className="
                group
                flex
                flex-col
                md:flex-row
                bg-[#111111]
                print:bg-transparent
                print:border-none
                print:p-0
                rounded-xl
                overflow-hidden"
            >

              <div className="w-full md:w-[280px] h-[180px] flex-shrink-0 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5 flex flex-col justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white drop-shadow-[0_0_6px_rgba(0,255,156,0.6)]">
                    {p.title}
                  </h3>
                  <p className="text-white/60 text-sm mt-2 leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <div className="flex gap-2 mt-3">
                  <a
                    href={p.demo}
                    target="_blank"
                    className="px-3 py-1.5 text-xs rounded-md bg-green-500/10 text-white border border-green-500/30 hover:bg-green-500/20 hover:shadow-[0_0_6px_rgba(0,255,156,0.35)] transition"
                  >
                    Live
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    className="px-3 py-1.5 text-xs rounded-md border border-white/20 text-white/70 hover:border-green-500/40 hover:text-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]">
          Certifications
        </h2>
        <ul className="list-disc pl-6 text-white/70 space-y-1">
          {CERTIFICATIONS.map((c, i) => (
            <li key={i}>
              {c.name} - <span className="text-green-400">{c.issuer}</span> (
              {c.date})
            </li>
          ))}
        </ul>
      </section>

      {/* Awards */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]">
          Recognitions & Awards
        </h2>
        <ul className="list-disc pl-6 text-white/70 space-y-1">
          {AWARDS.map((a, i) => (
            <li key={i}>
              {a.year} - {a.title}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
