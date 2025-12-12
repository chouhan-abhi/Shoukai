import { useState, useEffect } from "react";

const CONFIG = {
  TYPING_SPEED_MIN: 30,
  TYPING_SPEED_MAX: 80,
};

function randomTypingSpeed() {
  return (
    CONFIG.TYPING_SPEED_MIN +
    Math.floor(
      Math.random() * (CONFIG.TYPING_SPEED_MAX - CONFIG.TYPING_SPEED_MIN),
    )
  );
}

export default function OptionsPrompt({
  question = "What do you want to do?",
  options = ["About me", "Projects", "Hobbies", "Contact"],
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingFinished, setIsTypingFinished] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    async function typeText() {
      let text = question;
      let current = "";
      for (let i = 0; i < text.length; i++) {
        if (isCancelled) return;
        current += text[i];
        setDisplayedText(current);
        await new Promise((res) => setTimeout(res, randomTypingSpeed()));
      }
      if (!isCancelled) setIsTypingFinished(true);
    }

    typeText();
    return () => {
      isCancelled = true;
    };
  }, [question]);

  return (
    <div className="bg-[#0a0a0a] border border-green-500/30 rounded-xl p-6 max-w-4xl mx-auto font-mono text-green-400">
      {/* Question Line */}
      <div className="flex flex-wrap items-center gap-2 text-lg md:text-xl">
        <span>{displayedText}</span>
        {!isTypingFinished && <span className="blinking-cursor">|</span>}
      </div>

      {/* Options */}
      {isTypingFinished && (
        <div className="flex flex-wrap gap-4 mt-2">
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => window.location.href = "/portfolio"}
              className="px-4 py-2 border border-green-500/50 rounded-md hover:bg-green-500/10 transition text-sm md:text-base"
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {/* Inline styles for blinking cursor */}
      <style>{`
        .blinking-cursor {
          display: inline-block;
          width: 1ch;
          background-color: green;
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
