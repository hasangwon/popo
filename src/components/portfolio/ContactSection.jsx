import { profile } from "../../constants/portfolioData";
import PortfolioSection from "./PortfolioSection";

const contactLinks = [
  {
    label: "이메일",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
];

const ContactSection = ({ active, registerSection, section }) => (
  <PortfolioSection
    active={active}
    id={section.id}
    registerSection={registerSection}
    section={section}
    title="06. 연락처"
  >
    <div className="mt-5 grid gap-5">
      <div className="rounded-md border border-sky-200 bg-sky-50 p-5">
        <h3 className="font-black text-sky-800">연락처</h3>
        <div className="mt-4 grid gap-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
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
    </div>
  </PortfolioSection>
);

export default ContactSection;
