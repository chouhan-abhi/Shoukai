import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import GreetingAnimation from "./components/GreetingAnimation";
import TerminalNav from "./components/TerminalNav";

/* ---------- Lazy Loaded Pages ---------- */
const Launchpad = lazy(() => import("./components/Launchpad"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const SkillOrb = lazy(() => import("./components/views/SkillOrb"));
const ContactMe = lazy(() => import("./components/views/ContactMe"));
const HobbiesSection = lazy(() => import("./components/views/Hobbies"));

/* ---------- Terminal Loader ---------- */
function TerminalLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center font-mono text-green-400">
      <div className="space-y-2">
        <p>&gt; loading module...</p>
        <div className="w-48 h-2 bg-green-900/30 overflow-hidden">
          <div className="h-full w-1/3 bg-green-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Base route — NO terminal nav */}
        <Route path="/" element={<GreetingAnimation />} />

        {/* App routes with layout */}
        <Route element={<AppLayout />}>
          <Route
            path="/home"
            element={
              <Suspense fallback={<TerminalLoader />}>
                <Launchpad />
              </Suspense>
            }
          />
          <Route
            path="/skills"
            element={
              <Suspense fallback={<TerminalLoader />}>
                <SkillOrb />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<TerminalLoader />}>
                <Portfolio />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<TerminalLoader />}>
                <ContactMe />
              </Suspense>
            }
          />
          <Route
            path="/hobbies"
            element={
              <Suspense fallback={<TerminalLoader />}>
                <HobbiesSection />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

/* ---------- Layout ---------- */
export function AppLayout() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Fixed Sidebar (desktop) */}
      <aside
        className="
          fixed top-0 left-0 z-40
          h-screen w-64
          hidden md:block
          bg-black
        "
      >
        <TerminalNav />
      </aside>

      {/* Mobile Top Bar */}
      <div
        className="
          md:hidden
          fixed top-0 left-0 right-0 z-40
          bg-black border-b border-green-700
        "
      >
        <TerminalNav mobile />
      </div>

      {/* Scrollable Content */}
      <main
        className="
          pt-14 md:pt-0
          md:ml-64
          min-h-screen
          overflow-y-auto
        "
      >
        <Outlet />
      </main>
    </div>
  );
}
