import { useLocation } from "react-router-dom";
import { products } from "../../data/products";
import { trackWhatsAppContact } from "../../utils/analytics";
import { generateWhatsAppUrl } from "../../utils/whatsapp";
import "./WhatsAppButton.css";
export default function WhatsAppButton() {
  const location = useLocation();
  const product = products.find((item) => location.pathname.includes(`/modelos/${item.slug}`));
  const href = generateWhatsAppUrl(product ? { productName:product.name, model:product.model, message:`Hola, estoy viendo la Snaefell ${product.name} y quisiera recibir más información.` } : { message:"Hola, quiero recibir asesoramiento sobre los productos Snaefell." });
  return <a className={`whatsapp-fab${product ? " whatsapp-fab--product" : ""}`} href={href} target="_blank" rel="noopener noreferrer" aria-label={product ? `Consultar por ${product.name} en WhatsApp` : "Contactar a Snaefell por WhatsApp"} onClick={() => trackWhatsAppContact({ product_name:product?.name, product_model:product?.model, cta_location:"floating_button" })}>WA</a>;
}
