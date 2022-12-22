import { useState } from "react";
import "./styles/Habilities.scss";

const Habilities = ({ habilities }) => {
  const [hability, setHability] = useState(habilities[0]);

  const changeHab = () => {
    const positionHab = Math.floor(Math.random() * habilities.length);
    setHability(habilities[positionHab]);
  };

  return (
    <div className="habilities">
      <h2>Skills</h2>
      <button onClick={changeHab}>changeSkill</button>
      <p>{hability}</p>
    </div>
  );
};

export default Habilities;
