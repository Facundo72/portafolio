import { useState } from "react";
import "./App.css";
import { proyectos, otros } from "./data/proyectos";
import Mascota from "./components/Mascota";
import { BitAsomado, BitDibujo, BitFlotante } from "./components/Bit";
import Escena from "./components/Escena";
import DetalleProyecto from "./components/DetalleProyecto";
import Flecha from "./components/Flecha";
import Tecnologias from "./components/Tecnologias";

const CONTACTO = {
  email: "facundofauda72@gmail.com",
  linkedin: "https://www.linkedin.com/in/facundo-fauda-831a66305/",
  github: "https://github.com/Facundo72",
  whatsapp: "https://wa.me/543541267141",
};

const SERVICIOS = [
  "Sistemas de caja",
  "Cartas QR",
  "Venta de entradas",
  "Webs a medida",
  "Apps con login",
  "Paneles en tiempo real",
];

const STACK = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Firebase",
  "Supabase",
  "Zustand",
  "Vercel",
  "Git",
  "GitHub",
  "Google Maps",
];

const dosDigitos = (n) => String(n).padStart(2, "0");

function Encabezado() {
  return (
    <header className="encabezado">
      <a href="#inicio" className="marca">
        Facundo Fauda
      </a>
      <nav aria-label="Principal">
        <a href="#trabajos">Trabajos</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="portada contenedor">
      <div className="portada-texto">
        <p className="sobretitulo">Programador full stack · Córdoba</p>
        <h1>
          Apps y webs que tu negocio usa <em>todos los días</em>.
        </h1>
        <div className="acciones">
          <a className="boton boton--lleno" href="#trabajos">
            Ver trabajos
          </a>
          <a className="boton" href="#contacto">
            Escribime
          </a>
        </div>
      </div>
      <Mascota />
    </section>
  );
}

function Cinta() {
  const items = SERVICIOS.map((s) => (
    <span key={s}>
      {s} <b aria-hidden="true">✦</b>
    </span>
  ));
  return (
    <div className="cinta">
      <p className="sr-only">{SERVICIOS.join(", ")}</p>
      <div className="cinta-pista" aria-hidden="true">
        <div>{items}</div>
        <div>{items}</div>
      </div>
    </div>
  );
}

function Tarjeta({ proyecto, indice, onAbrir }) {
  return (
    <article className="tarjeta">
      <Escena proyecto={proyecto} />
      <div className="tarjeta-pie">
        <span className="tarjeta-num">{dosDigitos(indice + 1)}</span>
        <div className="tarjeta-texto">
          <h3>
            {/* El ::after del botón cubre toda la tarjeta, así se puede tocar en cualquier parte */}
            <button type="button" className="tarjeta-boton" onClick={() => onAbrir(proyecto)}>
              {proyecto.titulo}
            </button>
          </h3>
          <p className="tarjeta-frase">{proyecto.frase}</p>
        </div>
        <span className="tarjeta-abrir" aria-hidden="true">
          <Flecha />
        </span>
      </div>
    </article>
  );
}

function Trabajos({ onAbrir }) {
  return (
    <section id="trabajos" className="seccion contenedor">
      <div className="seccion-cabecera">
        <h2>Trabajos</h2>
        <BitAsomado texto="Tocá uno para ver más" />
      </div>
      <div className="tarjetas">
        {proyectos.map((p, i) => (
          <Tarjeta key={p.id} proyecto={p} indice={i} onAbrir={onAbrir} />
        ))}
      </div>

      <div className="otros">
        <span className="sobretitulo">También hice</span>
        <ul>
          {otros.map((o) => (
            <li key={o.titulo}>
              <strong>{o.titulo}</strong> {o.detalle}
              <Tecnologias lista={o.stack} tamano="mini" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SobreMi() {
  return (
    <section id="sobre-mi" className="seccion contenedor">
      <div className="seccion-cabecera">
        <h2>Sobre mí</h2>
      </div>
      <div className="sobre">
        <p className="destacado">
          Soy Facundo. Agarro una idea, la diseño, la programo y la dejo online para que la use gente real.
        </p>
        <Tecnologias lista={STACK} tamano="grande" />
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <div className="contenedor contacto-grilla">
        <div>
          <p className="sobretitulo">Contacto</p>
          <h2>¿Tenés un proyecto en mente?</h2>
          <a className="contacto-email" href={`mailto:${CONTACTO.email}`}>
            {CONTACTO.email}
          </a>
          <ul className="contacto-redes">
            <li>
              <a href={CONTACTO.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp <Flecha />
              </a>
            </li>
            <li>
              <a href={CONTACTO.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <Flecha />
              </a>
            </li>
            <li>
              <a href={CONTACTO.github} target="_blank" rel="noreferrer">
                GitHub <Flecha />
              </a>
            </li>
          </ul>
        </div>
        <div className="contacto-bit">
          <p className="burbuja">¡Dale, escribile!</p>
          <BitDibujo accesorio="saludo" mirar />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [abierto, setAbierto] = useState(null);

  return (
    <>
      <a className="saltar" href="#trabajos">
        Saltar a los trabajos
      </a>
      <Encabezado />
      <main>
        <Portada />
        <Cinta />
        <Trabajos onAbrir={setAbierto} />
        <SobreMi />
        <Contacto />
      </main>
      <footer className="pie contenedor">
        <span className="pie-firma">
          <BitDibujo expresion="dormido" className="pie-bit" />© {new Date().getFullYear()} Facundo Fauda
        </span>
        <a href="#inicio">Volver arriba</a>
      </footer>
      <BitFlotante oculto={abierto !== null} />
      <DetalleProyecto proyecto={abierto} onCerrar={() => setAbierto(null)} />
    </>
  );
}
