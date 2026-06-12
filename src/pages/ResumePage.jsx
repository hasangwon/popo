import {
  MetaTable,
  ResumeBullets,
  ResumeLink,
  Section,
  SkillList,
} from "../components/resume/ResumeBlocks";
import {
  resumeCompanies,
  resumeEducation,
  resumeIntro,
  resumeOtherProjects,
  resumeProfile,
  resumeProjects,
  resumeSkillGroups,
} from "../constants/resumeData";

const getPublicAssetUrl = (src) =>
  src?.startsWith("/") ? `${import.meta.env.BASE_URL}${src.slice(1)}` : src;

const getProjectSortValue = (period) => {
  const matches = [...period.matchAll(/(\d{4})\.(\d{2})/g)];
  const endDate = matches.at(-1);

  if (!endDate) {
    return 0;
  }

  return Number(`${endDate[1]}${endDate[2]}`);
};

const resumeProjectList = [...resumeProjects, ...resumeOtherProjects].sort(
  (a, b) => getProjectSortValue(b.period) - getProjectSortValue(a.period),
);

const ResumePage = () => (
  <main className="h-[100dvh] overflow-y-auto bg-[#f7f7f5] text-slate-800">
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-[#f7f7f5]/90 px-4 py-3 backdrop-blur sm:px-8">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-bold text-slate-500">하상원 이력서</span>
        <a
          href="/portfolio"
          className="rounded border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-sky-400 hover:text-sky-700"
        >
          포트폴리오
        </a>
      </div>
    </header>

    <article className="mx-auto min-h-full max-w-4xl bg-white px-5 py-10 shadow-[0_1px_24px_rgba(15,23,42,0.06)] sm:px-12 sm:py-14">
      <div className="border-b border-slate-200 pb-8">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
              Resume
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-[-0.02em] text-slate-950 sm:text-5xl">
              {resumeProfile.name}
            </h1>
            <p className="mt-2 text-base font-semibold text-slate-600 sm:mt-3 sm:text-xl">
              {resumeProfile.role}
            </p>
          </div>

          <div className="h-32 w-24 shrink-0 overflow-hidden rounded-md border border-slate-200 bg-slate-100 sm:h-40 sm:w-32">
            <img
              src={getPublicAssetUrl(resumeProfile.photo)}
              alt={`${resumeProfile.name} 프로필 사진`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6">
          <MetaTable
            items={{
              경력: resumeProfile.experience,
              이메일: (
                <a
                  href={`mailto:${resumeProfile.email}`}
                  className="text-sky-700 underline-offset-4 hover:underline"
                >
                  {resumeProfile.email}
                </a>
              ),
              휴대폰: (
                <a
                  href={`tel:${resumeProfile.phone.replaceAll("-", "")}`}
                  className="text-sky-700 underline-offset-4 hover:underline"
                >
                  {resumeProfile.phone}
                </a>
              ),
              블로그: <ResumeLink href={resumeProfile.blog} />,
              깃허브: <ResumeLink href={resumeProfile.github} />,
              포트폴리오: <ResumeLink href={resumeProfile.portfolio} />,
            }}
          />
        </div>
      </div>

      <Section title="자기소개">
        {resumeIntro.map((text) => (
          <p key={text} className="text-[1rem] leading-8 text-slate-700">
            {text}
          </p>
        ))}
      </Section>

      <Section title="기술 스택">
        <SkillList items={resumeSkillGroups} />
      </Section>

      <Section title="경력 (약 4년 3개월)">
        <div className="space-y-8">
          {resumeCompanies.map((company) => (
            <section key={company.name}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-xl font-bold text-slate-950">
                  {company.name}
                </h3>
                <span className="text-sm font-bold text-slate-500">
                  {company.period}
                </span>
              </div>
              <div className="mt-1 text-sm font-bold text-slate-500">
                <p>{company.role}</p>
              </div>
              <p className="mt-3 text-[0.96rem] leading-7 text-slate-700">
                {company.summary}
              </p>
              <ResumeBullets items={company.bullets} />
            </section>
          ))}
        </div>
      </Section>

      <Section title="프로젝트">
        <div className="divide-y divide-slate-100">
          {resumeProjectList.map((project) => (
            <section key={project.title} className="py-5 first:pt-0 last:pb-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="font-bold text-slate-950">{project.title}</h3>
                <span className="rounded bg-slate-100 px-2 py-1 font-mono text-xs font-bold text-slate-500">
                  {project.period}
                </span>
              </div>
              {[project.company, project.role].filter(Boolean).length > 0 && (
                <p className="mt-1 text-sm font-bold text-sky-700">
                  {[project.company, project.role].filter(Boolean).join(" · ")}
                </p>
              )}
              {project.bullets?.length > 0 ? (
                <ResumeBullets items={project.bullets} />
              ) : (
                <p className="mt-2 text-[0.95rem] leading-7 text-slate-700">
                  {project.summary}
                </p>
              )}
            </section>
          ))}
        </div>
      </Section>

      <Section title="교육">
        <div className="space-y-4">
          {resumeEducation.map((item) => (
            <div key={item.school}>
              <p className="font-bold text-slate-950">{item.school}</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </article>
  </main>
);

export default ResumePage;
