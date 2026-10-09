import Icon from "../Icon/Icon";
import "./QuickSummary.css";
export default function QuickSummary({ items }: { items:string[] }) { return <aside className="quick-summary"><h2>En pocas palabras</h2><div>{items.map((item)=><p key={item}><Icon name="check"/>{item}</p>)}</div></aside>; }
