const DotList = ({ items, tone = "default" }) => (
  <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-sky-600">
    {items.map((item) => (
      <li
        key={item}
        className={`text-[0.9rem] leading-6 ${
          tone === "fill" ? "font-semibold text-sky-800" : "text-slate-700"
        }`}
      >
        {item}
      </li>
    ))}
  </ul>
);

export default DotList;
