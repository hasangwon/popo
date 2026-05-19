const PortfolioSection = ({ active, children, id, registerSection, section, title }) => (
  <section
    id={id}
    ref={(node) => registerSection(id, node)}
    className={`w-full min-w-0 scroll-mt-6 overflow-x-hidden rounded-md p-4 transition-colors duration-300 ${
      active ? "border-l-4 border-sky-600 bg-sky-50" : "border-l-4 border-transparent"
    }`}
  >
    <div className="mb-3 flex items-center gap-2 lg:hidden">
      <span className="rounded bg-sky-600 px-2 py-1 font-mono text-xs font-black text-white">
        {section.index}
      </span>
      <span className="rounded border border-sky-200 bg-sky-50 px-2 py-1 text-xs font-black text-sky-800">
        {section.label}
      </span>
    </div>

    <h2 className="break-words border-b-2 border-slate-100 pb-3 text-2xl font-black text-slate-950">
      {title}
    </h2>
    {children}
  </section>
);

export default PortfolioSection;
