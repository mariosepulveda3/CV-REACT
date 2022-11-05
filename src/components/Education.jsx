import "./Education.scss";

const Education = ({ education }) => {
  return (
    <div className="education">
      <h2>Studies</h2>
      {education.map((education, index) => (
        <div className="box" key={index}>
          <div>
            <h4>{education.name}</h4>
          </div>
          <div>
            <p>{education.where}</p>
            <p>{education.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
