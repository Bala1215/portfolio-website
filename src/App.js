import React from 'react';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Home from './components/Home/Home';
import Skill from './components/Skill/Skill';
import "./App.css"
import Project1 from './components/Project/Project1';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Home/>
      <About/>
      <Skill/>
      <Project1/>
      <Contact/>
    </div>
  )
}

export default App;