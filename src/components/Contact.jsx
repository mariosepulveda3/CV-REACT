import React, { useState } from "react";
import "./Contact.scss";

const Contact = ({ info }) => {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="contact">
      <button onClick={() => setShowContact(!showContact)}>Contacto</button>
      {showContact ? (
        <div className="container">
          <p>{info.email}</p>
          <p>{info.phone}</p>
          <p>{info.city}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Contact;
