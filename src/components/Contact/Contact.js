import React from 'react';
import { Element } from 'react-scroll';
import "../Contact/Contact.css";

function Contact() {
  return (
    <Element className="contact-container" id="contact">
      <div className='contact-wrapper'>

        <div className='contact-card'>
           <img src="" alt="Gmail"/>
        </div>

        <div className='contact-card'>
           <img src="" alt="LinkedIn"/>   
        </div>

        <div className='contact-card'>
         <a>
            <button>
                <img src="" alt="Github"/>
            </button>
         </a>   
           
        </div>

        <div className='contact-card'>
           <img src="" alt="Naukri"/> 
        </div>

      </div>
    </Element>
  )
}

export default Contact