export interface WhatsAppContext {
  productName?: string;
  model?: string;
  sku?: string;
  color?: string;
  message?: string;
}

export function generateWhatsAppUrl(context: WhatsAppContext = {}) {
  const phone = (import.meta.env.VITE_WHATSAPP_NUMBER || "5491164454997").replace(/\D/g, "");
  const product = context.productName ? `la Snaefell ${context.productName}` : "los productos Snaefell";
  const details = [context.color && `color ${context.color}`, context.sku && `SKU ${context.sku}`].filter(Boolean).join(", ");
  const message = context.message || `Hola, estoy interesado en ${product}${details ? `, ${details}` : ""}. Quisiera consultar disponibilidad, formas de pago y opciones de entrega.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
