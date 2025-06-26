import { useState } from "react";
// import './itens.css'
export default function Form({ users, setUsers }) {

  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");

  function cadastrarUser(e) {
    e.preventDefault();

    const novoUsuario = { name, idade };
    setUsers([...users, novoUsuario]); 

    setName("");
    setIdade("");
  }

  return (
    <>
      <div className="form">
        <h2>Cadastro de Users</h2>
        <form onSubmit={cadastrarUser} className="form">
            <label>
                <span>Nome: </span>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <br/>
            <label>
                <span>Idade: </span>
                <input type="number" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
}
