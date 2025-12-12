import OptionsPrompt from "./OptionsPrompt";
import ProjectsSection from "./ProjectSection";

export default function Launchpad() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-mono flex justify-center px-6 py-12 relative overflow-hidden">
      {/* Container */}
      <div className="w-full max-w-7xl gap-16 relative z-10">
        {/* LEFT PANEL — LAUNCHPAD */}
        <div className="space-y-16">
          <ProjectsSection />
          <OptionsPrompt />
        </div>
      </div>
    </main>
  );
}
