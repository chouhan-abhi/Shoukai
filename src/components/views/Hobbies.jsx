import { useState } from "react";
import { HOBBIES, PROJECTS } from "../../data/userData";
import GitHubActivity from "./GithubActivity";

export default function HackerHobbiesDashboard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeHobby = HOBBIES[activeIndex];

  return (
    <section className="flex flex-col border border-green-700 h-screen md:flex-row min-h-[60vh] bg-[#0a0a0a] font-mono text-green-400 rounded-md overflow-hidden">
      {/* Left terminal navigation */}
      <nav className="w-full md:w-60 bg-[#0f0f0f] p-4 flex flex-col gap-2">
        <p className="text-green-600 mb-2">&gt; SELECT HOBBY</p>
        {HOBBIES.map((hobby, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`flex items-center gap-2 px-3 py-2 text-sm rounded transition
              ${
                activeIndex === idx
                  ? "bg-green-700 text-black border-l-4 border-green-500"
                  : "hover:bg-green-900 border-l-4 border-transparent"
              }`}
          >
            <hobby.icon className="w-4 h-4 animate-pulse" />
            {hobby.name}
          </button>
        ))}
      </nav>

      {/* Right content panel */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <h3 className="flex items-center gap-3 text-lg md:text-xl font-bold text-green-600">
            &gt; {activeHobby.name}
          </h3>
          <p className="text-green-600 text-sm leading-relaxed whitespace-pre-line mt-2 mb-4">
            {activeHobby.description}
          </p>
        </div>

        {/* Music */}
        {activeHobby.name === "Music" && (
          <div className="bg-[#111] p-4 rounded-md text-green-300 text-xs space-y-2 mb-4">
            <p>Listen to my music:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <a
                  href="https://soundcloud.com/abhishek-chouhan-762644418"
                  target="_blank"
                  className="text-green-300 hover:text-green-100 underline"
                >
                  SoundCloud
                </a>
              </li>
              <li>
                <a
                  href="https://music.youtube.com/channel/UCyOvS6dgGxielWP-l7O_TbQ"
                  target="_blank"
                  className="text-green-300 hover:text-green-100 underline"
                >
                  YouTube Music
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Gaming stats */}
        {activeHobby.name === "Gaming" && activeHobby.stats && (
          <div className="bg-[#111] p-4 rounded-md text-green-300 text-xs space-y-3 mb-4">
            <p>
              Rating: {activeHobby.stats.rating} | Peak:{" "}
              {activeHobby.stats.peak} | K/D: {activeHobby.stats.kda} | Win
              Rate: {activeHobby.stats.winRate}
            </p>

            <div>
              <p className="font-semibold text-green-400">Top Agents:</p>
              <ul className="list-disc pl-6 space-y-1">
                {activeHobby.stats.topAgents.map((agent, idx) => (
                  <li key={idx}>
                    {agent.name} - Matches: {agent.matches}, Win: {agent.win},
                    KDA: {agent.kda}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-green-400">Top Weapons:</p>
              <ul className="list-disc pl-6 space-y-1">
                {activeHobby.stats.topWeapons.map((weapon, idx) => (
                  <li key={idx}>
                    {weapon.name} ({weapon.type}) - Kills: {weapon.kills}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Projects */}
        {activeHobby.name === "Projects" && (
          <div className="space-y-3">
            <ul className="space-y-2">
              {PROJECTS.map((project, idx) => (
                <li
                  key={idx}
                  className="bg-[#111] px-4 py-3 rounded-md text-green-300 text-sm"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-green-400 font-semibold">
                      [{idx + 1}] {project.title}
                    </span>

                    <span className="text-green-500/70 text-xs">
                      {project.description}
                    </span>

                    <div className="flex gap-4 text-xs mt-1">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-300 hover:text-green-100 underline"
                        >
                          live
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-300 hover:text-green-100 underline"
                        >
                          code
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <GitHubActivity />
          </div>
        )}

        {/* Misc */}
        {activeHobby.name === "Misc" && activeHobby.data && (
          <div className="bg-[#111] p-4 rounded-md text-green-300 text-xs space-y-2 mb-4">
            <p>Other interests:</p>
            <ul className="list-disc pl-6 space-y-1">
              {activeHobby.data.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Render component if exists */}
        {activeHobby.component && activeHobby.name !== "Projects" && (
          <activeHobby.component />
        )}
      </div>
    </section>
  );
}
