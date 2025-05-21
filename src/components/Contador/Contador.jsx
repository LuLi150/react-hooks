import {useState} from 'react';
import './Contador.css';

export default function Contador(){
    const [numero, setNumero] = useState(0);

    function Incrementar(){
        setNumero(numero + 1)
    }

    function Decrementar(){
        setNumero(numero - 1)
    }

    function zerar(){
        setNumero(0)
    }

    return(
        <div className = 'box'>
            <span>{numero}</span>
            <div className = 'botoes'>
              <button onClick={Decrementar} className='botao'>-</button>
              <button onClick={zerar}>Zerar</button>
              <button onClick={Incrementar} className='botao'>+</button>
            </div>
        </div>
    );
}