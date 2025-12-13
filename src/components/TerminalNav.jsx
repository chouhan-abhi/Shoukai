import { useNavigate, useLocation } from "react-router-dom";
import { NAV_ARRAY } from "../data/configs";

export default function TerminalNav({ mobile = false }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav
      className={`
        font-mono text-sm text-green-400
        ${mobile ? "flex items-center gap-6 px-4 py-3" : "p-4"}
      `}
    >
      {/* Prompt (desktop only) */}
      {!mobile && (
        <div className="text-green-400 mb-6 select-none">user@dracket:~$</div>
      )}

      <ul className={`${mobile ? "flex gap-6" : "space-y-3"}`}>
        {NAV_ARRAY.map((link) => {
          const active = location.pathname === link.path;

          return (
            <li
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`
                cursor-pointer flex items-center
                ${active ? "text-white" : "text-green-400 hover:text-green-300"}
              `}
            >
              {!mobile && <span className="mr-2">{">"}</span>}
              <span>{link.label}</span>

              {active && !mobile && (
                <span className="ml-1 animate-blink"></span>
              )}
            </li>
          );
        })}
      </ul>

      {/* Blink animation */}
      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          display: inline-block;
          width: 0.6rem;
          height: 1rem;
          background-color: white;
          margin-left: 0.25rem;
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </nav>
  );
}
