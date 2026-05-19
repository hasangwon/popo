import { useState } from "react";
import CompanyBlock from "../components/CompanyBlock";
import DotList from "../components/DotList";
import PortfolioSection from "../components/PortfolioSection";
import ProjectAccordion from "../components/ProjectAccordion";
import { companies, projects } from "../portfolioData";

const VetfluxSection = ({ active, registerSection, section }) => {
  const company = companies.find((item) => item.id === "vetflux");
  const vetfluxProjects = projects.filter((project) => project.group === "vetflux");
  const [openId, setOpenId] = useState(vetfluxProjects[0]?.title ?? "");

  return (
    <PortfolioSection
      active={active}
      id={section.id}
      registerSection={registerSection}
      section={section}
      title="05. Vetflux SaaS Experience"
    >
      <CompanyBlock company={company} />
      <div className="mt-5 rounded-md border border-slate-200 bg-white p-5">
        <h3 className="font-black text-slate-950">SaaS 관점</h3>
        <DotList
          items={[
            "벳플럭스 경력은 단일 챗봇보다 병원 운영 전체 흐름을 다룬 SaaS 경험으로 분리했습니다.",
            "메신저, 예약, 고객 관리, 설문, CTI, 알림 기능이 한 업무 흐름 안에서 연결되는 점을 강조했습니다.",
            "[늘펫에서 실제 병원 업무를 줄였거나 반복 작업을 개선한 사례 작성]",
          ]}
        />
      </div>

      <div className="mt-5 grid gap-4">
        {vetfluxProjects.map((project) => (
          <ProjectAccordion
            key={project.title}
            isOpen={openId === project.title}
            onToggle={() => setOpenId(project.title)}
            project={project}
          />
        ))}
      </div>
    </PortfolioSection>
  );
};

export default VetfluxSection;
