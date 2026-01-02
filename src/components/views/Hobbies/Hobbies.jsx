import { useState } from "react";
import { HOBBIES, PROJECTS } from "../../../data/userData";
import GitHubActivity from "./GithubActivity";
import SubTerminal from "./SubTerminal";

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
              ${activeIndex === idx
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

        {activeHobby.name === "Music" && (
          <SubTerminal
            title="Music"
            command="launch music.player --stream"
          >
            <p className="text-green-400">
              Available sources:
            </p>

            <ul className="space-y-1">
              <li>
                ▸{" "}
                <a
                  href="https://soundcloud.com/abhishek-chouhan-762644418"
                  target="_blank"
                  className="underline hover:text-green-200"
                >
                  soundcloud://abhishek-chouhan
                </a>
              </li>
              <li>
                ▸{" "}
                <a
                  href="https://music.youtube.com/channel/UCyOvS6dgGxielWP-l7O_TbQ"
                  target="_blank"
                  className="underline hover:text-green-200"
                >
                  ytmusic://abhishek-chouhan
                </a>
              </li>
            </ul>
          </SubTerminal>
        )}

        {/* Gaming */}
        {activeHobby.name === "Gaming" && activeHobby.stats && (
          <SubTerminal
            title="Gaming"
            command="stats.fetch --mode competitive"
          >
            <p className="text-green-400">
              Competitive summary:
            </p>

            <pre className="text-green-300 whitespace-pre-wrap">
              {`rating    : ${activeHobby.stats.rating}
peak      : ${activeHobby.stats.peak}
k/d       : ${activeHobby.stats.kda}
win rate  : ${activeHobby.stats.winRate}`}
            </pre>

            <div>
              <p className="text-green-400 mt-2">Top agents:</p>
              <ul className="pl-4 space-y-1">
                {activeHobby.stats.topAgents.map((agent, idx) => (
                  <li key={idx}>
                    ▸ {agent.name} — {agent.matches} matches | KDA {agent.kda}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-green-400 mt-2">Weapons:</p>
              <ul className="pl-4 space-y-1">
                {activeHobby.stats.topWeapons.map((weapon, idx) => (
                  <li key={idx}>
                    ▸ {weapon.name} ({weapon.type}) — {weapon.kills} kills
                  </li>
                ))}
              </ul>
            </div>
          </SubTerminal>
        )}

        {/* Projects */}
        {activeHobby.name === "Projects" && (
          <SubTerminal
            title="Projects"
            command="ls ~/projects --all"
          >
            <div className="space-y-3">
              {PROJECTS.map((project, idx) => (
                <div
                  key={idx}
                  className="
            border border-green-500/20
            rounded-sm
            px-4 py-3
            bg-black/40
            hover:bg-black/70
            hover:border-green-400/40
            transition
          "
                >
                  {/* Repo header */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-green-400 font-semibold text-sm">
                      [{idx + 1}] {project.title}
                    </span>

                    <span className="text-green-500/40 text-xs">
                      repo
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-green-500/70 text-xs mt-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Commands */}
                  <div className="flex gap-6 text-xs mt-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-300 hover:text-green-100 underline"
                      >
                        $ open live
                      </a>
                    )}

                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-300 hover:text-green-100 underline"
                      >
                        $ open source
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Background process */}
            <div className="mt-6">
              <p className="text-green-600 text-xs mb-2">
                $ git activity --watch
              </p>
              <GitHubActivity />
            </div>
          </SubTerminal>
        )}


        {/* Misc */}
        {activeHobby.name === "Misc" && activeHobby.data && (
          <SubTerminal
            title="Misc"
            command="cat interests.txt"
          >
            <ul className="pl-2 space-y-1">
              {activeHobby.data.map((item, idx) => (
                <li key={idx}>▸ {item}</li>
              ))}
            </ul>
          </SubTerminal>
        )}


        {/* Render component if exists */}
        {activeHobby.component && activeHobby.name !== "Projects" && (
          <activeHobby.component />
        )}
      </div>
    </section>
  );
}
