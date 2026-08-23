import "./WhatsAppButton.css";
export default function WhatsAppButton() {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || "5491164454997";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent("Hola, quiero más información sobre Snaefell.")}`;
  return <a className="whatsapp-fab" href={href} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">WA</a>;
}
