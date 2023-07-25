import React from 'react'
import { Element } from 'react-scroll';
import "../Project/Project1.css";
import amazonclonepic from "./amazonclonepic.png";
import emojisearchpic from "./emojisearchpic.jpg";
import googlekeepclonepic from "./googlekeepclonepic.png";
import usermanagementpic from "./usermanagementpic.png";


function Project1() {
  return (
     <Element className='project-container' id='projects'>
       <div className='projects-wrapper'>
      
         
        <div className='project-card'>
        <h1 className="project-title">amazon clone</h1>
           <img src={amazonclonepic} 
            alt="amazon clone" className='project-img'/>
         
         
         <div className='project-info'>
           <h1>amazon clone</h1>
           <h3>technology used : <span>react js</span></h3>
           <h4>Using useState and useEffect</h4>
             <div className='project-info-btn'>
               <button className='project-btn-1'>View Source Code</button>
               <button className='project-btn-2'>View Project</button>
             </div>
          </div>
        </div>

        <div className='project-card'>
           <h1 className="project-title">user management</h1>
           <img src={usermanagementpic} 
            alt="user management" className='project-img'/>
         
         
         <div className='project-info'>
           <h1>user management</h1>
           <h3>technology used : <span>react js</span></h3>
           <h4>Using useState and useEffect</h4>
             <div className='project-info-btn'>
               <button className='project-btn-1'>View Source Code</button>
               <button className='project-btn-2'>View Project</button>
             </div>
          </div>
        </div>

        <div className='project-card'>
        <h1 className="project-title">google keep clone</h1>
           <img src={googlekeepclonepic} 
            alt="google keep clone " className='project-img'/>
         
         
         <div className='project-info'>
           <h1>google keep clone</h1>
           <h3>technology used : <span>react js</span></h3>
           <h4>Using useState and useEffect</h4>
             <div className='project-info-btn'>
               <button className='project-btn-1'>View Source Code</button>
               <button className='project-btn-2'>View Project</button>
             </div>
          </div>
        </div>

        <div className='project-card'>
        <h1 className="project-title">emoji search</h1>
           <img src={emojisearchpic} 
            alt="amazon clone" className='project-img'/>
         
         
         <div className='project-info'>
           <h1>Emoji Search</h1>
           <h3>technology used : <span>react js</span></h3>
           <h4>Using useState and useEffect</h4>
             <div className='project-info-btn'>
               <a><button className='project-btn-1'>View Source Code</button></a>
               <a><button className='project-btn-2'>View Project</button></a>
             </div>
          </div>
        </div>

      </div> 

     </Element>
  )
}

export default Project1