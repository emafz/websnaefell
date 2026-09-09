import type { MouseEventHandler } from "react";
import { ArrowRight } from "lucide-react";
import { trackWhatsAppContact } from "../../utils/analytics";
import { generateWhatsAppUrl, type WhatsAppContext } from "../../utils/whatsapp";
import "./WhatsAppCTA.css";

interface WhatsAppCTAProps extends WhatsAppContext {
  label?: string;
  location: string;
  className?: string;
}

export default function WhatsAppCTA({ label = "Recibir asesoramiento", location, className = "", ...context }: WhatsAppCTAProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = () => trackWhatsAppContact({
    product_name: context.productName,
    product_model: context.model,
    sku: context.sku,
    color: context.color,
    cta_location: location,
  });

  return (
    <a className={`whatsapp-cta ${className}`.trim()} href={generateWhatsAppUrl(context)} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
      <span>{label}</span>
      <ArrowRight aria-hidden="true" />
    </a>
  );
}
