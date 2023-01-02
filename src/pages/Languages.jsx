import "./styles/Languages.scss";

const Languages = ({ languages }) => {
  return (
    <div className="languages">
      <h2>Languages</h2>
      {languages.map((languages, index) => (
        <div className="div" key={index}>
          <h3>{languages.language}</h3>
          <p>Written: {languages.wrlevel}</p>
          <p>Spoken: {languages.splevel}</p>
        </div>
      ))}
    </div>
  );
};

export default Languages;
