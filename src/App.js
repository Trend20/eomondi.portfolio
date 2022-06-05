import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Navbar from './components/Navbar'
import Start from './components/Start'
import Work from './components/Work';
function App() {
  return (
    <div className="app">
      <Navbar about={"About"} experience={"Experiences"} work={"Work"} contact={"Contact"} />
      <Start />
      <AboutMe />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
