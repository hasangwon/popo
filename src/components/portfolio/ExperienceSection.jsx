import { companies } from "../../constants/portfolioData";
import CompanyBlock from "./CompanyBlock";
import PortfolioSection from "./PortfolioSection";

const ExperienceSection = ({ active, registerSection, section }) => (
  <PortfolioSection
    active={active}
    id={section.id}
    registerSection={registerSection}
    section={section}
    title="03. 경력"
  >
    <div className="mt-5 grid gap-5">
      {companies.map((company) => (
        <CompanyBlock key={company.id} company={company} />
      ))}
    </div>
  </PortfolioSection>
);

export default ExperienceSection;
