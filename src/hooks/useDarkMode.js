import { useCallback, useEffect, useState } from "react";

const getInitialDark = () => {
  if (typeof document === "undefined") {
    return false;
  }

  return document.documentElement.classList.contains("dark");
};

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(getInitialDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleDark = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;

      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {
        /* noop */
      }

      return next;
    });
  }, []);

  return [isDark, toggleDark];
};

export default useDarkMode;
