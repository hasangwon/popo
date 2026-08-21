import { useEffect } from "react";
import DotList from "../common/DotList";
import TagList from "../common/TagList";

const getPublicAssetUrl = (src) =>
  src?.startsWith("/") ? `${import.meta.env.BASE_URL}${src.slice(1)}` : src;

const ProjectInfoBlock = ({ emphasizedItem, items, title }) => {
  if (!items?.length) return null;

  return (
    <section className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
      <p className="text-sm font-black text-slate-950 dark:text-slate-100">{title}</p>
      <DotList emphasizedItem={emphasizedItem} items={items} />
    </section>
  );
};

const ProjectCaseStudies = ({ items }) => {
  if (!items?.length) return null;

  const FlowArrow = () => (
    <div
      className="flex items-center justify-center text-slate-300 lg:self-center"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5 rotate-90 lg:rotate-0"
      >
        <path
          d="M5 12h14m-5-5 5 5-5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  return (
    <section className="rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 p-4">
      <p className="text-sm font-black text-slate-950 dark:text-slate-100">문제 해결 사례</p>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <article
            key={item.title}
            className="min-w-0 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4"
          >
            <h4 className="font-black text-slate-950 dark:text-slate-100">{item.title}</h4>
            <dl className="mt-4 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-start">
              <div>
                <dt className="text-xs font-black text-sky-700 dark:text-sky-400">문제</dt>
                <dd className="mt-1 whitespace-pre-line break-words text-sm font-medium leading-6 text-slate-700 dark:text-slate-300">
                  {item.problem}
                </dd>
              </div>
              <FlowArrow />
              <div>
                <dt className="text-xs font-black text-sky-700 dark:text-sky-400">해결</dt>
                <dd className="mt-1 whitespace-pre-line break-words text-sm font-medium leading-6 text-slate-700 dark:text-slate-300">
                  {item.approach}
                </dd>
              </div>
              <FlowArrow />
              <div>
                <dt className="text-xs font-black text-sky-700 dark:text-sky-400">결과</dt>
                <dd className="mt-1 whitespace-pre-line break-words text-sm font-medium leading-6 text-slate-700 dark:text-slate-300">
                  {item.result}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
};

const ProjectMediaGrid = ({ items }) => {
  if (!items?.length) return null;

  return (
    <section className="rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 p-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <p className="text-sm font-black text-slate-950 dark:text-slate-100">결과물 이미지</p>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {items.map((item) => (
          <figure
            key={item.title}
            className="min-w-0 overflow-hidden rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
          >
            <div className="flex aspect-video items-center justify-center overflow-hidden bg-slate-100 dark:bg-slate-800">
              {item.src ? (
                <img
                  src={getPublicAssetUrl(item.src)}
                  alt={item.alt ?? item.title}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              ) : (
                <div className="flex flex-col gap-2 px-6 text-center">
                  <span className="text-sm font-black text-slate-500 dark:text-slate-400">
                    이미지 추가 예정
                  </span>
                </div>
              )}
            </div>
            <figcaption className="p-4">
              <p className="text-sm font-black text-slate-950 dark:text-slate-100">{item.title}</p>
              <p className="mt-1 text-sm font-medium leading-6 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

const ProjectLinkBlock = ({ label, url }) => {
  if (!url) return null;

  return (
    <section className="rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-black text-slate-950 dark:text-slate-100">관련 링크</p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="break-words text-sm font-black text-sky-700 dark:text-sky-400 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-900 hover:decoration-sky-600"
        >
          {label}
        </a>
      </div>
    </section>
  );
};

const ProjectThumbnail = ({ media, title }) => {
  const thumbnail = media?.find((item) => item.src);

  if (!thumbnail) return null;

  return (
    <div className="flex h-36 w-full shrink-0 items-center justify-center overflow-hidden rounded-md border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 sm:h-28 sm:w-44">
      <img
        src={getPublicAssetUrl(thumbnail.src)}
        alt={thumbnail.alt ?? `${title} 썸네일`}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </div>
  );
};

const ProjectAccordion = ({ isOpen, onClose, onOpen, project }) => {
  useEffect(() => {
    if (!isOpen) return undefined;

    const scrollPane = document.querySelector('[data-scroll-pane="main"]');
    const previousOverflow = scrollPane?.style.overflowY;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (scrollPane) {
      scrollPane.style.overflowY = "hidden";
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (scrollPane) {
        scrollPane.style.overflowY = previousOverflow ?? "";
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <article
        id={project.id ? `project-${project.id}` : undefined}
        className="group min-w-0 scroll-mt-6 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 transition hover:border-sky-300 hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
      >
        <button
          type="button"
          aria-haspopup="dialog"
          onClick={onOpen}
          className="w-full min-w-0 bg-white dark:bg-slate-900 p-5 text-left transition"
        >
          <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start">
            <ProjectThumbnail media={project.media} title={project.title} />

            <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="break-words text-lg font-black leading-snug text-slate-950 dark:text-slate-100">
                    {project.featured && (
                      <span className="mr-1" aria-hidden="true">
                        ⭐
                      </span>
                    )}
                    {project.title}
                  </h3>
                  <span className="rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 font-mono text-xs font-black text-slate-500 dark:text-slate-400">
                    {project.period}
                  </span>
                </div>
                <p className="mt-2 text-sm font-bold text-sky-700 dark:text-sky-400">
                  {project.role}
                </p>
                <p className="mt-3 max-w-4xl text-[0.93rem] font-semibold leading-7 text-slate-800 dark:text-slate-200">
                  {project.summary}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-3 py-2 text-sm font-black text-slate-700 dark:text-slate-300 transition group-hover:border-sky-500 group-hover:bg-sky-50 group-hover:text-sky-700">
                상세 보기
              </span>
            </div>
          </div>
        </button>

        <div className="min-w-0 bg-white dark:bg-slate-900 px-5 pb-5 pt-0">
          <TagList items={project.tech} />
        </div>
      </article>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/65 p-0 backdrop-blur-[2px] sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`project-modal-title-${project.id}`}
          onClick={onClose}
        >
          <article
            className="flex h-[90dvh] w-full min-w-0 flex-col overflow-hidden bg-white dark:bg-slate-900 shadow-2xl sm:w-[80vw] sm:rounded-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="shrink-0 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-4 sm:px-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
                    <h2
                      id={`project-modal-title-${project.id}`}
                      className="break-words text-xl font-black text-slate-950 dark:text-slate-100 sm:text-2xl"
                    >
                      {project.featured && (
                        <span className="mr-1" aria-hidden="true">
                          ⭐
                        </span>
                      )}
                      {project.title}
                    </h2>
                    <span className="rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 font-mono text-xs font-black text-slate-500 dark:text-slate-400">
                      {project.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-sky-700 dark:text-sky-400">
                    {project.role}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-3 py-2 text-sm font-black text-slate-700 dark:text-slate-300 transition hover:border-sky-500 hover:bg-sky-50 hover:text-sky-700"
                >
                  닫기
                </button>
              </div>
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-6 sm:py-6">
              <div className="mx-auto flex max-w-6xl flex-col gap-5">
                <section className="rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 p-4">
                  <p className="text-[0.95rem] font-semibold leading-7 text-slate-800 dark:text-slate-200">
                    {project.summary}
                  </p>
                  <div className="mt-4">
                    <TagList items={project.tech} />
                  </div>
                </section>

                <ProjectLinkBlock
                  label={project.linkLabel}
                  url={project.link}
                />

                <ProjectMediaGrid items={project.media} />

                <ProjectInfoBlock
                  emphasizedItem={project.integrationTitle}
                  items={project.contributions}
                  title="핵심 기여"
                />

                <ProjectInfoBlock
                  items={project.integrationPoints}
                  title={project.integrationTitle}
                />

                <ProjectCaseStudies items={project.caseStudies} />
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default ProjectAccordion;
