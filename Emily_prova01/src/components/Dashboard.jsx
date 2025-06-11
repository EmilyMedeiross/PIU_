import './Dashboard.css';
import {carros} from "./dados_carro"



export default function Listas({children}){
    
    // Aqui pergeui todos os carros da cor vermelha
    const carrosFilter = carros.filter(carro => carro.cor === "vemelho");

    return(
        <>
        <div>
                <ul>
                {carrosFilter.map(car => (
                       <p>{car}</p>
                    ))}
                </ul>
        </div>
        {/* Aqui coloquei uma children onde ficara a listagem de carros que tem o modelo e o ano */}
        {children}

        </>
    )

}