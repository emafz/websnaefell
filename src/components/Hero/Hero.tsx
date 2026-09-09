import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon, { type IconName } from "../Icon/Icon";
import WhatsAppCTA from "../WhatsAppCTA/WhatsAppCTA";
import "./Hero.css";

const heroAssetBase = `${import.meta.env.BASE_URL}assets/hero/`;

const slides = [
  { base: "hero-f1", alt: "Conductor junto a un monopatín eléctrico Snaefell Bestride F1", model: "BESTRIDE F1", title: "La ciudad, a tu escala.", description: "Plegable y compacta, con potencia para moverte de forma práctica donde transites a diario.", features: [["500 W", "POTENCIA"], ["40 KM", "AUTONOMÍA"], ["40 KM/H", "VELOCIDAD MÁX."], ["120 KG", "CARGA MÁX."]] },
  { base: "hero-f2", alt: "Conductora en un monopatín eléctrico de tres ruedas Snaefell Bestride Pro F2", model: "BESTRIDE PRO F2", title: "Tres ruedas. Cero dudas.", description: "Doble motor y tres ruedas para un control estable, de la salida a la llegada.", features: [["1000 W", "POTENCIA"], ["45 KM", "AUTONOMÍA"], ["55 KM/H", "VELOCIDAD MÁX."], ["150 KG", "CARGA MÁX."]] },
  { base: "hero-p2", alt: "Ciclista urbano en una bicicleta eléctrica Snaefell Light P2", model: "LIGHT P2", title: "Tu bici, siempre con vos.", description: "Se pliega, se levanta y se guarda. Ligera y ágil para acompañar tu día entero.", features: [["250 W", "POTENCIA"], ["35 KM", "AUTONOMÍA"], ["16 × 1,95", "NEUMÁTICOS"], ["21 KG", "PESO"]] },
  { base: "hero-p5", alt: "Bicicleta eléctrica Snaefell Antelope P5 sobre un paisaje rocoso", model: "ANTELOPE P5", title: "Salí del camino.", description: "Neumáticos Fat de gran apoyo para rodar estable, en la ciudad o fuera de ella.", features: [["750 W", "POTENCIA"], ["65 KM", "AUTONOMÍA MÁX."], ["24 × 4,0", "NEUMÁTICOS FAT"], ["120 KG", "CARGA MÁX."]] },
  { base: "hero-p6", alt: "Bicicleta eléctrica Snaefell Mantis P6 en la montaña", model: "MANTIS P6", title: "Hasta 115 km, sin escalas.", description: "La mayor autonomía de la gama para recorridos largos, pendientes y caminos exigentes.", features: [["750 W", "POTENCIA"], ["115 KM", "AUTONOMÍA MÁX."], ["20 × 4,0", "NEUMÁTICOS FAT"], ["120 KG", "CARGA MÁX."]] },
].map((slide) => ({
  ...slide,
  src: `${heroAssetBase}${slide.base}-1280.jpg`,
  srcset: `${heroAssetBase}${slide.base}-1280.jpg 1280w, ${heroAssetBase}${slide.base}-1920.jpg 1920w`,
}));

function featureIcon(label: string, index: number): IconName {
  if (/neum[aá]tic|cubierta|medida|dimensi|tamaño|rodado/i.test(label)) return "tire";
  return (["bolt", "battery", "speed", "weight"] as IconName[])[index];
}

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Modelos destacados" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="hero-slides" aria-live="off">
        {slides.map((slide, index) => (
          <img
            className={`hero-slide${index === activeSlide ? " is-active" : ""}`}
            src={slide.src}
            srcSet={slide.srcset}
            sizes="100vw"
            alt={index === activeSlide ? slide.alt : ""}
            aria-hidden={index !== activeSlide}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
            key={slide.src}
          />
        ))}
      </div>

      <div className="hero-shade" />

      <div className="container hero-content">
        <div className="hero-copy" key={slides[activeSlide].model}>
          <h1 className="hero-brand-line">Snaefell. Movete distinto.</h1>
          <span className="hero-kicker"><i />{slides[activeSlide].model}</span>
          <h2 className="hero-title">{slides[activeSlide].title}</h2>
          <p>{slides[activeSlide].description}</p>
          <div className="hero-actions">
            <WhatsAppCTA location="hero" label="Recibir asesoramiento" message="Hola, quiero recibir asesoramiento para elegir un modelo Snaefell." />
            <Link className="button hero-secondary" to="/modelos">Explorar modelos</Link>
          </div>
        </div>

        <div className="hero-dashboard">
          {slides[activeSlide].features.map(([value, label], index) => (
            <div className="hero-stat" key={label}>
              <Icon name={featureIcon(label, index)} />
              <div><strong>{value}</strong><span>{label}</span></div>
            </div>
          ))}
        </div>
      </div>

      <button className="hero-arrow hero-arrow--previous" type="button" onClick={showPrevious} aria-label="Imagen anterior">
        <span aria-hidden="true">&#8249;</span>
      </button>
      <button className="hero-arrow hero-arrow--next" type="button" onClick={showNext} aria-label="Imagen siguiente">
        <span aria-hidden="true">&#8250;</span>
      </button>

      <div className="hero-dots" role="group" aria-label="Seleccionar imagen">
        {slides.map((_, index) => (
          <button
            className={`hero-dot${index === activeSlide ? " is-active" : ""}`}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Mostrar imagen ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
