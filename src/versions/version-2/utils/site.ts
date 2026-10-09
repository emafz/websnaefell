const fallbackUrl = "https://emafz.github.io/websnaefell";

export const siteUrl = (import.meta.env.VITE_SITE_URL || fallbackUrl).replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  const normalized = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${siteUrl}${normalized}`;
}
