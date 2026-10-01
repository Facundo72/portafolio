import { useEffect, useRef } from "react";
import Flecha from "./Flecha";
import { BitComenta } from "./Bit";
import Tecnologias from "./Tecnologias";

// Ventana que se abre al tocar una tarjeta: galería de capturas + características
export default function DetalleProyecto({ proyecto, onCerrar }) {
  const dialogRef = useRef(null);
  const galeriaRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (proyecto && !dialog.open) dialog.showModal();
  }, [proyecto]);

  const cerrar = () => dialogRef.current.close();

  const mover = (sentido) => {
    const g = galeriaRef.current;
    g.scrollBy({ left: sentido * g.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <dialog
      ref={dialogRef}
      className="detalle"
      aria-labelledby="detalle-titulo"
      onClose={onCerrar}
      onClick={(e) => e.target === e.currentTarget && cerrar()}
    >
      {proyecto && (
        <div className="detalle-caja" key={proyecto.id} style={{ "--fondo": proyecto.color }}>
          <header className="detalle-cabecera">
            <div>
              <p className="sobretitulo">
                {proyecto.tipo} · {proyecto.anio}
              </p>
              <h2 id="detalle-titulo">{proyecto.titulo}</h2>
            </div>
            <button type="button" className="detalle-cerrar" onClick={cerrar} aria-label="Cerrar">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </button>
          </header>

          {proyecto.imagenes?.length > 0 && (
            <div className="galeria-marco">
              <div className="galeria" ref={galeriaRef} tabIndex={0} aria-label="Capturas del proyecto">
                {proyecto.imagenes.map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className={`galeria-img galeria-img--${img.dispositivo}`}
                  />
                ))}
              </div>
              {proyecto.imagenes.length > 2 && (
                <div className="galeria-flechas">
                  <button type="button" onClick={() => mover(-1)} aria-label="Captura anterior">
                    ←
                  </button>
                  <button type="button" onClick={() => mover(1)} aria-label="Captura siguiente">
                    →
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="detalle-cuerpo">
            <div className="detalle-texto">
              <p>{proyecto.resumen}</p>
              <Tecnologias lista={proyecto.stack} />
              {(proyecto.demo || proyecto.codigo) && (
                <div className="acciones">
                  {proyecto.demo && (
                    <a className="boton boton--lleno" href={proyecto.demo} target="_blank" rel="noreferrer">
                      Ver online <Flecha />
                    </a>
                  )}
                  {proyecto.codigo && (
                    <a className="boton" href={proyecto.codigo} target="_blank" rel="noreferrer">
                      Código <Flecha />
                    </a>
                  )}
                </div>
              )}
              {proyecto.bit && <BitComenta>{proyecto.bit}</BitComenta>}
            </div>

            <div>
              <h3 className="detalle-subtitulo">Qué hace</h3>
              <ul className="caracteristicas">
                {proyecto.puntos.map((p) => (
                  <li key={p}>
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
