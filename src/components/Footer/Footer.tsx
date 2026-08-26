import { Link } from "react-router-dom";
import logo from "../../assets/global/snaefell-logo.webp";
import WhatsAppCTA from "../WhatsAppCTA/WhatsAppCTA";
import { generateWhatsAppUrl } from "../../utils/whatsapp";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" id="contacto">
      <div className="container footer-grid">
        <div className="footer-brand"><img src={logo} alt="Snaefell" /><p>Movilidad eléctrica para elegir tu propio camino.</p></div>
        <div><h4>Navegación</h4><Link to="/modelos">Modelos</Link><Link to="/nosotros">Nosotros</Link><Link to="/novedades">Guías</Link></div>
        <div><h4>Modelos</h4><Link to="/modelos#monopatin">Monopatines eléctricos</Link><Link to="/modelos#bicicleta">Bicicletas eléctricas</Link><Link to="/modelos#comparador">Comparar modelos</Link></div>
        <div><h4>Contacto</h4><WhatsAppCTA location="footer" label="Recibir asesoramiento" /><a href={generateWhatsAppUrl({ message:"Hola, quiero información para ser distribuidor oficial de Snaefell." })} target="_blank" rel="noopener noreferrer">Quiero ser distribuidor</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Snaefell</span><span>Movilidad eléctrica. Movete distinto.</span></div>
    </footer>
  );
}
