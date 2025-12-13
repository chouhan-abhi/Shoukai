import { Music, Camera, Gamepad, BookOpen } from "lucide-react";
import PhotographySection from "../components/views/PhotographySection";

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
    role: "Frontend Engineer 2",
    company: "Sequoia",
    project: "Marvin Forms",
    duration: "Feb 2024 – Present",
    location: "Bangalore, India",
    description: `Designed and implemented features to enhance lead management platform, including Manage Activities Tab, Calendar & Recurring Task features. Collaborated with cross-functional teams to deliver high-quality, scalable frontend solutions.`,
    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "AWS",
      "CI/CD",
      "GainSight",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "LeadSquared",
    project: "Marvin Forms",
    duration: "May 2022 – Jan 2024",
    location: "Bangalore, India",
    description: `Implemented Manage Activities which helped 90% of customers track daily leads. Built Calendar & Recurring Task features reducing 80% customer effort. Implemented Date-time & Timezone conversion, feature restriction, and performance logging (New Relic). Developed Search Box, DropDown, and Popup controls.`,
    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "AWS",
      "CI/CD",
      "New Relic",
    ],
  },
  {
    role: "Software Engineer",
    company: "SAP Labs",
    project: "CRM Sales REX",
    duration: "Apr 2021 – May 2022",
    location: "Bangalore, India",
    description: `Enhanced Document Library UX through lazy loading & background uploads (40% adoption increase). Authored Output Management app, Pricing, and Decision Table features.`,
    skills: ["React.js", "TypeScript", "UI/UX", "Agile"],
  },
  {
    role: "Full Stack Developer",
    company: "SAP Labs",
    project: "SAP BLR Tools",
    duration: "May 2020 – Mar 2021",
    location: "Bangalore, India",
    description: `Built centralized reporting tool integrating multiple data sources for 8 teams, reducing reporting time by 50%.`,
    skills: ["React.js", "Java", "SAP ABAP", "Backend", "Database"],
  },
  {
    role: "Back-End Developer",
    company: "SAP Labs",
    project: "Tax Register",
    duration: "Aug 2019 – May 2020",
    location: "Bangalore, India",
    description: `Invoice document posting using API & ABAP reports; performed POCs on data migration (1M+ records).`,
    skills: ["ABAP", "Backend", "Data Migration"],
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
