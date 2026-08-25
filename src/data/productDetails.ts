import f1Ride from "../assets/products/editorial/f1-ride.webp";
import f1Fold from "../assets/products/editorial/f1-fold.webp";
import f1Detail from "../assets/products/editorial/f1-detail.webp";
import f2Ride from "../assets/products/editorial/f2-ride.jpg";
import f2Detail from "../assets/products/editorial/f2-detail.webp";
import f2Utility from "../assets/products/editorial/f2-utility.webp";
import p6Ride from "../assets/products/editorial/p6-ride.webp";
import p6Detail from "../assets/products/editorial/p6-detail.webp";
import p6Battery from "../assets/products/editorial/p6-battery.webp";
import p2Fold from "../assets/products/editorial/p2-fold.webp";
import p2Motor from "../assets/products/editorial/p2-motor.webp";
import p2Suspension from "../assets/products/editorial/p2-suspension.webp";
import p5Ride from "../assets/products/editorial/p5-ride.webp";
import p5Shifter from "../assets/products/editorial/p5-shifter.webp";
import p5Saddle from "../assets/products/editorial/p5-saddle.webp";

export interface ProductStory {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}

export interface ProductFaq { question: string; answer: string }

export interface ProductDetailContent {
  intro: string;
  stories: ProductStory[];
  faqs: ProductFaq[];
}

export const productDetails: Record<string, ProductDetailContent> = {
  "bestride-f1": {
    intro: "Diseñado para alternar entre una conducción sentada o de pie, con formato plegable, respuesta suave y equipamiento para moverte con seguridad todos los días.",
    stories: [
      { eyebrow: "Dos formas de viajar", title: "Sentado o de pie, vos elegís.", text: "El asiento desmontable y los apoyapiés laterales permiten adaptar la postura al recorrido. Su geometría ayuda a mantener el centro de gravedad y ofrece una conducción estable.", image: f1Ride },
      { eyebrow: "Energía removible", title: "Batería de 48 V lista para seguir.", text: "La batería desmontable puede cargarse dentro o fuera del monopatín. Su sistema de gestión protege el funcionamiento y brinda hasta 40 km de autonomía según las condiciones de uso.", image: f1Detail },
      { eyebrow: "Compacto y equipado", title: "Se pliega para acompañarte.", text: "El plegado rápido facilita guardarlo o transportarlo. Luces LED, frenos de disco, doble suspensión y pantalla concentran control y comodidad en cada salida.", image: f1Fold },
    ],
    faqs: [
      { question: "¿Se puede usar sentado y de pie?", answer: "Sí. El asiento es desmontable, por lo que podés elegir la configuración más cómoda para cada recorrido." },
      { question: "¿Cómo se carga la batería?", answer: "La batería es removible: se puede cargar instalada en el vehículo o retirarla para cargarla por separado." },
      { question: "¿Cuántos modos de velocidad tiene?", answer: "Cuenta con tres modos de conducción: Eco, City y Sport." },
      { question: "¿Para qué terrenos está pensado?", answer: "Su rodado ancho, suspensión y frenos de disco permiten transitar ciudad y superficies irregulares. Ajustá siempre la velocidad al terreno." },
      { question: "¿Cuál es el tiempo estimado de carga?", answer: "La carga completa demora aproximadamente entre 5 y 6 horas." },
    ],
  },
  "bestride-pro-f2": {
    intro: "Una plataforma de tres ruedas, doble motor trasero y suspensión integral para disfrutar más potencia con una pisada estable.",
    stories: [
      { eyebrow: "Doble impulso", title: "Dos motores. Más control.", text: "Los dos motores brushless de 500 W entregan 1000 W de potencia combinada. La configuración trasera suma empuje para pendientes y superficies exigentes.", image: f2Ride },
      { eyebrow: "Tres ruedas", title: "Estabilidad que se siente.", text: "La rueda delantera de 12 pulgadas y el par trasero de 10 pulgadas trabajan con el basculante para conservar el contacto con el suelo y mejorar la confianza de marcha.", image: f2Detail },
      { eyebrow: "Uso versátil", title: "Preparado para llevar más.", text: "Asiento removible, parrillas delantera y trasera, luces LED, pantalla y frenos de disco forman un conjunto práctico para recorridos recreativos o cotidianos.", image: f2Utility },
    ],
    faqs: [
      { question: "¿Qué distingue al Bestride Pro F2?", answer: "Su formato de tres ruedas y doble motor combina una postura estable con 1000 W de potencia total. También permite conducir sentado o de pie." },
      { question: "¿Cómo responde fuera del asfalto?", answer: "La doble tracción trasera, la suspensión delantera y trasera y los frenos de disco están pensados para conservar control sobre superficies irregulares." },
      { question: "¿La batería se puede retirar?", answer: "Sí. La batería de 48 V y 23,4 Ah es desmontable para facilitar la carga." },
      { question: "¿Cuál es su velocidad máxima?", answer: "La ficha técnica del modelo indica una velocidad máxima de hasta 55 km/h, sujeta a carga, terreno y condiciones de uso." },
      { question: "¿Para qué sirven las parrillas?", answer: "Amplían la capacidad de transporte y permiten adaptar soluciones de carga compatibles." },
    ],
  },
  "mantis-p6": {
    intro: "Una e-bike de gran presencia, neumáticos fat y doble suspensión para conectar la rutina urbana con recorridos más aventureros.",
    stories: [
      { eyebrow: "Fat tire", title: "Confianza en cada superficie.", text: "Los neumáticos 20 × 4,0 aportan apoyo y absorción sobre asfalto, ripio y caminos irregulares. El cuadro de aluminio equilibra robustez y maniobrabilidad.", image: p6Ride },
      { eyebrow: "Potencia asistida", title: "750 W para ir más allá.", text: "El motor trasero se combina con cinco niveles de asistencia al pedaleo para administrar el esfuerzo, la velocidad y la autonomía según el recorrido.", image: p6Detail },
      { eyebrow: "Autonomía", title: "Energía para planes largos.", text: "La batería de litio de 48 V y 20 Ah es removible y ofrece hasta 65 km de uso eléctrico o hasta 115 km con asistencia, según condiciones de marcha.", image: p6Battery },
    ],
    faqs: [
      { question: "¿Para qué altura de usuario está recomendada?", answer: "Como referencia, se adapta a personas de aproximadamente 1,63 a 1,88 m. El ajuste final depende de la postura y preferencias del ciclista." },
      { question: "¿Es necesario pedalear?", answer: "Dispone de asistencia al pedaleo para acompañar el esfuerzo. También cuenta con acelerador para el uso permitido por la normativa local." },
      { question: "¿Qué autonomía ofrece?", answer: "Hasta 65 km en uso eléctrico y hasta 115 km con asistencia al pedaleo, dependiendo del peso, terreno, clima y nivel de asistencia." },
      { question: "¿Cuánto demora la carga?", answer: "El tiempo estimado para una carga completa es de 5 a 7 horas." },
      { question: "¿Qué mantenimiento requieren los neumáticos fat?", answer: "Conviene controlar regularmente presión, desgaste y posibles daños, usando la presión recomendada para el terreno y la carga." },
    ],
  },
  "light-p2": {
    intro: "Compacta, plegable y liviana: una bicicleta eléctrica creada para combinar trayectos urbanos, transporte público y espacios reducidos.",
    stories: [
      { eyebrow: "Plegado rápido", title: "La ciudad ocupa menos espacio.", text: "El cuadro se pliega para reducir notablemente su volumen y facilitar el guardado en casa, oficina o baúl. El cierre está diseñado para una operación simple y segura.", image: p2Fold },
      { eyebrow: "Movilidad eficiente", title: "250 W para tu ritmo diario.", text: "El motor brushless acompaña el pedaleo con una entrega progresiva. La pantalla LCD muestra velocidad, distancia, tiempo de uso y nivel de batería.", image: p2Motor },
      { eyebrow: "Confort urbano", title: "Más suave, más práctica.", text: "La suspensión trasera, los frenos de disco y las ruedas de 16 pulgadas crean una bicicleta ágil, cómoda y fácil de maniobrar en recorridos cotidianos.", image: p2Suspension },
    ],
    faqs: [
      { question: "¿Para qué altura de usuario está recomendada?", answer: "Como referencia, resulta adecuada para ciclistas de aproximadamente 1,58 a 1,88 m, con ajustes de asiento y manillar." },
      { question: "¿Cuánto pesa y cuánto puede cargar?", answer: "Pesa aproximadamente 21 kg y admite una carga máxima de hasta 110 kg." },
      { question: "¿Permite hacer ejercicio?", answer: "Sí. La asistencia acompaña el pedaleo y podés elegir el nivel de ayuda para regular tu esfuerzo." },
      { question: "¿Requiere mucho armado?", answer: "Se entrega mayormente ensamblada. Antes del primer uso deben verificarse cierres, frenos, presión de neumáticos y ajustes indicados en el manual." },
      { question: "¿Cuánto tarda en cargar?", answer: "Una carga completa demora aproximadamente entre 3 y 5 horas." },
    ],
  },
  "antelope-p5": {
    intro: "Rodado 24 fat, motor de 750 W y una posición amplia para recorrer la ciudad o salir de ella con aplomo y autonomía.",
    stories: [
      { eyebrow: "Gran rodado", title: "Hecha para explorar.", text: "Los neumáticos 24 × 4,0 ofrecen una superficie de contacto generosa. La doble suspensión ayuda a filtrar irregularidades y mantener una marcha controlada.", image: p5Ride },
      { eyebrow: "Control adaptable", title: "Siete cambios, cinco asistencias.", text: "La transmisión de siete velocidades y los niveles de asistencia permiten encontrar una cadencia cómoda para cada ritmo, pendiente y tipo de recorrido.", image: p5Shifter },
      { eyebrow: "Detalles funcionales", title: "Comodidad para llegar más lejos.", text: "El asiento de apoyo amplio, el acelerador de pulgar, la iluminación LED y los frenos hidráulicos completan una experiencia sólida y confortable.", image: p5Saddle },
    ],
    faqs: [
      { question: "¿Qué tipo de terrenos admite?", answer: "Los neumáticos fat y la doble suspensión permiten circular por asfalto y caminos irregulares. La velocidad y presión deben adaptarse siempre a la superficie." },
      { question: "¿Cuántos niveles de asistencia tiene?", answer: "Cuenta con cinco niveles de asistencia al pedaleo y una transmisión de siete velocidades." },
      { question: "¿La batería se puede cargar fuera de la bicicleta?", answer: "Sí. La batería puede cargarse instalada o retirarse para conectarla por separado." },
      { question: "¿Cuál es la autonomía estimada?", answer: "La ficha del modelo indica hasta 65 km, variable según peso, asistencia elegida, terreno, temperatura y estilo de manejo." },
      { question: "¿Cuánto tarda en cargar?", answer: "El tiempo de carga estimado es de 5 a 7 horas." },
    ],
  },
};
