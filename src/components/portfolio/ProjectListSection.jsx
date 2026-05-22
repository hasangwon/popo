import PortfolioSection from "./PortfolioSection";
import ProjectAccordion from "./ProjectAccordion";

const scrollToProject = (projectId) => {
  window.setTimeout(() => {
    requestAnimationFrame(() => {
      document
        .getElementById(`project-${projectId}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, 50);
};

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
            onToggle={() => {
              setOpenProjectId((currentId) => {
                const nextId = currentId === projectId ? "" : projectId;

                if (nextId) {
                  scrollToProject(nextId);
                }

                return nextId;
              });
            }}
            project={project}
          />
        );
      })}
    </div>
  </PortfolioSection>
);

export default ProjectListSection;
