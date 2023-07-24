import React from 'react';
import { Element } from 'react-scroll';
import "../Project/Project.css";




function Skill() {
  return (
    <Element className="project-container" id="projects">
      <div className='projects-wrapper'>
        <div className='skill-col'>
            <button>
                <img className="htmlpic" 
                src="" alt="HTML5"/>
                <h3>HTML5</h3>

            </button>
        </div>
        <div className='skill-col'>
          <button >
              <img className="csspic" 
              src="" alt="CSS3"/>
              <h3>CSS3</h3>
          </button>
        </div>
        <div className='skill-col'>
          <button>
           <img className="javascriptpic" 
           src="" alt="JavaScript"/>
           <h3>JavaScript</h3>
          </button>
        </div>
        <div className='skill-col'>
         <button>
           <img className="javapic" 
           src="" alt="Core Java"/>
           <h3>Core Java</h3>

         </button>
        </div>
        <div className='skill-col'>
          <button>
           <img className="cpic" 
            src="" alt="C Programming"/>
            <h3>C Programming</h3>
                     
          </button>
        </div>
        <div className='skill-col'>
          <button>
          <img className="reactpic" 
          src="" alt="React Js"/>
          <h3>React Js</h3>
        </button>
        </div>

      </div>
    </Element>
  )
}

export default Skill