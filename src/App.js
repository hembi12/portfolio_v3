// src/App.js
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Resume from './components/resume';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-16">
        {/* pt-16 para compensar el navbar fijo */}
        <Home />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;