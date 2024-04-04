import React from 'react';
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { useState, useEffect, useRef } from 'react';
const Contact = () => {
  const[scrollValue, setScrollValue] = useState()
    const scrollRef = useRef(null)
    useEffect(()=>{
        const handleScroll=()=>{
          if (scrollRef.current) {
            
           
            if(window.scrollY>3500){
                if(window.innerWidth<765){
                    // scrollRef.current.style.background="green";
                    scrollRef.current.style.transition="1s";
                    scrollRef.current.style.marginTop="50px"
                
            }  
        }  else if(window.scrollY>1634){
            if(window.innerWidth>769 && window.innerWidth<985){
                // scrollRef.current.style.background="blue";
                scrollRef.current.style.transition="1s";
                scrollRef.current.style.marginTop="50px"

            }
        } else if(window.scrollY>1496){
            if(window.innerWidth>992 && window.innerWidth<1900){
                // scrollRef.current.style.background="white";
                scrollRef.current.style.transition="2s";
                scrollRef.current.style.marginTop="50px"

            }
        } 
        
        }}
        window.addEventListener('scroll', handleScroll);
        

    },[])
  return (
    <div id="contact" >
      <div className='contact' ref={scrollRef}>
        <div className='contactContent'>
          <h2>Contact Me</h2>

        </div>
        <div className='contactCard'>
          <div className="contactParaCard">
            <p>Whether it's a small project or a big idea, let's collaborate and bring it to life together! <br/>Have a project in mind or just want to say hello?  Reach out to me directly via email or social media. I'd love to hear from you !</p>

          </div>
          <div className='contactIcon'>
            <div className='icons'>
            <a href="mailto:burnwalhimanshu@gmail.com"><MdOutlineMail/></a>
              

            </div>
            <div className='icons'>
            <a href="tel:+918617829313"><FiPhone/></a>
              

            </div>
            <div className='icons'>
              <a href="https://www.linkedin.com/in/himanshushekhar-dev"><CiLinkedin/></a>

            </div>
            
            
            


          </div>

        </div>



      </div>
    </div>
  )
}

export default Contact;