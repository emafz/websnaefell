import Icon, { type IconName } from "../Icon/Icon";
import "./ElectricMobilityBenefits.css";

const benefits: { icon:IconName; title:string; text:string }[] = [
  { icon:"bolt", title:"Más eficiencia", text:"Movete diariamente con una alternativa que aprovecha la energía eléctrica para acompañar tus desplazamientos." },
  { icon:"route", title:"Más libertad", text:"Una opción práctica y flexible para recorridos urbanos y actividades cotidianas." },
  { icon:"gauge", title:"Asistencia cuando la necesitás", text:"En modelos con pedaleo asistido, elegí cuánto acompañamiento querés recibir durante el recorrido." },
  { icon:"leaf", title:"Una experiencia eléctrica", text:"Disfrutá una movilidad más silenciosa y sin combustión directa durante el uso." },
];

export default function ElectricMobilityBenefits() {
  return <section className="section mobility-benefits"><div className="container"><span className="eyebrow">Movilidad eléctrica</span><h2>Movete diferente</h2><p className="mobility-benefits__intro">Descubrí una forma más simple, eficiente y flexible de moverte todos los días.</p><div className="mobility-benefits__grid">{benefits.map((item)=><article key={item.title}><Icon name={item.icon}/><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>;
}
