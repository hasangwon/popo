import PortfolioSection from "../components/PortfolioSection";
import { profile } from "../portfolioData";

const contactLinks = [
  {
    label: "이메일",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "깃허브",
    value: "github.com/hasangwon",
    href: profile.github,
  },
  {
    label: "기술 블로그",
    value: "bitcoins.tistory.com",
    href: profile.blog,
  },
];

const ContactSection = ({ active, registerSection, section }) => (
  <PortfolioSection
    active={active}
    id={section.id}
    registerSection={registerSection}
    section={section}
    title="06. Contact"
  >
    <div className="mt-5 grid gap-5">
      <div className="rounded-md border border-sky-200 bg-sky-50 p-5">
        <h3 className="font-black text-sky-800">Contact</h3>
        <div className="mt-4 grid gap-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "이메일" ? undefined : "_blank"}
              rel={link.label === "이메일" ? undefined : "noreferrer"}
              className="grid gap-1 rounded-md border border-sky-100 bg-white px-4 py-3 transition hover:border-sky-400 hover:bg-sky-50"
            >
              <span className="text-xs font-black text-sky-700">{link.label}</span>
              <span className="break-words font-mono text-sm font-bold text-slate-700">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* <div className="rounded-md border border-slate-200 bg-slate-50 p-5">
        <h3 className="font-black text-slate-950">추가 작성이 필요한 부분</h3>
        <DotList items={nextDraftItems} tone="fill" />
      </div> */}
    </div>
  </PortfolioSection>
);

export default ContactSection;
