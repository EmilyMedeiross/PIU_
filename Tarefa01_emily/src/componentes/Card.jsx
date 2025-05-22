function Card(props){
    return(
        <>
            <div> 
                <img src={props.foto} width="120px"/>
                <h2>{props.nome} </h2>
            </div>
        </>
    )
}

export default Card