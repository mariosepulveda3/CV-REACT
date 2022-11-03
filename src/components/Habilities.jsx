import { useState } from 'react';
import './Habilities.scss';

const Habilities = ({habilities}) => {

  const [hability, setHability] = useState(habilities[0]);

  const changeHab = () => {
    const positionHab = Math.floor(Math.random() * habilities.length);
    setHability(habilities[positionHab]);
  }

  return (
    <div className='habilities'>
        <h2 className='h2'>Habilidades</h2>
        <button onClick={changeHab}>Cambia de habilidad</button>
        <p className='p'>{hability}</p>
    </div>
  )
}

export default Habilities;