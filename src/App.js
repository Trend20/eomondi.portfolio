import {useContext, Suspense, lazy} from "react";
import "./App.css";
import "aos/dist/aos.css";
import { ThemeContext } from "./context/ThemeContext";
import ErrorBoundary from "./components/Error";
import Loader from "./common/Loader";
const AboutMe = lazy(() => import("./components/about/AboutMe"));
const Contact = lazy(() => import("./components/contact/Contact"));
// const Experience = lazy(() => import("./components/experience/Experience"));
const Navbar = lazy(() => import("./components/nav/Navbar"));
const Start = lazy(() => import("./components/start/Start"));
const Work = lazy(() => import("./components/work/Work"));

const App = () =>{
  // AOS.init()
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`btn px-52 ${darkMode ? "btn-dark" : "btn-light"}`} id="app">
     <ErrorBoundary>
         <Suspense fallback={<Loader />}>
             <Navbar />
             <Start />
             <AboutMe />
             <Work />
             <Contact />
         </Suspense>
     </ErrorBoundary>
    </div>
  );
}

export default App;
