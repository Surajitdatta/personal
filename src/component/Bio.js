// import React from 'react'
import "./Bio.css"
import IT from "./images/IT.png"
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import  { useEffect,useRef , useState } from 'react';
import { CiHome } from "react-icons/ci";
import { MdRoundaboutRight } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";

const Bio = () => {
    
    const[text, setText] = useState("")
    const texts = " I am creative designer based on India and i am passionate and dedicated to my work. 🤚🤚";
    useEffect(()=>{
        const myText = (index) =>{
            if(index<= texts.length){
                setText(texts.slice(0, index));
                setTimeout(()=>myText(index+1), 200)
            }

        }
        myText(0)
    }, [])
    const valueRef = useRef(null)
  
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
    <>
 <div className="wrapper" ref={valueRef}>
    <div className="bioHeader">
        <ul>
            <li><a href="#">< CiHome/></a></li>
            <li><a href="#about"><MdRoundaboutRight /></a></li>
            <li><a href='#service'><RiServiceLine /></a></li>
            <li><a href="#experience"><MdCastForEducation  /></a></li>
            <li><a href="#contact"><MdOutlineContactPhone /></a></li>
        </ul>
    </div>
    
    <div className='bio'>
        

        <div className="social">
            <div className='insta'>
                <a href="https://www.instagram.com/austenite_selfish_?igsh=YzVkODRmOTdmMw=="><GrInstagram/></a>
            </div>
            <div className='git'>
                <a href="https://github.com/Surajitdatta"><FaGithub /></a>

                
            </div>
            <div className='linkedin'>
                <a href="https://www.linkedin.com/in/surajit-datta-751600155"> <FaLinkedin/></a>
               
            </div>

        </div>
        {/* content bio start */}
        <div className="contentBio">
            <h2>Surajit Datta</h2>

            <pre>
                    ...Front End Developer
            </pre><br/><br/>
            <div className='text'>
            <p>
                {text}
            </p>
                
            </div>
            
            <br/>
            <a href="#contact">
               <button>Contact Me</button>

            </a>
            


        </div>
        {/* image div start */}
        <div className="bioImg">
            <img src={IT}  height="100%" width="100%"   />

        </div>
        
    </div>
</div>
    </>
  )
}

export default Bio