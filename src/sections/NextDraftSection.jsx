import DotList from "../components/DotList";
import PortfolioSection from "../components/PortfolioSection";
import { nextDraftItems, profile } from "../portfolioData";

const NextDraftSection = ({ active, registerSection, section }) => (
  <PortfolioSection
    active={active}
    id={section.id}
    registerSection={registerSection}
    section={section}
    title="06. Next Draft Checklist"
  >
    <div className="mt-5 rounded-md border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-black text-slate-950">추가 작성이 필요한 부분</h3>
      <DotList items={nextDraftItems} tone="fill" />
    </div>
    <div className="mt-5 rounded-md border border-sky-200 bg-sky-50 p-5">
      <h3 className="font-black text-sky-800">Contact</h3>
      <div className="mt-3 grid gap-2 break-words font-mono text-sm font-bold text-slate-700">
        <a href={`mailto:${profile.email}`} className="text-sky-700">
          {profile.email}
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="text-sky-700">
          github.com/hasangwon
        </a>
        <a href={profile.blog} target="_blank" rel="noreferrer" className="text-sky-700">
          bitcoins.tistory.com
        </a>
      </div>
    </div>
  </PortfolioSection>
);

export default NextDraftSection;
