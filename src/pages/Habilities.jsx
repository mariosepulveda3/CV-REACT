import { useState } from "react";
import "./styles/Habilities.scss";

const Habilities = ({ habilities }) => {
  const numHabilities = habilities.length;
  const [hability, setHability] = useState(habilities[0]);
  const [habilityIndex, setHabilityIndex] = useState(0);

  const changeHab = () => {
    const positionHability = habilityIndex + 1;
    if (positionHability >= numHabilities) {
      setHabilityIndex(0);
      setHability(habilities[0]);
    } else {
      setHabilityIndex(positionHability);
      setHability(habilities[positionHability]);
    }
  };

  return (
    <div className="habilities">
      <h2>Skills</h2>
      <button onClick={changeHab}>Change Skill</button>
      <p>{hability}</p>
    </div>
  );
};

export default Habilities;
