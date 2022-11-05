import './Experience.scss';

const Experience = ({ experience }) => {
  return (
    <div className='experience'>
      <h2>Experience</h2>
      {experience.map((experience, index) => (
        <div className='div' key={index}>
          <h3>{experience.name}</h3>
          <p>{experience.description}</p>
          <h5>{experience.where}</h5>
          <h6>{experience.date}</h6>
        </div>
      ))}
    </div>
  );
};

export default Experience;
