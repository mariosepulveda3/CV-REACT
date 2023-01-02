import React, { useState } from "react";
import About from "../pages/About";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Habilities from "../pages/Habilities";
import Languages from "../pages/Languages";
import { CV } from "../utils/cv";
import "./styles/Menu.scss";

const Menu = () => {
  const [show, setShow] = useState("about");
  const { hero, education, experience, languages, habilities } = CV;

  return (
    <div className="menu">
      <div>
        <button onClick={() => setShow("about")}>aboutMe</button>
        <button onClick={() => setShow("education")}>studies</button>
        <button onClick={() => setShow("experience")}>experience</button>
        <button onClick={() => setShow("languages")}>languages</button>
        <button onClick={() => setShow("habilities")}>skills</button>
      </div>
      <div>
        {show === "about" && <About metadata={hero.aboutMe} />}
        {show === "education" && <Education education={education} />}
        {show === "experience" && <Experience experience={experience} />}
        {show === "languages" && <Languages languages={languages} />}
        {show === "habilities" && <Habilities habilities={habilities} />}
      </div>
    </div>
  );
};

export default Menu;
