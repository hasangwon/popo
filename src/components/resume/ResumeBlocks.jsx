const getDisplayUrl = (url) => url.replace(/^https?:\/\//, "");

export const ResumeLink = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-sky-700 dark:text-sky-400 underline-offset-4 hover:underline"
  >
    {children ?? getDisplayUrl(href)}
  </a>
);

export const MetaTable = ({ items }) => (
  <div className="overflow-hidden rounded-md border border-slate-200 dark:border-slate-700">
    {Object.entries(items).map(([label, value]) => (
      <div
        key={label}
        className="flex flex-col border-b border-slate-100 dark:border-slate-800 last:border-b-0 sm:flex-row"
      >
        <div className="shrink-0 bg-slate-50 dark:bg-slate-800/60 px-3 py-2 text-sm font-bold text-slate-500 dark:text-slate-400 sm:w-28">
          {label}
        </div>
        <div className="min-w-0 px-3 py-2 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-300">
          {value}
        </div>
      </div>
    ))}
  </div>
);

export const ResumeBullets = ({ items }) => (
  <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-slate-400">
    {items.map((item) => (
      <li key={item} className="text-[0.95rem] leading-7 text-slate-700 dark:text-slate-300">
        {item}
      </li>
    ))}
  </ul>
);

export const Section = ({ children, title }) => (
  <section className="mt-10">
    <h2 className="border-b border-slate-200 dark:border-slate-700 pb-2 text-xl font-black tracking-[-0.01em] text-slate-950 dark:text-slate-100">
      {title}
    </h2>
    <div className="mt-5">{children}</div>
  </section>
);

export const SkillList = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span
        key={item}
        className="rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 text-sm font-bold text-slate-700 dark:text-slate-300"
      >
        {item}
      </span>
    ))}
  </div>
);
