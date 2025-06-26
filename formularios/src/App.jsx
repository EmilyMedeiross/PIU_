import './App.css'
import { useState } from 'react'
import Form from './componentes/Form'
import UserList from './componentes/UserList'

function App() {
  
  const [users, setUsers] = useState([]);
  return (
    <>
     <Form users={users} setUsers={setUsers} />
      <hr />
      <UserList users={users} />
    </>
  )
}

export default App
