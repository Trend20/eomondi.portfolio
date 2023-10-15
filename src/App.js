import "./App.css";
import "aos/dist/aos.css";
import AboutMe from "./components/about/AboutMe";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Navbar from "./components/nav/Navbar";
import Start from "./components/start/Start";
import Work from "./components/work/Work";
function App() {
  // AOS.init()

  return (
    <div className="app">
      <Navbar
        about={"About"}
        services={"Services"}
        experience={"Experiences"}
        work={"Work"}
        contact={"Contact"}
      />
      <Start />
      <AboutMe />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
