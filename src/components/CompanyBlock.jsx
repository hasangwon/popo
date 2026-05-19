import DotList from "./DotList";
import FillBox from "./FillBox";

const CompanyBlock = ({ company }) => (
  <article className="mt-5 rounded-md border border-slate-200 bg-slate-50 p-5">
    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h3 className="text-xl font-black text-slate-950">{company.name}</h3>
        <p className="mt-1 text-sm font-bold text-sky-700">{company.role}</p>
      </div>
      <p className="font-mono text-sm font-bold text-slate-500">{company.period}</p>
    </div>
    <p className="mt-4 text-[0.92rem] font-medium leading-7 text-slate-700">
      {company.summary}
    </p>
    <DotList items={company.bullets} />
    <FillBox>{company.fill}</FillBox>
  </article>
);

export default CompanyBlock;
