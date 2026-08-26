import { Link } from "react-router-dom";
import type { Guide } from "../../types/Guide";
import { trackEvent } from "../../utils/analytics";
import "./GuideCard.css";

export default function GuideCard({ guide }: { guide:Guide }) {
  return <article className="guide-card"><Link className="guide-card__image" to={`/novedades/${guide.slug}`}><img src={guide.image} alt={guide.imageAlt} loading="lazy" /></Link><div className="guide-card__body"><span>{guide.category}</span><h3><Link to={`/novedades/${guide.slug}`}>{guide.title}</Link></h3><p>{guide.excerpt}</p><Link className="guide-card__link" to={`/novedades/${guide.slug}`} onClick={()=>trackEvent("select_guide",{guide_title:guide.title,guide_category:guide.category})}>Leer guía →</Link></div></article>;
}
