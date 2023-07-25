import React from 'react';
import { Element } from 'react-scroll';
import "../Project/Project.css";
import amazonclonepic from "./amazonclonepic.png";
import emojisearchpic from "./emojisearchpic.jpg";
import googlekeepclonepic from "./googlekeepclonepic.png";
import usermanagementpic from "./usermanagementpic.png";


function Project() {
  return (
    <Element className="project-container" id="projects">
      <div className='projects-wrapper'>
        
        <div className='project-col'>
            <button>
                <img className="amazonclonepic" 
                src={amazonclonepic} alt="Amazon Clone"/>
                <h3>Amazon Clone</h3>
            </button>
          <div className='project-desc'>
           <h1>amazon clone</h1>
           <h3>technology used : react js</h3>
           <h4>Using useState and useEffect</h4>
         </div>
        </div>

        <div className='project-col'>
          <button >
              <img className="usermanagementpic" 
              src={usermanagementpic} alt="User Management"/>
              <h3>User Management</h3>
          </button>
          <div className='project-desc'>
           <h1>user management</h1>
           <h3>technology used : react js</h3>
           <h4>Using useState and useEffect</h4>
         </div>
        </div>
        
        <div className='project-col'>
          <button>
           <img className="googlekeepclonepic" 
           src={googlekeepclonepic} alt="Google Keep Clone"/>
           <h3>Google Keep Clone</h3>
          </button>
          
          <div className='project-desc'>
           <h1>google keep clone</h1>
           <h3>technology used : react js</h3>
           <h4>Using useState and useEffect</h4>
          </div>
        
        </div>
        
        <div className='project-col'>
        <div className="project-info">  
         <button>
           <img className="emojisearchpic" 
           src={emojisearchpic} alt="Emoji Search"/>
           <h3>Emoji Search</h3>
         </button>
         </div>

         <div className='project-desc'>
           <h1>emoji search</h1>
           <h3>technology used : react js</h3>
           <h2>Using useState and useEffect</h2>
         </div>

        </div>
       

      </div>
    </Element>
  )
}

export default Project;