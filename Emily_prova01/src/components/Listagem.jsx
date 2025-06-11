import './Listagem.css'
import Card from './Card'
import { useState } from 'react'
import {carros} from "./dados_carro"

export default function Listagem(){

    const[carro] = useState(carros);

    return(

        // Aqui peguei o que tinha e carros e defini o valor da constante
        // Depois passei as informações que queria pelo elemento card
        <div className='listagem'>
            {carro.map((trf) => (
                <Card

                    key={trf.id}
                    modelo={trf.modelo}
                    ano={trf.ano}
                
                />
            ))}
        </div>
    )
}
