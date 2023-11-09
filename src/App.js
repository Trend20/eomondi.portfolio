import { useContext } from "react";
import "./App.css";
import "aos/dist/aos.css";
import AboutMe from "./components/about/AboutMe";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Navbar from "./components/nav/Navbar";
import Start from "./components/start/Start";
import Work from "./components/work/Work";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  // AOS.init()
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} id="app">
      <Navbar />
      <Start />
      <AboutMe />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
