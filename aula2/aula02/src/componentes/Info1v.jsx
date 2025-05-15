import { useState } from "react"

export default function Info1v(){
    // let valor = 0
    let [valor, setValor] = useState(2)

    function numeric(){
        let aux = valor*2
        setValor(aux)
    }

    return (
        <>
            <div>
                <button onClick={numeric}>Cliques {valor} </button>
            </div>
        </>
    )

}