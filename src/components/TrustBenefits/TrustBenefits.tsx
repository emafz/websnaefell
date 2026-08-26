import type { ReactNode } from "react";
import "./TrustBenefits.css";

type Benefit = { title: string; text: string; icon: ReactNode };

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const benefits: Benefit[] = [
  {
    title: "Garantía oficial",
    text: "Consultá las condiciones vigentes para el modelo que te interesa.",
    icon: <svg {...iconProps}><path d="M24 4 39 10v12c0 10-6.2 17.2-15 22-8.8-4.8-15-12-15-22V10L24 4Z" /><path d="m18 20 6-3v14M18 31h12" /><circle cx="24" cy="24" r="10" /></svg>,
  },
  {
    title: "Servicio técnico",
    text: "Orientación para el cuidado y la atención técnica de tu vehículo.",
    icon: <svg {...iconProps}><path d="m27 10 11 11M23 14l11 11M29 8l3-3 7 7-3 3" /><path d="m25 22-14 14a3 3 0 0 0 4 4l14-14" /><path d="M18 17 8 7l-3 3 10 10M34 29l9 9-5 5-9-9" /></svg>,
  },
  {
    title: "Información de componentes",
    text: "Conocé la batería y los componentes especificados para cada modelo.",
    icon: <svg {...iconProps}><rect x="5" y="13" width="35" height="24" rx="5" /><path d="M40 20h4v10h-4M12 19v12M19 19v12M26 19v12M33 19v12" /></svg>,
  },
  {
    title: "Atención personalizada",
    text: "Asesoramiento experto antes y después de elegir tu modelo.",
    icon: <svg {...iconProps}><path d="M9 27v-7a15 15 0 0 1 30 0v7" /><path d="M9 21H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h5V21H9ZM39 21h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5V21h2Z" /><path d="M37 35c-2 5-6 7-12 7h-3" /></svg>,
  },
];

export default function TrustBenefits({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`trust-benefits${compact ? " trust-benefits--compact" : ""}`}>
      {benefits.map(({ title, text, icon }) => (
        <article key={title}>
          <span className="trust-benefits__icon">{icon}</span>
          <div><h3>{title}</h3><p>{text}</p></div>
        </article>
      ))}
    </div>
  );
}
