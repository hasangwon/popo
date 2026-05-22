import { useCallback, useState } from "react";
import HomeMiniGame from "../components/home/HomeMiniGame";
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

  const handleBossEnter = useCallback((shapeId) => {
    setHiddenBossShapes((prev) =>
      prev.includes(shapeId) ? prev : [...prev, shapeId],
    );
  }, []);

  const handleGameReset = useCallback(() => {
    setHiddenBossShapes([]);
  }, []);

  return (
    <main className="relative h-[100dvh] overflow-hidden bg-[#fff5df] text-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,88,88,0.34),transparent_26%),radial-gradient(circle_at_84%_24%,rgba(45,212,191,0.34),transparent_25%),radial-gradient(circle_at_58%_86%,rgba(250,204,21,0.36),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(15,23,42,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.13)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="pointer-events-none absolute inset-0">
        {floatingShapes.map((shape, index) => (
          <span
            key={shape.id}
            className={[
              "home-bounce absolute border-[3px] border-slate-950 shadow-[7px_7px_0_#0f172a] transition-opacity duration-500",
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

      <section className="relative z-10 flex h-full min-h-0 items-center justify-center px-4 py-5 sm:px-8 sm:py-8">
        <div className="flex w-full max-w-[640px] flex-col items-center gap-8">
          <div className="flex w-full shrink-0 flex-col items-center gap-4 text-center">
            <h1 className="relative text-[clamp(3rem,10vw,4.5rem)] font-black leading-[0.82] tracking-[-0.03em] text-slate-950 drop-shadow-[6px_6px_0_rgba(255,255,255,0.95)]">
              <span className="absolute -inset-x-6 top-1/2 -z-10 h-[0.32em] -translate-y-1/2 rotate-[-2deg] bg-[#facc15]" />
              {profile.name}
            </h1>

            <div className="flex w-full flex-col gap-3 sm:flex-row">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex min-h-16 flex-1 items-center justify-between gap-4 border-[3px] border-slate-950 bg-white p-4 text-left no-underline shadow-[8px_8px_0_#0f172a] transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_#0f172a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
                >
                  <span>
                    <span className="block text-xl font-black text-slate-950 sm:text-2xl">
                      {link.title}
                    </span>
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-slate-950 bg-[#facc15] text-xl font-black transition-transform duration-200 group-hover:rotate-45">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          <HomeMiniGame
            onBossEnter={handleBossEnter}
            onGameReset={handleGameReset}
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
