import { useState } from "react";
import { BitDibujo } from "./Bit";

const FRASES = [
  "¡Hola! Soy Bit, el ayudante de Facu.",
  "Tocá un proyecto y te muestro cómo funciona.",
  "¿Tenés un negocio? Facu te arma la web.",
  "Yo no programo, solo escucho música y miro.",
  "Psst… abajo de todo está el WhatsApp.",
];

// Bit grande de la portada: al tocarlo salta y dice otra frase
export default function Mascota() {
  const [frase, setFrase] = useState(0);
  const [saltando, setSaltando] = useState(false);

  const saludar = () => {
    setFrase((f) => (f + 1) % FRASES.length);
    setSaltando(true);
  };

  return (
    <div className="mascota">
      <p className="burbuja" aria-live="polite">
        {FRASES[frase]}
      </p>
      <button
        type="button"
        className={`mascota-boton${saltando ? " saltando" : ""}`}
        onClick={saludar}
        onAnimationEnd={(e) => e.animationName === "salto" && setSaltando(false)}
        aria-label="Hablar con Bit, la mascota"
      >
        <BitDibujo accesorio="notebook" notas mirar />
      </button>
    </div>
  );
}
