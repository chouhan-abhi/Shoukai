import { useEffect, useRef, useState } from "react";
import { DEV_SKILLS } from "../../../data/configs";

/* ---------- Helpers ---------- */
const orbSize = (years) => {
  if (years < 1) return "text-xs px-3 py-1";
  if (years < 3) return "text-sm px-3.5 py-1.5";
  if (years < 5) return "text-base px-4 py-2";
  return "text-lg px-5 py-2.5";
};

const orbGlow = (years, active) =>
  active
    ? "shadow-[0_0_35px_rgba(0,255,156,1)] scale-110"
    : years < 3
      ? "shadow-[0_0_8px_rgba(0,255,156,0.4)]"
      : "shadow-[0_0_14px_rgba(0,255,156,0.6)]";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Component ---------- */
export default function SkillOrb() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const rafRef = useRef(null);

  const rotation = useRef({ x: 0, y: 0 });
  const input = useRef({ x: 0, y: 0 });

  const radius = 180;

  const [activeSkill, setActiveSkill] = useState(null);
  const [frozen, setFrozen] = useState(false);

  const motionSafe = !prefersReducedMotion();

  /* ---------- Position Setup ---------- */
  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      const phi = Math.acos(-1 + (2 * i) / DEV_SKILLS.length);
      const theta = Math.sqrt(DEV_SKILLS.length * Math.PI) * phi;

      el.dataset.x = radius * Math.cos(theta) * Math.sin(phi);
      el.dataset.y = radius * Math.sin(theta) * Math.sin(phi);
      el.dataset.z = radius * Math.cos(phi);
    });
  }, []);

  /* ---------- Animation Loop ---------- */
  useEffect(() => {
    if (!motionSafe) return;

    const animate = () => {
      if (!frozen) {
        // idle rotation
        rotation.current.y += 0.002;
        rotation.current.x += 0.001;

        // input influence
        rotation.current.y += input.current.x * 0.02;
        rotation.current.x += input.current.y * 0.02;
      }

      itemsRef.current.forEach((el) => {
        let x = +el.dataset.x;
        let y = +el.dataset.y;
        let z = +el.dataset.z;

        const cosY = Math.cos(rotation.current.y);
        const sinY = Math.sin(rotation.current.y);
        const cosX = Math.cos(rotation.current.x);
        const sinX = Math.sin(rotation.current.x);

        let dx = x * cosY - z * sinY;
        let dz = x * sinY + z * cosY;

        let dy = y * cosX - dz * sinX;
        dz = y * sinX + dz * cosX;

        const scale = (dz + radius) / (radius * 2);

        el.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(${scale})`;
        el.style.opacity =
          activeSkill && el.dataset.skill !== activeSkill
            ? 0.2
            : Math.max(0.5, scale);
        el.style.zIndex = Math.floor(scale * 100);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafRef.current);
  }, [frozen, activeSkill, motionSafe]);

  /* ---------- Mouse ---------- */
  useEffect(() => {
    if (!motionSafe) return;
    const c = containerRef.current;

    const onMove = (e) => {
      const r = c.getBoundingClientRect();
      input.current.x = (e.clientX - r.left - r.width / 2) * 0.00005;
      input.current.y = (e.clientY - r.top - r.height / 2) * 0.00005;
    };

    c.addEventListener("mousemove", onMove);
    return () => c.removeEventListener("mousemove", onMove);
  }, [motionSafe]);

  /* ---------- Mobile Gyro ---------- */
  useEffect(() => {
    if (!motionSafe || !window.DeviceOrientationEvent) return;

    const onGyro = (e) => {
      input.current.x = (e.gamma || 0) * 0.0002;
      input.current.y = (e.beta || 0) * 0.0002;
    };

    window.addEventListener("deviceorientation", onGyro);
    return () => window.removeEventListener("deviceorientation", onGyro);
  }, [motionSafe]);

  /* ---------- Keyboard ---------- */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setFrozen(false);
        setActiveSkill(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ---------- Click ---------- */
  const onSkillClick = (name) => {
    setFrozen((f) => !f || activeSkill !== name);
    setActiveSkill((prev) => (prev === name ? null : name));
  };

  const getGreenShade = (years) => {
    const min = 40;
    const max = 160;
    const val = Math.min(
      max,
      Math.max(min, Math.floor((years / 7) * (max - min) + min)),
    );
    return `rgba(0,${val},0,0.18)`;
  };

  return (
    <section className="w-full min-h-screen px-6 py-12 flex justify-center">
      <div className="w-full max-w-[1400px]">
        {/* ---------- Responsive Layout ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-16 items-start">
          {/* ---------- LEFT: Orb + Focus ---------- */}
          <div className="flex flex-col items-center mt-8 lg:items-start">
            <div
              ref={containerRef}
              className="relative w-[360px] h-[360px] sm:w-[420px] sm:h-[420px]
                       rounded-full bg-black
                       border border-green-500/20
                       shadow-[0_0_60px_rgba(0,255,156,0.3)]"
            >
              {DEV_SKILLS.map((skill, i) => (
                <button
                  key={skill.name}
                  ref={(el) => (itemsRef.current[i] = el)}
                  data-skill={skill.name}
                  onClick={() => onSkillClick(skill.name)}
                  className={`
                  absolute left-1/2 top-1/2
                  font-mono text-green-400
                  bg-black/80 border border-green-500/30 rounded-md
                  transition-all duration-300
                  cursor-pointer
                  ${orbSize(parseFloat(skill.years))}
                  ${orbGlow(parseFloat(skill.years), activeSkill === skill.name)}
                `}
                >
                  {skill.name}
                </button>
              ))}
            </div>

            {/* ---------- Terminal Focus Mode ---------- */}
            {activeSkill && (
              <div className="mt-10 w-full max-w-md font-mono text-green-400
                            bg-black/70 px-6 py-4 border border-green-500/30
                            shadow-[0_0_20px_rgba(0,255,156,0.2)]">
                <div>&gt; focus --skill="{activeSkill}"</div>
                <div>&gt; status: frozen</div>
                <div>&gt; press <span className="text-green-200">ESC</span> to resume</div>
              </div>
            )}
          </div>

          {/* ---------- RIGHT: Skill Matrix ---------- */}
          <div className="w-full">
            <p className="mb-2 text-green-400/80 font-mono text-sm tracking-widest">
              SKILL MATRIX — AREA ∝ EXPERIENCE
            </p>

            <div
              className="grid w-full border border-green-500/20"
              style={{
                gridTemplateColumns: "repeat(6, 1fr)",
                gridAutoRows: "1fr",
                maxHeight: "520px",
              }}
            >
              {DEV_SKILLS.map((skill) => {
                const years = parseFloat(skill.years);
                const span = Math.min(3, Math.max(1, Math.round(years / 2)));
                const focused = activeSkill === skill.name;

                return (
                  <button
                    key={skill.name}
                    onClick={() => onSkillClick(skill.name)}
                    className={`
                    relative border border-green-500/30
                    font-mono flex flex-col items-center justify-center
                    transition-all duration-300
                    ${activeSkill && !focused ? "opacity-30" : ""}
                    ${focused ? "ring-2 ring-green-400 z-10" : ""}
                  `}
                    style={{
                      backgroundColor: getGreenShade(years),
                      gridColumnEnd: `span ${span}`,
                      gridRowEnd: `span ${span}`,
                    }}
                  >
                    <span className="text-sm font-semibold text-green-200">
                      {skill.name}
                    </span>
                    <span className="text-xs text-green-400">
                      {skill.years} yrs
                    </span>

                    {focused && (
                      <span className="absolute bottom-1 right-1 text-[10px] text-green-300">
                        FOCUSED
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}
