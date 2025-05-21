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

  import Contador from "./components/Contador/contador";

  export default function App(){
  return (
    <>
    <Contador/>
    </>
  )
}
