import './Dashboard.css';
import { useState } from 'react';

export default function Tema({children}){

    const [tema, setTema] = useState('claro');

    const Alterar_tema = () => {
        const tema_escolhido = tema === 'claro' ? 'escuro' : 'claro';
        setTema(tema_escolhido);
        document.body.className = tema_escolhido
    }

    return(

        <>
            <button onClick={Alterar_tema}>Alterar Tema</button>
            {children}
        </>
    )

}