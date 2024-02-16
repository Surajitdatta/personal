import React from 'react'
import "./stats.css"
import { SiCodeproject } from "react-icons/si";
import { BsCup } from "react-icons/bs";
import { LiaLaughBeam } from "react-icons/lia";
import { useEffect, useState, useRef } from 'react';
const Stats = () => {
    const[scrollValue, setScrollValue] = useState()
    const scrollRef = useRef(null)
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll=>{
            
            // console.log(window.scrollY)
            // console.log(window.innerWidth)
            if(window.scrollY>550){
                if(window.innerWidth<765){
                    // scrollRef.current.style.background="green";
                    scrollRef.current.style.transition="1s";
                    scrollRef.current.style.marginTop="50px"

                   
                
            }  
        }  else if(window.scrollY>253){
            if(window.innerWidth>769 && window.innerWidth<985){
                // scrollRef.current.style.background="yellow";
                scrollRef.current.style.transition="1s";
                scrollRef.current.style.marginTop="50px"

            }
        } else if(window.scrollY>85){
            if(window.innerWidth>992 && window.innerWidth<1900){
                // scrollRef.current.style.background="white";
                scrollRef.current.style.transition="2s";
                scrollRef.current.style.marginTop="50px"

            }
        } 
        
        })

    },[])
  return (
    <div className="stats" ref={scrollRef}>
        <div className='statsDiv'>
            <div className='statsIcon'>
                <SiCodeproject/>
            </div>
            <div className='statsContent'>
                4{scrollValue}<br/>
                Projects Completed
            </div>


            <div className='statsIcon'>
                <BsCup/>
            </div>
            <div className='statsContent'>
                500<br/>
                 Coffee
            </div>


            <div className='statsIcon'>
                <LiaLaughBeam/>
            </div>
            <div className='statsContent'>
                100%<br/>
                Enjoyment
            </div>
        </div>

    </div>
  )
}

export default Stats;