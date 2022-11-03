import "./App.scss";
import About from "./components/About";
import Hero from "./components/Hero";
import Education from './components/Education';
import Experience from './components/Experience';
import Habilities from './components/Habilities';
import Languages from './components/Languages';
import { CV } from "./utils/cv";
// import { info } from 'sass';
// import mario from './assets/img/imgprofile.jpg';
// import Images from "./assets/img/Images";

const App = () => {
  const { hero, education, languages, habilities, experience } = CV;

  return (
    <div className="app">
      <nav>
        <a href="https://github.com/mariosepulveda3" target="blank">Mi GitHub</a>
        <a href="https://www.linkedin.com/in/mario-sep%C3%BAlveda-donoso-1aa959142" target="blank">LinkedIn</a>
        <a href="ece">Contacto</a>
      </nav>
      <aside>
        {/* <Images/> */}
      </aside>
      <main>
        <Hero info={hero} />
        <About metadata={hero.aboutMe} />
        <Education education={education}/>
        <Experience experience={experience}/>
        <Languages languages={languages}/>
        <Habilities habilities={habilities}/>
      </main>
      <fotter></fotter>
    </div>
  );
};

export default App;
