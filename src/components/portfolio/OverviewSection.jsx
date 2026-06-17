import FillBox from "../common/FillBox";
import { strengths } from "../../constants/portfolioData";
import PortfolioSection from "./PortfolioSection";

const workPrinciples = [
  {
    title: "사용자 흐름 기준",
    text: "화면 단위보다 입력, 대기, 응답, 복구, 다음 행동의 흐름을 먼저 잡아 사용자가 막히는 지점을 줄입니다.",
  },
  {
    title: "상태 책임 분리",
    text: "서버 데이터, 도메인 상태, UI 상태를 나눠 예외 상황과 변경 영향을 추적하기 쉽게 만듭니다.",
  },
  {
    title: "운영 중인 구조 개선",
    text: "레거시와 모노레포 환경에서도 한 번에 갈아엎기보다 영향 범위를 좁혀 유지보수 가능한 구조로 바꿉니다.",
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
