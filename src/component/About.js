import React from 'react';
import "./about.css";
import Header from './Header';
import cv from "./Cv/surajit.pdf"
import { useRef , useState, useEffect } from 'react';
const About = () => {
  const valueRef = useRef(null)
  // console.log(valueRef.current)
  useEffect(()=>{
    const refHandler=()=>{
      if(valueRef.current){
        valueRef.current.style.marginLeft="0px"
        valueRef.current.style.transition="3s"
        // valueRef.current.style.background="red"
      }

    }
    refHandler()
    

  }, [])
  
  
  



  return (
    <div id="about" ref={valueRef}>
    
    <div className="about" >
       {/* <Header id="scroll"     /> */}
       <div className='aboutMe'>
        <h2>About Me</h2><br/>
       </div>
       <div className='aboutCard'>
         <div className="aboutCardImage">
            <img src="https://i.pinimg.com/originals/86/43/ad/8643ad587fc29d947157d076d7f32be5.jpg" height="100%" width="100%"/>

         </div>
         <div className="aboutCardContent">
            <div className="para">
              <p>I am Himanshu Shekhar , Java Fullstack developer from India , I have rich skills in web design , Java , SQL , Manual testing and Graphic design.</p><br/>
              
              <a href={cv} download>
              <button style={{ cursor: "pointer" }}>Download CV</button>

              </a>
                
              
            </div>
            <div className="graph">
                <b>Java Fullstack</b>
                <div className='ui'>
                    <div className='uiPer'>
                      
                    </div>

                </div><br/>

                <b>SQL Server</b>
                <div className='ui'>
                    <div className='jsPer'>

                    </div>

                </div><br/>

                <b>Manual Testing</b>
                <div className='ui'>
                    <div className='reactPer'>

                    </div>

                </div><br/>

                <b>Graphic Designer</b>
                <div className='ui'>
                    <div className='graphicsPer'>

                    </div>

                </div><br/>

                <b>HTML , CSS</b>
                <div className='ui'>
                    <div className='graphicsPer'>

                    </div>

                </div>

                

            </div>

         </div>
       </div>
    </div>
    </div>
  )
}

export default About