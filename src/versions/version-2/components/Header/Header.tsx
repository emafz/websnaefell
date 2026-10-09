import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import logo from "../../assets/global/snaefell-logo.webp";
import { navigation } from "../../data/navigation";
import { modelDisplayProducts } from "../../data/modelOrder";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

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
        <Link to="/productos" className="brand" aria-label="Snaefell productos">
          <img src={logo} alt="Snaefell" />
        </Link>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Abrir menú" aria-expanded={open} aria-controls="main-navigation"><Menu aria-hidden="true" /></button>
        <nav id="main-navigation" aria-label="Navegación principal" className={`main-nav ${open ? "main-nav--open" : ""}`}>
          {navigation.map((item) => item.to === "/productos" ? (
            <div className="nav-dropdown" key={item.to}>
              <NavLink to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}>
                {item.label}
                <ChevronDown className="nav-dropdown__arrow" aria-hidden="true" />
              </NavLink>
              <div className="nav-dropdown__menu" aria-label={`${item.label} Snaefell`}>
                {modelDisplayProducts.map((product) => (
                  <Link className="nav-dropdown__model" key={product.id} to={`${item.to}/${product.slug}`} onClick={() => setOpen(false)}>
                    <img src={product.variants[0].images[0]} alt={product.name} />
                    <span>{product.name}</span>
                  </Link>
                ))}
                <Link className="nav-dropdown__all-models" to={item.to} onClick={() => setOpen(false)}>
                  <span>{item.to === "/productos" ? "Todos los productos" : "Todos los modelos"}</span>
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          ) : (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}>
              {item.label}
            </NavLink>
          ))}
          <Link className="whatsapp-cta mobile-distributor" to="/contacto" onClick={() => setOpen(false)}><span>Quiero ser distribuidor</span></Link>
        </nav>
        <Link className="whatsapp-cta header-distributor" to="/contacto"><span>Quiero ser distribuidor</span></Link>
      </div>
    </header>
  );
}
