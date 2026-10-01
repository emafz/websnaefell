import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ElectricMobilityBenefits from "../../components/ElectricMobilityBenefits/ElectricMobilityBenefits";
import GuideCard from "../../components/GuideCard/GuideCard";
import Hero from "../../components/Hero/Hero";
import ModelFinder from "../../components/ModelFinder/ModelFinder";
import SEO from "../../components/SEO/SEO";
import TrustBenefits from "../../components/TrustBenefits/TrustBenefits";
import landscapeImage from "../../assets/home/paisaje.webp";
import scootersBanner from "../../assets/home/range-scooters.webp";
import urbanBanner from "../../assets/home/range-urban.webp";
import offroadBanner from "../../assets/home/range-offroad.webp";
import { publishedGuides } from "../../data/guides";
import { absoluteUrl } from "../../utils/site";
import "./Home.css";

const ranges = [
  { title:"Monopatines", to:"/modelos/bestride-f1", image:scootersBanner },
  { title:"E-bike urbana", to:"/modelos/light-p2", image:urbanBanner },
  { title:"E-bike Fat", to:"/modelos/antelope-p5", image:offroadBanner },
];

const featuredGuides = ["autonomia-bicicleta-electrica","como-elegir-bicicleta-electrica","cuidar-bateria-ebike"]
  .map((slug)=>publishedGuides.find((guide)=>guide.slug===slug)).filter(Boolean);

export default function Home() {
  return <>
    <SEO title="Snaefell | Bicicletas y Monopatines Eléctricos" description="Descubrí bicicletas y monopatines eléctricos Snaefell. Compará modelos, autonomía y potencia, y recibí asesoramiento por WhatsApp." path="/" image={landscapeImage} structuredData={[{"@context":"https://schema.org","@type":"Organization",name:"Snaefell",url:absoluteUrl("/")},{"@context":"https://schema.org","@type":"WebSite",name:"Snaefell",url:absoluteUrl("/")}]} />
    <Hero/>
    <section className="home-ranges" id="gamas" aria-label="Gamas Snaefell"><div className="range-grid">{ranges.map(({title,to,image})=><Link className="range-card" to={to} key={title} aria-label={`Conocer ${title}`}><img className="range-card__background" src={image} alt="" loading="lazy"/><div className="range-card__shade"/><div className="range-card__copy"><h2>{title}</h2><ArrowRight aria-hidden="true" /></div></Link>)}</div></section>
    <ElectricMobilityBenefits/>
    <ModelFinder/>
    <section className="home-section home-brand"><img className="home-brand__background" src={landscapeImage} alt="" aria-hidden="true"/><div className="home-container home-brand__layout"><div className="home-brand__copy"><span className="home-label">¿Por qué Snaefell?</span><h2>Movilidad eléctrica.<br/>Diseño que te impulsa.</h2><p>Snaefell combina bicicletas y monopatines eléctricos con asesoramiento para encontrar la configuración que encaje con tu recorrido.</p><p>Compará especificaciones y contá con acompañamiento antes y después de elegir.</p><strong>SNAEFELL. MOVETE DISTINTO.</strong></div></div></section>
    <section className="home-section home-support"><div className="home-container"><h2>Calidad y atención, siempre.</h2><TrustBenefits/></div></section>
    <section className="home-section home-news"><div className="home-container"><div className="home-news__heading"><div><h2>Guías para moverte mejor</h2></div><Link to="/novedades">Ver todas las guías <span><ArrowRight aria-hidden="true" /></span></Link></div><div className="home-news__grid">{featuredGuides.map((guide)=><GuideCard guide={guide!} key={guide!.id}/>)}</div></div></section>
  </>;
}
