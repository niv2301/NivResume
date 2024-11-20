// // import logo from './logo.svg';
import './App.css';

import React from 'react';
import Header from './components/Header';
import SkillsCarousel from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-blue-500 text-center h-screen">
      {/* This div should have a blue background if Tailwind is working */}
      <Header />
      <SkillsCarousel />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;

