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

import React, { useState, useEffect } from "react";

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
/*
//Deu ruim, da loop infinito

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
*/
//Exemplo de props
/*
import Titulo from "./Titulo";

export default function App(){

  return(
   <Titulo nome = "luh"/>
  );
}
*/

//Exemplo de props como children

import Titulo from "./Titulo";

export default function App(){

  return(
   <Titulo>
      <p>paragráfo</p>
      <button></button>
      <h1>Com children posso usar varias tags, como esse paragrafo e botão</h1>
   </Titulo>
  );
}