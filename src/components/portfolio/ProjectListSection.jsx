import PortfolioSection from "./PortfolioSection";
import ProjectAccordion from "./ProjectAccordion";

const ProjectListSection = ({
  active,
  openProjectId,
  projects,
  registerSection,
  section,
  setOpenProjectId,
  title,
}) => (
  <PortfolioSection
    active={active}
    id={section.id}
    registerSection={registerSection}
    section={section}
    title={title}
  >
    <div className="mt-5 grid gap-4">
      {projects.map((project) => {
        const projectId = project.id ?? project.title;

        return (
          <ProjectAccordion
            key={projectId}
            isOpen={openProjectId === projectId}
            onClose={() => setOpenProjectId("")}
            onOpen={() => setOpenProjectId(projectId)}
            project={project}
          />
        );
      })}
    </div>
  </PortfolioSection>
);

export default ProjectListSection;
