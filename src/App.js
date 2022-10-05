import './App.css';
// import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import Benefit from './components/Benefit';
import Features from './components/Features';
import Regiscoin from './components/Regiscoin';
import How from './components/How';
import Team from './components/Team';
import Persona from './components/Persona';
import Faq from './components/Faq';
import Getstarted from './components/Getstarted';
function App() {
  return (
    <div>
      <Navbar/>
      {/* <Home/> */}
      <About/>
      <Features/>
      <Benefit/>
      <Regiscoin/>
      <How/>
      <Team/>
      <Persona/>
      <Faq/>
      <Getstarted/>
      <Roadmap/>
      <Contact/>
 
    </div>
  );
}

export default App;
