import { useCallback, useState } from "react";
import HomeRoguelite from "../components/home/HomeRoguelite";
import HomeStatusBar from "../components/home/HomeStatusBar";
import AdSlot from "../components/common/AdSlot";
import useDarkMode from "../hooks/useDarkMode";
import { profile } from "../constants/portfolioData";

const links = [
  {
    title: "포트폴리오",
    href: "/portfolio",
  },
  {
    title: "이력서",
    href: "/resume",
  },
];

const floatingShapes = [
  {
    id: "pink",
    className:
      "left-[5%] top-[17%] h-20 w-20 rounded-[1.5rem] bg-[#ff4d6d] sm:h-28 sm:w-28",
  },
  {
    id: "sky",
    className:
      "right-[7%] top-[14%] h-24 w-24 rounded-full bg-[#22d3ee] sm:h-36 sm:w-36",
  },
  {
    id: "yellow",
    className: "bottom-[10%] left-[13%] h-24 w-24 bg-[#facc15] sm:h-36 sm:w-36",
  },
  {
    id: "lime",
    className:
      "bottom-[16%] right-[11%] h-20 w-20 rounded-[1.2rem] bg-[#bef264] sm:h-28 sm:w-28",
  },
];

const HomePage = () => {
  const [hiddenBossShapes, setHiddenBossShapes] = useState([]);
  const [isDark, toggleDark] = useDarkMode();

  const handleBossEnter = useCallback((shapeId) => {
    setHiddenBossShapes((prev) =>
      prev.includes(shapeId) ? prev : [...prev, shapeId],
    );
  }, []);

  const handleGameReset = useCallback(() => {
    setHiddenBossShapes([]);
  }, []);

  return (
    <main className="relative h-[100dvh] overflow-auto bg-[#fff5df] text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,88,88,0.34),transparent_26%),radial-gradient(circle_at_84%_24%,rgba(45,212,191,0.34),transparent_25%),radial-gradient(circle_at_58%_86%,rgba(250,204,21,0.36),transparent_28%)] dark:opacity-30" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(15,23,42,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.13)_1px,transparent_1px)] [background-size:36px_36px] dark:opacity-15 dark:[background-image:linear-gradient(rgba(226,232,240,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(226,232,240,0.16)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0">
        {floatingShapes.map((shape, index) => (
          <span
            key={shape.id}
            className={[
              "home-bounce absolute border-[3px] border-slate-950 shadow-[7px_7px_0_#0f172a] transition-opacity duration-500 dark:border-slate-100 dark:shadow-[7px_7px_0_rgba(241,245,249,0.55)]",
              hiddenBossShapes.includes(shape.id) ? "opacity-0" : "opacity-100",
              shape.className,
            ].join(" ")}
            style={{
              animationDelay: `${index * -0.55}s`,
              animationDuration: `${4.4 + index * 0.35}s`,
            }}
          />
        ))}
      </div>

      <HomeStatusBar isDark={isDark} onToggleDark={toggleDark} />

      <section className="relative z-10 flex min-h-full items-start justify-center px-4 pb-6 pt-16 sm:px-8 sm:pt-20">
        <div className="flex w-full max-w-[640px] flex-col items-center gap-6">
          <div className="flex w-full shrink-0 flex-col items-center gap-4 text-center">
            <h1 className="relative text-[clamp(3rem,10vw,4.5rem)] font-black leading-[0.82] tracking-[-0.03em] text-slate-950 drop-shadow-[6px_6px_0_rgba(255,255,255,0.95)] dark:text-slate-100 dark:drop-shadow-[6px_6px_0_rgba(15,23,42,0.95)]">
              <span className="absolute -inset-x-6 top-1/2 -z-10 h-[0.32em] -translate-y-1/2 rotate-[-2deg] bg-[#facc15]" />
              {profile.name}
            </h1>

            <div className="flex w-full flex-col gap-3 sm:flex-row">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex min-h-16 flex-1 items-center justify-between gap-4 border-[3px] border-slate-950 bg-white p-4 text-left no-underline shadow-[8px_8px_0_#0f172a] transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_#0f172a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950 dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0_rgba(241,245,249,0.9)] dark:hover:shadow-[12px_12px_0_rgba(241,245,249,0.9)] dark:focus-visible:outline-slate-100"
                >
                  <span>
                    <span className="block text-xl font-black text-slate-950 dark:text-slate-100 sm:text-2xl">
                      {link.title}
                    </span>
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-slate-950 bg-[#facc15] text-xl font-black text-slate-950 transition-transform duration-200 group-hover:rotate-45 dark:border-slate-100">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          <HomeRoguelite
            isDark={isDark}
            onBossEnter={handleBossEnter}
            onGameReset={handleGameReset}
          />

          {/* 애드센스 승인 후 .env에 클라이언트/슬롯 ID를 넣으면 노출됩니다 */}
          <AdSlot
            slot={import.meta.env.VITE_ADSENSE_SLOT_HOME}
            className="w-full"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
