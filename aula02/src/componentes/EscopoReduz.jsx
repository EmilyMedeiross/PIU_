import './EscopoReduz.css'
const EscopoReduz = () => {
    return(
        <>
            <button onClick={() => console.log("VOCÊ CLICOU ")}>Clique</button>
            <div>
                <button onClick={() => alert ("Voce clicou")}> Novo Botão</button>
            </div>
            <div>
                <button onClick={handleClick}>handleClick</button>
            </div>
            <div className="container" onClick={() => alert("Container")}>
            </div>
            <div>
                <button  className='color' onClick={mudacor()}> Muda cor</button>
            </div>   
        </>
    )
}
export default EscopoReduz 