import React from "react";
import "./styles/Navbar.scss";

const Navbar = ({info}) => {
  return (
    <div className="navbar">
      <div>
        <a href="{info.gitHub}" target="blank">
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
      <a href="https://portfolio-mario-sepulveda-9eeirle09-mariosepulveda3.vercel.app/" target="blank">
        Portfolio
      </a>
    </div>
  );
};

export default Navbar;
