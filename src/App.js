//import './App.css';
import React from "react";
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <main>
      <div className="text-gray-400 bg-gray-900 body-font">
        <About />
      </div>
    </main>
  );
}

export default App;
