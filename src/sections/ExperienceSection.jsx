import CompanyBlock from "../components/CompanyBlock";
import PortfolioSection from "../components/PortfolioSection";
import { companies } from "../portfolioData";

const ExperienceSection = ({ active, registerSection, section }) => (
  <PortfolioSection
    active={active}
    id={section.id}
    registerSection={registerSection}
    section={section}
    title="03. Experience"
  >
    <div className="mt-5 grid gap-5">
      {companies.map((company) => (
        <CompanyBlock key={company.id} company={company} />
      ))}
    </div>
  </PortfolioSection>
);

export default ExperienceSection;
