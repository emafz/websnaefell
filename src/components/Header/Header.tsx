import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import logo from "../../assets/global/snaefell-logo.webp";
import { navigation } from "../../data/navigation";
import { products } from "../../data/products";
import WhatsAppCTA from "../WhatsAppCTA/WhatsAppCTA";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const distributorMessage = "Hola, quiero información para ser distribuidor oficial de Snaefell.";

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Snaefell inicio">
          <img src={logo} alt="Snaefell" />
        </Link>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Abrir menú" aria-expanded={open} aria-controls="main-navigation"><Menu aria-hidden="true" /></button>
        <nav id="main-navigation" aria-label="Navegación principal" className={`main-nav ${open ? "main-nav--open" : ""}`}>
          {navigation.map((item) => item.to === "/modelos" ? (
            <div className="nav-dropdown" key={item.to}>
              <NavLink to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}>
                {item.label}
                <ChevronDown className="nav-dropdown__arrow" aria-hidden="true" />
              </NavLink>
              <div className="nav-dropdown__menu" aria-label="Modelos Snaefell">
                {products.map((product) => (
                  <Link className="nav-dropdown__model" key={product.id} to={`/modelos/${product.slug}`} onClick={() => setOpen(false)}>
                    <img src={product.variants[0].images[0]} alt={product.name} />
                    <span>{product.name}</span>
                  </Link>
                ))}
                <Link className="nav-dropdown__all-models" to="/modelos" onClick={() => setOpen(false)}>
                  <span>Todos los modelos</span>
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          ) : (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}>
              {item.label}
            </NavLink>
          ))}
          <a className="nav-link" href={`${import.meta.env.BASE_URL}#contacto`} onClick={() => setOpen(false)}>Contacto</a>
          <WhatsAppCTA className="mobile-distributor" location="header_mobile_distributor" label="Quiero ser distribuidor" message={distributorMessage} />
        </nav>
        <WhatsAppCTA className="header-distributor" location="header_distributor" label="Quiero ser distribuidor" message={distributorMessage} />
      </div>
    </header>
  );
}
