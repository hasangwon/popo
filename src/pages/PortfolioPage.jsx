import { useState } from "react";
import ContactSection from "../components/portfolio/ContactSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import HeroSection from "../components/portfolio/HeroSection";
import OverviewSection from "../components/portfolio/OverviewSection";
import ProjectListSection from "../components/portfolio/ProjectListSection";
import { projects } from "../constants/portfolioData";

const PortfolioPage = ({ activeId, registerSection, scrollRef, sections }) => {
  const [openProjectId, setOpenProjectId] = useState("");
  const sectionMap = Object.fromEntries(
    sections.map((section) => [section.id, section]),
  );
  const chatbotProjects = projects.filter(
    (project) => project.group === "chatbot",
  );
  const generalProjects = projects.filter(
    (project) => project.group !== "chatbot",
  );

  const openProject = (projectId) => {
    setOpenProjectId(projectId);
  };

  return (
    <div
      ref={scrollRef}
      data-scroll-pane="main"
      className="h-full w-full min-w-0 overflow-y-auto overflow-x-hidden bg-slate-100 p-0 scroll-smooth sm:px-5 sm:py-5 lg:w-[77%] lg:p-8 xl:p-10"
    >
      <div className="mx-auto grid w-full min-w-0 max-w-full gap-6 overflow-x-hidden p-4 sm:max-w-[1160px] sm:p-0">
        <HeroSection
          active={activeId === "hero"}
          onProjectSelect={openProject}
          registerSection={registerSection}
          section={sectionMap.hero}
        />
        <OverviewSection
          active={activeId === "overview"}
          registerSection={registerSection}
          section={sectionMap.overview}
        />
        <ExperienceSection
          active={activeId === "experience"}
          registerSection={registerSection}
          section={sectionMap.experience}
        />
        <ProjectListSection
          active={activeId === "chatbot-projects"}
          openProjectId={openProjectId}
          projects={chatbotProjects}
          registerSection={registerSection}
          section={sectionMap["chatbot-projects"]}
          setOpenProjectId={setOpenProjectId}
          title="04. 챗봇 프로젝트"
        />
        <ProjectListSection
          active={activeId === "general-projects"}
          openProjectId={openProjectId}
          projects={generalProjects}
          registerSection={registerSection}
          section={sectionMap["general-projects"]}
          setOpenProjectId={setOpenProjectId}
          title="05. 일반 프로젝트"
        />
        <ContactSection
          active={activeId === "contact"}
          registerSection={registerSection}
          section={sectionMap.contact}
        />
      </div>
    </div>
  );
};

export default PortfolioPage;
