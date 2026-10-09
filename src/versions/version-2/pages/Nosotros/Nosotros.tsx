import SEO from "../../components/SEO/SEO";
import "./Nosotros.css";

export default function Nosotros() {
  return <section className="about-page">
    <SEO title="Nosotros | Movilidad Eléctrica Snaefell" description="Conocé Snaefell: diseño, tecnología y respaldo aplicados a bicicletas y monopatines eléctricos." path="/nosotros" />
    <div className="container about-hero"><span className="eyebrow">Sobre nosotros</span><h1>Movilidad que combina potencia, diseño y libertad.</h1><p>En Snaefell pensamos cada modelo como una experiencia de movimiento: ingeniería, calidad constructiva y una identidad visual que acompañe el ritmo de cada persona.</p></div>
    <div className="container about-values"><article><h2>Diseño con propósito</h2><p>Cada detalle busca equilibrar funcionalidad, carácter y experiencia de uso.</p></article><article><h2>Rendimiento real</h2><p>Potencia, autonomía y control para responder a distintos tipos de recorrido.</p></article><article><h2>Respaldo</h2><p>Una propuesta de movilidad acompañada por soporte y componentes seleccionados.</p></article></div>
  </section>;
}
