const DotList = ({ emphasizedItem, items, tone = "default" }) => (
  <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-sky-600 text-slate-700 dark:text-slate-300">
    {emphasizedItem && (
      <li className="text-[0.9rem] font-semibold text-slate-900 dark:text-slate-100 leading-6 ">
        {emphasizedItem}
      </li>
    )}
    {items.map((item) => (
      <li
        key={item}
        className={`text-[0.9rem] leading-6 ${tone === "fill" ? "font-semibold text-sky-800" : "text-slate-700 dark:text-slate-300"
          }`}
      >
        {item}
      </li>
    ))}

  </ul>
);

export default DotList;
