import { useState } from 'react';

// Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

export const Uloha8 = () => {
  const [status, setStatus] = useState('možná');
  const clickHandler = () => {
    switch (status) {
      case 'možná': setStatus('ano');
        break;
      case 'ano': setStatus('ne');
        break;
      case 'ne': setStatus('možná');
        break;
    }
  }
  return (
    <>
      <h3>Prší v Brně: {status}</h3>
      <button onClick={clickHandler}>změnit</button>
    </>
  )
}
