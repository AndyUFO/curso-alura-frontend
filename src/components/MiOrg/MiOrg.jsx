import "./MiOrg.css";
import {useState} from "react";

function MiOrg(props) {
  //const [mostrar, setMostrar] = useState(true);
  console.log(props)
  /*
    const manejarClick = () => {
      console.log("Mostrar ocultar elemento", mostrar);
      setMostrar(!mostrar);
    }
    */
  return <section className={"orgSection"}>
    <h3 className={"title"}>Mi organizacion</h3>
    <img src={"/img/add.png"} alt={"add"} onClick={props.cambiarMostrar}/>
  </section>

}

export default MiOrg;
