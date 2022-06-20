import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Start from './components/Start'
import Work from './components/Work';
function App() {

  // AOS.init()
  
  return (
    <div className="app">
      <Navbar about={"About"} experience={"Experiences"} work={"Work"} contact={"Contact"} />
      <Start />
      <AboutMe />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
