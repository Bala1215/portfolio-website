import React from 'react';
import {Link} from 'react-scroll';
import "../Header/Header.css";


function Header() {
  return (
    <div className='header'>
      
      <div className='header__left'>
        <h1>Portfolio</h1>
      </div>

      <div className='header__right'>
         <Link to='home' smooth={true} duration={500}>
           <h2>Home</h2>
         </Link>

         <Link to='about' smooth={true} duration={500}>
           <h2>About</h2>
         </Link>

         <Link to='skills' smooth={true} duration={500}>
           <h2>Skills</h2>
         </Link>

         <Link to='projects' smooth={true} duration={500}>
           <h2>Projects</h2>
         </Link>

         <Link to='contact' smooth={true} duration={500}>
           <h2>Contact</h2>
         </Link>
      </div>
    </div>
  )
}

export default Header