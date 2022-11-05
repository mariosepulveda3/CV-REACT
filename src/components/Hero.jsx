import './Hero.scss';

const Hero = ({info}) => {

  return (
    
    <div className='hero'>
        <h1>
        <div>
          <div className="name">
            <div>{info.fullName}</div>
          </div>
        </div>
      </h1>

    </div>
  );
};

export default Hero;