import React from 'react'
import "./Header.css"
import { FaRegLightbulb } from "react-icons/fa";
import { useState } from 'react';
const Header = ({bg}) => {
  const[state, setState] = useState(true)
  const lightHandlers = ()=>{
    setState(!state)
    bg(state)
   


  }
  return (
    <>
        <div className="header">
            <div className='logo' onClick={lightHandlers}>
              HS.
            </div>
            <div className='lists'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li onClick={lightHandlers}><FaRegLightbulb /></li>
                </ul>
                

            </div>

        </div>
    </>
  )
}

export default Header