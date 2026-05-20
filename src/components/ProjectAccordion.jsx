import DotList from "./DotList";
import FillBox from "./FillBox";
import TagList from "./TagList";

const ProjectInfoBlock = ({ items, title }) => {
  if (!items?.length) return null;

  return (
    <section className="rounded-md border border-slate-200 bg-white p-4">
      <p className="text-sm font-black text-slate-950">{title}</p>
      <DotList items={items} />
    </section>
  );
};

const ProjectAccordion = ({ isOpen, onToggle, project }) => (
  <article
    id={project.id ? `project-${project.id}` : undefined}
    className={`group min-w-0 scroll-mt-6 overflow-hidden rounded-lg border bg-white transition ${
      isOpen
        ? "border-sky-300 shadow-[0_16px_44px_rgba(2,132,199,0.10)]"
        : "border-slate-200 hover:border-sky-300 hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
    }`}
  >
    <button
      type="button"
      aria-expanded={isOpen}
      onClick={onToggle}
      className="w-full min-w-0 p-5 text-left"
    >
      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="break-words text-lg font-black leading-snug text-slate-950">
              {project.title}
            </h3>
            <span className="rounded bg-slate-100 px-2 py-1 font-mono text-xs font-black text-slate-500">
              {project.period}
            </span>
          </div>
          <p className="mt-2 text-sm font-bold text-sky-700">{project.role}</p>
          <p className="mt-3 max-w-4xl text-[0.93rem] font-semibold leading-7 text-slate-800">
            {project.summary}
          </p>
        </div>
        <span
          className={`inline-flex shrink-0 items-center justify-center rounded border px-3 py-2 text-sm font-black transition ${
            isOpen
              ? "border-sky-600 bg-sky-600 text-white"
              : "border-slate-200 bg-slate-50 text-slate-700 group-hover:border-sky-500 group-hover:bg-sky-50 group-hover:text-sky-700"
          }`}
        >
          {isOpen ? "닫기" : "상세 보기"}
        </span>
      </div>
    </button>

    <div className="min-w-0 px-5 pb-5 pt-0">
      <TagList items={project.tech} />

      {isOpen && (
        <div className="mt-5 grid gap-5 border-t border-slate-100 pt-5">
          <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
            <ProjectInfoBlock items={project.contributions ?? project.bullets} title="핵심 기여" />
            <ProjectInfoBlock items={project.technicalPoints} title="기술 포인트" />
          </div>

          <ProjectInfoBlock items={project.integrationPoints} title="예외/연동 처리" />

          <div className="rounded-md border border-slate-200 bg-white p-4">
            <div className="grid gap-3 lg:grid-cols-3">
              {project.details.map((detail) => (
                <section key={detail.label} className="min-w-0 rounded-md bg-slate-50 p-4">
                  <p className="text-xs font-black text-sky-700">{detail.label}</p>
                  <p className="mt-2 break-words text-sm font-medium leading-6 text-slate-700">
                    {detail.text}
                  </p>
                </section>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white">
            <div className="px-4 pb-4">
              <FillBox>{project.fill}</FillBox>
            </div>

            {project.link && (
              <div className="border-t border-sky-200 bg-white/70 px-4 py-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex max-w-full items-center rounded border border-sky-200 bg-white px-3 py-2 text-sm font-black text-sky-700 transition hover:border-sky-500 hover:bg-sky-50"
                >
                  {project.linkLabel}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  </article>
);

export default ProjectAccordion;
