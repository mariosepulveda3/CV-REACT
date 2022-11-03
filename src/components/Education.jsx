import './Education.scss';

const Education = ({ education }) => {
  return (
    <div className='education'>
      <h2 className='h2'>Educación</h2>
      {education.map((education, index) => (
        <div className='box' key={index}>
          <h4>{education.name}</h4>
          <p>{education.where}</p>
          <p>{education.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
