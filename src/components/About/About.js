import React from 'react';
import { Element } from 'react-scroll';
import "../About/About.css";
import  RESUME_BALA_CHELLAMMA_V from '../About/RESUME_BALA_CHELLAMMA_V.pdf';
import  COVER_LETTER_BALA_CHELLAMMA_V from '../About/COVER_LETTER_BALA_CHELLAMMA_V.pdf';



function About() {

  
  return (
    <Element className="about" id="about">
      <div className='about__wrapper'>
        <div className='about__name'>
          <h1 id="name">Bala Chellamma V</h1>
          <h3>B.Sc Computer Science Graduate</h3>
          
          <div className='about__button'>
            <a href={COVER_LETTER_BALA_CHELLAMMA_V}
               download="COVER_LETTER_BALA_CHELLAMMA-PDF-document"
               target="_blank"
               rel="noopener noreferrer">
              <button className='cv' >Cover Letter</button>
            </a>  
            <a href={RESUME_BALA_CHELLAMMA_V}
               download="RESUME_BALA_CHELLAMMA-PDF-document"
               target="_blank"
               rel="noopener noreferrer">  
              <button className='resume' >Resume</button>
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