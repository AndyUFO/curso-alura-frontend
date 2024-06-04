import "./listaOpciones.css";

function ListaOpciones(props) {
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Movil",
    "Innivacion y Gestion",
  ];

  const manejaCambio = (e) => {
    console.log("cambio", e.target.value);
    props.actualizarEquipo(e.target.value);
  };

  return (
    <div className={"lista-opciones"}>
      <label>Equipos</label>
      <select value={props.valor} onChange={manejaCambio}>
        <option value="" disabled defaultValue={""} hidden>
          Seleccionar Equipo
        </option>
        {equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ListaOpciones;
