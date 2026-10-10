# Snaefell 3.0 — análisis y propuesta para aprobación

Fecha: 9 de octubre de 2026.

Estado: propuesta. No se creó la aplicación ni se modificó su implementación actual.

Destino previsto: `C:\Users\Emanuel\Downloads\Snaefeell\Snaefell_3.0`. La carpeta existe y estaba vacía al revisarla.

## 1. Objetivo

Construir un proyecto independiente, con una navegación más clara, una presentación centrada en los modelos y una estructura de código fácil de mantener. Tomar de BYD la organización comercial y la presentación progresiva del producto, conservando la identidad de Snaefell.

La función comercial actual es descubrir, comparar y consultar por WhatsApp. Esa será la base de la versión 3.0. Un carrito, pagos, cuentas o un panel administrativo requieren otro alcance.

## 2. Diagnóstico del proyecto actual

La revisión se realizó sobre el código, la documentación y el inventario de archivos. No incluye una auditoría visual en navegador ni mediciones de rendimiento.

| Hallazgo comprobado | Consecuencia | Propuesta |
| --- | --- | --- |
| `src/versions/version-2` contiene 180 archivos; 139 son idénticos a sus equivalentes en `src` y 16 difieren. | La misma aplicación tiene varias fuentes de mantenimiento. | Un único proyecto activo; conservar las versiones anteriores en el proyecto original. |
| La raíz muestra un selector de versiones y la navegación incluye “Home alternativo”. | Las variantes de diseño forman parte de la experiencia pública. | Una portada definitiva y una sola navegación. |
| Existen `/modelos` y `/productos`, con implementaciones diferentes del detalle. | Se mantienen dos recorridos para el mismo catálogo. | Un catálogo y una plantilla de detalle bajo `/modelos`. |
| `Hero.tsx` y `HomeAlternativo.tsx` vuelven a escribir prestaciones disponibles en los datos del catálogo. | Cambiar una especificación exige revisar varios lugares. | Derivar las prestaciones de una única fuente; separar el texto publicitario. |
| Hay imágenes en `src/assets`, `public/assets`, carpetas de páginas y la copia de versión 2. | Es difícil distinguir originales, variantes y archivos usados. | Inventario por contenido y uso; un único lugar por recurso y resoluciones explícitas. |
| `global.css` conoce numerosas clases de páginas y fuerza tamaños con `!important`. | Los estilos globales dependen de detalles de muchas pantallas. | Variables y base globales pequeñas; estilos locales con CSS Modules. |
| La versión 2 incorpora tratamientos específicos de Bestride F1 y F2. | Copiar únicamente la primera versión perdería trabajo posterior. | Revisar esas diferencias y trasladar sus secciones útiles a la plantilla común. |
| `/contacto` presenta la propuesta para distribuidores. | El rótulo genérico no explica su finalidad real. | Identificarla como “Distribuidores” y mantener su URL inicialmente. |

La base tecnológica es React, TypeScript, Vite y React Router. Recomiendo conservarla: la reorganización puede resolverse con las herramientas existentes. No se observó una necesidad que justifique introducir otro framework o un backend en esta etapa.

## 3. Referencia BYD y adaptación

En [BYD Argentina](https://www.byd.com/ar) se identifican accesos a modelos, información institucional, noticias y acciones comerciales. La [ficha de Yuan Pro](https://www.byd.com/ar/car/BYD-Yuan-Pro) organiza la presentación del vehículo, contenidos sobre tecnología y accesos a configuración, prueba y ficha técnica.

La consulta web permitió revisar contenido y enlaces. Los detalles exactos de composición, animación y comportamiento responsive quedan pendientes de comprobación visual; esta propuesta no presupone una reproducción exacta de esos detalles.

| Patrón de referencia | Aplicación propuesta en Snaefell |
| --- | --- |
| Acceso directo a cada modelo | Menú de modelos con fotografías y acceso al catálogo completo. |
| Presentación progresiva del producto | Imagen principal, beneficios, detalles, colores y especificaciones. |
| Acciones comerciales reconocibles | “Ver modelo” y “Consultar por WhatsApp”. |
| Información institucional y editorial diferenciada | Marca, guías y distribuidores con espacios propios. |

Los banners amplios, el mayor espacio entre bloques y los textos breves son decisiones propuestas para Snaefell. Se usarán fotografías y textos propios, con la jerarquía de una presentación de vehículos adaptada a bicicletas y monopatines.

## 4. Identidad visual que se conserva

Los siguientes valores provienen del archivo actual `src/styles/variables.css`:

| Uso | Valor |
| --- | --- |
| Fondo principal | `#00000F` |
| Superficie oscura | `#070717` |
| Violeta principal | `#5A18EA` |
| Violeta secundario | `#9D67FF` |
| Texto claro | `#FFFFFF` |
| Superficie clara de apoyo | `#F7F7F8` |

Conservar Poppins, logo, fotografías de producto, paisajes y el mensaje “Snaefell. Movete distinto.”. Mantener los degradados violetas como parte de la identidad, concentrándolos donde aportan jerarquía y legibilidad. Los colores reales de cada variante se mantienen en su selector.

Propuesta de composición: imágenes principales a todo el ancho; contenido interior de hasta 1280 px; textos alineados a la izquierda; botones redondeados; títulos grandes y poco texto sobre las fotografías. Escala tipográfica inicial: portada de 40–72 px, títulos de sección de 28–40 px y cuerpo de 16–18 px, ajustados según pantalla.

El elemento protagonista será la fotografía del modelo. Los comparadores, fichas y controles priorizarán claridad. Se contemplan foco visible, contraste, teclado y reducción de movimiento.

## 5. Navegación y páginas

Menú propuesto: **Modelos · Snaefell · Guías · Distribuidores**, con el logo como acceso a Inicio y un botón destacado **Consultar**.

| Ruta | Contenido |
| --- | --- |
| `/` | Nueva portada. |
| `/modelos` | Los cinco modelos, agrupados por categoría, con accesos al comparador y al recomendador. |
| `/modelos/:productSlug/:variantSlug?` | Una ficha por modelo con variantes de color. |
| `/comparar` | Comparador existente reorganizado para escritorio y móvil. |
| `/nosotros` | Identidad, propuesta y respaldo de Snaefell. |
| `/novedades` | Guías; se conserva la URL existente aunque el menú diga “Guías”. |
| `/novedades/:guideSlug` | Artículo individual y modelos relacionados. |
| `/contacto` | Información y consultas para distribuidores. |

El recomendador se conserva como herramienta secundaria accesible desde el catálogo. Las guías, FAQ y contenido educativo se trasladan al lugar donde ayudan a decidir, evitando repetirlos completos en la portada y en cada ficha.

### Portada propuesta

```text
Logo       Modelos · Snaefell · Guías · Distribuidores       Consultar
────────────────────────────────────────────────────────────────────
Fotografía principal de un modelo Snaefell
Nombre + mensaje breve
Ver modelo / Consultar
────────────────────────────────────────────────────────────────────
Explorar la gama: Monopatines / Bicicletas eléctricas
────────────────────────────────────────────────────────────────────
Dos bloques destacados con imagen amplia y acceso a sus modelos
────────────────────────────────────────────────────────────────────
Snaefell: identidad y acompañamiento
────────────────────────────────────────────────────────────────────
Selección breve de guías
────────────────────────────────────────────────────────────────────
Pie: modelos, ayuda, distribuidores y canales de contacto
```

Recomiendo una imagen principal estable en la primera entrega, con acceso inmediato a toda la gama. Evita depender del avance automático de un carrusel para descubrir productos. Los cinco modelos permanecen accesibles desde el menú y el catálogo.

### Ficha de modelo propuesta

1. Fotografía principal, nombre, frase breve y acceso a consulta.
2. Tres o cuatro prestaciones tomadas de la ficha técnica centralizada.
3. Secciones de uso y detalles con fotografías propias.
4. Selector de colores que actualiza imagen, variante y consulta de WhatsApp.
5. Especificaciones completas, precio de referencia existente y disponibilidad pendiente de confirmación comercial.
6. Preguntas y guías pertinentes, otros modelos y consulta persistente en móvil.

Conservar Bestride F1, Bestride Pro F2, Light P2, Antelope P5 y Mantis P6, sus variantes, SKU y contenidos útiles. Una plantilla común admitirá secciones opcionales por modelo sin duplicar páginas enteras.

## 6. Organización del nuevo proyecto

```text
Snaefell_3.0/
├── public/                  # Archivos públicos y recursos por URL estable
├── src/
│   ├── app/                 # Entrada, rutas y estructura general
│   ├── pages/               # Composición de cada pantalla
│   ├── features/
│   │   ├── catalog/         # Tipos, selección, galería y ficha de modelos
│   │   ├── comparison/      # Comparador
│   │   ├── model-finder/    # Recomendador
│   │   ├── editorial/       # Guías
│   │   └── contact/         # Consultas y distribuidores
│   ├── components/
│   │   ├── ui/              # Botones, acordeones y controles compartidos
│   │   └── layout/          # Cabecera, pie y contenedores
│   ├── content/
│   │   ├── products/        # Un archivo de datos por modelo
│   │   ├── guides/          # Contenido editorial
│   │   └── site.ts          # Navegación y contenido institucional
│   ├── assets/
│   │   ├── brand/
│   │   ├── products/        # Recursos agrupados por modelo
│   │   └── editorial/
│   ├── lib/                 # SEO, analytics, URLs y utilidades
│   └── styles/              # Variables, reset y base
├── docs/                    # Decisiones y guía de mantenimiento
├── .env.example
├── package.json
└── README.md
```

Reglas de mantenimiento:

- Las páginas componen secciones; los datos del negocio no se escriben dentro de ellas.
- Cada especificación tiene una fuente única. Banners, fichas, comparador y recomendador consumen esa fuente.
- Los datos importan recursos y tipos, sin depender de páginas React.
- Un recurso se guarda una sola vez; los distintos tamaños de una imagen tienen nombres y usos explícitos.
- Los estilos propios viven junto al componente como `*.module.css`. Los globales no corrigen páginas particulares.
- Los componentes compartidos se extraen cuando tienen reutilización real.
- El historial vive en control de versiones; no habrá una carpeta con otra aplicación completa dentro de `src`.

## 7. Ejecución después de aprobar

1. **Inventario de migración.** Comparar los cambios entre las versiones 1 y 2; registrar qué se conserva, se combina o se deja en el proyecto original. Revisar referencias a imágenes y datos comerciales pendientes.
2. **Base independiente.** Preparar React, TypeScript, Vite, rutas, variables visuales y estructura en la carpeta destino. Copiar selectivamente los recursos necesarios. Crear configuración local sin arrastrar builds, dependencias instaladas ni configuración de despliegue anterior.
3. **Diseño principal.** Implementar cabecera, portada, pie y una ficha representativa; comprobar la identidad en escritorio y móvil. Usar esta base visual en las demás páginas.
4. **Migración funcional.** Incorporar los cinco modelos y variantes, catálogo, comparador, recomendador, guías, marca, distribuidores, WhatsApp, SEO y eventos de analytics existentes.
5. **Validación y entrega local.** Revisar navegación, enlaces antiguos, consistencia de los datos, imágenes por variante, accesibilidad y tamaños de pantalla. Ejecutar comprobación de tipos y build. Documentar cómo modificar modelos, contenidos e imágenes.

No se copiará el proyecto entero para volver a limpiarlo dentro de la nueva carpeta. La selección se hará por función y recurso, preservando el original para referencia.

## 8. Compatibilidad y condiciones de finalización

- Un inicio y una ficha por modelo, sin selector público de versiones.
- Los enlaces antiguos de `/productos` y `/tienda` llevan a su equivalente bajo `/modelos`, conservando modelo y variante.
- Si se reemplaza el sitio publicado, contemplar también los prefijos `/version-1` y `/version-2`. Las redirecciones HTTP definitivas dependen del hosting; se definirán al preparar ese despliegue.
- Acceso directo y recarga de rutas internas funcionan en el entorno de entrega.
- Cambiar una especificación actualiza todas las superficies que la muestran.
- Cambiar de color actualiza la fotografía y el mensaje de WhatsApp. Si falta una foto de variante, se indica sin mostrar otra como si fuera la seleccionada.
- Se preservan comparador, recomendador, guías, datos estructurados y eventos comerciales; se revisa su integración durante la migración.
- No hay imágenes rotas, navegación horizontal accidental ni CTA que tapen contenido en móvil.
- Menú y controles funcionan con teclado, foco visible y movimiento reducido.
- Comprobación de tipos y compilación correctas; pruebas funcionales enfocadas en selección de variante, enlaces comerciales y rutas antiguas.
- Imágenes adaptadas al tamaño de pantalla; carga diferida bajo la portada. Las mediciones de rendimiento se realizan sobre la implementación, sin prometer resultados aún no medidos.

## 9. Alcance pendiente de aprobación

Se propone aprobar conjuntamente: proyecto independiente, navegación simplificada, catálogo unificado bajo `/modelos`, conservación de funcionalidades útiles, estética oscura/violeta y portada centrada en fotografía de producto.

Los precios, garantía, repuestos, servicio y datos comerciales ya figuran como pendientes de confirmación en `SEO-SETUP.md`; la migración no los convierte en información validada. Se conservará la trazabilidad y se revisarán antes de una publicación.

La publicación, el dominio y cualquier ampliación a comercio electrónico transaccional quedan para una decisión posterior. Esta etapa termina con el análisis y el plan, conforme a la solicitud de revisión previa.
