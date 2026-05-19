const TagList = ({ items }) => (
  <div className="mt-3 flex min-w-0 flex-wrap gap-1.5">
    {items.map((item) => (
      <span
        key={item}
        className="max-w-full break-words rounded bg-slate-100 px-2 py-1 text-xs font-bold text-slate-700"
      >
        {item}
      </span>
    ))}
  </div>
);

export default TagList;
