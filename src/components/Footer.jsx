import "./Footer.scss";

const Footer = ({ info }) => {
  return (
    <div className="footer">
      <h3>CV CREATED WITH REACT</h3>
      <div className="info">
        <h4>{info.city} -</h4>
        <h4>- {info.birthDate}</h4>
      </div>
    </div>
  );
};

export default Footer;
