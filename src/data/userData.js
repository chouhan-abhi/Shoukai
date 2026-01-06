import { Music, Camera, Gamepad, BookOpen } from "lucide-react";
import PhotographySection from "../components/views/Hobbies/PhotographySection";

export const PROJECTS = [
  {
    title: "AnimeSkdool",
    description:
      "Anime streaming UI with fast search, character pages and a stunning minimal layout.",
    demo: "https://anime.dracket.art",
    repo: "https://github.com/chouhan-abhi/AnimeSkdool",
    image:
      "https://raw.githubusercontent.com/chouhan-abhi/AnimeSkdool/main/public/screenshots/Aniskdool%20ui1.png",
  },
  {
    title: "DevKit",
    description:
      "A toolkit for developers — JSON formatter, color utilities, debugging helpers and more.",
    demo: "https://devkit.dracket.art",
    repo: "https://github.com/chouhan-abhi/DevKit",
    image:
      "https://raw.githubusercontent.com/chouhan-abhi/DevKit/refs/heads/main/public/preview.png",
  },
  {
    title: "PitStop",
    description:
      "Clean, fast UI for F1 pitstop analytics and session insights.",
    demo: "https://quickstop.dracket.art",
    repo: "https://github.com/chouhan-abhi/PitStop",
    image:
      "https://raw.githubusercontent.com/chouhan-abhi/PitStop/refs/heads/main/public/ScreenShots/Quickstop_f1_screenshot4.png",
  },
  {
    title: "Ghostty Config Generator",
    description:
      "Visual configuration generator for Ghostty terminal with live preview, presets, import/export, and schema-driven settings.",
    demo: "https://config.dracket.art",
    repo: "https://github.com/chouhan-abhi/ConfigManager",
    image:
      "https://raw.githubusercontent.com/chouhan-abhi/ConfigManager/refs/heads/main/public/ScreenShots/preview.png",
  },
  {
    title: "Placen",
    description:
      "Customizable VS Code theme with day/night variants, minimal & developer-friendly.",
    demo: "https://marketplace.visualstudio.com/items?itemName=Placen",
    repo: "https://github.com/chouhan-abhi/Placen",
    image:
      "https://raw.githubusercontent.com/chouhan-abhi/Placens/main/public/ScreenShot1.png",
  },
];


// -----------------------------
// SKILLS
// -----------------------------
export const SKILLS = [
  "React.js",
  "JavaScript",
  "TypeScript",
  "Angular",
  "Redux",
  "ExpressJS",
  "Tailwind CSS",
  "UI/UX",
  "Responsive Web Design",
  "Web Development",
  "Performance Optimization",
  "APIs",
  "VS Code",
  "AWS",
  "SAP Cloud Foundry",
  "Jira / Agile",
  "Postman",
  "Tableau",
  "Git / Bitbucket",
  "SAP ABAP",
  "SAP CDS",
];

// -----------------------------
// EXPERIENCE
// -----------------------------
export const EXPERIENCE = [
  {
    role: "Frontend Software Engineer II",
    company: "Sequoia",
    duration: "Feb 2024 – Present",
    location: "Bengaluru, India",
    description: `
• Core member of the Kernel team responsible for building and maintaining the
  shared frontend platform and UI foundations used across multiple products.

• Owned frontend architecture for user identity systems including authentication,
  role-based authorization, permissions, cross-organization access, and user
  impersonation, supporting secure multi-tenant workflows.

• Designed and implemented scalable login and identity flows with extensibility
  for future products, collaborating closely with backend, platform, and
  security teams on system design decisions.

• Built and maintained reusable UI components and base platform code that
  enabled product teams to rapidly build new features with consistency and
  reduced duplication.

• Actively contributed to frontend and backend design discussions, influencing
  API contracts, data models, and platform-level architectural decisions to
  ensure scalability, security, and maintainability.
    `,
    skills: [
      "React",
      "TypeScript",
      "Platform Architecture",
      "Authentication & Authorization",
      "Design Systems",
      "AWS",
      "CI/CD",
    ],
  },

  {
    role: "Senior Software Engineer",
    company: "LeadSquared",
    duration: "May 2022 – Jan 2024",
    location: "Bengaluru, India",
    description: `
• Led frontend development for key CRM platform features including Manage
  Activities, Calendar, and Recurring Tasks, impacting over 90% of active
  customers.

• Designed a scalable activity management system that enabled users to track
  daily leads and tasks, significantly improving workflow visibility and
  operational efficiency.

• Architected a calendar and recurring task solution with timezone-safe date
  handling, reducing manual customer effort by ~80% and supporting global users.

• Built reusable UI controls such as search components, dropdowns, and popups
  that were adopted across multiple teams to accelerate feature delivery.

• Implemented performance monitoring and logging using New Relic, proactively
  identifying bottlenecks and improving frontend reliability in production.

• Collaborated with backend and product teams on API design, data contracts,
  and feature rollout strategies to ensure smooth cross-team execution.
    `,
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Frontend System Design",
      "Performance Optimization",
      "New Relic",
      "AWS",
    ],
  },

  {
    role: "Software Engineer",
    company: "LeadSquared",
    duration: "Apr 2021 – May 2022",
    location: "Bengaluru, India",
    description: `
• Improved Document Library user experience by implementing lazy loading and
  background uploads, increasing feature adoption by approximately 40%.

• Developed core product features including Output Management, Pricing, and
  Decision Tables, contributing to enterprise-grade CRM workflows.

• Focused on UI performance, responsiveness, and usability while maintaining
  alignment with existing design and architectural standards.

• Worked closely with senior engineers to understand system-level design
  decisions and gradually take ownership of larger feature areas.
    `,
    skills: [
      "React",
      "TypeScript",
      "UI/UX",
      "Performance Optimization",
      "Agile Development",
    ],
  },

  {
    role: "Full Stack Developer",
    company: "SAP Labs",
    duration: "May 2020 – Mar 2021",
    location: "Bengaluru, India",
    description: `
• Built a centralized reporting platform aggregating data from multiple systems,
  enabling 8+ teams to access unified insights and reducing reporting time by
  nearly 50%.

• Developed frontend interfaces using React and backend services using Java and
  SAP technologies, gaining hands-on experience across the full stack.

• Collaborated with stakeholders to define data models, reporting requirements,
  and system workflows for internal enterprise tools.
    `,
    skills: [
      "React",
      "Java",
      "Backend Systems",
      "Data Integration",
      "Enterprise Applications",
    ],
  },

  {
    role: "Back-End Developer",
    company: "SAP Labs",
    duration: "Aug 2019 – May 2020",
    location: "Bengaluru, India",
    description: `
• Developed backend services for invoice document posting using APIs and SAP
  ABAP, supporting enterprise-scale financial workflows.

• Built and optimized ABAP reports and performed proof-of-concepts for large-scale
  data migration involving 1M+ records.

• Gained strong exposure to enterprise systems, data consistency challenges,
  and performance considerations at scale.
    `,
    skills: [
      "SAP ABAP",
      "Backend Development",
      "APIs",
      "Data Migration",
      "Enterprise Systems",
    ],
  },
];


// -----------------------------
// EDUCATION
// -----------------------------
export const EDUCATION = [
  {
    degree: "M.Tech in Software Development Engineering",
    institution: "BITS Pilani Work Integrated Learning Programmes",
    duration: "2019 – 2021",
    skills: ["Software Engineering", "Web Development", "System Architecture"],
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Technocrats Institute Of Technology",
    duration: "2015 – 2019",
    skills: ["Computer Science", "Programming", "Algorithms"],
  },
];

// -----------------------------
// CERTIFICATIONS
// -----------------------------
export const CERTIFICATIONS = [
  { name: "Angular (Basic)", issuer: "HackerRank", date: "Mar 2022" },
  { name: "Problem Solving", issuer: "HackerRank", date: "Sep 2020" },
];

// -----------------------------
// AWARDS
// -----------------------------
export const AWARDS = [
  { year: 2022, title: "HackerRank Certificates" },
  { year: 2019, title: "GS Event Award for Team Product" },
  { year: 2018, title: "5th Rank, Smart City Hackathon Bhopal" },
];

// Hobbies data
export const HOBBIES = [
  {
    name: "Photography",
    icon: Camera,
    description: "Capturing moments and exploring creative perspectives.",
    component: PhotographySection,
  },
  {
    name: "Music",
    icon: Music,
    description: "Playing guitar and exploring different genres.",
  },
  {
    name: "Gaming",
    icon: Gamepad,
    description: "Competitive gaming, Valorant tracker, and my stats overview.",
    stats: {
      rating: "Unranked",
      peak: "Gold 3",
      kda: 1.18,
      winRate: "36.4%",
      topAgents: [
        { name: "Yoru", matches: 5, win: "20%", kda: 1.1 },
        { name: "Jett", matches: 3, win: "33.3%", kda: 0.79 },
        { name: "Omen", matches: 3, win: "66.7%", kda: 1.77 },
      ],
      topWeapons: [
        { name: "Vandal", type: "Assault Rifle", kills: 150 },
        { name: "Guardian", type: "Assault Rifle", kills: 31 },
        { name: "Ghost", type: "Sidearm", kills: 22 },
      ],
    },
  },
  {
    name: "Projects",
    icon: Gamepad,
    description: "Building fun and engaging projects in my free time.",
  },
  {
    name: "Misc",
    icon: BookOpen,
    description: "Other interests and side activities.",
    data: [
      "Book reading",
      "Photo and cinematography",
      "Formula 1",
      "Puzzle solving",
      "Tech blogs",
    ],
  },
];
