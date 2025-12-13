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
    <section className="w-full py-40 bg-[#0a0a0a]">
      <div className="flex flex-col justify-center gap-4 max-w-xl mx-auto p-6">
        <div className="text-2xl my-4 font-bold text-green-400">
          Contact
        </div>

        <ul className="space-y-4">
          {CONTACT_LINKS.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-4
                    px-4 py-3
                    rounded-sm
                    bg-[#0f0f0f]
                    hover:bg-[#151515]
                    hover:shadow-[0_0_8px_rgba(0,255,156,0.35)]
                    transition-colors
                  "
                >
                  <Icon className="w-5 h-5 text-green-400 flex-shrink-0" />

                  <div className="flex flex-col text-sm">
                    <span className="text-white">{link.name}</span>
                    <span className="text-white/50 text-xs break-all">
                      {link.username}
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
