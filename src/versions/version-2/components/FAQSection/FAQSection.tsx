import type { GuideFaq } from "../../types/Guide";
import { ChevronDown } from "lucide-react";
import "./FAQSection.css";

export default function FAQSection({ title="Preguntas frecuentes", intro, items, defaultOpenCount=1 }: { title?:string; intro?:string; items:GuideFaq[]; defaultOpenCount?:number }) {
  if (!items.length) return null;
  return <section className="faq-section"><div className="faq-section__heading"><h2>{title}</h2>{intro&&<p>{intro}</p>}</div><div className="faq-section__list">{items.map((faq,index)=><details key={faq.question} open={index<defaultOpenCount}><summary>{faq.question}<ChevronDown aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div></section>;
}
