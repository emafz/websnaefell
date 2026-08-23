import { Link } from "react-router-dom";
import logo from "../../assets/global/snaefell-logo.webp";
import Newsletter from "../Newsletter/Newsletter";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand"><img src={logo} alt="Snaefell" /><p>Movilidad eléctrica para elegir tu propio camino.</p></div>
        <div><h4>Navegación</h4><Link to="/modelos">Modelos</Link><Link to="/tienda">Tienda</Link><Link to="/nosotros">Nosotros</Link><Link to="/novedades">Novedades</Link></div>
        <div><h4>Tienda</h4><Link to="/tienda/categoria/monopatin">Monopatines</Link><Link to="/tienda/categoria/bicicleta">Bicicletas</Link><Link to="/carrito">Carrito</Link></div>
        <Newsletter />
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Snaefell</span><span>Starter e-commerce React + Vite</span></div>
    </footer>
  );
}
