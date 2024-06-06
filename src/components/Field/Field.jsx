import "./Field.css";

const Field = (props) => {
  const placeHolderModificado = `${props.placeholder}...`;

  const { type = "text" } = props;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={placeHolderModificado}
        type="text"
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Field;
