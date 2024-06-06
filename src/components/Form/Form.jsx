import "./Form.css";
import Field from "../Field/Field.jsx";
import ListaOpciones from "../listaOpciones/index.jsx";
import Boton from "../Boton/Boton.jsx";
import { useState } from "react";

const Form = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;

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

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <Field
          titulo={"Nombre"}
          placeholder={"Ingresar nombre"}
          required
          valor={nombre}
          actualizarValor={setNombre}
        ></Field>
        <Field
          titulo={"Puesto"}
          placeholder={"Ingresar Puesto"}
          required
          valor={puesto}
          actualizarValor={setPuesto}
        ></Field>
        <Field
          titulo={"Foto"}
          placeholder={"Ingresar enlace de foto"}
          required
          valor={foto}
          actualizarValor={setFoto}
        ></Field>
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={setEquipo}
          equipos={props.equipos}
        ></ListaOpciones>
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo</h2>
        <Field
          titulo={"Titulo"}
          placeholder={"Ingresar titulo"}
          required
          valor={titulo}
          actualizarValor={setTitulo}
        ></Field>
        <Field
          titulo={"Color"}
          placeholder={"Ingresar el color en hexadecimal"}
          required
          valor={color}
          actualizarValor={setColor}
          type={"color"}
        ></Field>
        <Boton>Registrar Equipo</Boton>
      </form>
    </section>
  );
};

export default Form;
