import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Nosotros from "../pages/Nosotros/Nosotros";
import Modelos from "../pages/Modelos/Modelos";
import Novedades from "../pages/Novedades/Novedades";
import Tienda from "../pages/Tienda/Tienda";
import ProductDetail from "../pages/Tienda/ProductDetail/ProductDetail";
import Carrito from "../pages/Carrito/Carrito";
import Checkout from "../pages/Checkout/Checkout";
import CompraExitosa from "../pages/CompraExitosa/CompraExitosa";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/modelos" element={<Modelos />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/tienda/categoria/:category" element={<Tienda />} />
      <Route path="/tienda/:productSlug/:variantSlug?" element={<ProductDetail />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/compra-exitosa" element={<CompraExitosa />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
