//importing all the components

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        {/* Dark mode toggle */}
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>

        <Navbar />

        <Hero />

        <Skill />

        <Project />

        <About />

        <Contact />

        <Footer />
      </div>
    </>
  );
}

export default App;
