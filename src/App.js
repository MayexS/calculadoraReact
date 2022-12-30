import './App.css';

import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';

//Hook
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los calculos");
    }
  };

  return (
    <div className="App">

      <div className='contenedor-calculadora btn btn-primary'>
        <Pantalla input={input} />

        <div className='fila'>
          <Boton verClic={agregarInput}>%</Boton>
          <Boton verClic={agregarInput}>^</Boton>
          <Boton verClic={agregarInput}>/</Boton>
          <Boton verClic={agregarInput}>*</Boton>
        </div>

        <div className='fila'>
          <Boton verClic={agregarInput}>7</Boton>
          <Boton verClic={agregarInput}>8</Boton>
          <Boton verClic={agregarInput}>9</Boton>
          <Boton verClic={agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton verClic={agregarInput}>4</Boton>
          <Boton verClic={agregarInput}>5</Boton>
          <Boton verClic={agregarInput}>6</Boton>
          <Boton verClic={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton verClic={agregarInput}>1</Boton>
          <Boton verClic={agregarInput}>2</Boton>
          <Boton verClic={agregarInput}>3</Boton>
          <BotonClear verClic={() => setInput('')}>AC</BotonClear>
        </div>

        <div className='fila'>

          <Boton verClic={agregarInput}>.</Boton>
          <Boton verClic={agregarInput}>0</Boton>
          <Boton verClic={agregarInput}>00</Boton>
          
          <Boton verClic={calcularResultado}>=</Boton>
        </div>

      </div>

    </div>
  );

}

export default App;
