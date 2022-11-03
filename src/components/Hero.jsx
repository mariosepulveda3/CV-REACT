import './Hero.scss';

const Hero = ({info}) => {

  return (
    
    <div className='hero'>
        <h1 className='h1'>{info.fullName}</h1>
        {/* <h3>{info.email}</h3>
        <h3>{info.birthDate}</h3>
        <h3>{info.city}</h3>
        <h3>{info.phone}</h3> */}

        {/* {keys.map((keyName) => {
                return (
                    <h3>{keyName}: {info[keyName]}</h3>
                );
            })} */}

    </div>
  );
};

export default Hero;