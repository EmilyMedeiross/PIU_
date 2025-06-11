export default function Lista({itens}){

    return(
        <>
            <h3>Lista de Frameworks </h3>

            {itens.length > 0 ? (
                itens.map((item) => (
                    <p>{item}</p>
                ))) : (
                 <p> Não há itens na lista!</p>
                )
            }
        </>
    )
}