import { useState } from "react";

import logo from "./assets/react.svg";
import "./App.css";

const App = () => {
  const [contador,setContador] = useState(10)

  const disminuir = () =>{
    setContador(contador-1)
  }
  const aumentar = () =>{
    setContador(contador+1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="150" className="App-logo" alt="logo" />
        <div>
          <button onClick= {disminuir}> - </button>
          <h1>{contador}</h1>
          <button onClick= {aumentar}> + </button>
        </div>
      </header>
    </div>
  );
};

export default App;
