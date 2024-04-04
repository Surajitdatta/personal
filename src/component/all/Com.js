import React from 'react'
import Header from '../Header'
import Bio from '../Bio'
import About from '../About'
import Stats from '../Stats'
import Service from '../Service'
import Experience from '../Experience'
import Projects from '../Projects'
import GraphicsArrow from '../../graphics/GraphicsArrow'
import Contact from '../Contact'
import { useState } from 'react'
const Com = () => {
  const[light, setLight] = useState(false)
  const lightHandler = (e)=>{
    setLight(e)
    console.log(light)

  } 
  const sun = {
    background: "#219ebc",
    color:"black"
    
    
  }
  const dark = {
    background: "black",
    color:"white"
  }
  return (
    <div className={sun} style={light?sun:dark}>
      <Header bg={lightHandler} style={light?sun:dark}/>
      <Bio style={light?sun:dark}/>
      <About/>
      <Stats/>
      <Service/>
      <Experience/>
      <Projects/>
      <GraphicsArrow  style={{color:"white"}}/>
      <Contact/>
    </div>
  )
}

export default Com