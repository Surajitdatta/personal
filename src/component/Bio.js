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
    const texts = " I am Java Fullstack developer and skilled graphics designer based on India and i am passionate and dedicated to my work. 🤚🤚";
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
                <a href="https://www.instagram.com/mrbarnwal_?igsh=NnE0MDFldHVtajhy"><GrInstagram/></a>
            </div>
            {/* <div className='git'>
                <a href="https://github.com/Surajitdatta"><FaGithub /></a>

                
            </div> */}
            <div className='linkedin'>
                <a href="https://www.linkedin.com/in/himanshushekhar-dev"> <FaLinkedin/></a>
               
            </div>

        </div>
        {/* content bio start */}
        <div className="contentBio">
            <h2>Himanshu Shekhar</h2>

            <pre>
                    ...Java Fullstack Developer
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
            <img src="https://i.pinimg.com/originals/33/f6/87/33f687c5b8da38478d2973ac5f701996.png"  height="100%" width="100%"   />

        </div>
        
    </div>
</div>
    </>
  )
}

export default Bio