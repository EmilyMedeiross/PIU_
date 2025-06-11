import './App.css'
import Evento from './componentes/Evento'
import Form from './componentes/Form'

function App() {
 
  return (
    <>
       <h1>Testando Eventos</h1>
        <Evento numero={1}/>
        <Evento numero={2}/>
        <Form/>
    </>
  )
}

export default App
