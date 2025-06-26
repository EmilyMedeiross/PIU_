import './App.css'
import { useState } from 'react'
import Form from './componentes/Form'
import ListTarefas from './componentes/ListTarefas';

function App() {
  
  const [tarefas, SetTarefas] = useState([]);

  return (
    <>
     <Form tarefas={tarefas} SetTarefas={SetTarefas} />
      <hr />
      <ListTarefas tarefas={tarefas} />
    </>
  )
}

export default App
