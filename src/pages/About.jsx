import "./styles/About.scss";

const About = ({ metadata }) => {
  return (
    <div className="about">
      <h2>aboutMe</h2>
      <div>
        {metadata.map((element) => {
          return <p key={JSON.stringify(element.info)}>{element.info}</p>;
        })}
      </div>
    </div>
  );
};

export default About;
