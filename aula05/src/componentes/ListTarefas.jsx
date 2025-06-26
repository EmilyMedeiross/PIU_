export default function ListTarefas({ tarefas }) {

    const handleclear = () => {
        tarefas = ([])
    }
    return (
      <>
        <h2>Tarefas</h2>
        <ul>
          {tarefas.map((tar) => (
            <li>
              {tar.tarefa}
            </li>
          ))}
        </ul>

        <button onClick={handleclear}>Reset</button>
      </>
    );
  }
  