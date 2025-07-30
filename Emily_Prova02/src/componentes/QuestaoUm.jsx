import { useEffect, useState } from "react";

export default function QuestaoUm() {

  const [name, setName] = useState("");
  const [palavrachave, setPalavraChave] = useState();
  const [usuarios, setUsuarios] = useState([])

  function cadastrarUser(e) {
    e.preventDefault();
    
    const dadosUsuario = { name, palavrachave };
    
    const filter = dadosUsuario.filter(palavrachave === 'AlunoIFRN' );
    
    if (filter){
        setUsuarios([...usuarios, dadosUsuario]);
        useEffect(() => {
            
            document.body.style.backgroundColor = 'black';
            document.documentElement.style.color = 'white';
            document.documentElement.style.background = 'black'
            
          }, [usuarios]);

    }else{
        setName(" ");
        setPalavraChave(" ");
    
    }
        
  }

  return (
    <>
      <div>
        <h2>Login de  Users</h2>
        <form onSubmit={cadastrarUser} className="form">

            <label>
                <span>Nome: </span>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>

            <br/>

            <label>
                <span>Palavra Chave: </span>
                <input type="text" placeholder="Palavra-Chave" value={palavrachave} onChange={(e) => setPalavraChave(e.target.value)}/>
            </label>

            <br/>
            <br/>
            <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
}