import './Detalhes.css'

export default function Detalhes({personagem}){
   if (!personagem) {
  return null;
}

    return(
        <div className='detalhes'>
            <h2> Detalhes do personagem </h2>
            <img  src={personagem.image} alt={personagem.name}/>
              <h3>{personagem.name}</h3>
              <p>{personagem.descricao}</p>
        </div>
    )
}