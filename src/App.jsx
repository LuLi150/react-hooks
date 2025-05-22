// import {useState} from "react";

// export default function App() {
//   const [nome] = useState("Luana");
//   const [situacao, setSituacao] = useState(true);

//   function mudarSituacao(){
//     return setSituacao(!situacao);
//   }

//   return (
//     <>
//       <h2>Nome: {nome}</h2>
//       <h2>Situação: {situacao ? 'Ativo' : 'Inativo'}</h2>
//       <button onClick={mudarSituacao}>Mudar siituação</button>
//     </>
//   )
// }

//   import Contador from "./components/Contador/contador";

//   export default function App(){
//   return (
//     <>
//     <Contador/>
//     </>
//   )
// }
/*
//Mudar mensagem, usando useEffect demonstrando a mudança

import { useState, useEffect } from "react";

 export default function App(){

  const [mensagem, setMensagem] = useState('Hello World!');

  useEffect(() => {console.log("mensagem renderizada");}, [mensagem]);

  return (
    <>
    <h1>{mensagem}</h1>
    <button onClick={() => {
      setMensagem('Olá,mundo')
    }}>mudar idioma</button>
    </>
  )
}
*/
/* Exemplo 01
 import './App.css';
 import { useState } from 'react';

export default function App(){

  const [valor, mudarValor] = useState(true);

  function alterarValor(){
    mudarValor (!valor)
  }

  return(
    <>
    <div style={{backgroundColor:valor ? 'blue' : 'red'}}>
        <button  style={{backgroundColor:valor ? 'red' : 'blue'}} onClick={alterarValor}></button>
    </div>
    </>
  )
}
*/
/*
//Exemplo 02
import './App.css';
import { useState, useEffect } from "react"

export default function App(){

  const [count, setCount] = useState(0);

  useEffect(() => {
   const timout = setTimeout(() => {
    console.log('Executou depois de dois segundos'); 
  }, 2000);

  return() => {
    clearTimeout(timout);
  }

}, [count]);

  function counter(){
    setCount(count + 1);
  }

  return(
    <>
    <div>
      <span>{count}</span>
      <button onClick={counter}>COUNTER</button>
      </div>
    </>
  )
}
*/

import { useState , useEffect } from "react";




export default function App(){

const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/LuLi150')
     .then(response => response.json)
     .then(data => setData(data))
  }, []);

  console.log(data);
  
  return(
    <h1>useEffect</h1>
  );
}