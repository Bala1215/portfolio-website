import React from 'react';
import { Element } from 'react-scroll';
import "../Contact/Contact.css";

// import githubpic from "../Contact/githubpic.png";
// import gmailpic from "../Contact/gmailpic.png";
// import linkedinpic from "../Contact/linkedinpic.png";



function Contact() {
  return (
    <Element className="contact-container" id="contact">
      <div className='contact-wrapper'>

        <div className='contact-card'>
          <a href='mailto: balachellamma@gmail.com'>
            <button className='gmail-btn'></button>  
          </a>  
        </div>

        <div className='contact-card'>
           {/* <img src={linkedinpic} alt="LinkedIn"/> 
              */}
           <a href='https://www.linkedin.com/in/bala-chellamma-v-3b6712254/?msgControlName=view_message_button&msgConversationId=2-NDJmMjY0MTgtZmUyMC00ZjQxLWFhN2EtNWEwMzM4MDNjZGRmXzAxMg%3D%3D&msgOverlay=true'>
            <button className='linkedin-btn'></button>  
          </a>   
        </div>

        <div className='contact-card'>
         <a href='https://github.com/Bala1215'>
            <button className='github-btn'>
                {/* <img src={githubpic} alt="Github"/> */}
            </button>
         </a>   
           
        </div>

       

      </div>
    </Element>
  )
}

export default Contact