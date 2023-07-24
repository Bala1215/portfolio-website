import React from 'react';
import { Element } from 'react-scroll';
import "../About/About.css";


function About() {

  
  return (
    <Element classname="about" id="about">
      <div className='about__wrapper'>
        <div className='about__name'>
          <h1 id="name">Bala Chellamma V</h1>
          <h3>B.Sc Computer Science Graduate</h3>
          
          <div className='about__button'>
            {/* <a href='#name'> */}
              <button className='see' >See Magic</button>
              {/* <button className='hide'>Hide Magic</button> */}
            {/* </a> */}
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