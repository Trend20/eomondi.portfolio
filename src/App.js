import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
function App() {
  return (
    <div className="app">
      <Navbar about={"About"} experience={"Experiences"} work={"Work"} contact={"Contact"} />
      <About />
    </div>
  );
}

export default App;
