import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Home from "../pages/Home/Home";
import Nosotros from "../pages/Nosotros/Nosotros";
import Modelos from "../pages/Modelos/Modelos";
import Novedades from "../pages/Novedades/Novedades";
import ProductDetail from "../pages/Tienda/ProductDetail/ProductDetail";
import NotFound from "../pages/NotFound/NotFound";
import GuideDetail from "../pages/GuideDetail/GuideDetail";

function LegacyProductRedirect() {
  const { productSlug, variantSlug } = useParams();
  return <Navigate replace to={`/modelos/${productSlug}${variantSlug ? `/${variantSlug}` : ""}`} />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/modelos" element={<Modelos />} />
      <Route path="/modelos/:productSlug/:variantSlug?" element={<ProductDetail />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="/novedades/:guideSlug" element={<GuideDetail />} />
      <Route path="/tienda" element={<Navigate replace to="/modelos" />} />
      <Route path="/tienda/categoria/:category" element={<Navigate replace to="/modelos" />} />
      <Route path="/tienda/:productSlug/:variantSlug?" element={<LegacyProductRedirect />} />
      <Route path="/carrito" element={<Navigate replace to="/modelos" />} />
      <Route path="/checkout" element={<Navigate replace to="/modelos" />} />
      <Route path="/compra-exitosa" element={<Navigate replace to="/modelos" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
