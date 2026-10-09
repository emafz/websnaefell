import { BatteryCharging, Headphones, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import "./TrustBenefits.css";

type Benefit = { title: string; text: string; icon: LucideIcon };

const benefits: Benefit[] = [
  {
    title: "Garantía oficial",
    text: "Consultá las condiciones vigentes para el modelo que te interesa.",
    icon: ShieldCheck,
  },
  {
    title: "Servicio técnico",
    text: "Orientación para el cuidado y la atención técnica de tu vehículo.",
    icon: Wrench,
  },
  {
    title: "Información de componentes",
    text: "Conocé la batería y los componentes especificados para cada modelo.",
    icon: BatteryCharging,
  },
  {
    title: "Atención personalizada",
    text: "Asesoramiento experto antes y después de elegir tu modelo.",
    icon: Headphones,
  },
];

export default function TrustBenefits({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`trust-benefits${compact ? " trust-benefits--compact" : ""}`}>
      {benefits.map(({ title, text, icon: IconComponent }) => (
        <article key={title}>
          <span className="trust-benefits__icon"><IconComponent aria-hidden="true" /></span>
          <div><h3>{title}</h3><p>{text}</p></div>
        </article>
      ))}
    </div>
  );
}