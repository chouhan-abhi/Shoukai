import { useState, useEffect } from "react";

const CONFIG = {
  TYPING_SPEED_MIN: 30,
  TYPING_SPEED_MAX: 100,
  LINE_DELAY: 400,
  COUNTDOWN_DURATION: 5,
};

// Dynamic greeting
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

// Helper for random typing speed
function randomTypingSpeed() {
  return (
    CONFIG.TYPING_SPEED_MIN +
    Math.floor(
      Math.random() * (CONFIG.TYPING_SPEED_MAX - CONFIG.TYPING_SPEED_MIN),
    )
  );
}

export default function GreetingAnimation({ onFinish }) {
  const greeting = getGreeting();
  const lines = [
    `> Hello User, ${greeting}!`,
    "> Welcome to Dracket.art. We are glad you are here.",
  ];

  const [displayedLines, setDisplayedLines] = useState([]);
  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const [countdown, setCountdown] = useState(CONFIG.COUNTDOWN_DURATION);

  useEffect(() => {
    let isCancelled = false;

    async function typeLines() {
      const newLines = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        let currentText = "";

        for (let charIndex = 0; charIndex < line.length; charIndex++) {
          if (isCancelled) return;
          currentText += line[charIndex];
          newLines[i] = currentText;
          setDisplayedLines([...newLines]);

          // Random delay and punctuation pause
          const delay = [",", ".", "!", "?"].includes(line[charIndex])
            ? randomTypingSpeed() + 80
            : randomTypingSpeed();
          await new Promise((res) => setTimeout(res, delay));
        }

        await new Promise((res) => setTimeout(res, CONFIG.LINE_DELAY));
      }

      if (!isCancelled) setIsTypingFinished(true);
    }

    typeLines();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Countdown after typing finishes
  useEffect(() => {
    if (!isTypingFinished) return;

    setCountdown(CONFIG.COUNTDOWN_DURATION);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const finishTimeout = setTimeout(
      () => onFinish(),
      CONFIG.COUNTDOWN_DURATION * 1000,
    );

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimeout);
    };
  }, [isTypingFinished, onFinish]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-6">
      <div className="space-y-2 text-left w-full max-w-3xl">
        {displayedLines.map((line, idx) => {
          const isCurrentLine =
            idx === displayedLines.length - 1 && !isTypingFinished;
          return (
            <p
              key={idx}
              className="text-green-400 font-mono text-2xl md:text-4xl leading-snug tracking-wide opacity-0 animate-fade-in"
              style={{
                animationDelay: `${idx * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              {line}
              {isCurrentLine && (
                <span className="blinking-cursor font-mono text-green-400">
                  |
                </span>
              )}
            </p>
          );
        })}

        {isTypingFinished && (
          <button
            onClick={onFinish}
            className="mt-16 px-8 py-3 bg-green-400/10 text-green-400 font-mono font-semibold rounded-xl hover:bg-green-400/20 transition flex items-center gap-4"
          >
            Continue or wait
            <span className="text-sm text-green-300">{countdown}s</span>
          </button>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          0% {opacity: 0; transform: translateY(10px);}
          100% {opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease forwards;
        }

        .blinking-cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 1s steps(1) infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
