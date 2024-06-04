import "./textField.css";

const TextField = (props) => {
  const placeHolderModificado = `${props.placeholder}...`;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <div className={"campo-texto"}>
      <label>{props.titulo}</label>
      <input
        placeholder={placeHolderModificado}
        type="text"
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default TextField;
