import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import GreetingAnimation from "./components/GreetingAnimation";
import Launchpad from "./components/Launchpad";
import Portfolio from "./components/Portfolio"; // your portfolio component

function AppWrapper() {
  const [showLaunchpad, setShowLaunchpad] = useState(false);
  const location = useLocation();

  // Show greeting only on the root path and if not already shown
  if (location.pathname === "/" && !showLaunchpad) {
    return <GreetingAnimation onFinish={() => setShowLaunchpad(true)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Launchpad />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
