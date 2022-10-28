import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
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
// import Faq from './components/Faq';
import AnimatedCursor from "react-animated-cursor"
import HashLoader from "react-spinners/HashLoader";
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  const  [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
}, []);

  return (
    <div>
      <AnimatedCursor
      innerSize={9}
      outerSize={15}
      color='102, 204, 123'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
      />

{
      loading ?

      <div className="loader">
      <HashLoader
      color={"#66CC7B"} 
      loading={loading} 
      size={100} />
     </div>

     :
     
      <>
      <Navbar/>
      <Home/>
      <About/>
      <Features/>
      <Benefit/>
      <Regiscoin/>
      <How/>
      <Team/>
      <Persona/>
      {/* <Faq/> */}
      <Roadmap/>
      <Contact/>

      </>

}

      
 
    </div>
  );
}

export default App;
