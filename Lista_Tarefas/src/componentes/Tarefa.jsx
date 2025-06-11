import './Tarefa.css';

export default function Tarefa({name, description, concluida, onClick}){

    return(
       
        <div className={`tarefa ${concluida ? 'verde' : 'vermelha'}`}>
            <p>{name}</p>
            <p>{description}</p>
            <button className='
            button_tarefa' onClick={onClick}>
                    {concluida ? 'Marcar como não concluída' : 'Marcar como concluída'}
            </button>
         </div>
                
    )
}
