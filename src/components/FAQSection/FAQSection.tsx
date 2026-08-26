import type { GuideFaq } from "../../types/Guide";
import "./FAQSection.css";

export default function FAQSection({ title="Preguntas frecuentes", intro, items }: { title?:string; intro?:string; items:GuideFaq[] }) {
  if (!items.length) return null;
  return <section className="faq-section"><div className="faq-section__heading"><span className="eyebrow">Ayuda</span><h2>{title}</h2>{intro&&<p>{intro}</p>}</div><div className="faq-section__list">{items.map((faq,index)=><details key={faq.question} open={index===0}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>;
}
