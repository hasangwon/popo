import { useCallback, useEffect, useState } from "react";
import DotList from "./DotList";
import MarkdownPreview from "./MarkdownPreview";
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

const ProjectMediaGrid = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [documentContent, setDocumentContent] = useState("");
  const [documentError, setDocumentError] = useState("");
  const selectedItem = selectedIndex === null ? null : items[selectedIndex];
  const canMove = items.length > 1;
  const canMovePrev = selectedIndex !== null && selectedIndex > 0;
  const canMoveNext =
    selectedIndex !== null && selectedIndex < items.length - 1;

  const openItem = (index) => {
    setDocumentContent("");
    setDocumentError("");
    setSelectedIndex(index);
  };

  const closeItem = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const moveItem = useCallback(
    (direction) => {
      setDocumentContent("");
      setDocumentError("");
      setSelectedIndex((currentIndex) => {
        if (currentIndex === null) return currentIndex;

        const nextIndex = currentIndex + direction;
        if (nextIndex < 0 || nextIndex >= items.length) return currentIndex;
        return nextIndex;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (!selectedItem) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeItem();
      }

      if (event.key === "ArrowLeft" && canMovePrev) {
        moveItem(-1);
      }

      if (event.key === "ArrowRight" && canMoveNext) {
        moveItem(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [canMoveNext, canMovePrev, closeItem, moveItem, selectedItem]);

  useEffect(() => {
    if (!selectedItem?.docSrc) {
      return undefined;
    }

    const controller = new AbortController();

    fetch(selectedItem.docSrc, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("문서를 불러오지 못했습니다.");
        }
        return response.text();
      })
      .then(setDocumentContent)
      .catch((error) => {
        if (error.name !== "AbortError") {
          setDocumentError("문서를 불러오지 못했습니다.");
        }
      });

    return () => {
      controller.abort();
    };
  }, [selectedItem]);

  if (!items?.length) return null;

  return (
    <section className="rounded-md border border-slate-200 bg-slate-50 p-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <p className="text-sm font-black text-slate-950">결과물 이미지</p>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {items.map((item, index) => (
          <figure
            key={item.title}
            className="min-w-0 overflow-hidden rounded-md border border-slate-200 bg-white"
          >
            <div className="flex aspect-video items-center justify-center overflow-hidden bg-slate-100">
              {item.src ? (
                <button
                  type="button"
                  onClick={() => openItem(index)}
                  className="group/image h-full w-full bg-slate-100"
                  aria-label={`${item.title} 크게 보기`}
                >
                  <img
                    src={item.src}
                    alt={item.alt ?? item.title}
                    className="h-full w-full object-contain transition duration-200 group-hover/image:scale-[1.02]"
                    loading="lazy"
                  />
                </button>
              ) : (
                <div className="flex flex-col gap-2 px-6 text-center">
                  <span className="text-sm font-black text-slate-500">
                    이미지 추가 예정
                  </span>
                </div>
              )}
            </div>
            <figcaption className="p-4">
              <p className="text-sm font-black text-slate-950">{item.title}</p>
              <p className="mt-1 text-sm font-medium leading-6 text-slate-600">
                {item.description}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedItem.title} 크게 보기`}
          onClick={closeItem}
        >
          <div
            className={`flex max-h-full w-full flex-col gap-3 ${selectedItem.docSrc ? "max-w-6xl" : "max-w-fit"}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 text-white">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="break-words text-base font-black">
                    {selectedItem.title}
                  </p>
                  <span className="rounded bg-white/10 px-2 py-1 font-mono text-xs font-black text-slate-200">
                    {selectedIndex + 1} / {items.length}
                  </span>
                </div>
                <p className="mt-1 break-words text-sm font-medium text-slate-300">
                  {selectedItem.description}
                </p>
              </div>
              <button
                type="button"
                onClick={closeItem}
                className="shrink-0 rounded border border-white/20 bg-white/10 px-3 py-2 text-sm font-black text-white transition hover:bg-white/20"
              >
                닫기
              </button>
            </div>
            {canMove && (
              <>
                <button
                  type="button"
                  aria-label="이전 결과물 보기"
                  disabled={!canMovePrev}
                  onClick={() => moveItem(-1)}
                  className="fixed left-3 top-1/2 z-[51] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-2xl font-black leading-none text-white transition hover:bg-black/55 disabled:cursor-default disabled:opacity-30 disabled:hover:bg-black/35 sm:left-6"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="다음 결과물 보기"
                  disabled={!canMoveNext}
                  onClick={() => moveItem(1)}
                  className="fixed right-3 top-1/2 z-[51] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-2xl font-black leading-none text-white transition hover:bg-black/55 disabled:cursor-default disabled:opacity-30 disabled:hover:bg-black/35 sm:right-6"
                >
                  ›
                </button>
              </>
            )}
            {selectedItem.docSrc ? (
              <div className="max-h-[82dvh] overflow-auto rounded-lg bg-[#1e1e1e] p-5 text-slate-200 sm:p-7">
                {documentError && (
                  <p className="text-sm font-bold text-red-300">
                    {documentError}
                  </p>
                )}
                {!documentError && !documentContent && (
                  <p className="text-sm font-bold text-slate-400">
                    문서를 불러오는 중입니다.
                  </p>
                )}
                {documentContent && (
                  <MarkdownPreview content={documentContent} />
                )}
              </div>
            ) : (
              <div className="flex max-h-[82dvh] max-w-[92vw] items-center justify-center overflow-hidden rounded-lg bg-transparent">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt ?? selectedItem.title}
                  className="block max-h-[82dvh] max-w-full object-contain"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

const ProjectLinkBlock = ({ label, url }) => {
  if (!url) return null;

  return (
    <section className="rounded-md border border-slate-200 bg-slate-50 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-black text-slate-950">관련 링크</p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="break-words text-sm font-black text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-900 hover:decoration-sky-600"
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
    <div className="flex h-36 w-full shrink-0 items-center justify-center overflow-hidden rounded-md border border-slate-200 bg-slate-100 sm:h-28 sm:w-44">
      <img
        src={thumbnail.src}
        alt={thumbnail.alt ?? `${title} 썸네일`}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </div>
  );
};

const ProjectAccordion = ({ isOpen, onToggle, project }) => (
  <article
    id={project.id ? `project-${project.id}` : undefined}
    className={`group min-w-0 scroll-mt-6 overflow-hidden rounded-lg border bg-white transition ${
      isOpen
        ? "border-sky-600 shadow-[0_16px_44px_rgba(2,132,199,0.12)] ring-1 ring-sky-100"
        : "border-slate-200 hover:border-sky-300 hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
    }`}
  >
    <button
      type="button"
      aria-expanded={isOpen}
      onClick={onToggle}
      className="w-full min-w-0 bg-white p-5 text-left transition"
    >
      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start">
        <ProjectThumbnail media={project.media} title={project.title} />

        <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
              <h3 className="break-words text-lg font-black leading-snug text-slate-950">
                {project.title}
              </h3>
              <span className="rounded bg-slate-100 px-2 py-1 font-mono text-xs font-black text-slate-500">
                {project.period}
              </span>
            </div>
            <p className="mt-2 text-sm font-bold text-sky-700">
              {project.role}
            </p>
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
      </div>
    </button>

    <div className="min-w-0 bg-white px-5 pb-5 pt-0">
      <TagList items={project.tech} />

      {isOpen && (
        <div className="mt-5 flex flex-col gap-5 border-t border-slate-100 pt-5">
          <ProjectLinkBlock label={project.linkLabel} url={project.link} />

          <ProjectMediaGrid items={project.media} />

          <ProjectInfoBlock items={project.impactPoints} title="주요 결과" />

          <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
            <ProjectInfoBlock
              items={project.contributions ?? project.bullets}
              title="핵심 기여"
            />
            <ProjectInfoBlock
              items={project.technicalPoints}
              title="기술 포인트"
            />
          </div>

          <ProjectInfoBlock
            items={project.integrationPoints}
            title="예외/연동 처리"
          />

          <div className="rounded-md border border-slate-200 bg-white p-4">
            <div className="grid gap-3 lg:grid-cols-3">
              {project.details.map((detail) => (
                <section
                  key={detail.label}
                  className="min-w-0 rounded-md bg-slate-50 p-4"
                >
                  <p className="text-xs font-black text-sky-700">
                    {detail.label}
                  </p>
                  <p className="mt-2 break-words text-sm font-medium leading-6 text-slate-700">
                    {detail.text}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  </article>
);

export default ProjectAccordion;
