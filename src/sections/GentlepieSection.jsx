import CompanyBlock from "../components/CompanyBlock";
import DotList from "../components/DotList";
import PortfolioSection from "../components/PortfolioSection";
import { companies } from "../portfolioData";

const GentlepieSection = ({ active, registerSection, section }) => {
  const company = companies.find((item) => item.id === "gentlepie");

  return (
    <PortfolioSection
      active={active}
      id={section.id}
      registerSection={registerSection}
      section={section}
      title="02. Gentlepie Experience"
    >
      <CompanyBlock company={company} />
      <div className="mt-5 rounded-md border border-slate-200 bg-white p-5">
        <h3 className="font-black text-slate-950">경력에서 강조할 방향</h3>
        <DotList
          items={[
            "젠틀파이 경력은 고객사 챗봇을 여러 번 납품한 경험보다, 반복되는 챗봇 UI 문제를 제품화 가능한 형태로 다룬 경험으로 보여주는 편이 좋습니다.",
            "스트리밍, 세션 복구, 앱 연동, 메시지 타입 분기, SDK/빌더 유지보수까지 한 문서 안에서 연결되도록 구성했습니다.",
            "[젠틀파이에서 가장 자신 있게 설명할 수 있는 프로젝트 2개를 선정해 면접 답변용으로 보강]",
          ]}
        />
      </div>
    </PortfolioSection>
  );
};

export default GentlepieSection;
