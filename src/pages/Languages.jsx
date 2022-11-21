import "./styles/Languages.scss";

const Languages = ({ languages }) => {
  return (
    <div className="languages">
      <h2>Languages</h2>
      <div className="container">
      {languages.map((languages, index) => (
        <div className="div" key={index}>
          <h4>{languages.language}</h4>
          <p>Written: {languages.wrlevel}</p>
          <p>Spoken: {languages.splevel}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Languages;
