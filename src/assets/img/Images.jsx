// import React, { useState } from 'react';
// import './Images.scss';
// import { IMG } from "./Img";

// const Images = ({images}) => {
//   const arrayImg = [{images}];
//   const [image, setImage] = useState(arrayImg[0]);

//   const changeImg = () => {
//     const positionRandom = Math.floor(Math.random() * arrayImg.length);
//     if (arrayImg[positionRandom] === image && positionRandom !== 0) {
//       setImage(arrayImg[positionRandom - 1]);
//     } else if (arrayImg[positionRandom] === image && positionRandom === 0) {
//       setImage(arrayImg[positionRandom + 1]);
//     } else {
//       setImage(arrayImg[positionRandom]);
//     }
//   };

//   return (
//     <div className='images'>
//       <img width="200px" src={image} alt="imagen" />
//       <button onClick={changeImg}>CAMBIAR IMAGEN</button>
//     </div>
//   );
// };

// export default Images;
