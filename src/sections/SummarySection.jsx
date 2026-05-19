import FillBox from "../components/FillBox";
import PortfolioSection from "../components/PortfolioSection";
import TagList from "../components/TagList";
import { profile, strengths } from "../portfolioData";

const coreTags = [
  "React",
  "TypeScript",
  "Next.js",
  "TailwindCSS",
  "Redux Toolkit",
  "Recoil",
  "Jotai",
  "Firebase",
  "SSE",
  "WebSocket",
  "HwpObject API",
];

const SummarySection = ({ active, registerSection, section }) => (
  <PortfolioSection
    active={active}
    id={section.id}
    registerSection={registerSection}
    section={section}
    title="01. Personal Summary"
  >
    <p className="mt-5 text-lg font-black text-sky-700">
      {profile.name} // {profile.role}
    </p>
    <p className="mt-3 break-words text-[0.95rem] font-medium leading-7 text-slate-700">
      {profile.summary}
    </p>
    <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
      경력: {profile.experience}
      <br />
      Email: {profile.email}
      <br />
      GitHub: github.com/hasangwon
      <br />
      Blog: bitcoins.tistory.com
    </div>
    <TagList items={coreTags} />

    <div className="mt-5 grid gap-4 md:grid-cols-3">
      {strengths.map((item) => (
        <article key={item.title} className="min-w-0 rounded-md border border-slate-200 bg-white p-4">
          <h3 className="font-black text-slate-950">{item.title}</h3>
          <p className="mt-3 break-words text-sm leading-6 text-slate-600">{item.body}</p>
          <FillBox>{item.fill}</FillBox>
        </article>
      ))}
    </div>
  </PortfolioSection>
);

export default SummarySection;
