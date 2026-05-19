import GentlepieSection from "../sections/GentlepieSection";
import NextDraftSection from "../sections/NextDraftSection";
import ProjectListSection from "../sections/ProjectListSection";
import SummarySection from "../sections/SummarySection";
import VetfluxSection from "../sections/VetfluxSection";
import { projects } from "../portfolioData";

const PortfolioDocument = ({ activeId, registerSection, scrollRef, sections }) => {
  const sectionMap = Object.fromEntries(sections.map((section) => [section.id, section]));
  const chatbotProjects = projects.filter((project) => project.group === "chatbot");
  const documentProjects = projects.filter((project) => project.group === "document");

  return (
    <div
      ref={scrollRef}
      data-scroll-pane="main"
      className="h-full w-full min-w-0 overflow-y-auto overflow-x-hidden px-4 py-6 scroll-smooth sm:px-6 lg:w-[77%] lg:p-16"
    >
      <div className="mx-auto grid w-full min-w-0 max-w-[960px] gap-8 overflow-x-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] sm:p-8 lg:p-12">
        <SummarySection
          active={activeId === "summary"}
          registerSection={registerSection}
          section={sectionMap.summary}
        />
        <GentlepieSection
          active={activeId === "gentlepie"}
          registerSection={registerSection}
          section={sectionMap.gentlepie}
        />
        <ProjectListSection
          active={activeId === "chatbot-projects"}
          projects={chatbotProjects}
          registerSection={registerSection}
          section={sectionMap["chatbot-projects"]}
          title="03. Chatbot Project Deep Dives"
        />
        <ProjectListSection
          active={activeId === "document-addon"}
          projects={documentProjects}
          registerSection={registerSection}
          section={sectionMap["document-addon"]}
          title="04. Document Add-on / Complex Integration"
        />
        <VetfluxSection
          active={activeId === "vetflux"}
          registerSection={registerSection}
          section={sectionMap.vetflux}
        />
        <NextDraftSection
          active={activeId === "next"}
          registerSection={registerSection}
          section={sectionMap.next}
        />
      </div>
    </div>
  );
};

export default PortfolioDocument;
