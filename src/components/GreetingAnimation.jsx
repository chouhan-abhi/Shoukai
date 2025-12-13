import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CONFIG = {
  TYPING_SPEED_MIN: 30,
  TYPING_SPEED_MAX: 80,
  LINE_DELAY: 400,
  AUTO_REDIRECT_DELAY: 5000, // ms
};

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

function randomSpeed() {
  return (
    CONFIG.TYPING_SPEED_MIN +
    Math.random() *
      (CONFIG.TYPING_SPEED_MAX - CONFIG.TYPING_SPEED_MIN)
  );
}

export default function GreetingAnimation({ navigateTo = "/home" }) {
  const navigate = useNavigate();

  /* ---------- Skip if hidden ---------- */
  useEffect(() => {
    if (sessionStorage.getItem("greeting_hidden") === "true") {
      navigate(navigateTo, { replace: true });
    }
  }, [navigate, navigateTo]);

  /* ---------- Content ---------- */
  const greeting = getGreeting();
  const lines = useMemo(
    () => [
      `> Hello User, ${greeting}!`,
      "> Welcome to Dracket.art. Initializing environment...",
    ],
    [greeting]
  );

  const [renderLines, setRenderLines] = useState([]);
  const [finished, setFinished] = useState(false);

  /* ---------- Refs ---------- */
  const lineIndex = useRef(0);
  const charIndex = useRef(0);
  const buffer = useRef([]);
  const typingTimeout = useRef(null);
  const redirectTimeout = useRef(null);

  const keySound = useRef(
    typeof Audio !== "undefined"
      ? new Audio("/sounds/key.mp3")
      : null
  );

  /* ---------- Navigation helpers ---------- */
  const skip = () => {
    clearTimeout(typingTimeout.current);
    clearTimeout(redirectTimeout.current);
    navigate(navigateTo);
  };

  /* ---------- Typing engine ---------- */
  useEffect(() => {
    function typeNextChar() {
      const currentLine = lines[lineIndex.current];

      if (!currentLine) {
        setFinished(true);
        return;
      }

      if (!buffer.current[lineIndex.current]) {
        buffer.current[lineIndex.current] = "";
      }

      if (charIndex.current < currentLine.length) {
        buffer.current[lineIndex.current] +=
          currentLine[charIndex.current];
        charIndex.current += 1;

        if (keySound.current) {
          keySound.current.currentTime = 0;
          keySound.current.volume = 0.12;
          keySound.current.play().catch(() => {});
        }

        setRenderLines([...buffer.current]);
        typingTimeout.current = setTimeout(typeNextChar, randomSpeed());
      } else {
        charIndex.current = 0;
        lineIndex.current += 1;
        typingTimeout.current = setTimeout(
          typeNextChar,
          CONFIG.LINE_DELAY
        );
      }
    }

    typeNextChar();

    return () => clearTimeout(typingTimeout.current);
  }, [lines]);

  /* ---------- Auto redirect after finished ---------- */
  useEffect(() => {
    if (!finished) return;

    redirectTimeout.current = setTimeout(() => {
      navigate(navigateTo);
    }, CONFIG.AUTO_REDIRECT_DELAY);

    return () => clearTimeout(redirectTimeout.current);
  }, [finished, navigate, navigateTo]);

  /* ---------- Skip on keypress ---------- */
  useEffect(() => {
    const onKey = () => skip();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  /* ---------- UI ---------- */
  return (
    <div
      className="min-h-screen bg-black flex items-center justify-center px-6 text-green-300"
      onClick={skip}
    >
      <div className="w-full max-w-3xl space-y-2 text-left">
        {renderLines.map((line, idx) => {
          const isActive =
            idx === renderLines.length - 1 && !finished;

          return (
            <p
              key={idx}
              className="font-mono text-xl sm:text-2xl md:text-4xl opacity-0 animate-fade-in text-green-400"
              style={{
                animationDelay: `${idx * 0.15}s`,
                animationFillMode: "forwards",
              }}
            >
              {line}
              {isActive && <span className="blinking-cursor">█</span>}
            </p>
          );
        })}

        {/* Progress bar */}
        {finished && (
          <div className="mt-10 space-y-3">
            <div className="text-xs text-green-500">
              &gt; boot sequence complete — redirecting
            </div>

            <div className="h-2 w-full bg-green-900/30 rounded overflow-hidden">
              <div className="h-full bg-green-400 terminal-progress" />
            </div>

            <div className="text-xs text-green-600">
              press any key or click to skip
            </div>

            <button
              onClick={() => {
                sessionStorage.setItem("greeting_hidden", "true");
                skip();
              }}
              className="mt-4 px-4 py-2 text-xs border border-green-700 text-green-400 hover:bg-green-900/40 rounded"
            >
              Hide next time
            </button>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease forwards;
        }

        .blinking-cursor {
          margin-left: 4px;
          animation: blink 1s steps(1) infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        .terminal-progress {
          animation: progress ${CONFIG.AUTO_REDIRECT_DELAY}ms linear forwards;
          width: 0%;
        }

        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
