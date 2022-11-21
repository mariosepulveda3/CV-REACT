import React, { useState } from "react";
import "./styles/Contact.scss";

const Contact = ({ info }) => {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="contact">
      <button onClick={() => setShowContact(!showContact)}>Contact</button>
      {showContact ? (
        <div className="container">
          {/* <a href="mailto:mariosepulveda@correo.com?Subject=Aquí%20el%20asunto%20del%20mail">{info.email}</a> */}
          <p>{info.email}</p>
          <p>{info.phone}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Contact;
