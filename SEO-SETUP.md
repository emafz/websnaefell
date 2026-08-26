# Configuración manual de SEO y medición

Estas acciones requieren acceso a servicios externos o la confirmación de información comercial real.

## Analytics y Search Console

- [ ] Crear o verificar una propiedad de Google Analytics 4.
- [ ] Añadir `VITE_GA_MEASUREMENT_ID` en el entorno de producción.
- [ ] Verificar la propiedad de Google Search Console.
- [ ] Añadir `VITE_GOOGLE_SITE_VERIFICATION` cuando se defina el método de verificación.
- [ ] **Enviar `https://emafz.github.io/websnaefell/sitemap.xml` a Google Search Console.**
- [ ] Revisar la indexación inicial y las URLs canónicas detectadas.
- [ ] Revisar Core Web Vitals cuando exista tráfico real.
- [ ] Validar Product, Organization, WebSite y BreadcrumbList en Rich Results Test.

## Dominio e indexación

- [ ] Configurar el dominio definitivo cuando corresponda.
- [ ] Actualizar `VITE_SITE_URL`, `sitemap.xml`, `robots.txt` y `llms.txt` al migrar.
- [ ] Revisar `robots.txt` después de migrar: en GitHub Pages Project Site no controla la raíz completa de `emafz.github.io`.
- [ ] Evaluar prerendering o SSR para mejorar previews sociales y crawling; la metadata actual se actualiza en cliente.
- [ ] Revisar imágenes Open Graph específicas y horizontales para cada modelo.

## Información comercial pendiente de confirmar

- [ ] Confirmar el número oficial de WhatsApp.
- [ ] Confirmar alcance y condiciones de la garantía.
- [ ] Confirmar red y condiciones de servicio técnico.
- [ ] Confirmar disponibilidad de repuestos.
- [ ] Confirmar modalidades, cobertura y costos de entrega.
- [ ] Confirmar formas de pago y financiación.
- [ ] Confirmar que los precios publicados estén vigentes.
- [ ] Completar contenido de caja y nivel de armado por modelo.

## Validación periódica

- [ ] Generar imágenes editoriales definitivas.
- [ ] Revisar todas las guías antes de publicar nuevas versiones.
- [ ] Validar afirmaciones técnicas con documentación oficial.
- [ ] Revisar preguntas frecuentes.
- [ ] Completar información y condiciones de garantía.
- [ ] Completar información de servicio técnico y repuestos.
- [ ] Confirmar tiempos de carga publicados.
- [ ] Confirmar por modelo si las baterías son removibles.

- [ ] Probar CTA de WhatsApp en desktop y mobile.
- [ ] Revisar eventos `view_product`, `select_model`, `view_model_comparison`, `view_guide`, `guide_to_product`, `whatsapp_contact` y `share_content` en DebugView.
- [ ] Revisar enlaces internos y rutas luego de cada despliegue.
- [ ] Controlar Lighthouse en 375, 390, 768, 1024 y 1440 px.
