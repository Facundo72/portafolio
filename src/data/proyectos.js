import aforo1 from "../assets/aforo-1.webp";
import aforo2 from "../assets/aforo-2.webp";
import aforo3 from "../assets/aforo-3.webp";
import aforo4 from "../assets/aforo-4.webp";
import aforo5 from "../assets/aforo-5.webp";
import step1 from "../assets/step-1.webp";
import step2 from "../assets/step-2.webp";
import step3 from "../assets/step-3.webp";
import step4 from "../assets/step-4.webp";
import scripthub1 from "../assets/scripthub-1.webp";
import scripthub2 from "../assets/scripthub-2.webp";
import cartaQr1 from "../assets/carta-qr-1.webp";
import cartaQr2 from "../assets/carta-qr-2.webp";

// Para sumar un trabajo nuevo, agregá un objeto acá.
// "frase" es lo único que se lee en la tarjeta; el resto aparece al abrir el proyecto.
// "stack" usa los nombres de components/Tecnologias.js para mostrar cada ícono.
// "bit" es el comentario de la mascota dentro del detalle (opcional).
// "demo" y "codigo" son opcionales: si no están, no se muestra el botón.
// "imagenes": cada una lleva "dispositivo": "escritorio" (capturas 16:9) o "celular" (verticales).
// En la tarjeta se usan las dos primeras; al abrir el proyecto se ven todas.
// "color" es el fondo de la escena; sin imágenes se muestra una portada tipográfica.
export const proyectos = [
  {
    id: "aforo",
    titulo: "Aforo",
    tipo: "Venta de entradas con QR",
    frase: "Comprás online, te llega el QR, entrás.",
    bit: "Probé el escáner de la puerta: ¡pip! y adentro.",
    anio: "2026",
    resumen:
      "Plataforma de entradas para la obra de danza PUL|RITMIA. El público compra online, recibe un comprobante en PDF con QR y en la puerta se valida con el escáner desde el celular.",
    puntos: [
      "Landing del evento con galería y cupo limitado",
      "Comprobante en PDF con código QR por entrada",
      "Escáner QR para el control de acceso",
      "Panel de vendedores con ventas en tiempo real",
    ],
    stack: ["React", "Create React App", "Firebase", "Supabase", "EmailJS", "jsPDF"],
    demo: "https://aforo-entradas.vercel.app",
    codigo: "https://github.com/Facundo72/aforo-entradas",
    color: "#7E2F22",
    imagenes: [
      { src: aforo1, dispositivo: "escritorio", alt: "Portada de la web con el título PUL|RITMIA y el botón Comprar entrada" },
      { src: aforo2, dispositivo: "escritorio", alt: "Sección Una experiencia colectiva con la foto de un saco y el texto AFORO" },
      { src: aforo4, dispositivo: "escritorio", alt: "Galería de fotos de la obra con el elenco bailando en escena" },
      { src: aforo5, dispositivo: "escritorio", alt: "Sección Sobre la obra con el logo PUL|RITMIA y una bailarina" },
      { src: aforo3, dispositivo: "escritorio", alt: "Pregunta de la obra en letras grandes sobre un primer plano de ojos" },
    ],
  },
  {
    id: "step",
    titulo: "STEP",
    tipo: "App para la comunidad de danza",
    frase: "Academias, profes y eventos de danza en un solo lugar.",
    bit: "Encontré clases de breaking acá. Todavía no me animo.",
    anio: "2026",
    resumen:
      "Aplicación web para la comunidad de danza de Córdoba: academias, profes y eventos en un mismo lugar, con cuentas de usuario y foco en accesibilidad.",
    puntos: [
      "Registro e inicio de sesión",
      "Buscador de perfiles, servicios, eventos y clases",
      "Eventos con fechas y sedes de cada gira",
      "Subida de imágenes",
      "Integración con Google Calendar y Google Maps",
    ],
    stack: ["React", "Firebase", "Supabase", "Google Calendar", "Google Maps"],
    demo: "https://thestepp.com",
    color: "#DDEB4A",
    imagenes: [
      { src: step1, dispositivo: "escritorio", alt: "Inicio de STEP con eventos internacionales, bailarines y academias" },
      { src: step2, dispositivo: "escritorio", alt: "Página del evento El retablo de las maravillas con su afiche y próxima función" },
      { src: step3, dispositivo: "escritorio", alt: "Buscador con perfiles de bailarines, academias y eventos" },
      { src: step4, dispositivo: "escritorio", alt: "Fechas y sedes de la gira de una obra en Argentina y Portugal" },
    ],
  },
  {
    id: "carta-qr",
    titulo: "Carta QR",
    tipo: "Menú digital",
    frase: "Escaneás la mesa y pedís con fotos y precios.",
    bit: "Miré el lomo XL tres veces. No puedo comer, soy un dibujo.",
    anio: "2026",
    resumen:
      "Carta digital para un local de comidas: el cliente escanea el QR de la mesa y navega lomos, hamburguesas, bebidas y promos desde el celular.",
    puntos: [
      "Categorías con fotos y precios",
      "Sección de promociones",
      "Horarios y acceso directo para dejar reseña en Google Maps",
      "Generador del QR para imprimir",
    ],
    stack: ["React", "Create React App", "React Router", "Generador QR"],
    demo: "https://carta-qr-seven.vercel.app",
    codigo: "https://github.com/Facundo72/carta-qr",
    color: "#D9822B",
    imagenes: [
      { src: cartaQr1, dispositivo: "celular", alt: "Carta con fotos y precios de piqueos, sándwiches y bebidas" },
      { src: cartaQr2, dispositivo: "celular", alt: "Menú lateral con horarios, código QR y reseña en Google Maps" },
    ],
  },
  {
    id: "scripthub",
    titulo: "ScriptHub",
    tipo: "Editor de código en el navegador",
    frase: "Tu repo de GitHub, editable desde el celular.",
    bit: "Abrí un repo desde el celu y no rompí nada. Éxito.",
    anio: "2026",
    resumen:
      "Editor web conectado a GitHub: abrís un repositorio, editás archivos con resaltado de sintaxis, ves la vista previa en vivo y le consultás a una IA sobre el código.",
    puntos: [
      "Inicio de sesión con GitHub y listado de repos",
      "Editor con CodeMirror y vista previa en vivo",
      "Chat con IA sobre el repositorio",
      "Estado del deploy",
    ],
    stack: ["React", "Vite", "CodeMirror", "GitHub API"],
    demo: "https://scripthub-ochre.vercel.app",
    codigo: "https://github.com/Facundo72/scripthub",
    color: "#F2B84B",
    imagenes: [
      { src: scripthub1, dispositivo: "celular", alt: "Pantalla de inicio de ScriptHub con el botón Entrar con GitHub" },
      { src: scripthub2, dispositivo: "celular", alt: "Editor de ScriptHub mostrando un archivo JSX con resaltado de sintaxis" },
    ],
  },
];

// Trabajos más chicos: se muestran como etiquetas debajo de las tarjetas.
export const otros = [
  { titulo: "Mi Música", detalle: "Reproductor web", stack: ["React"] },
  { titulo: "Cascone", detalle: "Web de panadería", stack: ["HTML", "CSS"] },
  { titulo: "Organizador", detalle: "Ordena carpetas", stack: ["Python"] },
];
