import React from 'react'
import "./Header.css"


const Header = () => {
  return (
    <>
        <div className="header">
            <div className='logo'>
              SD.
            </div>
            <div className='lists'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

            </div>

        </div>
    </>
  )
}

export default Header