export type IconName = "bolt" | "route" | "gauge" | "leaf" | "battery" | "shield" | "wrench" | "settings" | "book" | "compare" | "city" | "mountain" | "portable" | "check";

export default function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const common = { fill:"none", stroke:"currentColor", strokeWidth:1.8, strokeLinecap:"round" as const, strokeLinejoin:"round" as const };
  const paths: Record<IconName, React.ReactNode> = {
    bolt:<path d="m14 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
    route:<><circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h3a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7"/></>,
    gauge:<><path d="M4 18a8 8 0 1 1 16 0"/><path d="m12 14 4-4M5 18h14"/></>,
    leaf:<><path d="M20 4C10 4 5 9 5 16c6 1 13-2 15-12Z"/><path d="M4 21c3-5 7-8 12-11"/></>,
    battery:<><rect x="3" y="7" width="17" height="11" rx="2"/><path d="M20 10h2v5h-2M11 9l-3 5h4l-2 3"/></>,
    shield:<><path d="M12 3 20 6v6c0 5-3 8-8 10-5-2-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    wrench:<path d="M14 6a5 5 0 0 0-6 6L3 17l4 4 5-5a5 5 0 0 0 6-6l-3 3-4-4 3-3Z"/>,
    settings:<><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></>,
    book:<><path d="M3 5a4 4 0 0 1 4-2h5v17H7a4 4 0 0 0-4 2V5ZM21 5a4 4 0 0 0-4-2h-5v17h5a4 4 0 0 1 4 2V5Z"/></>,
    compare:<><path d="M8 4 4 8l4 4M4 8h14M16 20l4-4-4-4M20 16H6"/></>,
    city:<><path d="M4 21V8h7v13M11 21V3h9v18M2 21h20M7 11h1M7 15h1M14 7h2M14 11h2M14 15h2"/></>,
    mountain:<path d="m2 20 7-12 4 6 3-5 6 11H2Z"/>,
    portable:<><path d="M7 3h10v18H7zM4 8h3M17 8h3M10 6h4M10 18h4"/></>,
    check:<path d="m4 12 5 5L20 6"/>,
  };
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...common}>{paths[name]}</svg>;
}
