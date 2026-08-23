import type { ProductCategory } from "../../types/Product";
import "./ProductFilters.css";

export type StoreCategory = "all" | ProductCategory;
export type SortOption = "featured" | "price-asc" | "price-desc" | "name";

interface Props {
  category: StoreCategory;
  search: string;
  sort: SortOption;
  onCategoryChange: (value: StoreCategory) => void;
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortOption) => void;
}

export default function ProductFilters({ category, search, sort, onCategoryChange, onSearchChange, onSortChange }: Props) {
  return (
    <div className="store-filters">
      <div className="filter-tabs">
        <button className={category === "all" ? "active" : ""} onClick={() => onCategoryChange("all")}>Todos</button>
        <button className={category === "monopatin" ? "active" : ""} onClick={() => onCategoryChange("monopatin")}>Monopatines</button>
        <button className={category === "bicicleta" ? "active" : ""} onClick={() => onCategoryChange("bicicleta")}>Bicicletas</button>
      </div>
      <div className="filter-controls">
        <input aria-label="Buscar productos" value={search} onChange={(e) => onSearchChange(e.target.value)} placeholder="Buscar modelo..." />
        <select aria-label="Ordenar productos" value={sort} onChange={(e) => onSortChange(e.target.value as SortOption)}>
          <option value="featured">Destacados</option><option value="price-asc">Precio: menor a mayor</option><option value="price-desc">Precio: mayor a menor</option><option value="name">Nombre A–Z</option>
        </select>
      </div>
    </div>
  );
}
