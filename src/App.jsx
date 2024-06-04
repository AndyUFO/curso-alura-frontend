import Header from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";
import MiOrg from "./components/MiOrg/MiOrg.jsx";
import {useState} from "react";


function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const cambiarMostrar = () => {
    setMostrarFormulario(!mostrarFormulario);
  }


  return (
      <>
        <header className="header">
          <Header/>
        </header>
        {mostrarFormulario && <Form/>}
        <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
      </>
  )
}

export default App
