import React from 'react';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Home from './components/Home/Home';
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';
import "./App.css"

function App() {
  return (
    <div className='App'>
      <Header/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
    </div>
  )
}

export default App;