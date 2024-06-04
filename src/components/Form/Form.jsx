import "./Form.css";
import TextField from "../TextField";
import ListaOpciones from "../listaOpciones/index.jsx";
import Boton from "../Boton/Boton.jsx";
import { useState } from "react";

const Form = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const { registrarColaborador } = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar Envio", e);
    let datosEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    console.log(datosEnviar);
    registrarColaborador(datosEnviar);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <TextField
          titulo={"Nombre"}
          placeholder={"Ingresar nombre"}
          required
          valor={nombre}
          actualizarValor={setNombre}
        ></TextField>
        <TextField
          titulo={"Puesto"}
          placeholder={"Ingresar Puesto"}
          required
          valor={puesto}
          actualizarValor={setPuesto}
        ></TextField>
        <TextField
          titulo={"Foto"}
          placeholder={"Ingresar enlace de foto"}
          required
          valor={foto}
          actualizarValor={setFoto}
        ></TextField>
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={setEquipo}
          equipos={props.equipos}
        ></ListaOpciones>
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Form;
