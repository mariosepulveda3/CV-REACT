import "./App.scss";
import { CV } from "./utils/cv";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Aside from "./components/Aside";

const App = () => {
  
  const { hero } = CV;

  return (
    <div className="app">
      <nav>
        <Navbar />
      </nav>
      <aside>
      <Aside/>
      </aside>
      <main>
        <Hero info={hero} />
        <Menu />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
