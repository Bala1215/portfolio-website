import React from 'react';
import { Element } from 'react-scroll';
import "../About/About.css";


function About() {

  
  return (
    <Element className="about" id="about">
      <div className='about__wrapper'>
        <div className='about__name'>
          <h1 id="name">Bala Chellamma V</h1>
          <h3>B.Sc Computer Science Graduate</h3>
          
          <div className='about__button'>
            <a href='#'>
              <button className='cv' >Cover Letter</button>
            </a>  
            <a href='#'>  
              <button className='resume'>Resume</button>
            </a>
          </div>

        </div>
        <div className='about__description'>
          <h2>I build things for the Web.</h2>
          <h1 className='desc'>I'm more passionate to turning ideas into realtime products</h1>
        </div>
      </div>
    </Element>
  )
}

export default About