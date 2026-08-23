import "./Novedades.css";
const news = [
  { date:"07.2026", title:"Nueva familia de bicicletas eléctricas", text:"Mantis P6, Light P2 y Antelope P5 amplían la propuesta Snaefell para nuevos usos y recorridos." },
  { date:"06.2026", title:"Movilidad urbana más versátil", text:"La línea Bestride combina configuraciones compactas, autonomía y soluciones prácticas para el día a día." },
  { date:"Próximamente", title:"Accesorios y recambios", text:"Esta arquitectura queda preparada para incorporar nuevas categorías sin reconstruir la tienda." },
];
export default function Novedades(){return <section className="section news-page"><div className="container"><span className="eyebrow">Actualidad</span><h1 className="display-title">Novedades.</h1><div className="news-grid">{news.map((item)=><article key={item.title}><span>{item.date}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}</div></div></section>}
