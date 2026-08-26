import autonomyImage from "../assets/home/paisaje.png";
import cityImage from "../assets/home/range-urban.jpeg";
import fatImage from "../assets/home/range-offroad.jpeg";
import scootersImage from "../assets/home/range-scooters.jpeg";
import batteryImage from "../assets/products/editorial/p6-battery.webp";
import foldingImage from "../assets/products/editorial/p2-fold.webp";
import pedalImage from "../assets/products/editorial/p6-ride.webp";
import type { Guide } from "../types/Guide";

const published = { date:"2026-08-25", updatedAt:"2026-08-25", status:"published" as const };

export const guides: Guide[] = [
  {
    ...published, id:"choose-ebike", slug:"como-elegir-bicicleta-electrica", category:"Guías de compra",
    title:"¿Cómo elegir una bicicleta eléctrica?", metaTitle:"¿Cómo elegir una bicicleta eléctrica? | Snaefell",
    metaDescription:"Conocé qué revisar al elegir una bicicleta eléctrica: uso, autonomía, potencia, rodado, peso, plegabilidad y respaldo.",
    excerpt:"Una guía directa para ordenar prioridades y comparar modelos según tu forma real de moverte.", image:cityImage, imageAlt:"Bicicleta eléctrica Snaefell en un entorno urbano",
    keyPoints:["Definí primero el uso cotidiano.", "Compará autonomía bajo condiciones equivalentes.", "Considerá tamaño, peso y guardado.", "Revisá soporte y repuestos."],
    sections:[
      { heading:"Empezá por tu recorrido", paragraphs:["La mejor bicicleta eléctrica no es necesariamente la de mayor potencia o autonomía: es la que encaja con tus trayectos, el espacio disponible y la frecuencia de uso. Pensá cuántos kilómetros recorrés, qué pendientes aparecen y dónde vas a guardarla.", "También importa si combinás la bicicleta con transporte público, si subís escaleras o si necesitás llevar objetos. Ese contexto permite descartar opciones que pueden ser atractivas en una ficha técnica pero poco prácticas para tu rutina."] },
      { heading:"Autonomía y batería", paragraphs:["La autonomía publicada es una referencia. En el uso real cambia con el nivel de asistencia, el peso total, el terreno, la temperatura, la presión de los neumáticos y la forma de conducir.", "Elegí un margen razonable sobre tu recorrido habitual y consultá cómo se carga el modelo. No hace falta perseguir el número más alto si una batería menor cubre cómodamente tu necesidad cotidiana."], bullets:["Distancia habitual de ida y vuelta.", "Posibilidad de cargar en destino.", "Pendientes y tipo de superficie."] },
      { heading:"Potencia, rodado y comodidad", paragraphs:["La potencia describe la capacidad del motor para entregar asistencia, pero no define por sí sola la experiencia. El peso, la geometría, los niveles de asistencia y el tipo de neumático también influyen.", "Un rodado compacto favorece maniobrabilidad y guardado. Los neumáticos anchos aportan superficie de apoyo y pueden resultar convenientes en caminos irregulares. Probá la posición de manejo siempre que sea posible."] },
      { heading:"Peso, plegabilidad y respaldo", paragraphs:["Una bicicleta plegable puede resolver espacios pequeños y traslados combinados, pero todavía debe poder manipularse con comodidad. Revisá el peso completo, no sólo el tamaño plegado.", "Finalmente, evaluá garantía, disponibilidad de repuestos y atención técnica. Una bicicleta eléctrica integra componentes mecánicos y eléctricos: el acompañamiento posterior forma parte de la elección."] },
    ],
    faq:[{question:"¿Más potencia siempre es mejor?",answer:"No. La potencia debe evaluarse junto con el uso, el peso, el terreno y la configuración completa del modelo."},{question:"¿Qué autonomía debería elegir?",answer:"Una que cubra tu recorrido habitual con margen, considerando que las condiciones reales pueden modificar el valor informado."}],
    relatedProducts:["light-p2","mantis-p6"], relatedGuides:["autonomia-bicicleta-electrica","potencia-bicicleta-electrica","pedaleo-asistido"],
  },
  {
    ...published, id:"range", slug:"autonomia-bicicleta-electrica", category:"Batería y autonomía",
    title:"¿De qué depende la autonomía de una bicicleta eléctrica?", metaTitle:"Autonomía de una bicicleta eléctrica | Snaefell",
    metaDescription:"Entendé qué factores modifican la autonomía de una e-bike y cómo interpretar el valor publicado para tu recorrido.",
    excerpt:"El alcance real depende de más que la batería. Conocé las variables que intervienen antes de comparar.", image:autonomyImage, imageAlt:"Bicicleta eléctrica Snaefell durante un recorrido de montaña",
    keyPoints:["Es un valor de referencia, no una distancia fija.", "La asistencia elevada aumenta el consumo.", "Terreno, carga y clima influyen.", "La presión correcta ayuda a rodar eficientemente."],
    sections:[
      { heading:"Qué significa autonomía", paragraphs:["La autonomía es la distancia que el vehículo puede recorrer con una carga bajo determinadas condiciones. Sirve para comparar y planificar, pero no funciona como una promesa idéntica para todos los usuarios.", "Dos recorridos de la misma distancia pueden requerir cantidades de energía diferentes. Una subida prolongada, el viento contrario o una carga mayor demandan más al sistema que un trayecto plano y fluido."] },
      { heading:"Nivel de asistencia y estilo de conducción", paragraphs:["En una bicicleta con pedaleo asistido, los niveles bajos requieren más participación del ciclista y suelen consumir menos energía. Los niveles altos entregan mayor asistencia y reducen la autonomía disponible.", "Las aceleraciones frecuentes y los cambios bruscos también pueden aumentar el consumo. Anticipar el tránsito y mantener un ritmo uniforme ayuda a administrar mejor la carga."] },
      { heading:"Terreno, peso y neumáticos", paragraphs:["Pendientes, superficies blandas o irregulares y una mayor carga total exigen más energía. La presión de neumáticos indicada para el modelo y el uso influye en la resistencia al avance.", "La temperatura también puede modificar temporalmente el rendimiento de una batería. Por eso conviene tomar el dato publicado como una referencia y conversar sobre el recorrido específico antes de elegir."] },
      { heading:"Cómo planificar", paragraphs:["Calculá tu distancia de ida y vuelta, identificá dónde podrías cargar y dejá margen para desvíos o condiciones menos favorables. Si tu recorrido cambia mucho entre días, tomá como referencia el escenario más exigente habitual."] },
    ],
    faq:[{question:"¿La autonomía siempre es la misma?",answer:"No. Cambia con asistencia, peso, terreno, pendientes, neumáticos, temperatura y estilo de conducción."},{question:"¿Usar más asistencia consume más?",answer:"Sí. Una asistencia mayor exige más energía de la batería y normalmente reduce el alcance disponible."}],
    relatedProducts:["mantis-p6","antelope-p5"], relatedGuides:["cuidar-bateria-ebike","pedaleo-asistido","como-elegir-bicicleta-electrica"],
  },
  {
    ...published, id:"power", slug:"potencia-bicicleta-electrica", category:"Cómo funciona",
    title:"¿Qué significa la potencia en una bicicleta eléctrica?", metaTitle:"Potencia en bicicletas eléctricas | Snaefell",
    metaDescription:"Qué expresan los watts de una bicicleta eléctrica y qué otros factores revisar para elegir un modelo.",
    excerpt:"Los watts son importantes, pero no cuentan toda la historia. Aprendé a leer la potencia dentro del conjunto.", image:scootersImage, imageAlt:"Modelos eléctricos Snaefell exhibidos en un entorno urbano",
    keyPoints:["La potencia se expresa en watts.", "No determina sola velocidad o autonomía.", "Peso y terreno cambian la demanda.", "Debe evaluarse con el sistema completo."],
    sections:[
      { heading:"Qué indican los watts", paragraphs:["La potencia nominal del motor, expresada en watts, describe su capacidad de entregar energía mecánica. Es una referencia útil para comparar, especialmente cuando el recorrido incluye carga o pendientes.", "Sin embargo, dos vehículos con la misma potencia pueden sentirse distintos por su peso, transmisión, control electrónico, diámetro de rueda y niveles de asistencia."] },
      { heading:"Potencia no es velocidad", paragraphs:["Una cifra de watts no permite deducir por sí sola la velocidad máxima. La configuración electrónica, el tamaño de rueda, las condiciones del terreno y otros límites del producto también intervienen.", "Tampoco una potencia mayor garantiza más autonomía: si el sistema demanda más energía, el consumo puede aumentar. Por eso potencia, batería y uso deben analizarse juntos."] },
      { heading:"Qué necesitás para tu uso", paragraphs:["Para recorridos urbanos regulares puede ser más valiosa una bicicleta liviana y fácil de guardar. Para caminos irregulares, cargas mayores o pendientes frecuentes puede cobrar más importancia la capacidad del conjunto.", "Compará únicamente datos oficiales y consultá por tu recorrido concreto. Evitá elegir por una sola cifra destacada."] },
    ],
    faq:[{question:"¿Watts y velocidad son lo mismo?",answer:"No. Los watts expresan potencia; la velocidad depende de la configuración completa y de las condiciones de uso."},{question:"¿Más potencia reduce la autonomía?",answer:"No necesariamente por sí sola, pero una demanda elevada de asistencia implica mayor consumo de energía."}],
    relatedProducts:["mantis-p6","antelope-p5","bestride-pro-f2"], relatedGuides:["como-elegir-bicicleta-electrica","autonomia-bicicleta-electrica","pedaleo-asistido"],
  },
  {
    ...published, id:"battery-care", slug:"cuidar-bateria-ebike", category:"Uso y mantenimiento",
    title:"¿Cómo cuidar la batería de una e-bike?", metaTitle:"Cómo cuidar la batería de una e-bike | Snaefell",
    metaDescription:"Buenas prácticas generales para cargar, guardar y cuidar la batería de una bicicleta eléctrica.",
    excerpt:"Hábitos simples de carga, temperatura y almacenamiento para acompañar el rendimiento de la batería.", image:batteryImage, imageAlt:"Detalle de la batería de una bicicleta eléctrica Snaefell Mantis P6",
    keyPoints:["Usá el cargador indicado para el modelo.", "Evitá calor y humedad extremos.", "No golpees ni abras la batería.", "Ante anomalías, suspendé el uso y consultá."],
    sections:[
      { heading:"Carga segura", paragraphs:["Utilizá únicamente el cargador indicado para tu modelo y conectalo en un lugar seco, ventilado y estable. Revisá que conectores y cables estén limpios y sin daños antes de cada carga.", "No cubras el cargador mientras funciona ni intervengas la batería. Los tiempos y el procedimiento específico deben seguir el manual del producto."] },
      { heading:"Temperatura y almacenamiento", paragraphs:["Evitá dejar la batería expuesta durante períodos prolongados a calor intenso, frío extremo, agua o humedad. Si no vas a usar el vehículo por un tiempo, seguí las indicaciones de almacenamiento y mantenimiento de carga del fabricante.", "Guardá el conjunto lejos de fuentes de calor y en un espacio donde no pueda recibir golpes."] },
      { heading:"Durante el uso", paragraphs:["Una fijación correcta evita movimientos y contactos deficientes. Antes de salir, comprobá que la batería esté asegurada y que el puerto de carga se encuentre protegido.", "Si notás deformación, olor inusual, temperatura excesiva, daño o funcionamiento irregular, dejá de utilizarla y contactá al servicio técnico. No intentes repararla por cuenta propia."] },
      { heading:"Mantenimiento responsable", paragraphs:["Mantené limpios los contactos siguiendo el manual y solicitá revisiones cuando corresponda. El cuidado de neumáticos, frenos y transmisión también ayuda al vehículo a desplazarse sin esfuerzos innecesarios."] },
    ],
    faq:[{question:"¿Puedo usar cualquier cargador?",answer:"No. Usá solamente el cargador especificado para la batería y el modelo."},{question:"¿Qué hago si la batería recibió un golpe?",answer:"Suspendé su uso y solicitá una revisión técnica antes de volver a cargarla o utilizarla."}],
    relatedProducts:["light-p2","mantis-p6"], relatedGuides:["autonomia-bicicleta-electrica","como-elegir-bicicleta-electrica","pedaleo-asistido"],
  },
  {
    ...published, id:"pedal-assist", slug:"pedaleo-asistido", category:"Cómo funciona",
    title:"¿Qué es el pedaleo asistido?", metaTitle:"¿Qué es el pedaleo asistido? | Snaefell",
    metaDescription:"Conocé cómo acompaña el motor al pedaleo y cómo los niveles de asistencia influyen en esfuerzo y autonomía.",
    excerpt:"El motor acompaña tu pedaleo según el nivel elegido. Entendé cómo aprovecharlo en cada recorrido.", image:pedalImage, imageAlt:"Ciclista utilizando una bicicleta eléctrica Snaefell",
    keyPoints:["La asistencia acompaña cuando pedaleás.", "Podés elegir distintos niveles si el modelo los ofrece.", "Más asistencia implica mayor consumo.", "No reemplaza una conducción atenta."],
    sections:[
      { heading:"Cómo funciona", paragraphs:["El pedaleo asistido utiliza sensores para detectar que estás pedaleando y activar el motor según la configuración elegida. El sistema acompaña tu esfuerzo; no elimina la necesidad de controlar, frenar y conducir la bicicleta.", "La respuesta exacta depende del sensor, controlador y niveles disponibles en cada modelo."] },
      { heading:"Elegir el nivel", paragraphs:["Los niveles bajos son útiles cuando querés participar más del pedaleo y administrar energía. Los niveles altos pueden ayudar en momentos de mayor demanda, como una pendiente o un tramo donde buscás más asistencia.", "Aprender a alternarlos según el terreno permite equilibrar comodidad y autonomía."] },
      { heading:"Primeros recorridos", paragraphs:["Comenzá en un espacio seguro y con un nivel bajo para conocer la respuesta. Practicá arranque, frenado y cambios de nivel antes de circular en entornos complejos.", "Ajustá asiento, presión de neumáticos y elementos de seguridad de acuerdo con el manual y las condiciones del recorrido."] },
    ],
    faq:[{question:"¿Necesito pedalear?",answer:"En el modo de pedaleo asistido, sí: el sistema detecta el pedaleo y acompaña el esfuerzo."},{question:"¿Todos los modelos responden igual?",answer:"No. Los sensores, niveles y configuración cambian según el producto."}],
    relatedProducts:["light-p2","mantis-p6","antelope-p5"], relatedGuides:["autonomia-bicicleta-electrica","potencia-bicicleta-electrica","como-elegir-bicicleta-electrica"],
  },
  {
    ...published, id:"types", slug:"urbana-plegable-fat-bike-cual-elegir", category:"Comparativas",
    title:"Bicicleta eléctrica urbana, plegable o Fat Bike: ¿cuál elegir?", metaTitle:"E-bike urbana, plegable o Fat Bike | Snaefell",
    metaDescription:"Compará bicicletas eléctricas urbanas, plegables y Fat Bike según espacio, recorrido y superficie.",
    excerpt:"Tres enfoques diferentes para necesidades distintas: ciudad, guardado compacto o superficies irregulares.", image:cityImage, imageAlt:"Bicicleta eléctrica Snaefell preparada para movilidad urbana",
    keyPoints:["Urbana: practicidad cotidiana.", "Plegable: guardado y transporte.", "Fat Bike: neumáticos anchos y estabilidad.", "Elegí según tu recorrido real."],
    sections:[
      { heading:"Urbana", paragraphs:["Una bicicleta urbana prioriza una posición y equipamiento adecuados para recorridos cotidianos. Puede ser la opción más directa si circulás principalmente por calles y contás con un lugar cómodo para guardarla."] },
      { heading:"Plegable", paragraphs:["El formato plegable reduce el volumen para guardado y puede facilitar la combinación con otros medios. Antes de elegir, revisá dimensiones plegadas, peso total y facilidad de manipulación."] },
      { heading:"Fat Bike", paragraphs:["Los neumáticos anchos ofrecen una superficie de apoyo mayor y pueden aportar estabilidad y comodidad sobre caminos irregulares. También aumentan volumen y peso, factores importantes si necesitás trasladarla manualmente."] },
      { heading:"Cómo decidir", paragraphs:["Listá tus tres necesidades principales y compará sólo modelos que las cubran. El tipo de bicicleta es un punto de partida; autonomía, potencia, frenos, suspensión, peso y respaldo completan la decisión."] },
    ],
    faq:[{question:"¿Una plegable siempre es liviana?",answer:"No. Plegabilidad y peso son atributos diferentes; revisá ambos datos."},{question:"¿Una Fat Bike sirve en ciudad?",answer:"Puede utilizarse en distintos recorridos, pero su tamaño y peso deben resultar convenientes para tu uso."}],
    relatedProducts:["light-p2","mantis-p6","antelope-p5"], relatedGuides:["ventajas-bicicleta-electrica-plegable","que-es-bicicleta-electrica-fat-bike","como-elegir-bicicleta-electrica"],
  },
  {
    ...published, id:"fat-bike", slug:"que-es-bicicleta-electrica-fat-bike", category:"Guías de compra",
    title:"¿Qué es una bicicleta eléctrica Fat Bike?", metaTitle:"¿Qué es una bicicleta eléctrica Fat Bike? | Snaefell",
    metaDescription:"Qué caracteriza a una Fat Bike eléctrica, cómo influyen sus neumáticos anchos y cuándo puede convenirte.",
    excerpt:"Neumáticos anchos, apoyo y robustez: conocé sus ventajas y los aspectos prácticos a considerar.", image:fatImage, imageAlt:"Bicicleta eléctrica Fat Bike Snaefell en un camino irregular",
    keyPoints:["Se distingue por neumáticos anchos.", "Ofrece mayor superficie de apoyo.", "Puede favorecer estabilidad y comodidad.", "Su volumen y peso requieren consideración."],
    sections:[
      { heading:"Qué define a una Fat Bike", paragraphs:["Una Fat Bike utiliza neumáticos considerablemente más anchos que una bicicleta urbana convencional. Esa mayor huella cambia la sensación de manejo y la relación con superficies irregulares.", "En los modelos eléctricos, el motor acompaña el desplazamiento de un conjunto que normalmente tiene mayor volumen y peso."] },
      { heading:"Estabilidad y superficie", paragraphs:["El ancho del neumático puede aportar apoyo y absorción frente a pequeñas irregularidades. El resultado final también depende de presión, dibujo, cuadro, suspensión y geometría.", "No implica que cualquier Fat Bike esté preparada para todo terreno o condición. Respetá siempre el uso y los límites indicados para el producto."] },
      { heading:"Cuándo puede convenirte", paragraphs:["Puede ser una alternativa si transitás caminos irregulares, valorás una posición robusta o preferís neumáticos de gran volumen. Para espacios reducidos, escaleras o transporte frecuente, evaluá cuidadosamente dimensiones y peso."] },
      { heading:"Qué comparar", paragraphs:["Además del rodado, revisá autonomía, potencia, frenos, suspensión, carga máxima y medidas. Mantis P6 y Antelope P5 cuentan con neumáticos Fat según sus fichas, con tamaños y configuraciones diferentes."] },
    ],
    faq:[{question:"¿Fat Bike significa uso extremo?",answer:"No. El neumático ancho no certifica por sí solo usos extremos; deben respetarse las indicaciones del modelo."},{question:"¿Qué modelos Snaefell tienen neumáticos Fat?",answer:"Las fichas actuales identifican a Mantis P6 y Antelope P5 con neumáticos Fat."}],
    relatedProducts:["mantis-p6","antelope-p5"], relatedGuides:["urbana-plegable-fat-bike-cual-elegir","autonomia-bicicleta-electrica","potencia-bicicleta-electrica"],
  },
  {
    ...published, id:"folding", slug:"ventajas-bicicleta-electrica-plegable", category:"Guías de compra",
    title:"Ventajas de una bicicleta eléctrica plegable", metaTitle:"Ventajas de una bicicleta eléctrica plegable | Snaefell",
    metaDescription:"Cuándo conviene una bicicleta eléctrica plegable para guardado, transporte combinado y uso urbano.",
    excerpt:"Menor volumen al guardarla y más flexibilidad para combinar traslados, sin perder de vista peso y medidas.", image:foldingImage, imageAlt:"Bicicleta eléctrica plegable Snaefell Light P2",
    keyPoints:["Reduce el volumen de guardado.", "Puede facilitar traslados combinados.", "El peso sigue siendo importante.", "Conviene practicar el mecanismo de plegado."],
    sections:[
      { heading:"Más opciones de guardado", paragraphs:["El principal beneficio del formato plegable es reducir el espacio ocupado cuando no se usa. Puede resultar útil en departamentos, oficinas o lugares sin estacionamiento amplio.", "Compará las dimensiones plegadas con el espacio disponible antes de decidir."] },
      { heading:"Transporte combinado", paragraphs:["Una plegable puede facilitar la combinación con auto u otros medios, siempre que sus dimensiones y peso sean manejables. Plegable no significa automáticamente ultraliviana.", "Pensá cuántas veces vas a levantarla, por qué distancia y si hay escaleras en tu recorrido."] },
      { heading:"Uso urbano", paragraphs:["El rodado compacto puede brindar agilidad en trayectos cotidianos. La posición, los frenos, la autonomía y la iluminación siguen siendo aspectos centrales, igual que en cualquier bicicleta eléctrica."] },
      { heading:"Antes de elegir", paragraphs:["Probá el mecanismo de plegado y asegurate de comprender sus cierres. Revisá peso, tamaño plegado, autonomía y capacidad de carga. Light P2 es el modelo plegable identificado actualmente en el catálogo Snaefell."] },
    ],
    faq:[{question:"¿Plegable significa fácil de cargar?",answer:"No siempre. Revisá el peso total y probá cómo se manipula una vez plegada."},{question:"¿Qué modelo Snaefell es plegable?",answer:"La ficha actual de Light P2 indica estructura plegable y dimensiones una vez plegada."}],
    relatedProducts:["light-p2"], relatedGuides:["como-elegir-bicicleta-electrica","urbana-plegable-fat-bike-cual-elegir","cuidar-bateria-ebike"],
  },
];

export const publishedGuides = guides.filter((guide) => guide.status === "published");
export const guideCategories = ["Todas", ...Array.from(new Set(publishedGuides.map((guide) => guide.category)))];
export const getGuideBySlug = (slug?: string) => publishedGuides.find((guide) => guide.slug === slug);
