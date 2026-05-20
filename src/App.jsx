import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ChatNavigator from "./components/ChatNavigator";
import PortfolioDocument from "./components/PortfolioDocument";
import { sections } from "./portfolioData";

const initialMessages = [
  {
    id: "intro-1",
    from: "assistant",
    text: "단순한 기능 구현을 넘어 기획 의도를 이해하고, 사용자가 실제로 필요로 하는 지점을 서비스에 반영하는 과정을 중요하게 생각합니다.",
  },
  {
    id: "intro-2",
    from: "assistant",
    text: "약 4년 3개월 동안 챗봇, SaaS 운영 도구, 앱/WebView 환경의 프론트엔드 개발을 경험했습니다.",
  },
];

const App = () => {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [isNavigating, setIsNavigating] = useState(false);
  const [navigatingTargetId, setNavigatingTargetId] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const scrollRef = useRef(null);
  const sectionRefs = useRef({});
  const frameRef = useRef(null);
  const navigationTargetRef = useRef("");
  const unlockTimerRef = useRef(null);
  const sectionMap = useMemo(
    () => Object.fromEntries(sections.map((section) => [section.id, section])),
    [],
  );

  const unlockNavigation = useCallback((targetId = navigationTargetRef.current) => {
    if (targetId && navigationTargetRef.current && navigationTargetRef.current !== targetId) {
      return;
    }

    navigationTargetRef.current = "";
    setNavigatingTargetId("");
    setIsNavigating(false);

    if (unlockTimerRef.current) {
      clearTimeout(unlockTimerRef.current);
      unlockTimerRef.current = null;
    }
  }, []);

  const updateActiveFromScroll = useCallback(() => {
    const pane = scrollRef.current;
    if (!pane) return;

    let nextActiveId = sections[0].id;

    if (pane.scrollTop <= 8) {
      setActiveId(nextActiveId);
      if (navigationTargetRef.current === nextActiveId) {
        unlockNavigation(nextActiveId);
      }
      return;
    }

    const paneTop = pane.getBoundingClientRect().top;
    const checkpoint = paneTop + Math.min(140, pane.clientHeight * 0.28);

    sections.forEach((section) => {
      const node = sectionRefs.current[section.id];
      if (!node) return;

      const top = node.getBoundingClientRect().top;
      if (top <= checkpoint) {
        nextActiveId = section.id;
      }
    });

    const nearBottom = pane.scrollTop + pane.clientHeight >= pane.scrollHeight - 8;
    const resolvedActiveId = nearBottom ? sections[sections.length - 1].id : nextActiveId;

    setActiveId(resolvedActiveId);

    if (navigationTargetRef.current === resolvedActiveId) {
      unlockNavigation(resolvedActiveId);
    }
  }, [unlockNavigation]);

  const registerSection = useCallback((id, node) => {
    if (node) {
      sectionRefs.current[id] = node;
      return;
    }

    delete sectionRefs.current[id];
  }, []);

  const selectSection = useCallback(
    (id) => {
      if (id === activeId || navigationTargetRef.current) return;

      const section = sectionMap[id];
      const pane = scrollRef.current;
      const target = sectionRefs.current[id];

      navigationTargetRef.current = id;
      setNavigatingTargetId(id);
      setIsNavigating(true);

      setMessages((prev) => [
        ...prev,
        {
          id: `recruiter-${id}-${prev.length}`,
          from: "recruiter",
          text: section.prompt,
        },
        {
          id: `assistant-${id}-${prev.length}`,
          from: "assistant",
          text: `${section.index}. ${section.label} 섹션으로 이동했습니다. 우측 문서에서 선택 영역을 확인해 주세요.`,
        },
      ]);

      if (!pane || !target) {
        unlockNavigation(id);
        return;
      }

      const paneTop = pane.getBoundingClientRect().top;
      const targetTop = target.getBoundingClientRect().top;
      const nextTop = pane.scrollTop + targetTop - paneTop - 24;
      pane.scrollTo({ top: nextTop, behavior: "smooth" });

      unlockTimerRef.current = setTimeout(() => {
        updateActiveFromScroll();
        unlockNavigation(id);
      }, 1400);
    },
    [activeId, sectionMap, unlockNavigation, updateActiveFromScroll],
  );

  useEffect(() => {
    const pane = scrollRef.current;
    if (!pane) return undefined;

    const handleScroll = () => {
      if (frameRef.current) return;

      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        updateActiveFromScroll();
      });
    };

    updateActiveFromScroll();
    pane.addEventListener("scroll", handleScroll, { passive: true });
    pane.addEventListener("scrollend", updateActiveFromScroll);

    return () => {
      pane.removeEventListener("scroll", handleScroll);
      pane.removeEventListener("scrollend", updateActiveFromScroll);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (unlockTimerRef.current) {
        clearTimeout(unlockTimerRef.current);
      }
    };
  }, [updateActiveFromScroll]);

  return (
    <main className="h-[100dvh] w-full overflow-hidden bg-[#f4f6f9] text-slate-800 lg:flex">
      <ChatNavigator
        activeId={navigatingTargetId || activeId}
        isNavigating={isNavigating}
        messages={messages}
        navigatingTargetId={navigatingTargetId}
        onSelect={selectSection}
        sections={sections}
      />
      <PortfolioDocument
        activeId={activeId}
        registerSection={registerSection}
        scrollRef={scrollRef}
        sections={sections}
      />
    </main>
  );
};

export default App;
