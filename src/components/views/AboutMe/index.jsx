import { useState } from "react";
import SkillOrb from "./SkillOrb";
import ContactMe from "./ContactMe";
import Portfolio from "./Portfolio";

const ABOUT_SECTIONS = [
  {
    name: "About",
    description: "Personal background, philosophy, and journey.",
    component: Portfolio,
  },
  {
    name: "Skills",
    description: "Technical stack, tools, and proficiencies.",
    component: SkillOrb,
  },
  {
    name: "Contact",
    description: "Ways to get in touch and collaborate.",
    component: ContactMe,
  },
];

export default function AboutMe() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveComponent = ABOUT_SECTIONS[activeIndex].component;

  return (
    <section className="flex flex-col md:flex-row h-screen border border-green-700 bg-[#0a0a0a] font-mono text-green-400 rounded-md overflow-hidden">
      {/* Left terminal navigation */}
      <nav className="w-full md:w-60 bg-[#0f0f0f] p-4 flex flex-col gap-2">
        <p className="text-green-600 mb-2">&gt; ABOUT ME</p>

        {ABOUT_SECTIONS.map((section, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-3 py-2 text-sm rounded text-left transition border-l-4
              ${
                activeIndex === idx
                  ? "bg-green-700 text-black border-green-500"
                  : "hover:bg-green-900 border-transparent"
              }`}
          >
            {section.name}
          </button>
        ))}
      </nav>

      {/* Right content panel */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="mb-4">
          <h4 className="text-lg text-green-600">
            &gt; {ABOUT_SECTIONS[activeIndex].name}
          </h4>
          <p className="text-green-600 text-sm">
            {ABOUT_SECTIONS[activeIndex].description}
          </p>
        </div>

        {/* Mounted content */}
        <div className="bg-[#111] p-4 rounded-md">
          <ActiveComponent />
        </div>

      </div>
    </section>
  );
}
