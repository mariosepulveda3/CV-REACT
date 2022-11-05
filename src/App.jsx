import "./App.scss";
import { CV } from "./utils/cv";
import Contact from "./components/Contact";
import About from "./components/About";
import Hero from "./components/Hero";
import Education from './components/Education';
import Experience from './components/Experience';
import Habilities from './components/Habilities';
import Languages from './components/Languages';
import mario from './assets/img/imgny.jpg';
import React from "react";
// import { info } from "sass";
// import Fotter from "./components/Fotter";

const App = () => {
  const { hero, education, languages, habilities, experience } = CV;

  // const [contacts, setContacts] = useState(true);

  return (
    <div className="app">
      <nav>
        <a href="https://github.com/mariosepulveda3" target="blank">My GitHub</a>
        <a href="https://www.linkedin.com/in/mario-sep%C3%BAlveda-donoso-1aa959142" target="blank">LinkedIn</a>
        <a href="d">Projects</a>
      </nav>
      <aside>
        <img src={mario} alt="profile"/>
        <Contact info={hero}/>
      </aside>
      <main>
        <Hero info={hero} />
        <About metadata={hero.aboutMe} />
        <Education education={education}/>
        <Experience experience={experience}/>
        <Languages languages={languages}/>
        <Habilities habilities={habilities}/>
      </main>
      <fotter>
      </fotter>
    </div>
  );
};

export default App;
