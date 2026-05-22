const FillBox = ({ children }) => {
  const items = Array.isArray(children) ? children : [children];

  return (
    <div className="mt-4 min-w-0 break-words rounded-md border border-dashed border-sky-300 bg-sky-50 p-4">
      <ul className="list-disc space-y-2 pl-5 marker:text-sky-500">
        {items.map((item) => (
          <li key={item} className="text-[0.85rem] font-bold leading-6 text-sky-900">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FillBox;
