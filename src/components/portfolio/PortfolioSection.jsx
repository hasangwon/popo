const PortfolioSection = ({ active, children, id, registerSection, section, title }) => (
  <section
    id={id}
    ref={(node) => registerSection(id, node)}
    className={`w-full max-w-[calc(100vw-2rem)] min-w-0 scroll-mt-6 overflow-x-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] transition-colors duration-300 sm:max-w-none sm:p-6 lg:p-8 ${
      active ? "border-l-[5px] border-l-sky-600" : "border-l-[5px] border-l-transparent"
    }`}
  >
    <div className="mb-3 flex items-center gap-2 lg:hidden">
      <span className="rounded bg-sky-600 px-2 py-1 font-mono text-xs font-black text-white">
        {section.index}
      </span>
      <span className="rounded border border-sky-200 bg-sky-50 px-2 py-1 text-xs font-black text-sky-800 dark:border-sky-800 dark:bg-sky-950/40 dark:text-sky-300">
        {section.label}
      </span>
    </div>

    <h2 className="break-words border-b-2 border-slate-100 dark:border-slate-800 pb-3 text-2xl font-black text-slate-950 dark:text-slate-100">
      {title}
    </h2>
    {children}
  </section>
);

export default PortfolioSection;
