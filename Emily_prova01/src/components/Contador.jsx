import React, { useState } from 'react';

 export default function Contador() {
  // Inicializa o contador com o valor 0
  const [contador, setContador] = useState(0);

  // Define a função que incrementa o contador
  const handleClick = () => {
    // Atualiza o estado do contador para o valor atual + 1
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Número de cliques: {contador}</p>
      <button onClick={handleClick}>Clique aqui!</button>
    </div>
  );
}

