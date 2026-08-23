import { Link } from "react-router-dom";
import "./NotFound.css";
export default function NotFound(){return <section className="not-found"><div><span>404</span><h1>Esta ruta no existe.</h1><p>Volvé al inicio o continuá explorando la tienda.</p><Link className="button button--primary" to="/">Volver al inicio</Link></div></section>}
