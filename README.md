# Snaefell E-commerce

Sitio web y tienda online responsive para la línea de movilidad eléctrica Snaefell. El proyecto incluye catálogo, páginas de producto por variante, carrito persistente y un flujo de checkout demostrativo.

## Tecnologías

- React 19.
- TypeScript 5.
- Vite 7.
- React Router 7.
- CSS modular por componente y página.
- Context API para el estado global del carrito.
- `localStorage` para conservar el carrito entre sesiones.

## Funcionalidades

### Inicio

- Hero principal con navegación hacia los modelos.
- Presentación de las tres gamas de movilidad.
- Sección institucional con imagen panorámica de extremo a extremo y altura máxima de 650 px.
- Valores de marca, beneficios, novedades y acceso directo a WhatsApp.

### Modelos

- Catálogo visual de los cinco modelos Snaefell.
- Tarjetas de hasta 550 px de alto en escritorio.
- Fotografías centradas y extendidas hasta los bordes del panel.
- Fichas resumidas con potencia, velocidad, autonomía, batería, colores disponibles y acceso al producto.
- Diseño adaptable: las tarjetas se apilan y recuperan altura automática en pantallas pequeñas.

### Tienda

- Catálogo de cinco modelos y diez variantes por color/SKU.
- Búsqueda, filtros por categoría y ordenamiento.
- Tarjetas con fotografías cuadradas de borde a borde.
- Precio mínimo, colores disponibles y acceso directo al detalle.

### Detalle de producto

- Ruta dinámica por modelo y variante de color.
- Galería principal cuadrada, limpia y sin elementos decorativos de fondo.
- Navegación por miniaturas.
- Flechas laterales automáticas cuando una galería contiene más de seis imágenes.
- Selector de color, cantidad, precio y ficha técnica.
- Secciones editoriales, preguntas frecuentes y productos relacionados.
- La primera fotografía de catálogo se utiliza como imagen principal de cada variante.

### Compra

- Carrito con actualización de cantidades y eliminación de productos.
- Persistencia automática del carrito en `localStorage`.
- Resumen del pedido y cálculo de total.
- Formulario de contacto y entrega.
- Confirmación local de una orden de demostración.
- Página de compra exitosa.

> [!IMPORTANT]
> El checkout no procesa pagos reales. Para producción, el frontend debe enviar el pedido a un backend seguro y ese backend debe comunicarse con Mercado Pago u otro proveedor. Las credenciales privadas nunca deben exponerse mediante variables `VITE_*`.

## Instalación

Requisitos recomendados:

- Node.js 20 o superior.
- npm 10 o superior.

```bash
git clone https://github.com/emafz/websnaefell.git
cd websnaefell
npm install
```

Copia las variables de entorno de ejemplo:

```bash
cp .env.example .env
```

En Windows PowerShell también puedes usar:

```powershell
Copy-Item .env.example .env
```

## Variables de entorno

```env
VITE_WHATSAPP_NUMBER=5491164454997
VITE_SITE_URL=https://snaefell.com.ar
```

| Variable | Descripción |
| --- | --- |
| `VITE_WHATSAPP_NUMBER` | Número internacional utilizado por el botón flotante de WhatsApp. |
| `VITE_SITE_URL` | URL pública prevista para el sitio. |

## Desarrollo

```bash
npm run dev
```

Vite mostrará la URL local, normalmente `http://localhost:5173`.

## Verificación y producción

```bash
npm run typecheck
npm run build
npm run preview
```

- `typecheck`: verifica los tipos de TypeScript.
- `build`: genera la versión de producción en `dist/`.
- `preview`: sirve localmente el build generado.

## Rutas principales

| Ruta | Contenido |
| --- | --- |
| `/` | Inicio. |
| `/nosotros` | Información institucional. |
| `/modelos` | Presentación comparativa de modelos. |
| `/novedades` | Novedades de la marca. |
| `/tienda` | Catálogo completo. |
| `/tienda/categoria/:category` | Catálogo filtrado por categoría. |
| `/tienda/:productSlug/:variantSlug?` | Detalle del producto y variante. |
| `/carrito` | Carrito de compras. |
| `/checkout` | Checkout demostrativo. |
| `/compra-exitosa` | Confirmación de la orden local. |

Ejemplos de detalles de producto:

```text
/tienda/bestride-f1/negro
/tienda/bestride-pro-f2/naranja
/tienda/mantis-p6/negro
/tienda/light-p2/gris
/tienda/antelope-p5/gris-marron
```

## Estructura del proyecto

```text
src/
├── assets/       Recursos visuales globales, del Home y de Modelos
├── components/   Componentes reutilizables
├── context/      Estado global del carrito
├── data/         Productos, variantes, categorías y contenido editorial
├── hooks/        Hooks del carrito, productos y almacenamiento local
├── pages/        Páginas y estilos específicos
├── routes/       Configuración de React Router
├── services/     Capa preparada para pedidos, productos y pagos
├── styles/       Reset, variables y estilos globales
├── types/        Tipos de dominio
└── utils/        Utilidades de moneda y slugs
```

## Datos e imágenes

- El catálogo está centralizado en `src/data/products.ts`.
- Cada variante contiene SKU, color, precio, especificaciones y galería propia.
- Las galerías de producto consumen imágenes públicas del catálogo remoto.
- Los recursos visuales propios utilizados por la interfaz están dentro de `src/assets/` para que Vite los incluya en el build.
- `Recursos/`, `dist/`, `node_modules/` y los archivos `.env` locales están excluidos del repositorio.

## Estado actual de la integración

La interfaz y el flujo local de compra están completos. Antes de publicar una tienda transaccional se debe implementar:

1. Backend de pedidos.
2. Persistencia en base de datos.
3. Validación de precios y stock del lado del servidor.
4. Integración segura con el proveedor de pagos.
5. Cálculo de envíos y notificaciones de compra.

## Repositorio

[github.com/emafz/websnaefell](https://github.com/emafz/websnaefell)

## Publicación en GitHub Pages

El repositorio incluye el workflow `.github/workflows/deploy-pages.yml`. Cada cambio enviado a `main` compila y publica automáticamente el sitio.

La URL prevista es:

```text
https://emafz.github.io/websnaefell/
```

Para activar el primer despliegue:

1. Abre el repositorio en GitHub.
2. Entra en **Settings → Pages**.
3. En **Build and deployment → Source**, selecciona **GitHub Actions**.
4. Envía un cambio a `main` o ejecuta manualmente **Actions → Deploy to GitHub Pages → Run workflow**.

El build utiliza `/websnaefell/` como ruta base y genera `404.html` como fallback para que las rutas internas de React Router puedan abrirse directamente.
