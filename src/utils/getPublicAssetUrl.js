export const getPublicAssetUrl = (src) =>
  src?.startsWith("/") ? `${import.meta.env.BASE_URL}${src.slice(1)}` : src;
