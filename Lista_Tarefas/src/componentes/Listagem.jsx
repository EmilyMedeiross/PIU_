import './Listagem.css'
import Tarefa from './Tarefa'
import { useState } from 'react'
import {tarefas} from "./dados"

export default function Listagem(){

    const[tarefa, setTarefa] = useState(tarefas);

    function mudarEstado(ClickTrf){
        const newlist = tarefa.map((trf) => {

            if (trf.id === ClickTrf.id) {
                return {
                    ...trf,
                    concluida: !trf.concluida
                }
            }
            return trf; 
        });
        setTarefa(newlist)
    }

    return(
        <div className='listagem'>
            {tarefa.map((trf) => (
                <Tarefa

                    key={trf.id}
                    name={trf.name}
                    description={trf.description}
                    concluida={trf.concluida}
                    onClick={() => mudarEstado(trf)}
                />
            ))}

        </div>

    )
}
