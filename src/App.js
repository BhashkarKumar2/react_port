import './App.css';
import AboutMe from './components/Aboutme';
import Certificate from './components/Certificate'
import ConatctMe from './components/ContactMe'
import Education from './components/Education';
import Home from './components/Home';
import Nav from './components/Nav';
import Skills from './components/Skills';
import './App.css';
function App() {
  return (
    <div className="App">
    <Nav/>
    <Home/>
    <AboutMe/>
    <Education/>
    <Skills/>
    <Certificate/>
    <ConatctMe/>
    
    
    </div>
  );
}

export default App;
