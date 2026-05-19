import { useState } from "react";
import PortfolioSection from "../components/PortfolioSection";
import ProjectAccordion from "../components/ProjectAccordion";

const ProjectListSection = ({ active, projects, registerSection, section, title }) => {
  const [openId, setOpenId] = useState(projects[0]?.title ?? "");

  return (
    <PortfolioSection
      active={active}
      id={section.id}
      registerSection={registerSection}
      section={section}
      title={title}
    >
      <div className="mt-5 grid gap-4">
        {projects.map((project) => (
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

export default ProjectListSection;
