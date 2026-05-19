import DotList from "./DotList";
import FillBox from "./FillBox";
import TagList from "./TagList";

const ProjectAccordion = ({ isOpen, onToggle, project }) => (
  <article className="min-w-0 rounded-md border border-slate-200 bg-white">
    <div className="grid min-w-0 gap-4 p-5 sm:grid-cols-[1fr_auto]">
      <div className="min-w-0">
        <h3 className="break-words text-lg font-black leading-snug text-slate-950">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-bold text-sky-700">{project.role}</p>
        <p className="mt-3 text-[0.92rem] font-semibold leading-7 text-slate-800">
          {project.summary}
        </p>
      </div>
      <div className="flex items-start justify-between gap-3 sm:block sm:text-right">
        <p className="font-mono text-sm font-bold text-slate-500">{project.period}</p>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={`${project.title} 상세 보기`}
          onClick={onToggle}
          className={`mt-0 inline-flex h-9 w-9 items-center justify-center rounded border text-lg font-black transition sm:mt-3 ${
            isOpen
              ? "border-sky-600 bg-sky-600 text-white"
              : "border-slate-200 bg-slate-50 text-slate-600 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-700"
          }`}
        >
          {isOpen ? "↓" : "→"}
        </button>
      </div>
    </div>

    <div className="min-w-0 px-5 pb-5">
      <TagList items={project.tech} />
      <DotList items={project.bullets} />

      {isOpen && (
        <div className="mt-5 grid gap-3 border-t border-slate-100 pt-5">
          {project.details.map((detail) => (
            <div key={detail.label} className="min-w-0 rounded-md border border-slate-200 bg-slate-50 p-4">
              <p className="font-mono text-xs font-black uppercase tracking-[0.1em] text-sky-700">
                {detail.label}
              </p>
              <p className="mt-2 break-words text-sm font-medium leading-6 text-slate-700">
                {detail.text}
              </p>
            </div>
          ))}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit text-sm font-black text-sky-700 underline-offset-2 hover:underline"
            >
              관련 링크 열기
            </a>
          )}

          <FillBox>{project.fill}</FillBox>
        </div>
      )}
    </div>
  </article>
);

export default ProjectAccordion;
