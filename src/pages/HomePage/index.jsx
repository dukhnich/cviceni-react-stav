import { Uloha1 } from '../../components/Uloha1';
import { Uloha2 } from '../../components/Uloha2';
import { Uloha3 } from '../../components/Uloha3';
import { Uloha4 } from '../../components/Uloha4';
import { Uloha5 } from '../../components/Uloha5';
import { Uloha6 } from '../../components/Uloha6';
import { Uloha7 } from '../../components/Uloha7';
import { Uloha8 } from '../../components/Uloha8';
import { ZaverecnyBonus1 } from '../../components/ZaverecnyBonus1';

import './style.css';

export const HomePage = () => (
  <div className='container'>
    <h1>React stav</h1>
    <h2>Úloha 1</h2>
    <Uloha1 />
    <h2>Úloha 2</h2>
    <Uloha2 />
    <h2>Úloha 3</h2>
    <Uloha3 />
    <h2>Úloha 4</h2>
    <Uloha4 />
    <h2>Úloha 5</h2>
    <Uloha5 />
    <h2>Úloha 6</h2>
    <Uloha6 />
    <h2>Úloha 7</h2>
    <Uloha7 />
    <h2>Úloha 8</h2>
    <Uloha8 />
    <h2>Zaverecny Bonus 1</h2>
    <ZaverecnyBonus1 />
  </div>
);
