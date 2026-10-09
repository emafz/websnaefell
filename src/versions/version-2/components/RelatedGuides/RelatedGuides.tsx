import { publishedGuides } from "../../data/guides";
import GuideCard from "../GuideCard/GuideCard";
import "./RelatedGuides.css";
export default function RelatedGuides({ slugs, currentSlug, title="Seguí aprendiendo" }: { slugs:string[]; currentSlug?:string; title?:string }) { const related=slugs.filter((slug)=>slug!==currentSlug).map((slug)=>publishedGuides.find((guide)=>guide.slug===slug)).filter(Boolean).slice(0,3); if(!related.length)return null; return <div className="related-guides"><h2>{title}</h2><div>{related.map((guide)=><GuideCard guide={guide!} key={guide!.id}/>)}</div></div>; }
