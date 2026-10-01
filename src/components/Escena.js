function Ventana({ imagen, url, className }) {
  return (
    <figure className={`ventana ${className}`}>
      <div className="ventana-barra" aria-hidden="true">
        <i />
        <i />
        <i />
        {url && <span>{url}</span>}
      </div>
      <img src={imagen.src} alt={imagen.alt} loading="lazy" />
    </figure>
  );
}

function Telefono({ imagen, className }) {
  return (
    <figure className={`telefono ${className}`}>
      <img src={imagen.src} alt={imagen.alt} loading="lazy" />
    </figure>
  );
}

// Portada del proyecto: capturas en marcos de navegador o celular sobre su color
export default function Escena({ proyecto }) {
  const imagenes = proyecto.imagenes || [];
  const escritorio = imagenes.filter((i) => i.dispositivo === "escritorio");
  const celular = imagenes.filter((i) => i.dispositivo === "celular");
  const url = proyecto.demo && new URL(proyecto.demo).hostname;

  if (escritorio.length) {
    return (
      <div className="medio escena" style={{ "--fondo": proyecto.color }}>
        <Ventana imagen={escritorio[0]} url={url} className="ventana--principal" />
        {escritorio[1] && <Ventana imagen={escritorio[1]} className="ventana--secundaria" />}
        {celular[0] && <Telefono imagen={celular[0]} className="telefono--esquina" />}
      </div>
    );
  }

  if (celular.length) {
    return (
      <div className="medio escena" style={{ "--fondo": proyecto.color }}>
        {celular.slice(0, 2).map((img, i) => (
          <Telefono key={img.src} imagen={img} className={`telefono--${i ? "b" : "a"}`} />
        ))}
      </div>
    );
  }

  return (
    <div className="medio medio--tipografico" style={{ "--fondo": proyecto.color }} aria-hidden="true">
      <span className="medio-tipo">{proyecto.tipo}</span>
      <span className="medio-titulo">{proyecto.titulo}</span>
    </div>
  );
}
