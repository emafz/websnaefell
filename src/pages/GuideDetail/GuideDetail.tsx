import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getGuideBySlug } from "../../data/guides";
import { products } from "../../data/products";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import FAQSection from "../../components/FAQSection/FAQSection";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import QuickSummary from "../../components/QuickSummary/QuickSummary";
import RelatedGuides from "../../components/RelatedGuides/RelatedGuides";
import SEO from "../../components/SEO/SEO";
import ShareButton from "../../components/ShareButton/ShareButton";
import WhatsAppCTA from "../../components/WhatsAppCTA/WhatsAppCTA";
import { trackEvent } from "../../utils/analytics";
import { absoluteUrl } from "../../utils/site";
import NotFound from "../NotFound/NotFound";
import type { Product } from "../../types/Product";
import "./GuideDetail.css";

export default function GuideDetail() {
  const { guideSlug } = useParams();
  const guide = getGuideBySlug(guideSlug);
  useEffect(()=>{ if(guide) trackEvent("view_guide",{guide_title:guide.title,guide_category:guide.category,page_path:window.location.pathname}); },[guide]);
  if (!guide) return <NotFound/>;
  const path=`/novedades/${guide.slug}`;
  const relatedProducts=guide.relatedProducts.map((id)=>products.find((product)=>product.id===id)).filter((product): product is Product=>Boolean(product));
  const schema=[
    {"@context":"https://schema.org","@type":"Article",headline:guide.title,description:guide.metaDescription,image:absoluteUrl(guide.image),datePublished:guide.date,dateModified:guide.updatedAt,author:{"@type":"Organization",name:"Snaefell"},publisher:{"@type":"Organization",name:"Snaefell"},mainEntityOfPage:absoluteUrl(path)},
    {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Inicio",item:absoluteUrl("/")},{"@type":"ListItem",position:2,name:"Guías",item:absoluteUrl("/novedades")},{"@type":"ListItem",position:3,name:guide.category,item:absoluteUrl(`/novedades#${encodeURIComponent(guide.category)}`)},{"@type":"ListItem",position:4,name:guide.title,item:absoluteUrl(path)}]},
  ];
  const whatsappMessage=`Hola, estuve leyendo la guía "${guide.title}" de Snaefell y quisiera recibir asesoramiento para elegir un modelo.`;
  return <article className="guide-page">
    <SEO title={guide.metaTitle} description={guide.metaDescription} path={path} image={guide.image} type="article" structuredData={schema}/>
    <header className="guide-hero"><div className="container"><Breadcrumbs items={[{label:"Inicio",to:"/"},{label:"Guías",to:"/novedades"},{label:guide.category},{label:guide.title}]}/><div className="guide-hero__copy"><span>{guide.category}</span><h1>{guide.title}</h1><p>{guide.excerpt}</p><div><time dateTime={guide.date}>Actualizado el 25 de agosto de 2026</time><ShareButton title={guide.title} text={guide.excerpt} url={absoluteUrl(path)} contentType="guide"/></div></div></div><img src={guide.image} alt={guide.imageAlt} fetchPriority="high" /></header>
    <div className="container guide-body"><p className="guide-lead">{guide.metaDescription}</p><QuickSummary items={guide.keyPoints}/><Link className="button button--ghost guide-model-link" to="/modelos">Ver modelos Snaefell</Link>{guide.sections.map((section)=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}{section.bullets&&<ul>{section.bullets.map((bullet)=><li key={bullet}>{bullet}</li>)}</ul>}</section>)}</div>
    <section className="section guide-faq"><div className="container"><FAQSection items={guide.faq}/></div></section>
    {relatedProducts.length>0&&<section className="section guide-products"><div className="container"><h2>Modelos relacionados</h2><p>Productos vinculados con el uso y los temas explicados en esta guía.</p><div onClick={()=>trackEvent("guide_to_product",{guide_title:guide.title})}><ProductGrid products={relatedProducts}/></div></div></section>}
    <section className="section"><div className="container"><RelatedGuides slugs={guide.relatedGuides} currentSlug={guide.slug}/></div></section>
    <section className="section guide-cta"><div className="container"><div><span className="eyebrow">Asesoramiento</span><h2>¿Todavía no sabés qué modelo elegir?</h2><p>Nuestro equipo puede ayudarte a encontrar el Snaefell adecuado para tu forma de moverte.</p></div><WhatsAppCTA location="article_bottom" label="Consultar por WhatsApp" message={whatsappMessage}/></div></section>
  </article>;
}
