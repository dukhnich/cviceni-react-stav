import { useState } from 'react';

// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypiš do `<output></output>` jejich součet.

export const ZaverecnyBonus4 = () => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  return (
    <>
      <input type="number" defaultValue={n1} onChange={e => setN1(Number(e.target.value))}/> +{' '}
      <input type="number" defaultValue={n2} onChange={e => setN2(Number(e.target.value))}/> = <output>{n1 + n2}</output>
    </>
  )
}
