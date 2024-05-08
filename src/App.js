import './App.css';
import Header from './Components/Header';
import ProjectCard from './Components/ProjectCard';
import Contact from './Components/Contact';
import Intro from './Components/Intro';


function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="Main">
        <Intro />

        <h2 id="Projects">Projects</h2>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />

        <Contact />
      </div>
    </div>
  );
}

export default App;
