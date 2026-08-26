import { useState } from "react";
import { trackEvent } from "../../utils/analytics";

export default function ShareButton({ title, text, url, contentType = "product" }: { title: string; text: string; url: string; contentType?: "product" | "guide" }) {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    try {
      if (navigator.share) await navigator.share({ title, text, url });
      else { await navigator.clipboard.writeText(url); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
      trackEvent("share_content", { content_type: contentType, item_name: title, page_path: window.location.pathname });
    } catch (error) {
      if ((error as Error).name !== "AbortError") console.warn("No se pudo compartir el contenido.");
    }
  };
  return <button className="share-button" type="button" onClick={share}>{copied ? "Enlace copiado" : "Compartir"}</button>;
}
