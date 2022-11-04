import React from "react";
import "./Contact.scss";

const Contact = ({ info }) => {
  return (
    <div>
      <p>{info.email}</p>
      <p>{info.phone}</p>
      <p>{info.city}</p>
    </div>
  );
};

export default Contact;
console.log(Contact);
