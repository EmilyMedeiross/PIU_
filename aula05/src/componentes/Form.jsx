import { useState } from "react";
export default function Form({ tarefas, SetTarefas }) {

  const [tarefa, SetTarefa] = useState("");

  function cadastrarUser(e) {
    e.preventDefault();

    const novaTarefa = {tarefa};
    SetTarefas([...tarefas, novaTarefa]); 

    SetTarefa("");
  }

  return (
    <>
      <div className="form">
        <h2>Lista de Terefas</h2>
        <form onSubmit={cadastrarUser} className="form">

            <label>
                <span>Tarefa: </span>
                <input type="text" placeholder="Nome da Tarefa" value={tarefa} onChange={(e) => SetTarefa(e.target.value)}/>
            </label>
            <br/>
            <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}
