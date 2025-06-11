import {links} from "./dados"
import  "./DropDown.css"

export default function DropDown(){

    return(
        <>
            <div className= "dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Botão dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {links.map(link => (
                        <a class="dropdown-item" href="#">{link}</a>
    
                    ))}
                </div>
            </div>
        </>
    )
}