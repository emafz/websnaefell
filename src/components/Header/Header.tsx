import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/global/snaefell-logo.webp";
import { navigation } from "../../data/navigation";
import { products } from "../../data/products";
import WhatsAppCTA from "../WhatsAppCTA/WhatsAppCTA";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const distributorMessage = "Hola, quiero información para ser distribuidor oficial de Snaefell.";

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Snaefell inicio">
          <img src={logo} alt="Snaefell" />
        </Link>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Abrir menú" aria-expanded={open} aria-controls="main-navigation">☰</button>
        <nav id="main-navigation" aria-label="Navegación principal" className={`main-nav ${open ? "main-nav--open" : ""}`}>
          {navigation.map((item) => item.to === "/modelos" ? (
            <div className="nav-dropdown" key={item.to}>
              <NavLink to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}>
                {item.label}
                <svg className="nav-dropdown__arrow" aria-hidden="true" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5 6 6.5l5-5" />
                </svg>
              </NavLink>
              <div className="nav-dropdown__menu" aria-label="Modelos Snaefell">
                {products.map((product) => (
                  <Link key={product.id} to={`/modelos/${product.slug}`} onClick={() => setOpen(false)}>
                    <img src={product.variants[0].images[0]} alt={product.name} />
                    <span>{product.name}</span>
                  </Link>
                ))}
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
