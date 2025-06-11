import './Tema.css';
import { useState } from 'react';

export default function Tema({children}){

    const[tema, setTema] = useState ('light');

    const Alternar_tema = () => {
        const tema_escolhido = tema === 'light' ? 'dark' : 'light';
        setTema(tema_escolhido);
        document.body.className = tema_escolhido;

    };

    return (
        <div>
            <button onClick={Alternar_tema}>Alterar Tema</button>
            
            {/* Onde será inserida a Galeria */}
            {children} 
        </div>
    )
}

