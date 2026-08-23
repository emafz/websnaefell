import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductFilters, { type SortOption, type StoreCategory } from "../../components/ProductFilters/ProductFilters";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { products } from "../../data/products";
import "./Tienda.css";

export default function Tienda() {
  const { category } = useParams();
  const navigate = useNavigate();
  const initialCategory: StoreCategory = category === "monopatin" || category === "bicicleta" ? category : "all";
  const [selectedCategory, setSelectedCategory] = useState<StoreCategory>(initialCategory);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("featured");

  useEffect(() => { setSelectedCategory(initialCategory); }, [category]);

  const filtered = useMemo(() => {
    let result = products.filter((product) => selectedCategory === "all" || product.category === selectedCategory);
    if (search.trim()) { const query = search.toLowerCase(); result = result.filter((product) => `${product.name} ${product.model} ${product.tagline}`.toLowerCase().includes(query)); }
    return [...result].sort((a,b) => {
      const priceA = Math.min(...a.variants.map(v => v.price)); const priceB = Math.min(...b.variants.map(v => v.price));
      if (sort === "price-asc") return priceA - priceB; if (sort === "price-desc") return priceB - priceA; if (sort === "name") return a.name.localeCompare(b.name); return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    });
  }, [selectedCategory, search, sort]);

  const handleCategory = (value: StoreCategory) => { setSelectedCategory(value); navigate(value === "all" ? "/tienda" : `/tienda/categoria/${value}`, { replace:true }); };

  return <section className="store-page"><div className="container store-hero"><span className="eyebrow">Tienda online</span><h1>Elegí tu próxima forma de moverte.</h1><p>Compará modelos, seleccioná la variante y prepará tu compra desde una experiencia simple y directa.</p></div><div className="container store-catalog"><ProductFilters category={selectedCategory} search={search} sort={sort} onCategoryChange={handleCategory} onSearchChange={setSearch} onSortChange={setSort}/><ProductGrid products={filtered}/></div></section>;
}
