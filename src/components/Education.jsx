import './Education.scss';

const Education = ({ education }) => {
  return (
    <div className='education'>
      <h2 className='h2'>Educación</h2>
      {education.map((education, index) => (
        <div className='box' key={index}>
          <p>{education.name}</p>
          <p>{education.where}</p>
          <p>{education.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
