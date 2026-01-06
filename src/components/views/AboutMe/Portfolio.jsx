import { Linkedin, Github, Twitter, Globe } from "lucide-react";
import {
  PROJECTS,
  SKILLS,
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
  AWARDS,
} from "../../../data/userData";

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
      {/* Download */}
      <button
        onClick={() => window.print()}
        className="
          print:hidden
          fixed top-6 right-6 z-50
          px-4 py-2 text-sm font-semibold
          bg-green-500/10 text-green-300
          border border-green-500/30
          rounded-md
          hover:bg-green-500/20
          hover:shadow-[0_0_10px_rgba(0,255,156,0.4)]
          transition
        "
      >
        Download PDF
      </button>

      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]">
          Abhishek Chouhan
        </h1>
        <p className="text-white/70 text-lg md:text-xl max-w-3xl">
          Senior Frontend Engineer (Platform) | Core UI & Identity Systems |
          Sequoia | Ex SAP Labs | MTech BITS Pilani
        </p>
        <p className="text-white/60 text-sm">
          Bengaluru, Karnataka, India
        </p>
      </section>

      {/* Summary */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]">
          Summary
        </h2>
        <p className="text-white/70 leading-relaxed text-sm max-w-3xl">
          Frontend Engineer with 6.5+ years of experience building scalable,
          secure, and reusable web platforms. Currently part of the Kernel team
          at Sequoia, responsible for core frontend infrastructure including
          shared UI components, authentication and authorization flows,
          cross-organization access, and user impersonation.
          <br /><br />
          Strong experience collaborating on frontend and backend system design,
          enabling multiple product teams to build on a common platform with
          speed, consistency, and security.
        </p>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]">
          Skills
        </h2>
        <div className="space-y-4 text-sm text-white/70 max-w-3xl">
          <div>
            <span className="text-green-400 font-semibold">Frontend:</span>{" "}
            React, JavaScript, TypeScript, Angular, Redux, Tailwind CSS
          </div>
          <div>
            <span className="text-green-400 font-semibold">
              Platform & Architecture:
            </span>{" "}
            Design Systems, Component Libraries, Performance Optimization,
            Accessibility
          </div>
          <div>
            <span className="text-green-400 font-semibold">
              Backend & Infra:
            </span>{" "}
            Node.js, Express, APIs, AWS, CI/CD, SAP Cloud Foundry
          </div>
          <div>
            <span className="text-green-400 font-semibold">Tools:</span>{" "}
            Git, Bitbucket, Jira, Postman, New Relic
          </div>
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
              <p className="text-white/70 mt-2 text-sm leading-relaxed whitespace-pre-line max-w-3xl">
                {job.description}
              </p>
              {job.skills && (
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-green-400">
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
              <h3 className="font-bold text-white text-lg">
                {edu.degree}
              </h3>
              <p className="text-white/70 text-sm">
                {edu.institution} | {edu.duration}
              </p>
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
          {PROJECTS.map((p, idx) => (
            <a
              key={idx}
              className="
                group
                flex
                flex-col
                md:flex-row
                bg-[#111111]
                print:bg-transparent
                rounded-xl
                overflow-hidden
              "
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
                  <h3 className="text-xl font-semibold text-white">
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
                    className="px-3 py-1.5 text-xs rounded-md bg-green-500/10 text-white border border-green-500/30 hover:bg-green-500/20 transition"
                  >
                    Live
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    className="px-3 py-1.5 text-xs rounded-md border border-white/20 text-white/70 hover:border-green-500/40 transition"
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
        <h2 className="text-3xl font-bold text-white">Certifications</h2>
        <ul className="list-disc pl-6 text-white/70 space-y-1">
          {CERTIFICATIONS.map((c, i) => (
            <li key={i}>
              {c.name} —{" "}
              <span className="text-green-400">{c.issuer}</span> ({c.date})
            </li>
          ))}
        </ul>
      </section>

      {/* Awards */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-white">
          Recognitions & Awards
        </h2>
        <ul className="list-disc pl-6 text-white/70 space-y-1">
          {AWARDS.map((a, i) => (
            <li key={i}>
              {a.year} — {a.title}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
