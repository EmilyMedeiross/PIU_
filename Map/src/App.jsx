import './App.css'
import Lista from './componentes/Lista'

function App() {

  const meusItens =['React', 'Vue', 'Angular']

  return (
    <>
        <h1>Renderização de Listas</h1>
        <Lista itens = {meusItens}/>
        <Lista itens ={""} />
    </>
  )
}

export default App
