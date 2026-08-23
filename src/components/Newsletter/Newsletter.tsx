import { useState } from "react";
import "./Newsletter.css";
export default function Newsletter() {
  const [sent, setSent] = useState(false);
  return <div className="newsletter"><h4>Unite al newsletter</h4>{sent ? <p>¡Gracias! Tu registro quedó preparado.</p> : <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}><p>Recibí novedades de modelos y lanzamientos.</p><div><input type="email" required placeholder="tu@email.com" /><button type="submit">→</button></div></form>}</div>;
}
