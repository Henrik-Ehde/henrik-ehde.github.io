import './App.css';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Intro from './Components/Intro';
import Projects from './Components/Projects';


function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="Main">
        <Intro />

        <Projects />

        <Contact />
      </div>
    </div>
  );
}

export default App;
