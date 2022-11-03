import "./Languages.scss";

const Languages = ({ languages }) => {
  return (
    <div className="languages">
      <h2 className="h2">Idiomas</h2>
      {languages.map((languages, index) => (
        <div className="div" key={index}>
          <h4>{languages.language}</h4>
          <p>Escrito: {languages.wrlevel}</p>
          <p>Hablado: {languages.splevel}</p>
        </div>
      ))}
    </div>
  );
};

export default Languages;
