import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import DropDown from './componentes/DropDown'
import Header from './componentes/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {/* <DropDown/> */}
    </>
  )
}

export default App
