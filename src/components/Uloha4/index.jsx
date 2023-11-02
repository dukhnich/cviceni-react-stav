import { useState } from 'react';

import './carousel.css';

// Zadání 1: Nachystejte si adresy obrázků níže do pole.
// Zadání 2: Přidejte komponentě stavovou proměnnou, ve které bude index právě aktivního obrázku. Na začátku 0.
// Zadání 3: Pro `src` v tagu `img` použijte adresu z pole pod správným indexem.
// Zadání 4: Tlačítky ← a → měňte index.

// Bonus: Pozor na krajní hodnoty. Pokud dojdete na konec nebo začátek pole, tak už v daném směru neměňte index, aby neutekl mimo položky v poli. Nastavte tlačítkům atribut `disabled`, pokud v jejich směru už není žádný obrázek.

const sources = [
  'https://source.unsplash.com/WLUHO9A_xik/880x500',
  'https://source.unsplash.com/DA1eGglMmlg/880x500',
  'https://source.unsplash.com/kTxL6le0Wgk/880x500',
  'https://source.unsplash.com/7go5UASxmDY/880x500',
  'https://source.unsplash.com/YmATDIFsCmQ/880x500',
]

export const Uloha4 = () => {
  const [index, setIndex] = useState(0);
  const summIndex = (n) => {
    const summ = n + index;
    if (summ < 0) {
      setIndex(sources.length + summ);
      return;
    }
    if (summ >= sources.length) {
      setIndex(summ - sources.length);
      return;
    }
    setIndex(n + index);
  };
  return (
    <div className="carousel">
      <button className="carousel__predchozi" aria-label="předchozí" onClick={() => summIndex(-1)}>
        ←
      </button>
      <div className="carousel__media">
          <img
            className="carousel__image"
            src={sources[index]}
            alt=""
          />
      </div>
      <button className="carousel__dalsi" aria-label="další" onClick={() => summIndex(1)}>
        →
      </button>
    </div>
  );
};
