import { lazy, Suspense } from "react";
import "./index.css";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import SectionWrapper from "./components/SectionWrapper";

// Lazy Loaded Sections
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Skills = lazy(() => import("./sections/Skills"));
const ProjectsSection = lazy(() => import("./sections/ProjectsSection"));
const PhotographySection = lazy(() => import("./sections/PhotographySection"));
const Contact = lazy(() => import("./sections/Contact"));

// Project Data
const projects = [
  {
    title: "AnimeSkdool",
    description: "Anime streaming UI with fast search, character pages and stunning minimal design.",
    demo: "https://skdool.surge.sh",
    repo: "https://github.com/chouhan-abhi/AnimeSkdool",
    tech: ["React", "Tailwind", "REST API"],
    image:
      "https://raw.githubusercontent.com/chouhan-abhi/AnimeSkdool/main/public/screenshots/Aniskdool%20ui1.png",
  },
  {
    title: "DevKit",
    description: "A developer toolkit with utilities like JSON formatter, color picker and more.",
    demo: "https://devkit.surge.sh",
    repo: "https://github.com/chouhan-abhi/DevKit",
    tech: ["React", "Tailwind"],
    image:
      "https://raw.githubusercontent.com/chouhan-abhi/DevKit/refs/heads/main/public/preview.png",
  },
  {
    title: "PitStop",
    description: "A clean and fast UI for tracking F1 pitstop stats and race insights.",
    demo: "https://quickstop.surge.sh",
    repo: "https://github.com/chouhan-abhi/PitStop",
    tech: ["React", "Tailwind", "API"],
    image:
      "https://raw.githubusercontent.com/chouhan-abhi/PitStop/refs/heads/main/public/ScreenShots/Quickstop_f1_screenshot4.png",
  },
];

// Minimal Loader
function Loader() {
  return (
    <div className="w-full py-32 flex justify-center items-center opacity-60 text-sm tracking-widest animate-pulse">
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <main className="bg-bg-color text-text-color overflow-x-hidden max-h-screen">
      <SideNav />
      <div className="ml-0 md:ml-40 transition-all duration-300">
        {/* Make the inner content the snap container so each SectionWrapper is a direct child */}
        <div className="relative z-10 flex flex-col items-center justify-center snap-container">

          <Suspense fallback={<Loader />}>
                      {/* HERO */}
                      <SectionWrapper id="hero">
                        <Hero />
                      </SectionWrapper>
            
                      {/* ABOUT */}
                      <SectionDivider />
                      <SectionWrapper id="about" className="py-24">
                        <About />
                      </SectionWrapper>
            
                      {/* SKILLS */}
                      <SectionDivider />
                      <SectionWrapper id="skills" className="py-24">
                        <Skills />
                      </SectionWrapper>
            
                      {/* PROJECTS */}
                      <SectionDivider />
                      <SectionWrapper id="projects" className="py-24">
                        <ProjectsSection projects={projects} />
                      </SectionWrapper>
            
                      {/* PHOTOGRAPHY */}
                      <SectionDivider />
                      <SectionWrapper id="photography" className="py-24">
                        <PhotographySection />
                      </SectionWrapper>
            
                      {/* CONTACT */}
                      <SectionDivider />
                      <SectionWrapper id="contact" className="py-24">
                        <Contact />
                      </SectionWrapper>
          </Suspense>
        </div>
        <Footer />
      </div>
    </main>
  );
}

// Clean divider (glass line with glow)
function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-4">
      <div className="h-[1px] w-3/4 md:w-2/3 lg:w-1/2 bg-gradient-to-r from-transparent via-gray-300/40 dark:via-white/10 to-transparent" />
    </div>
  );
}
