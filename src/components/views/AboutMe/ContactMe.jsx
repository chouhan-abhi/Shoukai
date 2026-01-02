import {
  Linkedin,
  Github,
  Twitter,
  Mail,
  Codesandbox,
  Camera,
} from "lucide-react";

const CONTACT_LINKS = [
  {
    name: "LinkedIn",
    username: "abhishek-chouhan",
    url: "https://www.linkedin.com/in/abhishek-chouhan-749620188/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    username: "chouhan-abhi",
    url: "https://github.com/chouhan-abhi",
    icon: Github,
  },
  {
    name: "LeetCode",
    username: "chouhan-abhi",
    url: "https://leetcode.com/u/chouhan-abhi",
    icon: Codesandbox,
  },
  {
    name: "Twitter",
    username: "@abhishekch0uhan",
    url: "https://x.com/abhishekch0uhan",
    icon: Twitter,
  },
  {
    name: "Pexels",
    username: "abhishek-chouhan",
    url: "https://www.pexels.com/@abhishek-chouhan-255079711/",
    icon: Camera,
  },
  {
    name: "Email",
    username: "chouhan.abhik+dracket@gmail.com",
    url: "mailto:chouhan.abhik+dracket@gmail.com",
    icon: Mail,
  },
];

export default function ContactMe() {
  return (
    <section className="w-full font-mono text-green-400">
          <ul className="divide-y divide-green-500/10">
            {CONTACT_LINKS.map((link) => {
              const Icon = link.icon;

              return (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex items-center gap-4
                      px-5 py-4
                      transition-all
                      hover:bg-green-500/5
                    "
                  >
                    {/* Prompt */}
                    <span className="text-green-600 text-xs select-none">
                      &gt;
                    </span>

                    {/* Icon */}
                    <Icon
                      className="
                        w-4 h-4
                        text-green-400
                        group-hover:text-green-300
                        transition
                      "
                    />

                    {/* Content */}
                    <div className="flex flex-col text-sm leading-tight">
                      <span className="text-green-200">
                        {link.name}
                      </span>
                      <span className="text-green-500/60 text-xs break-all">
                        {link.username}
                      </span>
                    </div>

                    {/* Command Hint */}
                    <span
                      className="
                        ml-auto
                        text-green-500/40
                        text-xs
                        hidden md:block
                        group-hover:text-green-400
                        transition
                      "
                    >
                      open
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
    </section>
  );
}
