import React from 'react';
import './App.css'
// import Props from './componentes/Props'
// import Escopo from './componentes/Escopo'
// import Info1v from './componentes/info1v'
import Children from './componentes/Children'

function App() {

  return (
    <>
    {/* <Props nome={"React PIU"} newname = {"teste"}/> */}
      <Escopo/>
      <Info1v/>
      <Children>
        <Card/>
      </Children>
    </>
  )
}
export default App
