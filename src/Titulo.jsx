//Exemplo de props
/*
const titulo = ({nome}) => {

    return(
        <h1>Olá, {nome}!</h1>
    );
}

export default Titulo;
*/

//Exemplo de props como children

const Titulo = ({children}) => {

    return(
     <div>
        {children}
     </div>
    );
}

export default Titulo;