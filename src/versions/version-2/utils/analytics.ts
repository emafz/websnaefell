type EventParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function initializeAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId || document.querySelector(`script[data-ga-id="${measurementId}"]`)) return;
  const script = document.createElement("script");
  script.async = true;
  script.dataset.gaId = measurementId;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });
}

export function trackEvent(name: string, parameters: EventParameters = {}) {
  window.gtag?.("event", name, parameters);
}

export function trackPageView(path: string, title: string) {
  trackEvent("page_view", { page_path: path, page_title: title });
}

export function trackWhatsAppContact(parameters: EventParameters) {
  trackEvent("whatsapp_contact", { page_path: window.location.pathname, ...parameters });
}
