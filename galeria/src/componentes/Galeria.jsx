import './Galeria.css'
import Card from './Card'
import Detalhes from './Detalhes'
import { useState } from 'react'


export default function Galeria({personagens}){

    const[selecionepersonagem, setselecionepersonagem] = useState(null);

    const seleciona_Personagem = (personagem) => {
        setselecionepersonagem(personagem);
    };

    return(
        <div className='galeria'>
            {personagens.map((perso) => (
                <Card

                    key={perso.id}
                    name={perso.name}
                    image={perso.image}
                    onClick={() => seleciona_Personagem(perso) }
                />
            ))}
            <Detalhes personagem ={selecionepersonagem}/>

        </div>

    )
}
