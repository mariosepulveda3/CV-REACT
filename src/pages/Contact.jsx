import React, { useState } from "react";
import "./styles/Contact.scss";

const Contact = ({ info }) => {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="contact">
      <button onClick={() => setShowContact(!showContact)}>Contact</button>
      {showContact ? (
        <div className="container">
          <a href="mailto:mariosepul3@gmail.com?Subject=Enhorabuena!%20Queremos%20contrarte">
            {info.email}
          </a>
          <p>{info.fullName}</p>
          <p>{info.city}</p>
          <p>{info.birthDate}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Contact;
