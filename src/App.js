// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Resume from './components/resume';
import Contact from './components/contact';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Barra de progreso de desplazamiento */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

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