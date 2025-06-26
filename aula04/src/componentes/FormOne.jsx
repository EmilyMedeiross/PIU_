import { useState } from "react"
export default function FormOne(){
    
    const[name, SetName] = useState('')
    const[idade, SetIdade] = useState('')
    return(

        <>
            <h1>Formulário</h1>
            <form>

                <label>
                    <input type="text" name="name"  onChange={(e) => setName(e.target.value)} value={name}></input>
                </label>

                <label>
                    <input></input>
                </label>

            </form>
        </>
    )
}