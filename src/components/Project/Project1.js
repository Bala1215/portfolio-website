import React from 'react'
import { Element } from 'react-scroll';
import "../Project/Project1.css";
import ecommerce from "./ecommerce.jpg";
import emojisearchpic from "./emojisearchpic.jpg";
import googlekeepclonepic from "./googlekeepclonepic.png";



function Project1() {
  return (
     <Element className='project-container' id='projects'>
       <div className='projects-wrapper'>
      
         
        <div className='project-card'>
        <h1 className="project-title">Ecommerce Website</h1>
           <img src={ecommerce}
            alt="Ecommerce" className='project-img'/>
         
         
         <div className='project-info'>
           <h1>Ecommerce Website</h1>
           <h3>technology used : <span>vanilla js</span></h3>
           {/* <h4>Using useState and useEffect</h4> */}
             <div className='project-info-btn'>
               <a href="https://github.com/Bala1215/E-Commerce-Website"><button className='project-btn-1'>View Source Code</button></a>
               <a href="https://effervescent-empanada-5e4150.netlify.app/"><button className='project-btn-2'>View Project</button></a>
             </div>
          </div>
        </div>

        {/* <div className='project-card'>
           <h1 className="project-title">user management</h1>
           <img src={usermanagementpic} 
            alt="user management" className='project-img'/> */}
         
         
       

        <div className='project-card'>
        <h1 className="project-title">google keep clone</h1>
           <img src={googlekeepclonepic} 
            alt="google keep clone " className='project-img'/>
         
         
         <div className='project-info'>
           <h1>google keep clone</h1>
           <h3>technology used : <span>react js</span></h3>
           <h4>Using useState and useEffect</h4>
             <div className='project-info-btn'>
               <a href='https://github.com/Bala1215/google-keep-clone'><button className='project-btn-1'>View Source Code</button></a>
               <a href='https://649ff2d1de745111f97bd8a2--genuine-mochi-be97d5.netlify.app/'><button className='project-btn-2'>View Project</button></a>
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
               <a href='https://github.com/Bala1215/emoji_search'><button className='project-btn-1'>View Source Code</button></a>
               <a href='https://emoji-search-dun.vercel.app/'><button className='project-btn-2'>View Project</button></a>
             </div>
          </div>
        </div>

      </div> 

     </Element>
  )
}

export default Project1