const CompanyBlock = ({ company }) => (
  <article className="mt-5 rounded-md border border-slate-200 bg-slate-50 p-5">
    <div className="min-w-0">
      <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
        <h3 className="break-words text-xl font-black text-slate-950">{company.name}</h3>
        <span className="rounded bg-white px-2 py-1 font-mono text-xs font-black text-slate-500">
          {company.period}
        </span>
      </div>
      <p className="mt-2 text-sm font-bold text-sky-700">{company.role}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {company.keywords.map((keyword) => (
          <span
            key={keyword}
            className="rounded border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-600"
          >
            {keyword}
          </span>
        ))}
      </div>
      <p className="mt-4 text-[0.92rem] font-medium leading-7 text-slate-700">
        {company.highlight}
      </p>
    </div>
  </article>
);

export default CompanyBlock;
