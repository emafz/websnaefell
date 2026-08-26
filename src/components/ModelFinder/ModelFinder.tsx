import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import type { RecommendedUse } from "../../types/Product";
import Icon, { type IconName } from "../Icon/Icon";
import "./ModelFinder.css";

const needs: { id:RecommendedUse; label:string; icon:IconName }[] = [
  { id:"city", label:"Ciudad", icon:"city" }, { id:"long-range", label:"Mayor autonomía", icon:"route" },
  { id:"power", label:"Mayor potencia", icon:"bolt" }, { id:"portable", label:"Fácil de transportar", icon:"portable" },
  { id:"uneven-terrain", label:"Caminos irregulares", icon:"mountain" }, { id:"daily", label:"Uso cotidiano", icon:"gauge" },
];

export default function ModelFinder() {
  const [selected, setSelected] = useState<RecommendedUse>("city");
  const matches = products.filter((product)=>product.recommendedUse.includes(selected));
  return <section className="section model-finder"><div className="container"><span className="eyebrow">Encontrá tu modelo</span><div className="model-finder__heading"><div><h2>Encontrá el Snaefell ideal para vos</h2><p>Elegí qué necesitás y descubrí los modelos compatibles según los datos del catálogo.</p></div></div><div className="model-finder__needs" role="group" aria-label="Necesidad principal">{needs.map((need)=><button className={selected===need.id?"is-active":""} type="button" onClick={()=>setSelected(need.id)} aria-pressed={selected===need.id} key={need.id}><Icon name={need.icon}/><span>{need.label}</span></button>)}</div><div className="model-finder__results" aria-live="polite">{matches.map((product)=><Link to={`/modelos/${product.slug}`} key={product.id}><span>{product.category==="bicicleta"?"Bicicleta eléctrica":"Monopatín eléctrico"}</span><strong>{product.name}</strong><small>{product.tagline}</small><b>Conocé el modelo →</b></Link>)}</div></div></section>;
}
