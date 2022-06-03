import './App.css';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar'
import Start from './components/Start'
function App() {
  return (
    <div className="app">
      <Navbar about={"About"} experience={"Experiences"} work={"Work"} contact={"Contact"} />
      <Start />
      <AboutMe />
    </div>
  );
}

export default App;
