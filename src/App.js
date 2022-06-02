import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar about={"About"} experience={"Experiences"} work={"Work"} contact={"Contact"} />
    </div>
  );
}

export default App;
