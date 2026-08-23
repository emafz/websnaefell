import type { Product } from "../types/Product";

const catalogImages = (date: string, sku: string, indexes: number[]) =>
  indexes.map((index) => `https://imagenes-inp-aws.s3.amazonaws.com/imagenes/productos/036/${date}_${sku}-${index}_DS.jpg`);

export const products: Product[] = [
  {
    id: "bestride-f1", slug: "bestride-f1", brand: "Snaefell", name: "Bestride F1", model: "F1", category: "monopatin",
    tagline: "Urbano & dinámico",
    shortDescription: "Monopatín eléctrico urbano con motor brushless de 500 W, autonomía de hasta 40 km y tres modos de conducción.",
    description: "Un vehículo compacto y versátil para trayectos urbanos. Combina estructura plegable, asiento desmontable, suspensión y frenos de disco en ambas ruedas.",
    featured: true,
    features: [
      { label: "Motor", value: "500 W", highlight: true },
      { label: "Velocidad máxima", value: "40 km/h", highlight: true },
      { label: "Autonomía", value: "40 km", highlight: true },
      { label: "Batería", value: "48 V / 13 Ah", highlight: true },
    ],
    specifications: [
      { label: "Potencia del motor", value: "500 W" }, { label: "Velocidad máxima", value: "40 km/h" },
      { label: "Modos de velocidad", value: "Eco / City / Sport" }, { label: "Tiempo de carga", value: "5–6 h" },
      { label: "Autonomía", value: "40 km" }, { label: "Batería", value: "Litio 48 V / 13 Ah" },
      { label: "Carga máxima", value: "120 kg" }, { label: "Luces", value: "LED" },
      { label: "Sistema de frenos", value: "Discos" }, { label: "Cuadro", value: "Acero" },
      { label: "Peso", value: "28,7 kg" }, { label: "Neumático delantero", value: "85/65-6.5" },
      { label: "Neumático trasero", value: "85/65-6.5" }, { label: "Tracción", value: "Trasera" },
      { label: "Suspensión delantera", value: "Amortiguador hidráulico 10\"" }, { label: "Suspensión trasera", value: "Doble amortiguador" },
    ],
    variants: [
      { id: "f1-negro", sku: "036001010001", slug: "negro", color: "Negro", colorHex: "#171717", price: 1596579.01, images: catalogImages("12022026", "036001010001", [1,2,3,4,5,6,7]), sourceUrl: "https://www.intercap.com.ar/TiendaVirtual/producto/036001010001", available: true },
      { id: "f1-blanco", sku: "036001010002", slug: "blanco", color: "Blanco", colorHex: "#f2f2f2", price: 1596579.01, images: catalogImages("12022026", "036001010002", [1,2,3,4,5,6,7]), sourceUrl: "https://www.intercap.com.ar/TiendaVirtual/producto/036001010002", available: true },
      { id: "f1-amarillo", sku: "036001010003", slug: "amarillo", color: "Amarillo", colorHex: "#e5c900", price: 1596579.01, images: catalogImages("12022026", "036001010003", [1,2,3,4,5,6,7]), sourceUrl: "https://www.intercap.com.ar/TiendaVirtual/producto/036001010003", available: true },
      { id: "f1-verde", sku: "036001010004", slug: "verde", color: "Verde", colorHex: "#65765a", price: 1596579.01, images: catalogImages("12022026", "036001010004", [1,2,3,4,5,6,7]), sourceUrl: "https://www.intercap.com.ar/TiendaVirtual/producto/036001010004", available: true },
    ],
  },
  {
    id: "bestride-pro-f2", slug: "bestride-pro-f2", brand: "Snaefell", name: "Bestride Pro F2", model: "F2", category: "monopatin",
    tagline: "Deportivo & aventurero", shortDescription: "Monopatín eléctrico de tres ruedas con 1000 W de potencia total, hasta 55 km/h y autonomía de 45 km.",
    description: "Pensado para una conducción estable y potente. Su configuración de tres ruedas, estructura reforzada y equipamiento completo priorizan control y comodidad.",
    featured: true,
    features: [
      { label: "Motor", value: "1000 W", highlight: true }, { label: "Velocidad máxima", value: "55 km/h", highlight: true },
      { label: "Autonomía", value: "45 km", highlight: true }, { label: "Batería", value: "48 V / 23,4 Ah", highlight: true },
    ],
    specifications: [
      { label: "Potencia del motor", value: "1000 W" }, { label: "Velocidad máxima", value: "55 km/h" },
      { label: "Modos de velocidad", value: "Eco / City / Sport" }, { label: "Tiempo de carga", value: "7–9 h" },
      { label: "Autonomía", value: "45 km" }, { label: "Batería", value: "Litio 48 V / 23,4 Ah" },
      { label: "Carga máxima", value: "150 kg" }, { label: "Luces", value: "LED" },
      { label: "Sistema de frenos", value: "Discos" }, { label: "Cuadro", value: "Aluminio y acero" },
      { label: "Peso", value: "48,7 kg" }, { label: "Neumático delantero", value: "90/55-8 (12 × 3.5)" },
      { label: "Neumáticos traseros", value: "90/65-6.5 × 2" }, { label: "Tracción", value: "Trasera" },
      { label: "Suspensión delantera", value: "Horquilla de aleación 12\"" }, { label: "Suspensión trasera", value: "Amortiguador" },
    ],
    variants: [
      { id: "f2-naranja", sku: "036001010005", slug: "naranja", color: "Naranja", colorHex: "#e67e22", price: 3602353.58, images: catalogImages("12022026", "036001010005", [1,2,3,4,6,7,8,9,10,11]), sourceUrl: "https://www.intercap.com.ar/TiendaVirtual/producto/036001010005", available: true },
    ],
  },
  {
    id: "mantis-p6", slug: "mantis-p6", brand: "Snaefell", name: "Mantis P6", model: "P6", category: "bicicleta",
    tagline: "Potencia para ir más allá", shortDescription: "Bicicleta eléctrica con motor de 750 W, neumáticos Fat 20 × 4 y frenos hidráulicos de 180 mm.",
    description: "Una e-bike robusta con cuadro de aluminio 6061, doble suspensión y componentes pensados para combinar ciudad y recorridos de mayor exigencia.",
    featured: true,
    features: [
      { label: "Motor", value: "750 W", highlight: true }, { label: "Velocidad máxima", value: "45 / 55 km/h", highlight: true },
      { label: "Autonomía", value: "65 / 115 km", highlight: true }, { label: "Batería", value: "48 V / 20 Ah", highlight: true },
    ],
    specifications: [
      { label: "Potencia del motor", value: "750 W" }, { label: "Velocidad máxima", value: "45 / 55 km/h" },
      { label: "Modos de velocidad", value: "Eco / City / Sport" }, { label: "Tiempo de carga", value: "5–7 h" },
      { label: "Autonomía", value: "Máx. 65 km / 115 km" }, { label: "Batería", value: "Litio 48 V / 20 Ah / 960 Wh" },
      { label: "Carga máxima", value: "120 kg" }, { label: "Luces", value: "LED delanteras y traseras" },
      { label: "Pantalla", value: "LCD/LED personalizable" }, { label: "Frenos", value: "Discos hidráulicos delantero y trasero de 180 mm con sensor de corte" },
      { label: "Cuadro", value: "Aleación de aluminio 6061" }, { label: "Peso", value: "40 kg" },
      { label: "Neumático delantero", value: "20\" × 4,0" }, { label: "Neumático trasero", value: "20\" × 4,0" },
      { label: "Tracción", value: "Trasera en rueda" }, { label: "Suspensión delantera", value: "Horquilla invertida regulable" },
      { label: "Suspensión trasera", value: "FANGZHONG, 200 L, amortiguación con resorte" }, { label: "Dimensiones", value: "1750 × 705 × 977 mm" },
    ],
    variants: [
      { id: "mantis-p6-negro", sku: "036002010001", slug: "negro", color: "Negro", colorHex: "#171717", price: 2900853.48, images: catalogImages("02072026", "036002010001", [1,2,3,4,5,6,7,8,9,10,11,12,13]), sourceUrl: "https://www.intercap.com.ar/TiendaVirtual/producto/036002010001", available: true },
      { id: "mantis-p6-verde", sku: "036002010002", slug: "verde", color: "Verde", colorHex: "#7a9a6a", price: 2900853.48, images: catalogImages("02072026", "036002010002", [1,2,3,4,5,6,7,8,9,10,11,12,13]), sourceUrl: "https://www.intercap.com.ar/TiendaVirtual/producto/036002010002", available: true },
    ],
  },
  {
    id: "light-p2", slug: "light-p2", brand: "Snaefell", name: "Light P2", model: "P2", category: "bicicleta",
    tagline: "Compacta. Eléctrica. Urbana.", shortDescription: "Bicicleta eléctrica plegable de 250 W con autonomía de hasta 35 km y cuadro de aleación de magnesio.",
    description: "Ligera, plegable y fácil de transportar. Una propuesta para movilidad urbana cotidiana con iluminación LED, pantalla LCD y frenos a disco.",
    featured: true,
    features: [
      { label: "Motor", value: "250 W", highlight: true }, { label: "Velocidad máxima", value: "25 km/h", highlight: true },
      { label: "Autonomía", value: "Hasta 35 km", highlight: true }, { label: "Peso", value: "21 kg", highlight: true },
    ],
    specifications: [
      { label: "Potencia", value: "250 W" }, { label: "Velocidad", value: "25 km/h" },
      { label: "Amperaje máximo", value: "42 V / 2 A" }, { label: "Autonomía", value: "Hasta 35 km" },
      { label: "Batería", value: "36 V / 7,65 Ah" }, { label: "Sensor", value: "Sensor de velocidad" },
      { label: "Tiempo de carga", value: "3–5 h" }, { label: "Cubiertas", value: "16\" × 1,95" },
      { label: "Frenos", value: "Discos mecánicos delantero y trasero de 160 mm con sensor de corte" },
      { label: "Cuadro", value: "Aleación de magnesio AM60B" }, { label: "Pantalla", value: "LCD" },
      { label: "Acelerador", value: "De pulgar" }, { label: "Luces", value: "LED delanteras y traseras" },
      { label: "Tija de sillín", value: "250 × 31,6 mm" }, { label: "Dimensiones", value: "1380 × 570 × 1040–1160 mm" },
      { label: "Tamaño plegada", value: "780 × 550 × 730 mm" }, { label: "Peso", value: "21 kg" }, { label: "Capacidad de carga", value: "110 kg" },
    ],
    variants: [
      { id: "light-p2-gris", sku: "036002010003", slug: "gris", color: "Gris grafito", colorHex: "#55575a", price: 1643833.74, images: catalogImages("26062026", "036002010003", [1,2,3,4]), sourceUrl: "https://www.intercap.com.ar/TiendaVirtual/producto/036002010003", available: true },
      { id: "light-p2-negro", sku: "036002010005", slug: "negro", color: "Negro mate", colorHex: "#151515", price: 1643833.74, images: catalogImages("26062026", "036002010005", [1,2,3,4]), sourceUrl: "https://www.intercap.com.ar/TiendaVirtual/producto/036002010005", available: true },
    ],
  },
  {
    id: "antelope-p5", slug: "antelope-p5", brand: "Snaefell", name: "Antelope P5", model: "P5", category: "bicicleta",
    tagline: "Aventura en movimiento", shortDescription: "Bicicleta eléctrica de 750 W con neumáticos Fat de 24 pulgadas, doble suspensión y frenos hidráulicos.",
    description: "Una bicicleta eléctrica de gran porte para quienes buscan estabilidad, autonomía y capacidad de adaptación a distintos terrenos.",
    featured: true,
    features: [
      { label: "Motor", value: "750 W", highlight: true }, { label: "Velocidad máxima", value: "45 / 55 km/h", highlight: true },
      { label: "Autonomía", value: "Hasta 65 km", highlight: true }, { label: "Batería", value: "48 V / 20 Ah", highlight: true },
    ],
    specifications: [
      { label: "Potencia del motor", value: "750 W" }, { label: "Velocidad máxima", value: "45 / 55 km/h" },
      { label: "Modos de velocidad", value: "Eco / City / Sport" }, { label: "Tiempo de carga", value: "5–7 h" },
      { label: "Autonomía", value: "Máx. 65 km" }, { label: "Batería", value: "Litio 48 V / 20 Ah" },
      { label: "Carga máxima", value: "120 kg" }, { label: "Luces", value: "LED delantera y trasera" },
      { label: "Pantalla", value: "LCD/LED personalizable" }, { label: "Frenos", value: "Discos hidráulicos delantero y trasero con sensor de corte" },
      { label: "Cuadro", value: "Aleación de aluminio 6061" }, { label: "Peso", value: "38,5 kg" },
      { label: "Neumático delantero", value: "24\" × 4,0" }, { label: "Neumático trasero", value: "24\" × 4,0" },
      { label: "Tracción", value: "Trasera en rueda" }, { label: "Suspensión delantera", value: "Horquilla delantera invertida regulable" },
      { label: "Suspensión trasera", value: "FROZON, 160 L, amortiguación con resorte" }, { label: "Dimensiones", value: "1880 × 720 × 1060 mm" },
    ],
    variants: [
      { id: "antelope-p5-gris-marron", sku: "036002010004", slug: "gris-marron", color: "Gris / Marrón", colorHex: "#8b6852", price: 3528888.29, images: catalogImages("30062026", "036002010004", [1,2,3,4,5,6,7,8,9,10,11]), sourceUrl: "https://www.intercap.com.ar/TiendaVirtual/producto/036002010004", available: true },
    ],
  },
];
