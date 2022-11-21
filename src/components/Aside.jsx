import React from 'react'
import mario from "../assets/img/imgny.jpg";
import Contact from '../pages/Contact'
import { CV } from "../utils/cv";
import './styles/Aside.scss';

const Aside = () => {

    const { hero } = CV;

  return (
    <div className='aside'>
        <img src={mario} alt="profile" />
        <Contact info={hero} />
    </div>
  )
}

export default Aside