import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FAQSection from "../../components/FAQSection/FAQSection";
import Icon, { type IconName } from "../../components/Icon/Icon";
import SEO from "../../components/SEO/SEO";
import WhatsAppCTA from "../../components/WhatsAppCTA/WhatsAppCTA";
import distributorImage from "../../assets/home/range-offroad.webp";
import "./Contacto.css";

const distributorMessage = "Hola, quiero presentar mi negocio para evaluar la posibilidad de ser distribuidor oficial de Snaefell. Mi nombre es: __. Empresa/comercio: __. Ciudad y provincia: __. Canal de venta: __.";

const benefits: { icon: IconName; title: string; text: string }[] = [
  { icon:"compare", title:"Una gama para distintos recorridos", text:"Bicicletas y monopatines eléctricos con propuestas urbanas, plegables y Fat para atender necesidades diferentes." },
  { icon:"city", title:"Evaluación comercial con contexto", text:"Analizamos la ubicación, el canal de venta, la experiencia y el alcance de cada negocio antes de definir los próximos pasos." },
  { icon:"shield", title:"Información clara para vender", text:"Las condiciones vigentes, el surtido posible y los lineamientos de producto se conversan directamente con el equipo comercial." },
];

const requestedInformation = [
  "Nombre comercial o razón social.",
  "Ciudad, provincia y zona que atendés.",
  "Tipo de negocio: local, showroom, e-commerce o distribución.",
  "Experiencia en movilidad, ciclismo, tecnología o rubros relacionados.",
  "Canales de venta actuales y alcance comercial.",
  "Nombre y contacto de la persona responsable.",
];

const steps = [
  { title:"Presentá tu negocio", text:"Enviá por WhatsApp los datos principales de tu operación y la zona donde querés comercializar Snaefell." },
  { title:"Revisamos el perfil", text:"El equipo evalúa la propuesta, el canal de venta y la cobertura para determinar si existe una oportunidad comercial." },
  { title:"Conversamos las condiciones", text:"Si el perfil avanza, se revisan surtido, disponibilidad, logística, condiciones comerciales y forma de trabajo." },
  { title:"Definimos los próximos pasos", text:"Con la información acordada, ambas partes pueden decidir cómo continuar con la incorporación de la marca." },
];

const distributorFaqs = [
  { question:"¿Necesito tener un local físico?", answer:"No necesariamente. Podés presentar un local, showroom, canal online o una operación mixta. El equipo evaluará el alcance y la forma de atención de cada propuesta." },
  { question:"¿Cuál es la inversión inicial?", answer:"Depende del surtido, la disponibilidad y las condiciones comerciales vigentes. Ese detalle se comparte después de conocer el perfil y las necesidades del negocio." },
  { question:"¿La distribución incluye exclusividad de zona?", answer:"La exclusividad no es automática. La cobertura territorial y cualquier condición de zona deben evaluarse y acordarse expresamente con el equipo comercial." },
  { question:"¿Puedo consultar desde cualquier provincia?", answer:"Sí. Podés presentar tu propuesta indicando ciudad, provincia y área de cobertura. La viabilidad comercial y logística se revisa para cada caso." },
  { question:"¿Recibiré información de productos y precios?", answer:"Al avanzar la conversación, el equipo puede compartir la información comercial vigente, el surtido disponible y los datos necesarios para evaluar la propuesta." },
];

export default function Contacto() {
  return <div className="distributor-page">
    <SEO title="Distribuidores oficiales Snaefell | Contacto comercial" description="Presentá tu negocio para evaluar la posibilidad de comercializar bicicletas y monopatines eléctricos Snaefell en tu zona." path="/contacto" />

    <header className="distributor-hero">
      <img className="distributor-hero__image" src={distributorImage} alt="Bicicleta eléctrica Snaefell en un recorrido de montaña" />
      <div className="distributor-hero__overlay" />
      <div className="container distributor-hero__content">
        <div className="distributor-hero__copy">
          <span>Red comercial Snaefell</span>
          <h1>Sumá movilidad eléctrica a tu negocio.</h1>
          <p>Si representás a un comercio, showroom, canal online o empresa con experiencia comercial, queremos conocer tu propuesta.</p>
          <div className="distributor-hero__actions">
            <WhatsAppCTA location="distributor_hero" label="Presentar mi negocio" message={distributorMessage} />
            <a href="#requisitos">Ver información necesaria <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
        <aside className="distributor-contact-card" aria-label="Datos del canal comercial">
          <span>Contacto comercial</span>
          <dl>
            <div><dt>Canal</dt><dd>WhatsApp</dd></div>
            <div><dt>Alcance</dt><dd>Propuestas en Argentina</dd></div>
            <div><dt>Perfiles</dt><dd>Comercios, showrooms y canales online</dd></div>
            <div><dt>Evaluación</dt><dd>Personalizada para cada negocio</dd></div>
          </dl>
        </aside>
      </div>
    </header>

    <section className="distributor-section distributor-intro">
      <div className="container">
        <div className="distributor-heading"><span>Una propuesta comercial</span><h2>Conocemos el negocio antes de hablar de condiciones.</h2><p>No todas las zonas ni todos los canales necesitan lo mismo. Por eso comenzamos entendiendo cómo trabajás, qué público atendés y qué lugar podría ocupar Snaefell en tu operación.</p></div>
        <div className="distributor-benefits">{benefits.map((benefit)=><article key={benefit.title}><Icon name={benefit.icon}/><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div>
      </div>
    </section>

    <section className="distributor-requirements" id="requisitos">
      <div className="container distributor-requirements__layout">
        <div><span>Antes de contactarnos</span><h2>Información que nos ayuda a evaluar tu propuesta.</h2><p>No necesitás preparar una presentación extensa. Estos datos son suficientes para iniciar una conversación concreta.</p></div>
        <ul>{requestedInformation.map((item)=><li key={item}><Icon name="check"/><span>{item}</span></li>)}</ul>
      </div>
    </section>

    <section className="distributor-section distributor-process">
      <div className="container">
        <div className="distributor-heading"><span>Cómo avanzar</span><h2>Un proceso simple, con expectativas claras.</h2></div>
        <ol>{steps.map((step,index)=><li key={step.title}><span>{String(index + 1).padStart(2,"0")}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
      </div>
    </section>

    <section className="distributor-section distributor-faq"><div className="container"><FAQSection title="Preguntas para iniciar una distribución" intro="Las condiciones definitivas dependen de cada propuesta y se confirman siempre por el canal comercial." items={distributorFaqs}/></div></section>

    <section className="distributor-final">
      <div className="container distributor-final__layout"><div><span>¿Tu negocio encaja con Snaefell?</span><h2>Contanos dónde estás y cómo vendés.</h2><p>Incluí los datos básicos de tu empresa para que la conversación empiece con la información necesaria.</p></div><div><WhatsAppCTA location="distributor_bottom" label="Enviar mi propuesta" message={distributorMessage}/><Link to="/productos">Conocer la gama <ArrowRight aria-hidden="true" /></Link></div></div>
    </section>
  </div>;
}
