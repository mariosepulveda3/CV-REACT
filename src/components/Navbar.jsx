import React from "react";
import "./styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <a href="https://github.com/mariosepulveda3" target="blank">
          My GitHub
        </a>
      </div>
      <a
        href="https://www.linkedin.com/in/mario-sep%C3%BAlveda-donoso-1aa959142"
        target="blank"
      >
        LinkedIn
      </a>
      <a href="https://vercel.com/mariosepulveda3" target="blank">
        Projects
      </a>
    </div>
  );
};

export default Navbar;
