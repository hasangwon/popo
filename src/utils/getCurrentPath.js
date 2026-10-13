export const getCurrentPath = () => {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalizedPath = window.location.pathname.replace(/\/$/, "");

  if (basePath && normalizedPath.startsWith(basePath)) {
    return normalizedPath.slice(basePath.length) || "/";
  }
  return normalizedPath || "/";
};
