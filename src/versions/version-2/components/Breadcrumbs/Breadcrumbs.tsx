import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

export default function Breadcrumbs({ items }: { items: Array<{ label: string; to?: string }> }) {
  return <nav className="breadcrumbs" aria-label="Migas de pan">{items.map((item, index) => <span key={`${item.label}-${index}`}>{index > 0 && <b>/</b>}{item.to ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}</span>)}</nav>;
}
