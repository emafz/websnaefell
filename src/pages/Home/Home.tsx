import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import landscapeImage from "../../assets/home/paisaje.png";
import { products } from "../../data/products";
import adventureImage from "../../assets/home/adventure-p6.webp";
import scootersBanner from "../../assets/home/range-scooters.jpeg";
import urbanBanner from "../../assets/home/range-urban.jpeg";
import offroadBanner from "../../assets/home/range-offroad.jpeg";
import "./Home.css";

type IconName = "bolt" | "design" | "shield" | "leaf" | "tools" | "battery" | "support" | "chat";

function HomeIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    bolt: <><path d="M14 2 5 17h7l-1 13 10-16h-7V2Z"/><path d="M22 7a13 13 0 1 1-15 1"/></>,
    design: <><path d="m5 24 14-14 4 4L9 28H5v-4ZM17 6l3-3 6 6-3 3M4 7l6-4 16 16-6 6L4 9V7Z"/></>,
    shield: <><path d="M16 2 27 6v8c0 7-4.5 12-11 16C9.5 26 5 21 5 14V6l11-4Z"/><path d="m11 16 3 3 7-8"/></>,
    leaf: <><path d="M27 4C14 5 7 10 7 19c0 4 3 7 7 7 9 0 12-10 13-22Z"/><path d="M4 29c5-7 10-11 18-16"/></>,
    tools: <><path d="m4 27 9-9M19 8l7-5 3 3-5 7M12 19l-5-5-4-1-1-4 3-3 4 1 1 4 5 5M18 16l11 11-3 3-11-11"/></>,
    battery: <><rect x="3" y="8" width="25" height="17" rx="3"/><path d="M28 13h3v7h-3M8 12v9M13 12v9M18 12v9M23 12v9"/></>,
    support: <><path d="M5 18v-3a11 11 0 0 1 22 0v3M5 18v6h5v-9H7M27 18v6h-5v-9h3M22 27c-2 2-4 3-7 3"/></>,
    chat: <><path d="M28 15a12 12 0 0 1-17 11l-7 2 2-7A12 12 0 1 1 28 15Z"/><path d="M11 15h.1M16 15h.1M21 15h.1"/></>,
  };

  return <svg className="home-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">{paths[name]}</svg>;
}

const ranges = [
  { title: "Monopatines", text: <>Libertad en<br />cada trayecto.</>, product: products[0], image: scootersBanner },
  { title: "E-bike urbana (P2)", text: <>Tu ciudad, tu flow,<br />sin limites.</>, product: products[3], image: urbanBanner },
  { title: "E-bike todo terreno (P6 y P5)", text: <>Donde otros frenan,<br />vos seguis.</>, product: products[2], image: offroadBanner },
];

const brandValues: { icon: IconName; title: string }[] = [
  { icon: "bolt", title: "Tecnologia avanzada" },
  { icon: "design", title: "Diseno premium" },
  { icon: "shield", title: "Seguridad y confianza" },
  { icon: "leaf", title: "Compromiso sustentable" },
];

const benefits: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "Garantia oficial", text: "2 anos de garantia en todos nuestros vehiculos." },
  { icon: "tools", title: "Servicio tecnico", text: "Red de talleres especializados y repuestos originales." },
  { icon: "battery", title: "Baterias de calidad", text: "Celdas de alto rendimiento y mayor vida util." },
  { icon: "support", title: "Atencion personalizada", text: "Asesoramiento experto antes y despues de tu compra." },
];

const news = [
  { title: "Nuevo color P2 Night Blue", text: "Un diseno renovado que combina elegancia, tecnologia y estilo urbano.", image: products[3].variants[0].images[0] },
  { title: "Mas conectividad", text: "Tecnologia pensada para tener control, informacion y libertad en cada recorrido.", image: products[0].variants[0].images[0] },
  { title: "Aventuras sin limites", text: "Consejos, rutas y recomendaciones para exprimir tu SNAEFELL al maximo.", image: adventureImage },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="home-section home-ranges">
        <div className="home-container">
          <span className="home-label">Gamas</span>
          <h2>Tres formas. Un mismo espiritu.</h2>
          <div className="range-grid">
            {ranges.map(({ title, text, product, image }) => (
              <article className="range-card" key={title}>
                <img className="range-card__background" src={image} alt="" />
                <div className="range-card__shade" />
                <div className="range-card__copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link to={`/tienda/${product.slug}`}>Explorar <span>⟶</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-brand">
        <img className="home-brand__background" src={landscapeImage} alt="" aria-hidden="true" />
        <div className="home-container home-brand__layout">
          <div className="home-brand__copy">
            <span className="home-label">Snaefell</span>
            <h2>Movilidad electrica.<br />Diseno que te impulsa.</h2>
            <p>SNAEFELL nace de la pasion por la innovacion y la libertad. Desarrollamos vehiculos electricos que combinan diseno, tecnologia y rendimiento para transformar la manera en que te moves.</p>
            <p>Cada detalle importa. Cada componente esta pensado para ofrecerte la mejor experiencia: mas autonomia, mas seguridad y mas libertad.</p>
            <strong>SNAEFELL. MOVETE DISTINTO.</strong>
          </div>
          <div className="home-brand__identity">
            <div className="brand-values">
              {brandValues.map((value) => <div key={value.title}><HomeIcon name={value.icon} /><span>{value.title}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-support">
        <div className="home-container">
          <span className="home-label">Respaldo que te acompana</span>
          <h2>Calidad garantizada, siempre.</h2>
          <div className="support-grid">
            {benefits.map((benefit, index) => (
              <article key={benefit.title}>
                <div className="support-icon"><HomeIcon name={benefit.icon} />{index === 0 && <b>2</b>}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-news">
        <div className="home-container">
          <div className="home-news__heading">
            <div><span className="home-label">Novedades</span><h2>Enterate de lo ultimo en SNAEFELL</h2></div>
            <Link to="/novedades">Ver todas las novedades <span>→</span></Link>
          </div>
          <div className="home-news__grid">
            {news.map((item) => (
              <article key={item.title}>
                <div className="home-news__image"><img src={item.image} alt="" /></div>
                <div className="home-news__body"><span>Novedad</span><h3>{item.title}</h3><p>{item.text}</p><Link to="/novedades">Leer mas →</Link></div>
              </article>
            ))}
          </div>
          <div className="advisor-banner">
            <div className="advisor-banner__icon"><HomeIcon name="chat" /></div>
            <div><h2>Hablar con un asesor</h2><p>¿Tenes dudas o necesitas asesoramiento?<br />Estamos para ayudarte.</p></div>
            <a href="https://api.whatsapp.com/send/?phone=5491164454997&text=Hola%2C+necesito+asesoramiento+sobre+los+productos+Snaefell" target="_blank" rel="noopener noreferrer">Contactanos <span>→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
