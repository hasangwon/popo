import { profile } from "../../constants/portfolioData";
import PortfolioSection from "./PortfolioSection";

const contactLinks = [
  {
    label: "이메일",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "GitHub",
    value: profile.github.replace("https://", ""),
    href: profile.github,
    external: true,
  },
  {
    label: "기술 블로그",
    value: profile.blog.replace("https://", ""),
    href: profile.blog,
    external: true,
  },
];

const ContactSection = ({ active, registerSection, section }) => (
  <PortfolioSection
    active={active}
    id={section.id}
    registerSection={registerSection}
    section={section}
    title="06. 연락처 및 정보"
  >
    <div className="mt-5 grid gap-5">
      {contactLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          rel={link.external ? "noreferrer" : undefined}
          target={link.external ? "_blank" : undefined}
          className="grid gap-1 rounded-md border border-sky-100 bg-white px-4 py-3 transition hover:border-sky-400 hover:bg-sky-50"
        >
          <span className="text-xs font-black text-sky-700">{link.label}</span>
          <span className="break-words font-mono text-sm font-bold text-slate-700">
            {link.value}
          </span>
        </a>
      ))}
    </div>
  </PortfolioSection>
);

export default ContactSection;
