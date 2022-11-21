import "./styles/Hero.scss";

const Hero = ({ info }) => {
  return (
    <div className="hero">
      <div className="name">
        <h1>{info.fullName}</h1>
      </div>
    </div>
  );
};

export default Hero;
