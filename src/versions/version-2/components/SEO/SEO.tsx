import { useEffect } from "react";
import { absoluteUrl } from "../../utils/site";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "product" | "article";
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function SEO({ title, description, path = "/", image, type = "website", noIndex = false, structuredData }: SEOProps) {
  useEffect(() => {
    const canonical = absoluteUrl(path);
    const socialImage = image ? (image.startsWith("http") ? image : new URL(image, window.location.origin).href) : undefined;
    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    const verification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;
    if (verification) setMeta('meta[name="google-site-verification"]', "name", "google-site-verification", verification);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[property="og:type"]', "property", "og:type", type);
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", "Snaefell");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", socialImage ? "summary_large_image" : "summary");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    if (socialImage) {
      setMeta('meta[property="og:image"]', "property", "og:image", socialImage);
      setMeta('meta[name="twitter:image"]', "name", "twitter:image", socialImage);
    }
    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
    document.querySelectorAll('script[data-seo-jsonld="true"]').forEach((node) => node.remove());
    if (structuredData) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonld = "true";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, path, image, type, noIndex, structuredData]);
  return null;
}
