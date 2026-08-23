import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/global/snaefell-logo.webp";
import { navigation } from "../../data/navigation";
import { products } from "../../data/products";
import { useCart } from "../../hooks/useCart";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Snaefell inicio">
          <img src={logo} alt="Snaefell" />
        </Link>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Abrir menú">☰</button>
        <nav className={`main-nav ${open ? "main-nav--open" : ""}`}>
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
                  <Link key={product.id} to={`/tienda/${product.slug}`} onClick={() => setOpen(false)}>
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
          <a
            className="distributor-link"
            href="https://api.whatsapp.com/send/?phone=5491164454997&text=Hola%2C+quiero+ser+distribuidor&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Quiero ser Distribuidor
          </a>
        </nav>
        <Link to="/carrito" className="cart-link" aria-label={`Carrito con ${itemCount} productos`}>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L20 8H6" />
            <circle cx="9" cy="20" r="1" />
            <circle cx="17" cy="20" r="1" />
          </svg>
          <strong>{itemCount}</strong>
        </Link>
      </div>
    </header>
  );
}
