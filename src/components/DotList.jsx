const DotList = ({ items, tone = "default" }) => (
  <ul className="mt-3 space-y-2">
    {items.map((item) => (
      <li
        key={item}
        className={`relative pl-4 text-[0.9rem] leading-6 before:absolute before:left-0 before:text-sky-600 before:content-['•'] ${
          tone === "fill" ? "font-semibold text-sky-800" : "text-slate-700"
        }`}
      >
        {item}
      </li>
    ))}
  </ul>
);

export default DotList;
