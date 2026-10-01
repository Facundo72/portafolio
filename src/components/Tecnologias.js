import {
  SiCodemirror,
  SiCreatereactapp,
  SiCss,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGooglecalendar,
  SiGooglemaps,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiReactrouter,
  SiSupabase,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbFileTypePdf, TbMail, TbPaw, TbQrcode } from "react-icons/tb";

// Nombre de la tecnología → ícono y color de marca (el color se ve al pasar el mouse).
// Para sumar una nueva, agregala acá y usá el mismo nombre en proyectos.js.
const ICONOS = {
  React: { Icono: SiReact, color: "#149ECA" },
  "Create React App": { Icono: SiCreatereactapp, color: "#09D3AC" },
  "React Router": { Icono: SiReactrouter, color: "#CA4245" },
  Vite: { Icono: SiVite, color: "#646CFF" },
  JavaScript: { Icono: SiJavascript, color: "#E0C200" },
  HTML: { Icono: SiHtml5, color: "#E34F26" },
  CSS: { Icono: SiCss, color: "#663399" },
  Python: { Icono: SiPython, color: "#3776AB" },
  Firebase: { Icono: SiFirebase, color: "#F5820D" },
  Supabase: { Icono: SiSupabase, color: "#3ECF8E" },
  Zustand: { Icono: TbPaw, color: "#8B5A2B" },
  Vercel: { Icono: SiVercel, color: "#000000" },
  Git: { Icono: SiGit, color: "#F05032" },
  GitHub: { Icono: SiGithub, color: "#181717" },
  "GitHub API": { Icono: SiGithub, color: "#181717" },
  CodeMirror: { Icono: SiCodemirror, color: "#D30707" },
  "Google Maps": { Icono: SiGooglemaps, color: "#4285F4" },
  "Google Calendar": { Icono: SiGooglecalendar, color: "#4285F4" },
  EmailJS: { Icono: TbMail, color: "#FF6B35" },
  jsPDF: { Icono: TbFileTypePdf, color: "#D93025" },
  "Generador QR": { Icono: TbQrcode, color: "#1D2433" },
};

// Fila de íconos; el nombre aparece en un cartelito al pasar el mouse
export default function Tecnologias({ lista, tamano = "normal", className = "" }) {
  return (
    <ul className={`tecnologias tecnologias--${tamano} ${className}`} aria-label="Tecnologías">
      {lista.map((nombre) => {
        const tec = ICONOS[nombre];
        if (!tec) {
          return (
            <li key={nombre} className="tecnologia tecnologia--texto">
              {nombre}
            </li>
          );
        }
        const { Icono, color } = tec;
        return (
          <li key={nombre} className="tecnologia" data-nombre={nombre} style={{ "--marca": color }}>
            <Icono aria-hidden="true" />
            <span className="sr-only">{nombre}</span>
          </li>
        );
      })}
    </ul>
  );
}
