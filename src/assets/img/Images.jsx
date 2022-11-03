import React, { useState } from 'react'
import { IMG } from "./Img";

const Images = ({images}) => {
  const arrayImg = [{images}];
  const [image, setImage] = useState(arrayImg[0]);

  const changeImg = () => {
    const positionRandom = Math.floor(Math.random() * arrayImg.length);
    if (arrayImg[positionRandom] === image && positionRandom !== 0) {
      setImage(arrayImg[positionRandom - 1]);
    } else if (arrayImg[positionRandom] === image && positionRandom === 0) {
      setImage(arrayImg[positionRandom + 1]);
    } else {
      setImage(arrayImg[positionRandom]);
    }
  };

  return (
    <div>
      <button onClick={changeImg}>CAMBIAR IMAGEN</button>
      <img width="200px" src={image} alt="imagen aleatoria" />
    </div>
  );
};

export default Images;
