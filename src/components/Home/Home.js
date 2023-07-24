import React from 'react';
import { Element } from 'react-scroll';
import "../Home/Home.css";
import Beagle from "../Home/beagle.png"



function Home() {
  return (
    <Element classname="home" id="home">
    <div className='home'>
     <div className='home__heading'>
       <h1>PORTFOLIO</h1>
     </div> 
      
       <div className='home__img'>
         <img src={Beagle} alt="img"/>
  
       </div>

      </div>
    </Element>
  )
}

export default Home