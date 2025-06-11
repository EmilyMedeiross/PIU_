import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tema from './componentes/Dashboard'
import Listagem from './componentes/Listagem'
import './App.css'

function App() {
 
  return (
    <>
      <Tema>
          <Listagem/>
      </Tema>
    </>
  )
}

export default App
