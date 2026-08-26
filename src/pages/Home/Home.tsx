import { Link } from "react-router-dom";
import BatteryEducation from "../../components/BatteryEducation/BatteryEducation";
import ElectricMobilityBenefits from "../../components/ElectricMobilityBenefits/ElectricMobilityBenefits";
import GuideCard from "../../components/GuideCard/GuideCard";
import Hero from "../../components/Hero/Hero";
import ModelFinder from "../../components/ModelFinder/ModelFinder";
import SEO from "../../components/SEO/SEO";
import TrustBenefits from "../../components/TrustBenefits/TrustBenefits";
import WhatsAppCTA from "../../components/WhatsAppCTA/WhatsAppCTA";
import landscapeImage from "../../assets/home/paisaje.png";
import scootersBanner from "../../assets/home/range-scooters.jpeg";
import urbanBanner from "../../assets/home/range-urban.jpeg";
import offroadBanner from "../../assets/home/range-offroad.jpeg";
import { publishedGuides } from "../../data/guides";
import { products } from "../../data/products";
import { absoluteUrl } from "../../utils/site";
import "./Home.css";

const ranges = [
  { title:"Monopatines", text:"Libertad en cada trayecto.", product:products[0], image:scootersBanner },
  { title:"E-bike urbana (P2)", text:"Tu ciudad, tu ritmo.", product:products[3], image:urbanBanner },
  { title:"E-bike Fat (P6 y P5)", text:"Estabilidad para distintos caminos.", product:products[2], image:offroadBanner },
];

const featuredGuides = ["autonomia-bicicleta-electrica","como-elegir-bicicleta-electrica","cuidar-bateria-ebike"]
  .map((slug)=>publishedGuides.find((guide)=>guide.slug===slug)).filter(Boolean);

export default function Home() {
  return <>
    <SEO title="Snaefell | Bicicletas y Monopatines Eléctricos" description="Descubrí bicicletas y monopatines eléctricos Snaefell. Compará modelos, autonomía y potencia, y recibí asesoramiento por WhatsApp." path="/" image={landscapeImage} structuredData={[{"@context":"https://schema.org","@type":"Organization",name:"Snaefell",url:absoluteUrl("/")},{"@context":"https://schema.org","@type":"WebSite",name:"Snaefell",url:absoluteUrl("/")}]} />
    <Hero/>
    <section className="home-section home-ranges"><div className="home-container"><span className="home-label">Gamas</span><h2>Tres formas. Un mismo espíritu.</h2><div className="range-grid">{ranges.map(({title,text,product,image})=><article className="range-card" key={title}><img className="range-card__background" src={image} alt="" loading="lazy"/><div className="range-card__shade"/><div className="range-card__copy"><h3>{title}</h3><p>{text}</p><Link to={`/modelos/${product.slug}`}>Conocé {product.name} <span>→</span></Link></div></article>)}</div></div></section>
    <ElectricMobilityBenefits/>
    <ModelFinder/>
    <section className="home-section home-brand"><img className="home-brand__background" src={landscapeImage} alt="" aria-hidden="true"/><div className="home-container home-brand__layout"><div className="home-brand__copy"><span className="home-label">¿Por qué Snaefell?</span><h2>Movilidad eléctrica.<br/>Diseño que te impulsa.</h2><p>Snaefell combina una gama de bicicletas y monopatines eléctricos con asesoramiento para ayudarte a encontrar una configuración adecuada para tu recorrido.</p><p>Conocé especificaciones, compará alternativas y contá con acompañamiento antes y después de elegir.</p><strong>SNAEFELL. MOVETE DISTINTO.</strong></div><div className="home-brand__identity"><TrustBenefits compact/></div></div></section>
    <BatteryEducation compact/>
    <section className="home-section home-support"><div className="home-container"><span className="home-label">Respaldo que te acompaña</span><h2>Calidad y atención, siempre.</h2><TrustBenefits/></div></section>
    <section className="home-section home-news"><div className="home-container"><div className="home-news__heading"><div><span className="home-label">Contenido útil</span><h2>Guías para moverte mejor</h2></div><Link to="/novedades">Ver todas las guías <span>→</span></Link></div><div className="home-news__grid">{featuredGuides.map((guide)=><GuideCard guide={guide!} key={guide!.id}/>)}</div><div className="advisor-banner"><div><h2>¿Necesitás asesoramiento?</h2><p>Contanos cómo te movés y te ayudamos a comparar modelos.</p></div><WhatsAppCTA location="home_bottom" label="Recibir asesoramiento"/></div></div></section>
  </>;
}
