import React from 'react';
import { Element } from 'react-scroll';
import "../Skill/Skill.css";
import htmlpic from '../Skill/htmlpic.png';
import csspic from '../Skill/csspic.png';
import javascriptpic from '../Skill/javascriptpic.png';
import javapic from '../Skill/javapic.png';
import reactpic from '../Skill/reactpic.png';
import cpic from '../Skill/cpic.png';




function Skill() {
  return (
    <Element className="skill-container" id="skills">
      <div className='skills-wrapper'>
        <div className='skill-col'>
            <button>
                <img className="htmlpic" 
                src={htmlpic} alt="HTML5"/>
                <h3>HTML5</h3>

            </button>
        </div>
        <div className='skill-col'>
          <button >
              <img className="csspic" 
              src={csspic} alt="CSS3"/>
              <h3>CSS3</h3>
          </button>
        </div>
        <div className='skill-col'>
          <button>
           <img className="javascriptpic" 
           src={javascriptpic} alt="JavaScript"/>
           <h3>JavaScript</h3>
          </button>
        </div>
        <div className='skill-col'>
         <button>
           <img className="javapic" 
           src={javapic} alt="Core Java"/>
           <h3>Core Java</h3>

         </button>
        </div>
        <div className='skill-col'>
          <button>
           <img className="cpic" 
            src={cpic} alt="C Programming"/>
            <h3>C Programming</h3>
                     
          </button>
        </div>
        <div className='skill-col'>
          <button>
          <img className="reactpic" 
          src={reactpic} alt="React Js"/>
          <h3>React Js</h3>
        </button>
        </div>

      </div>
    </Element>
  )
}

export default Skill