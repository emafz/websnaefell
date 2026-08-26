import type { MouseEventHandler } from "react";
import { trackWhatsAppContact } from "../../utils/analytics";
import { generateWhatsAppUrl, type WhatsAppContext } from "../../utils/whatsapp";
import "./WhatsAppCTA.css";

interface WhatsAppCTAProps extends WhatsAppContext {
  label?: string;
  location: string;
  className?: string;
}

export default function WhatsAppCTA({ label = "Consultar por WhatsApp", location, className = "", ...context }: WhatsAppCTAProps) {
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
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h13M14 7l5 5-5 5" />
      </svg>
    </a>
  );
}
