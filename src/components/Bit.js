import { useEffect, useRef, useState } from "react";

// Centro de los ojos dentro del viewBox (260 × 280), para calcular hacia dónde mirar
const OJOS_X = 130 / 260;
const OJOS_Y = 136 / 280;
const MAX_MIRADA = 7;

const sinMovimiento = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Las pupilas siguen al puntero
function useMirada(activo) {
  const svgRef = useRef(null);
  const pupilasRef = useRef(null);

  useEffect(() => {
    if (!activo || sinMovimiento()) return;
    let cuadro = 0;
    const mirar = (e) => {
      cancelAnimationFrame(cuadro);
      cuadro = requestAnimationFrame(() => {
        const r = svgRef.current?.getBoundingClientRect();
        if (!r || !pupilasRef.current) return;
        const dx = e.clientX - (r.left + r.width * OJOS_X);
        const dy = e.clientY - (r.top + r.height * OJOS_Y);
        const dist = Math.hypot(dx, dy) || 1;
        const k = Math.min(1, dist / 300) * MAX_MIRADA;
        pupilasRef.current.style.transform = `translate(${(dx / dist) * k}px, ${(dy / dist) * k}px)`;
      });
    };
    window.addEventListener("pointermove", mirar);
    return () => {
      window.removeEventListener("pointermove", mirar);
      cancelAnimationFrame(cuadro);
    };
  }, [activo]);

  return { svgRef, pupilasRef };
}

// true mientras el elemento está en pantalla
export function useEnVista(ref, opciones) {
  const [enVista, setEnVista] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setEnVista(e.isIntersecting), opciones);
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, opciones]);
  return enVista;
}

function Ojos({ expresion, pupilasRef }) {
  if (expresion === "feliz") {
    return (
      <g className="ojos-trazo">
        <path d="M82 142 Q100 120 118 142" />
        <path d="M142 142 Q160 120 178 142" />
      </g>
    );
  }
  if (expresion === "dormido") {
    return (
      <g className="ojos-trazo">
        <path d="M84 138 Q100 150 116 138" />
        <path d="M144 138 Q160 150 176 138" />
      </g>
    );
  }
  return (
    <g className="ojos">
      <circle className="ojo" cx="100" cy="136" r="22" />
      <circle className="ojo" cx="160" cy="136" r="22" />
      <g ref={pupilasRef} className="pupilas">
        <circle className="pupila" cx="100" cy="138" r="10" />
        <circle className="pupila" cx="160" cy="138" r="10" />
        <circle className="brillo" cx="104" cy="133" r="3.5" />
        <circle className="brillo" cx="164" cy="133" r="3.5" />
      </g>
    </g>
  );
}

function Boca({ expresion }) {
  if (expresion === "feliz") return <path className="boca-abierta" d="M112 168 Q130 196 148 168 Z" />;
  if (expresion === "dormido") return <circle className="boca-dormida" cx="130" cy="176" r="5" />;
  return <path className="boca" d="M116 172 Q130 186 144 172" />;
}

function Accesorio({ tipo }) {
  if (tipo === "notebook") {
    return (
      <>
        <rect className="notebook" x="74" y="192" width="112" height="68" rx="8" />
        <text className="notebook-logo" x="130" y="234">
          &lt;/&gt;
        </text>
        <rect className="notebook-base" x="60" y="256" width="140" height="9" rx="4.5" />
        <circle className="mano" cx="78" cy="216" r="12" />
        <circle className="mano" cx="182" cy="216" r="12" />
      </>
    );
  }
  if (tipo === "saludo") {
    return (
      <>
        <circle className="mano" cx="62" cy="206" r="12" />
        <g className="brazo-saludo">
          <path className="brazo" d="M204 196 L254 150" />
          <circle className="mano" cx="258" cy="144" r="15" />
        </g>
      </>
    );
  }
  return (
    <>
      <circle className="mano" cx="60" cy="204" r="12" />
      <circle className="mano" cx="200" cy="204" r="12" />
    </>
  );
}

// El dibujo de Bit. Se reutiliza en toda la página con distintas caras y poses.
export function BitDibujo({ expresion = "normal", accesorio = null, notas = false, mirar = false, className = "" }) {
  const { svgRef, pupilasRef } = useMirada(mirar && expresion === "normal");

  return (
    <svg ref={svgRef} className={`bit ${className}`} viewBox="0 0 260 280" aria-hidden="true">
      {notas && (
        <>
          <text className="nota nota--1" x="28" y="92">
            ♪
          </text>
          <text className="nota nota--2" x="206" y="58">
            ♫
          </text>
        </>
      )}
      {expresion === "dormido" && (
        <text className="zzz" x="200" y="70">
          z
        </text>
      )}

      <ellipse className="sombra" cx="130" cy="268" rx="80" ry="9" />

      <g className="cuerpo">
        <rect className="piel" x="46" y="64" width="168" height="184" rx="76" />
        <path className="vincha" d="M58 130 C52 30 208 30 202 130" />
        <rect className="auricular" x="32" y="108" width="30" height="52" rx="13" />
        <rect className="auricular" x="198" y="108" width="30" height="52" rx="13" />

        <Ojos expresion={expresion} pupilasRef={pupilasRef} />

        <circle className="cachete" cx="76" cy="172" r="10" />
        <circle className="cachete" cx="184" cy="172" r="10" />
        <Boca expresion={expresion} />

        <Accesorio tipo={accesorio} />
      </g>
    </svg>
  );
}

// Bit asomándose por detrás de una línea, con un globito al lado
export function BitAsomado({ texto }) {
  const ref = useRef(null);
  const enVista = useEnVista(ref, OPCIONES_ASOMADO);
  return (
    <div ref={ref} className={`asomado${enVista ? " asomado--visible" : ""}`}>
      <span className="globo asomado-globo">{texto}</span>
      <span className="asomado-ventana">
        <BitDibujo mirar />
      </span>
    </div>
  );
}
const OPCIONES_ASOMADO = { threshold: 1 };

// Bit comentando algo, con globo de texto (se usa dentro del detalle de cada proyecto)
export function BitComenta({ children }) {
  return (
    <div className="bit-comenta">
      <BitDibujo expresion="feliz" className="bit-comenta-dibujo" />
      <p className="globo bit-comenta-globo">{children}</p>
    </div>
  );
}

const FRASES_SECCION = {
  trabajos: "Tocá un proyecto para ver cómo funciona.",
  "sobre-mi": "Ese es Facu. Yo soy Bit, su ayudante.",
};

// Bit acompañando en la esquina mientras se recorre la página.
// Aparece cuando ya no se ve la portada y se esconde al llegar al contacto (ahí hay otro Bit).
export function BitFlotante({ oculto }) {
  const [visible, setVisible] = useState(false);
  const [frase, setFrase] = useState(null);

  useEffect(() => {
    const portada = document.getElementById("inicio");
    const contacto = document.getElementById("contacto");
    const estado = { portada: true, contacto: false };
    const obs = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        estado[e.target.id === "inicio" ? "portada" : "contacto"] = e.isIntersecting;
      });
      setVisible(!estado.portada && !estado.contacto);
    });
    obs.observe(portada);
    obs.observe(contacto);
    return () => obs.disconnect();
  }, []);

  // Cuando entra una sección nueva, Bit dice algo durante unos segundos
  useEffect(() => {
    let timer;
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (!e.isIntersecting) return;
          setFrase(FRASES_SECCION[e.target.id]);
          clearTimeout(timer);
          timer = setTimeout(() => setFrase(null), 4500);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    Object.keys(FRASES_SECCION).forEach((id) => obs.observe(document.getElementById(id)));
    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const mostrar = visible && !oculto;

  return (
    <div className={`flotante${mostrar ? " flotante--visible" : ""}`} aria-hidden={!mostrar}>
      {frase && <p className="globo flotante-globo">{frase}</p>}
      <a href="#inicio" className="flotante-boton" aria-label="Volver arriba" tabIndex={mostrar ? 0 : -1}>
        <BitDibujo mirar />
        <span className="flotante-arriba" aria-hidden="true">
          ↑
        </span>
      </a>
    </div>
  );
}
