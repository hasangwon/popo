import ContactSection from "../sections/ContactSection";
import ExperienceSection from "../sections/ExperienceSection";
import HeroSection from "../sections/HeroSection";
import OverviewSection from "../sections/OverviewSection";
import ProjectListSection from "../sections/ProjectListSection";
import { projects } from "../portfolioData";

const PortfolioDocument = ({ activeId, registerSection, scrollRef, sections }) => {
  const sectionMap = Object.fromEntries(sections.map((section) => [section.id, section]));
  const chatbotProjects = projects.filter((project) => project.group === "chatbot");
  const generalProjects = projects.filter((project) => project.group !== "chatbot");

  return (
    <div
      ref={scrollRef}
      data-scroll-pane="main"
      className="h-full w-full min-w-0 overflow-y-auto overflow-x-hidden bg-slate-100 p-0 scroll-smooth sm:px-5 sm:py-5 lg:w-[77%] lg:p-8 xl:p-10"
    >
      <div className="mx-auto grid w-full min-w-0 max-w-full gap-6 overflow-x-hidden p-4 sm:max-w-[1160px] sm:p-0">
        <HeroSection
          active={activeId === "hero"}
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
          projects={chatbotProjects}
          registerSection={registerSection}
          section={sectionMap["chatbot-projects"]}
          title="04. Chatbot Projects"
        />
        <ProjectListSection
          active={activeId === "general-projects"}
          projects={generalProjects}
          registerSection={registerSection}
          section={sectionMap["general-projects"]}
          title="05. General Projects"
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

export default PortfolioDocument;
