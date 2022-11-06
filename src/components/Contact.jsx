import React, { useState } from "react";
import "./Contact.scss";

const Contact = ({ info }) => {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="contact">
      <button onClick={() => setShowContact(!showContact)}>Contact</button>
      {showContact ? (
        <div className="container">
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
