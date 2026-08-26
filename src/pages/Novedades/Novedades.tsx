import { useState } from "react";
import GuideCard from "../../components/GuideCard/GuideCard";
import SEO from "../../components/SEO/SEO";
import WhatsAppCTA from "../../components/WhatsAppCTA/WhatsAppCTA";
import { guideCategories, publishedGuides } from "../../data/guides";
import { absoluteUrl } from "../../utils/site";
import "./Novedades.css";

export default function Novedades() {
  const [category,setCategory]=useState("Todas");
  const visible=category==="Todas"?publishedGuides:publishedGuides.filter((guide)=>guide.category===category);
  return <main className="news-page"><SEO title="Guías de movilidad eléctrica | Snaefell" description="Guías claras sobre bicicletas eléctricas, autonomía, potencia, baterías, mantenimiento y elección de modelos Snaefell." path="/novedades" structuredData={{"@context":"https://schema.org","@type":"CollectionPage",name:"Guías Snaefell",url:absoluteUrl("/novedades")}}/><section className="news-hero"><div className="container"><span className="eyebrow">Guías Snaefell</span><h1>Información para moverte mejor</h1><p>Entendé la tecnología, compará alternativas y elegí tu próximo modelo con más confianza.</p></div></section><section className="section"><div className="container"><div className="news-filters" role="group" aria-label="Filtrar guías por categoría">{guideCategories.map((item)=><button className={category===item?"is-active":""} type="button" aria-pressed={category===item} onClick={()=>setCategory(item)} key={item}>{item}</button>)}</div><div className="news-guide-grid">{visible.map((guide)=><GuideCard guide={guide} key={guide.id}/>)}</div></div></section><section className="section news-cta"><div className="container"><div><h2>¿Querés elegir un modelo para tu recorrido?</h2><p>Contanos cómo te movés y nuestro equipo te orienta.</p></div><WhatsAppCTA location="guides_index" label="Consultar por WhatsApp" message="Hola, estuve leyendo las guías de Snaefell y quiero asesoramiento para elegir un modelo."/></div></section></main>;
}
