import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Listas from './components/Dashboard'
import Listagem from './components/Listagem'
import Listagem2 from './components/Listagem2'
import Contador from './components/Contador'
import './App.css'

function App() {
 
  return (
    <>
      <Contador/>
      <Listas>
          <Listagem/>
          <Listagem2/>
      </Listas>
    </>
  )
}

export default App
