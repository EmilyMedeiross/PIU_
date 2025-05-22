function Tema(){

    function mudacor(){
        const fundo = ["#000000"]
        document.body.style.backgroundColor = fundo;
    }
    return(
        <>
            <div> 
            <button onClick={mudacor}>Mude o fundo</button>
            </div>
        </>
    )
}

export default Tema