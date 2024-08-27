//import './App.css';
import React from "react";
import About from './components/About';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <main>
      <div className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}

export default App;
