import {times} from "./dados"

export default function ListasFilter(){
    
    const time1 = times.filter(time => time === "Flamengo");

    return(

        <>
            <div>
                <ul>
                {time1.map(time => (
                       <p>{time}</p>
                    ))}
                </ul>
            </div>
        </>
    )

}