import FillBox from "../common/FillBox";
import { strengths } from "../../constants/portfolioData";
import PortfolioSection from "./PortfolioSection";

const workPrinciples = [
  {
    title: "흐름 먼저",
    text: "기능보다 사용자가 지나가는 입력, 대기, 복구, 후속 행동을 먼저 잡습니다.",
  },
  {
    title: "상태 분리",
    text: "비즈니스 상태와 UI 상태를 나눠 변경 범위와 예외 상황을 추적하기 쉽게 둡니다.",
  },
  {
    title: "운영 기준",
    text: "레거시와 모노레포에서도 서비스에 부담을 주지 않는 범위부터 정리합니다.",
  },
];

const visibleStrengths = strengths.filter((item) =>
  ["대화형 UI", "앱/WebView 대응"].includes(item.title),
);

const OverviewSection = ({ active, registerSection, section }) => (
  <PortfolioSection
    active={active}
    id={section.id}
    registerSection={registerSection}
    section={section}
    title="02. 작업 방식"
  >
    <div className="mt-5 grid gap-5">
      <div className="rounded-md border border-slate-200 bg-slate-50 p-5">
        <p className="font-black text-slate-950">작업 방식</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {workPrinciples.map((item) => (
            <article key={item.title} className="rounded-md border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-black text-sky-700">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {visibleStrengths.map((item) => (
          <article key={item.title} className="min-w-0 rounded-md border border-slate-200 bg-white p-5">
            <h3 className="font-black text-slate-950">{item.title}</h3>
            <p className="mt-3 break-words text-sm leading-6 text-slate-600">{item.body}</p>
            <FillBox>{item.fill}</FillBox>
          </article>
        ))}
      </div>
    </div>
  </PortfolioSection>
);

export default OverviewSection;
