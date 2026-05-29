import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ChatNavigator from "./components/portfolio/ChatNavigator";
import { sections } from "./constants/portfolioData";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import { Analytics } from "@vercel/analytics/react";

const initialMessages = [
  {
    id: "intro-1",
    from: "assistant",
    text: "하상원 포트폴리오입니다.",
  },
  {
    id: "intro-2",
    from: "assistant",
    text: "경력, 프로젝트, 결과물을 섹션별로 확인할 수 있습니다.",
  },
];

const getNavigationAnswer = (section) =>
  `${section.index}. ${section.label} 섹션으로 이동했습니다.`;

const getCurrentPath = () => {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalizedPath = window.location.pathname.replace(/\/$/, "");

  if (basePath && normalizedPath.startsWith(basePath)) {
    return normalizedPath.slice(basePath.length) || "/";
  }

  return normalizedPath || "/";
};

const App = () => {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [isNavigating, setIsNavigating] = useState(false);
  const [navigatingTargetId, setNavigatingTargetId] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const scrollRef = useRef(null);
  const sectionRefs = useRef({});
  const frameRef = useRef(null);
  const navigationTargetRef = useRef("");
  const pendingMessageRef = useRef(null);
  const unlockTimerRef = useRef(null);
  const sectionMap = useMemo(
    () => Object.fromEntries(sections.map((section) => [section.id, section])),
    [],
  );

  const unlockNavigation = useCallback(
    (targetId = navigationTargetRef.current) => {
      if (
        targetId &&
        navigationTargetRef.current &&
        navigationTargetRef.current !== targetId
      ) {
        return;
      }

      const pendingMessage = pendingMessageRef.current;
      if (pendingMessage?.targetId === targetId) {
        const section = sectionMap[targetId];
        setMessages((prev) =>
          prev.map((message) =>
            message.id === pendingMessage.id
              ? {
                  ...message,
                  text: getNavigationAnswer(section),
                  isLoading: false,
                }
              : message,
          ),
        );
        pendingMessageRef.current = null;
      }

      navigationTargetRef.current = "";
      setNavigatingTargetId("");
      setIsNavigating(false);

      if (unlockTimerRef.current) {
        clearTimeout(unlockTimerRef.current);
        unlockTimerRef.current = null;
      }
    },
    [sectionMap],
  );

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

    const nearBottom =
      pane.scrollTop + pane.clientHeight >= pane.scrollHeight - 8;
    const resolvedActiveId = nearBottom
      ? sections[sections.length - 1].id
      : nextActiveId;

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

      const messageKey = `${id}-${Date.now()}`;
      const pendingAssistantId = `assistant-${messageKey}`;
      pendingMessageRef.current = {
        id: pendingAssistantId,
        targetId: id,
      };

      setMessages((prev) => [
        ...prev,
        {
          id: `recruiter-${messageKey}`,
          from: "recruiter",
          text: section.prompt,
        },
        {
          id: pendingAssistantId,
          from: "assistant",
          text: "이동 중입니다.",
          isLoading: true,
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

  const currentPath = getCurrentPath();

  if (currentPath === "/resume") {
    return <ResumePage />;
  }

  if (currentPath !== "/portfolio") {
    return <HomePage />;
  }

  return (
    <>
      <Analytics />
      <main className="h-[100dvh] w-full overflow-hidden bg-[#f4f6f9] text-slate-800 lg:flex">
        <ChatNavigator
          activeId={navigatingTargetId || activeId}
          isNavigating={isNavigating}
          messages={messages}
          navigatingTargetId={navigatingTargetId}
          onSelect={selectSection}
          sections={sections}
        />
        <PortfolioPage
          activeId={activeId}
          registerSection={registerSection}
          scrollRef={scrollRef}
          sections={sections}
        />
      </main>
    </>
  );
};

export default App;
