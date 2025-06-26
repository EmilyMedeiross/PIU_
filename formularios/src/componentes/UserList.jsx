export default function UserList({ users }) {
  return (
    <>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.idade} anos
          </li>
        ))}
      </ul>
    </>
  );
}
