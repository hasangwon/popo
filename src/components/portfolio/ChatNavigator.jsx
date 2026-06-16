import { useEffect, useRef } from "react";

const getPublicAssetUrl = (src) =>
  src?.startsWith("/") ? `${import.meta.env.BASE_URL}${src.slice(1)}` : src;

const avatarBySender = {
  assistant: {
    alt: "포트폴리오 봇",
    src: "/profile/bot-avatar.svg",
  },
  recruiter: {
    alt: "사용자",
    src: "/profile/user-avatar.svg",
  },
};

const ChatNavigator = ({
  activeId,
  isNavigating,
  messages,
  navigatingTargetId,
  onSelect,
  sections,
}) => {
  const logRef = useRef(null);

  useEffect(() => {
    const node = logRef.current;
    if (node) {
      node.scrollTo({
        top: node.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <aside className="hidden h-full w-[23%] min-w-[300px] flex-col border-r border-slate-200 bg-white lg:flex">
      <div className="border-b border-slate-100 bg-[#fafafa] p-5">
        <h1 className="text-lg font-black text-slate-950">하상원</h1>
        <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-slate-400">
          Portfolio Assistant
        </p>
      </div>

      <div
        ref={logRef}
        className="flex-1 space-y-3 overflow-y-auto border-b scrollbar-hidden border-slate-100 p-4 text-[0.8rem]"
      >
        {messages.map((message, index) => {
          const isAssistant = message.from === "assistant";
          const showAvatar =
            index === 0 || messages[index - 1].from !== message.from;
          const avatar = avatarBySender[message.from];

          return (
            <div
              key={message.id}
              className={`flex flex-col ${isAssistant ? "items-start" : "items-end"}`}
            >
              {showAvatar && (
                <img
                  src={getPublicAssetUrl(avatar.src)}
                  alt={avatar.alt}
                  className="mb-1 h-7 w-7 rounded-full border border-slate-200 bg-white object-cover"
                />
              )}
              <div
                className={`max-w-[92%] rounded-2xl px-3 py-2 leading-5 ${
                  isAssistant
                    ? "rounded-tl-md bg-slate-100 text-slate-700"
                    : "rounded-tr-md bg-sky-100 font-bold text-sky-800"
                }`}
              >
                {message.text}
              </div>
            </div>
          );
        })}
      </div>

      <nav className="space-y-2 p-4">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            disabled={isNavigating || activeId === section.id}
            onClick={() => onSelect(section.id)}
            className={`w-full rounded-md border px-3 py-3 text-left text-[0.8rem] font-black transition ${activeId === section.id
                ? "cursor-default border-sky-600 bg-sky-50 text-sky-700 shadow-[inset_3px_0_0_#0284c7]"
                : isNavigating
                  ? "cursor-wait border-slate-200 bg-slate-50 text-slate-600"
                  : "border-slate-200 bg-slate-50 text-slate-600 hover:border-sky-400 hover:bg-sky-50 hover:text-sky-700"
              }`}
          >
            <span className="font-mono">{section.index}</span>
            <span className="ml-2">{section.label}</span>
            {navigatingTargetId === section.id && (
              <span className="ml-2 text-[0.68rem] text-sky-500">
                이동 중
              </span>
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default ChatNavigator;
