export default function Evento({numero}){

    function meuEvento(){
        console.log(`Evento  Ativado! ${numero}`);
    }

    return (
        <>
            <div>
                <p>Clique para ativar um evento</p>
                <button onClick={meuEvento}>Ativar</button>
            </div>
        </>
    )

}