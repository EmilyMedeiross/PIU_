import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tema from './componentes/Tema'
import Galeria from './componentes/Galeria'

import image1 from './assets/moranguinho.png'
import image2 from './assets/amora.png'
import image3 from './assets/laranjinha.png'
import image4 from './assets/Limaozinho.png'
import image5 from './assets/mirtilo.png'
import image6 from './assets/Ameixinha.png'


const personagens = [

  {
    id:1,
    name: 'Moranguinho',
    descricao: "Aquela que representa a fruta morango",
    image: image1 
  },
  { 
    id:2,
    name:"Amora",
    descricao: "Aquela que representa a fruta Amora",
    image:image2
  },
  {
    id:3,
    name:"Laranjinha",
    descricao:"Aquela que representa a fruta Laranja",
    image:image3
  },
  {
    id:4,
    name:"Limaozinho",
    descricao:"Aquela que represneta a fruta Limão",
    image: image4
  },
  {
    id:5,
    name:"Mirtilo",
    descricao:"Aquela que represneta a fruta Mirtilo",
    image: image5
  },
  {
    id:6,
    name:"Ameixinha",
    descricao:"Aquela que represneta a fruta Ameixa",
    image: image6
  }
]


import './App.css'

function App() {

  return (
    <>
      <h2>Galeria</h2>

      <Tema>
          <Galeria personagens={personagens}/>
      </Tema>
          
    </>
  )
}

export default App
