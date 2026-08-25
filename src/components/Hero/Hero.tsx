import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroF1 from "../../assets/hero/Hero-F1.png";
import heroF2 from "../../assets/hero/Hero-F2.png";
import heroP2 from "../../assets/hero/Hero-P2.png";
import heroP6 from "../../assets/hero/Hero-P6.png";
import heroP5 from "../../assets/hero/Hero-P5.png";
import "./Hero.css";

const slides = [
  { src: heroF1, alt: "Conductor junto a un monopatín eléctrico Snaefell Bestride F1", model: "BESTRIDE F1", title: "Movimiento sin límites", description: "Diseño, potencia y libertad para transformar cada trayecto en una experiencia propia.", features: [["500 W", "POTENCIA"], ["40 KM", "AUTONOMÍA"], ["40 KM/H", "VELOCIDAD MÁX."], ["120 KG", "CARGA MÁX."]] },
  { src: heroF2, alt: "Conductora en un monopatín eléctrico de tres ruedas Snaefell Bestride Pro F2", model: "BESTRIDE PRO F2", title: "Potencia para tu día a día", description: "Desde la ciudad hasta nuevos caminos, Snaefell acompaña cada trayecto con libertad y confianza.", features: [["1000 W", "POTENCIA"], ["45 KM", "AUTONOMÍA"], ["55 KM/H", "VELOCIDAD MÁX."], ["150 KG", "CARGA MÁX."]] },
  { src: heroP2, alt: "Ciclista urbano en una bicicleta electrica Snaefell", model: "LIGHT P2", title: "Elegí cómo moverte", description: "Vehículos eléctricos diseñados para acompañarte con estilo, rendimiento y libertad en cada recorrido.", features: [["250 W", "POTENCIA"], ["35 KM", "AUTONOMIA"], ["16 × 1,95", "NEUMATICOS"], ["21 KG", "PESO"]] },
  { src: heroP5, alt: "Bicicleta electrica Snaefell sobre un paisaje rocoso", model: "ANTELOPE P5", title: "Libertad para descubrir más", description: "Cada modelo Snaefell está pensado para ofrecer autonomía, diseño y una experiencia de movimiento superior.", features: [["750 W", "POTENCIA"], ["65 KM", "AUTONOMIA MAX."], ["24 × 4,0", "NEUMATICOS FAT"], ["120 KG", "CARGA MAX."]] },
  { src: heroP6, alt: "Bicicleta electrica Snaefell en la montana", model: "MANTIS P6", title: "Tecnología que te impulsa", description: "Soluciones de movilidad eléctrica creadas para llevarte más lejos, con diseño y confianza en cada detalle.", features: [["750 W", "POTENCIA"], ["115 KM", "AUTONOMIA MAX."], ["20 × 4,0", "NEUMATICOS FAT"], ["120 KG", "CARGA MAX."]] },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Modelos destacados">
      <div className="hero-slides" aria-live="off">
        {slides.map((slide, index) => (
          <img
            className={`hero-slide${index === activeSlide ? " is-active" : ""}`}
            src={slide.src}
            alt={index === activeSlide ? slide.alt : ""}
            aria-hidden={index !== activeSlide}
            key={slide.src}
          />
        ))}
      </div>

      <div className="hero-shade" />

      <div className="container hero-content">
        <div className="hero-copy" key={slides[activeSlide].model}>
          <span className="hero-kicker"><i />{slides[activeSlide].model}</span>
          <h1>{slides[activeSlide].title}</h1>
          <p>{slides[activeSlide].description}</p>
          <div className="hero-actions">
            <Link className="button button--primary" to="/tienda">Comprar online</Link>
            <Link className="button hero-secondary" to="/modelos">Explorar modelos</Link>
          </div>
        </div>

        <div className="hero-dashboard">
          {slides[activeSlide].features.map(([value, label], index) => (
            <div className="hero-stat" key={label}>
              <svg aria-hidden="true" viewBox="0 0 32 32" fill="none">
                {index === 0 && <><path d="M17.8 2 7 17h8l-1 13 11-16h-8l.8-12Z"/><circle cx="16" cy="16" r="14"/></>}
                {index === 1 && <><path d="M5 9h19v15H5zM24 13h3v7h-3M9 13h7l-3 4h6"/></>}
                {index === 2 && <><circle cx="16" cy="16" r="11"/><circle cx="16" cy="16" r="6"/><path d="M16 2v4M16 26v4M2 16h4M26 16h4"/></>}
                {index === 3 && <><path d="M4 25 25 7M5 25h23M25 7v12M22 10h3v3"/></>}
              </svg>
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
