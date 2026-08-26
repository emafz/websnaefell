import WhatsAppCTA from "../WhatsAppCTA/WhatsAppCTA";
import Icon from "../Icon/Icon";
import "./BatteryEducation.css";

export const autonomyNote = "La autonomía puede variar según el nivel de asistencia, peso del usuario, terreno, pendientes, presión de neumáticos, temperatura y estilo de conducción.";

export function RangeExplainer() {
  return <div className="range-explainer"><div><span>Menor asistencia</span><b>Menor consumo</b><strong>Mayor autonomía</strong></div><div className="range-explainer__bar" aria-hidden="true"><i/><i/><i/><i/></div><div><span>Mayor asistencia</span><b>Mayor consumo</b><strong>Menor autonomía</strong></div></div>;
}

export default function BatteryEducation({ compact=false, productName, model }: { compact?:boolean; productName?:string; model?:string }) {
  return <section className={`section battery-education${compact?" battery-education--compact":""}`}><div className="container battery-education__layout"><div><span className="eyebrow">Batería y autonomía</span><h2>Entendé la energía de tu recorrido</h2><p>Una e-bike se carga conectando el cargador indicado para el modelo a una toma adecuada. La autonomía expresa cuánto puede recorrerse en condiciones determinadas, pero el resultado real cambia con el uso.</p><div className="battery-education__cards"><article><Icon name="battery"/><h3>Carga y cuidado</h3><p>Usá el cargador especificado, protegé la batería de golpes y temperaturas extremas, y seguí siempre el manual.</p></article><article><Icon name="route"/><h3>Una referencia variable</h3><p>{autonomyNote}</p></article></div></div><div><RangeExplainer/><div className="battery-education__cta"><h3>¿Querés saber qué autonomía podés esperar según tu recorrido?</h3><WhatsAppCTA location={productName?"product_range":"battery_education"} label="Consultar por WhatsApp" productName={productName} model={model} message={productName?undefined:"Hola, quiero asesoramiento para estimar qué autonomía necesito según mi recorrido."}/></div></div></div></section>;
}
