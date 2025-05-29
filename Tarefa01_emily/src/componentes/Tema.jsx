function Tema(){

    const fundo_padrao =  "#000000"

    function mudacor(){
        const fundo = ["#000000"]
        document.body.style.backgroundColor = fundo;
    }
    return(
        <>
            <div className="fundo_padrao"> 
                <button onClick={mudacor}>Mude o fundo</button>
            </div>
        </>
    )
}

export default Tema