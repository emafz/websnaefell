import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initializeAnalytics, trackPageView } from "../../utils/analytics";

export default function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => initializeAnalytics(), []);
  useEffect(() => {
    const timer = window.setTimeout(() => trackPageView(`${location.pathname}${location.search}`, document.title), 0);
    return () => window.clearTimeout(timer);
  }, [location]);
  return null;
}
