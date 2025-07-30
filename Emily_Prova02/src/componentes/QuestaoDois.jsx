import { useState } from 'react';

export default function QuestaoDois () {
  const [albuns, setAlbuns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState([]);

  const fetchAlbuns = async () => {
    setLoading(true);
    try {

      const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
        method:'GET'});

      const data = await response.json();

    
    //   const data1 = data.filter(user => user.name.length < 10 );

      setAlbuns(data);


    } catch (error) {
      console.error("Erro ao buscar usuários:", error);

    } finally {
      setLoading(false);
    }
  };

  const resgataElementos = () => {
    fetchAlbuns(); 
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">

         <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setId(e.target.value)}
            placeholder="Digite o nome da Tarefa"
            required
                    />
      <table className='table1'>

        <thead>
          <tr>
            <th>Lista de Albuns</th>
          </tr>
        </thead>
        
        <tbody className="user-grid">
            
          {albuns.map(albuns=> (
            <tr key={albuns.id}>
              <td>{albuns.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <button onClick={resgataElementos}>Carregar Albuns</button>
    </div>
  );
}