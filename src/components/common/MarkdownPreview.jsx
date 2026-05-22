const parseInline = (text) => {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={`${part}-${index}`} className="rounded bg-slate-800 px-1.5 py-0.5 text-sky-200">
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-black text-slate-100">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
};

const renderTable = (lines, startIndex) => {
  const tableLines = [];
  let index = startIndex;

  while (index < lines.length && lines[index].trim().startsWith("|")) {
    tableLines.push(lines[index]);
    index += 1;
  }

  const rows = tableLines
    .filter((line) => !/^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim()))
    .map((line) =>
      line
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => cell.trim()),
    );

  if (rows.length === 0) return { node: null, nextIndex: index };

  const [head, ...body] = rows;

  return {
    nextIndex: index,
    node: (
      <div key={`table-${startIndex}`} className="my-5 overflow-x-auto rounded border border-slate-700">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead className="bg-slate-800 text-slate-100">
            <tr>
              {head.map((cell, cellIndex) => (
                <th key={`${cell}-${cellIndex}`} className="border-b border-slate-700 px-3 py-2 font-black">
                  {parseInline(cell)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, rowIndex) => (
              <tr key={`${row.join("-")}-${rowIndex}`} className="border-t border-slate-800">
                {row.map((cell, cellIndex) => (
                  <td key={`${cell}-${cellIndex}`} className="px-3 py-2 align-top text-slate-300">
                    {parseInline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  };
};

const renderMarkdown = (markdown) => {
  const lines = markdown.split("\n");
  const nodes = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const lang = trimmed.replace("```", "").trim();
      const codeLines = [];
      index += 1;

      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }

      index += 1;
      nodes.push(
        <pre key={`code-${index}`} className="my-5 overflow-x-auto rounded bg-black p-4 text-sm leading-6 text-slate-200">
          {lang && <span className="mb-3 block text-xs font-black uppercase text-slate-500">{lang}</span>}
          <code>{codeLines.join("\n")}</code>
        </pre>,
      );
      continue;
    }

    if (trimmed.startsWith("|")) {
      const table = renderTable(lines, index);
      if (table.node) nodes.push(table.node);
      index = table.nextIndex;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      nodes.push(<hr key={`hr-${index}`} className="my-6 border-slate-700" />);
      index += 1;
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const className = {
        1: "mt-0 mb-5 text-3xl font-black text-white",
        2: "mt-8 mb-3 text-2xl font-black text-white",
        3: "mt-7 mb-3 text-xl font-black text-sky-200",
        4: "mt-6 mb-2 text-base font-black text-slate-100",
      }[level];
      const HeadingTag = `h${level}`;

      nodes.push(
        <HeadingTag key={`heading-${index}`} className={className}>
          {parseInline(text)}
        </HeadingTag>,
      );
      index += 1;
      continue;
    }

    if (/^[-*]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
      const ordered = /^\d+\.\s+/.test(trimmed);
      const items = [];

      while (index < lines.length) {
        const item = lines[index].trim();
        if (!(ordered ? /^\d+\.\s+/.test(item) : /^[-*]\s+/.test(item))) break;
        items.push(item.replace(/^([-*]|\d+\.)\s+/, ""));
        index += 1;
      }

      const ListTag = ordered ? "ol" : "ul";
      nodes.push(
        <ListTag
          key={`list-${index}`}
          className={`my-4 space-y-2 pl-5 text-sm leading-7 text-slate-300 ${ordered ? "list-decimal" : "list-disc"}`}
        >
          {items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>{parseInline(item)}</li>
          ))}
        </ListTag>,
      );
      continue;
    }

    nodes.push(
      <p key={`p-${index}`} className="my-3 text-sm leading-7 text-slate-300">
        {parseInline(trimmed)}
      </p>,
    );
    index += 1;
  }

  return nodes;
};

const MarkdownPreview = ({ content }) => (
  <article className="min-w-0 px-1 pb-2 pt-1">
    {renderMarkdown(content)}
  </article>
);

export default MarkdownPreview;
