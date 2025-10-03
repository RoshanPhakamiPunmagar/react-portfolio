import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

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
