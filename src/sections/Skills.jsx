import {
  Code2,
  Atom,
  FileJson,
  FileCode2,
  Code,
  Feather,
  Braces,
  Database,
  Boxes,
  Server,
  GitBranch,
  Cloud,
  TerminalSquare,
} from "lucide-react";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: Atom },
        { name: "JavaScript", icon: Code },
        { name: "TypeScript", icon: FileJson },
        { name: "Tailwind CSS", icon: Feather },
        { name: "HTML", icon: FileCode2 },
        { name: "CSS", icon: Code2 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: Server },
        { name: "MongoDB", icon: Database },
        { name: "Firebase", icon: Cloud },
        { name: "Python", icon: Braces },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "Docker", icon: Boxes },
        { name: "CLI / Tooling", icon: TerminalSquare },
      ],
    },
  ];

  return (
    <div className="section w-full">
      <div className="max-w-6xl mx-auto h-128 flex flex-col justify-center">
        {/* Header */}
        <div className="mb-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-color">
            Skills &{" "}
            <span className="text-primary-color" style={{ fontWeight: "bold" }}>
              Tools
            </span>
          </h2>
        </div>

        {/* Skill Groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-slideIn">
          {skillGroups.map((group, index) => (
            <div key={index} className="space-y-6">
              <h4 className="font-semibold text-text-color/90">
                {group.title}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center w-32 text-gray-700 gap-2 p-4 rounded-lg bg-panel-color"
                  >
                    <skill.icon className="w-8 h-8" />
                    <span className="text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
