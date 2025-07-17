import { useState } from 'react';

export default function EffectAPI() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsuarios = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setLoading(false);
    }
  };

  const resgataElementos = () => {
    fetchUsuarios(); // Chama a função para buscar os dados
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
     
      <table className='table1'>
        <thead>
          <tr>
            <th>Lista de Usuários</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.name}</td>
            </tr>
          ))}
        </tbody>
        <button onClick={resgataElementos}>Carregar Usuários</button>
      </table>

      <table className='table2'>
        <thead>
          <tr>
            <th>Lista de Usernames</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.username}</td>
            </tr>
          ))}
        </tbody>
        <button onClick={resgataElementos}>Carregar Usernames</button>
      </table>


      <table className='table3'>
        <thead>
          <tr>
            <th>Lista de Cidades</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.address.city}</td>
            </tr>
          ))}
        </tbody>
        <button onClick={resgataElementos}>Carregar Cidades</button>
        
      </table>
    </div>
  );
}