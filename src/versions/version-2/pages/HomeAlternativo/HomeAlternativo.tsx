import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ElectricMobilityBenefits from "../../components/ElectricMobilityBenefits/ElectricMobilityBenefits";
import GuideCard from "../../components/GuideCard/GuideCard";
import Icon, { type IconName } from "../../components/Icon/Icon";
import ModelFinder from "../../components/ModelFinder/ModelFinder";
import SEO from "../../components/SEO/SEO";
import TrustBenefits from "../../components/TrustBenefits/TrustBenefits";
import WhatsAppCTA from "../../components/WhatsAppCTA/WhatsAppCTA";
import landscapeImage from "../../assets/home/paisaje.webp";
import adventureImage from "../../assets/home/adventure-p6.webp";
import scootersBanner from "../../assets/home/range-scooters.webp";
import urbanBanner from "../../assets/home/range-urban.webp";
import offroadBanner from "../../assets/home/range-offroad.webp";
import { publishedGuides } from "../../data/guides";
import { absoluteUrl } from "../../utils/site";
import "./HomeBase.css";
import "./HomeAlternativo.css";

const heroAssetBase = `${import.meta.env.BASE_URL}assets/hero/`;

const banners = [
  { base:"hero-f1", model:"BESTRIDE F1", title:"La ciudad, a tu escala.", description:"Plegable y compacta, con potencia para moverte de forma práctica donde transites a diario.", features:[["500 W","POTENCIA"],["40 KM","AUTONOMÍA"],["40 KM/H","VELOCIDAD MÁX."],["120 KG","CARGA MÁX."]] },
  { base:"hero-f2", model:"BESTRIDE PRO F2", title:"Tres ruedas. Cero dudas.", description:"Doble motor y tres ruedas para un control estable, de la salida a la llegada.", features:[["1000 W","POTENCIA"],["45 KM","AUTONOMÍA"],["55 KM/H","VELOCIDAD MÁX."],["150 KG","CARGA MÁX."]] },
  { base:"hero-p2", model:"LIGHT P2", title:"Tu bici, siempre con vos.", description:"Se pliega, se levanta y se guarda. Ligera y ágil para acompañar tu día entero.", features:[["250 W","POTENCIA"],["35 KM","AUTONOMÍA"],["16 × 1,95","NEUMÁTICOS"],["21 KG","PESO"]] },
  { base:"hero-p5", model:"ANTELOPE P5", title:"Salí del camino.", description:"Neumáticos Fat de gran apoyo para rodar estable, en la ciudad o fuera de ella.", features:[["750 W","POTENCIA"],["65 KM","AUTONOMÍA MÁX."],["24 × 4,0","NEUMÁTICOS FAT"],["120 KG","CARGA MÁX."]] },
  { base:"hero-p6", model:"MANTIS P6", title:"Hasta 115 km, sin escalas.", description:"La mayor autonomía de la gama para recorridos largos, pendientes y caminos exigentes.", features:[["750 W","POTENCIA"],["115 KM","AUTONOMÍA MÁX."],["20 × 4,0","NEUMÁTICOS FAT"],["120 KG","CARGA MÁX."]] },
];

const ranges = [
  { title:"Monopatines", to:"/productos/bestride-f1", image:scootersBanner },
  { title:"E-bike urbana", to:"/productos/light-p2", image:urbanBanner },
  { title:"E-bike Fat", to:"/productos/antelope-p5", image:offroadBanner },
];

const featuredGuides = ["autonomia-bicicleta-electrica","como-elegir-bicicleta-electrica","cuidar-bateria-ebike"]
  .map((slug)=>publishedGuides.find((guide)=>guide.slug===slug)).filter(Boolean);

function featureIcon(label:string,index:number):IconName {
  if (/neumático|cubierta|medida|dimensión|tamaño|rodado/i.test(label)) return "tire";
  return (["bolt","battery","speed","weight"] as IconName[])[index];
}

function ScrollBanners() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>(".scroll-banner");
    if (!elements?.length) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element)=>element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries)=>entries.forEach((entry)=>{
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }),{threshold:.28});
    elements.forEach((element)=>observer.observe(element));
    return ()=>observer.disconnect();
  },[]);

  return <section className="scroll-banners" ref={sectionRef} aria-label="Modelos destacados">
    {banners.map((banner,index)=><article className={`scroll-banner${index===0?" is-visible":""}`} key={banner.model} style={{backgroundImage:`url(${heroAssetBase}${banner.base}-1920.jpg)`}}>
      <div className="scroll-banner__shade"/>
      <div className="scroll-banner__content">
        <div className="scroll-banner__copy">
          <p className="scroll-banner__brand">Snaefell. Movete distinto.</p>
          <span className="scroll-banner__model"><i/>{banner.model}</span>
          {index===0?<h1>{banner.title}</h1>:<h2>{banner.title}</h2>}
          <p className="scroll-banner__description">{banner.description}</p>
          <div className="scroll-banner__actions"><WhatsAppCTA location={`alternative_hero_${index+1}`} label="Recibir asesoramiento" message={`Hola, quiero recibir asesoramiento sobre ${banner.model}.`}/><Link className="button scroll-banner__secondary" to="/productos">Explorar modelos</Link></div>
        </div>
        <div className="scroll-banner__facts">{banner.features.map(([value,label],featureIndex)=><div key={label}><Icon name={featureIcon(label,featureIndex)}/><span><strong>{value}</strong><small>{label}</small></span></div>)}</div>
      </div>
      {index===0&&<a className="scroll-banner__cue" href="#gamas-alternativas">Deslizá para explorar <ArrowDown aria-hidden="true"/></a>}
    </article>)}
  </section>;
}

export default function HomeAlternativo(){
  return <div className="alternative-home">
    <SEO title="Home | Snaefell" description="Explorá toda la gama Snaefell mediante una experiencia visual de scroll." path="/home-alternativo" image={landscapeImage}/>
    <ScrollBanners/>
    <section className="home-ranges" id="gamas-alternativas" aria-label="Gamas Snaefell"><div className="range-grid">{ranges.map(({title,to,image})=><Link className="range-card" to={to} key={title} aria-label={`Conocer ${title}`}><img className="range-card__background" src={image} alt="" loading="lazy"/><div className="range-card__shade"/><div className="range-card__copy"><h2>{title}</h2><ArrowRight aria-hidden="true"/></div></Link>)}</div></section>
    <div className="alternative-photo-section alternative-photo-section--mobility" style={{backgroundImage:`url(${heroAssetBase}hero-f2-1920.jpg)`}}><ElectricMobilityBenefits/></div>
    <div className="alternative-photo-section alternative-photo-section--finder" style={{backgroundImage:`url(${adventureImage})`}}><ModelFinder/></div>
    <section className="home-section home-brand"><img className="home-brand__background" src={landscapeImage} alt="" aria-hidden="true"/><div className="home-container home-brand__layout"><div className="home-brand__copy"><span className="home-label">¿Por qué Snaefell?</span><h2>Movilidad eléctrica.<br/>Diseño que te impulsa.</h2><p>Snaefell combina bicicletas y monopatines eléctricos con asesoramiento para encontrar la configuración que encaje con tu recorrido.</p><p>Compará especificaciones y contá con acompañamiento antes y después de elegir.</p><strong>SNAEFELL. MOVETE DISTINTO.</strong></div></div></section>
    <section className="section alternative-support" style={{backgroundImage:`url(${offroadBanner})`}}><div className="container"><h2>Calidad y atención, siempre.</h2><TrustBenefits/></div></section>
    <section className="home-section home-news"><div className="home-container"><div className="home-news__heading"><div><h2>Guías para moverte mejor</h2></div><Link to="/novedades">Ver todas las guías <span><ArrowRight aria-hidden="true"/></span></Link></div><div className="home-news__grid">{featuredGuides.map((guide)=><GuideCard guide={guide!} key={guide!.id}/>)}</div></div></section>
  </div>;
}
