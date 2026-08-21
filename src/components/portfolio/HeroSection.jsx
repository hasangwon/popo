import TagList from "../common/TagList";
import { profile } from "../../constants/portfolioData";
import PortfolioSection from "./PortfolioSection";

const coreTags = [
  "React",
  "TypeScript",
  "Next.js",
  "TailwindCSS",
  "Redux Toolkit",
  "Recoil",
  "Jotai",
  "Firebase",
  "SSE",
  "WebSocket",
];

const featuredProjects = [
  {
    id: "kiwoom-chatbot",
    name: "키움증권",
    title: "영웅문 앱 챗봇",
    desc: "WebView 입력 UX, 상태 구조, 차트 UI",
  },
  {
    id: "bublitt",
    name: "버블잇",
    title: "챗봇 빌더 Admin/SDK",
    desc: "운영 기능, 상태 구조, 모노레포 빌드 최적화",
  },
  {
    id: "neulpet",
    name: "늘펫",
    title: "동물병원 SaaS",
    desc: "실시간 메신저, 예약, 고객 관리",
  },
];

const FlowBanner = ({ onProjectSelect }) => (
  <div className="w-full min-w-0 overflow-hidden rounded-xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-sky-100 p-4 sm:p-5">
    <div className="mb-4 flex items-center justify-between gap-3">
      <span className="text-sm font-black text-slate-700 dark:text-slate-300">대표 프로젝트</span>
    </div>
    <div className="grid gap-3 sm:grid-cols-3">
      {featuredProjects.map((project) => (
        <button
          key={project.id}
          type="button"
          className="block min-h-28 min-w-0 rounded-lg border border-sky-100 bg-white/80 p-4 text-left no-underline transition hover:border-sky-500 hover:bg-white focus-visible:border-sky-500 focus-visible:bg-white focus-visible:outline-none"
          onClick={() => onProjectSelect(project.id)}
        >
          <span className="flex items-center gap-1 text-xs font-black text-sky-600">
            <span aria-hidden="true">⭐</span>
            {project.name}
          </span>
          <strong className="mt-2 block text-lg leading-tight text-slate-950 dark:text-slate-100">
            {project.title}
          </strong>
          <p className="mt-3 text-[0.82rem] font-bold leading-6 text-slate-600 dark:text-slate-400">
            {project.desc}
          </p>
        </button>
      ))}
    </div>
  </div>
);

const HeroSection = ({ active, onProjectSelect, registerSection, section }) => (
  <PortfolioSection
    active={active}
    id={section.id}
    registerSection={registerSection}
    section={section}
    title="01. 소개"
  >
    <div className="mt-5 min-w-0">
      <div className="min-w-0">
        <p className="mt-8 text-4xl font-black leading-tight text-slate-950 dark:text-slate-100 sm:text-5xl">
          {profile.name}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <p className="text-lg font-black text-sky-700 dark:text-sky-400">{profile.role}</p>
          <span className="rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-black text-slate-600 dark:text-slate-400">
            {profile.experience}
          </span>
        </div>

        <p className="mt-5 max-w-full break-words text-[0.98rem] font-medium leading-8 text-slate-700 dark:text-slate-300">
          {profile.summary}
        </p>
        <div className="mt-5">
          <TagList items={coreTags} />
        </div>

        <div className="mt-8">
          <FlowBanner onProjectSelect={onProjectSelect} />
        </div>
      </div>
    </div>
  </PortfolioSection>
);

export default HeroSection;
