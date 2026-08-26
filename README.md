# Snaefell — Catálogo de movilidad eléctrica

Sitio comercial responsive de Snaefell desarrollado con React, TypeScript y Vite. La experiencia está orientada a descubrir, comparar y consultar bicicletas y monopatines eléctricos mediante WhatsApp.

## Funcionalidades

- Home institucional con gamas, beneficios, novedades y asesoramiento.
- `/modelos` como catálogo comercial principal.
- Comparador responsive basado exclusivamente en las fichas técnicas.
- Recomendador por ciudad, autonomía, potencia, portabilidad, terreno y uso cotidiano.
- Contenido educativo reutilizable sobre movilidad eléctrica, batería y autonomía.
- Ocho guías editoriales originales con categorías, FAQ y contenidos relacionados.
- Fichas por modelo y color con galería, highlights, especificaciones y FAQ.
- CTA contextual de WhatsApp con producto, modelo, SKU y color.
- Botón flotante inteligente y CTA sticky en fichas móviles.
- Selector de variante, productos relacionados y Web Share API con fallback.
- Rutas antiguas de `/tienda`, carrito y checkout redirigidas a `/modelos`.
- SEO dinámico: title, description, canonical, Open Graph y Twitter Card.
- JSON-LD de `Organization`, `WebSite`, `ItemList`, `Product` y `BreadcrumbList`.
- Sitemap, robots y archivo experimental `llms.txt`.
- Capa opcional de GA4 y eventos comerciales.
- Publicación automática en GitHub Pages.

## Tecnologías

- React 19
- React Router 7
- TypeScript 5
- Vite 7
- CSS por componente/página

## Instalación

```bash
git clone https://github.com/emafz/websnaefell.git
cd websnaefell
npm install
cp .env.example .env
npm run dev
```

En PowerShell:

```powershell
Copy-Item .env.example .env
npm.cmd run dev
```

## Variables de entorno

```env
VITE_WHATSAPP_NUMBER=5491164454997
VITE_SITE_URL=https://emafz.github.io/websnaefell
VITE_GA_MEASUREMENT_ID=
VITE_GOOGLE_SITE_VERIFICATION=
```

- `VITE_WHATSAPP_NUMBER`: número internacional sin signos.
- `VITE_SITE_URL`: origen canónico del sitio.
- `VITE_GA_MEASUREMENT_ID`: identificador opcional de GA4.
- `VITE_GOOGLE_SITE_VERIFICATION`: token opcional de Search Console.

La aplicación funciona normalmente si GA4 o Search Console no están configurados.

## Comandos

```bash
npm run dev
npm run typecheck
npm run build
npm run preview
```

## Rutas públicas

| Ruta | Contenido |
| --- | --- |
| `/` | Inicio |
| `/modelos` | Catálogo y comparador |
| `/modelos/:productSlug/:variantSlug?` | Ficha de modelo y variante |
| `/nosotros` | Marca y respaldo |
| `/novedades` | Contenido editorial |
| `/novedades/:guideSlug` | Guía editorial individual |

Las rutas antiguas bajo `/tienda` se conservan sólo como redirecciones para no romper enlaces publicados.

## Conversión y Analytics

El KPI principal es `Product View → WhatsApp Contact`. La capa de medición prepara estos eventos:

- `view_product`
- `select_model`
- `view_model_comparison`
- `whatsapp_contact`
- `share_content`
- `view_guide`
- `select_guide`
- `guide_to_product`

Los eventos no producen errores cuando GA4 no está configurado.

## SEO y GitHub Pages

- URL pública: <https://emafz.github.io/websnaefell/>
- Base de producción: `/websnaefell/`
- Workflow: `.github/workflows/deploy-pages.yml`
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`

El workflow genera un `404.html` para que React Router pueda recuperar rutas internas en GitHub Pages. La metadata dinámica se ejecuta en cliente; para previews sociales totalmente confiables y SEO avanzado conviene evaluar prerendering o SSR en una fase futura.

> En un GitHub Pages Project Site, `/websnaefell/robots.txt` no controla la raíz completa de `emafz.github.io`. Revisar esta configuración al migrar a dominio propio.

## Datos

`src/data/products.ts` centraliza modelos, variantes, precios, imágenes, características y especificaciones. No deben incorporarse datos técnicos o comerciales sin una fuente confirmada.

Información pendiente de validación, Search Console y Analytics: consultar [SEO-SETUP.md](SEO-SETUP.md).

## Build de producción

```bash
npm run typecheck
npm run build -- --mode github-pages
```

La salida se genera en `dist/`.
