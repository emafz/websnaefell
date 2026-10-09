import { Navigate, Route, Routes, useParams } from "react-router-dom";
import HomeAlternativo from "../pages/HomeAlternativo/HomeAlternativo";
import Nosotros from "../pages/Nosotros/Nosotros";
import Novedades from "../pages/Novedades/Novedades";
import NotFound from "../pages/NotFound/NotFound";
import GuideDetail from "../pages/GuideDetail/GuideDetail";
import Contacto from "../pages/Contacto/Contacto";
import Productos from "../pages/Productos/Productos";
import ProductoDetalle from "../pages/Productos/ProductoDetalle";

function LegacyProductRedirect() {
  const { productSlug, variantSlug } = useParams();
  return <Navigate replace to={`/productos/${productSlug}${variantSlug ? `/${variantSlug}` : ""}`} />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/productos" />} />
      <Route path="/home-alternativo" element={<HomeAlternativo />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/modelos" element={<Navigate replace to="/productos" />} />
      <Route path="/modelos/:productSlug/:variantSlug?" element={<LegacyProductRedirect />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/productos/:productSlug/:variantSlug?" element={<ProductoDetalle />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="/novedades/:guideSlug" element={<GuideDetail />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/tienda" element={<Navigate replace to="/productos" />} />
      <Route path="/tienda/categoria/:category" element={<Navigate replace to="/productos" />} />
      <Route path="/tienda/:productSlug/:variantSlug?" element={<LegacyProductRedirect />} />
      <Route path="/carrito" element={<Navigate replace to="/productos" />} />
      <Route path="/checkout" element={<Navigate replace to="/productos" />} />
      <Route path="/compra-exitosa" element={<Navigate replace to="/productos" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
