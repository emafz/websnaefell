import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import WhatsAppCTA from "../../components/WhatsAppCTA/WhatsAppCTA";
import "./NotFound.css";
export default function NotFound(){return <section className="not-found"><SEO title="Página no encontrada | Snaefell" description="La página solicitada no existe." noIndex /><div><span>404</span><h1>Esta ruta no existe.</h1><p>Continuá explorando la gama Snaefell o consultanos para recibir asesoramiento.</p><Link className="button button--primary" to="/modelos">Volver a modelos</Link><WhatsAppCTA location="404" label="Consultar por WhatsApp" /></div></section>}
