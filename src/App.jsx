import './App.scss';
import About from './components/About';
import Hero from './components/Hero';
import { CV } from './utils/cv';

const App = () => {

  const {hero} = CV;

  return (
    <div className="App">
      <nav></nav>
      <aside></aside>
      <main>
        <Hero info={hero} />
        <About metadata={hero.aboutMe} />
      </main>
      <fotter></fotter>       
    </div>
  );
};

export default App;
