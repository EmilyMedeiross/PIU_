import {nomes} from "./dados"

export default function ListasMap(){

    return(

        <>
            <div>
                <ul>
                    {nomes.map(nome => (
                        <li style={{fontSize:'14px'}} >{nome}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}