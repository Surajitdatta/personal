import React from 'react';
import "./experience.css";
import { MdCastForEducation } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { useEffect, useState, useRef } from 'react';
const Experience = () => {
    const[scrollValue, setScrollValue] = useState()
    const scrollRef = useRef(null)
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll=>{
            
            console.log(window.scrollY)
            console.log(window.innerWidth)
            if(window.scrollY>1600){
                if(window.innerWidth<765){
                    // scrollRef.current.style.background="green";
                    scrollRef.current.style.transition="1s";
                    scrollRef.current.style.marginTop="50px"

                   
                
            }  
        }  else if(window.scrollY>780){
            if(window.innerWidth>769 && window.innerWidth<985){
                // scrollRef.current.style.background="blue";
                scrollRef.current.style.transition="1s";
                scrollRef.current.style.marginTop="50px"

            }
        } else if(window.scrollY>600){
            if(window.innerWidth>992 && window.innerWidth<1900){
                // scrollRef.current.style.background="white";
                scrollRef.current.style.transition="2s";
                scrollRef.current.style.marginTop="50px"

            }
        } 
        
        })

    },[])
  return (
    <>
      <div className='exp ' id="experience" ref={scrollRef}>
        <div className="expContent ">
            <h2>
                Education & Experience
            </h2>

        </div>
        <div className='expCard'>
            <div className='eduCard'>
                <div className='year'>
                    <div className='eduIcon'>
                        < MdCastForEducation />

                    </div>
                    <div className='eduYear'>
                        <b> Passout - 2015</b>

                    </div>

                </div>
                <div className='eduContent'>
                    <div className='stapper'>

                    </div>
                    <div className='stapperContent'>
                        <span>Secondary Education</span><br/><br/>
                        <small><p>I have completed my secondary education in 2015 with 70.71% marks.</p></small>

                    </div>

                </div>


                <div className='year'>
                    <div className='eduIcon'>
                        < MdCastForEducation />

                    </div>
                    <div className='eduYear'>
                        <b> Passout - 2019</b>

                    </div>

                </div>
                <div className='eduContent'>
                    <div className='stapper'>

                    </div>
                    <div className='stapperContent'>
                        <span>Diploma (Mechanical)</span><br/><br/>
                        <small><p>I have completed my diploma engineering in 2019 with 69.83% marks.</p></small>

                    </div>

                </div>


                <div className='year'>
                    <div className='eduIcon'>
                        < MdCastForEducation />

                    </div>
                    <div className='eduYear'>
                        <b> Passout - 2023</b>

                    </div>

                </div>
                <div className='eduContent'>
                    <div className='stapper'>

                    </div>
                    <div className='stapperContent'>
                        <span>Btech</span><br/><br/>
                        <small><p>I have completed my Btech in engineering in 2023 with 8.37 CGPA.</p></small>

                    </div>

                </div>
                
            </div>

            {/* skillCard */}

            <div className='skillCard'>
                <div className='year'>
                    <div className='eduIcon'>
                        < GiSkills />

                    </div>
                    <div className='eduYear'>
                        <b> Present - 2024</b>

                    </div>

                </div>
                <div className='eduContent'>
                    <div className='stapper'>

                    </div>
                    <div className='stapperContent'>
                        <span>UI Designer</span><br/><br/>
                        <small><p>I can deliver highly responsive UI design according to your need.</p></small>

                    </div>

                </div>


                <div className='year'>
                    <div className='eduIcon'>
                        < GiSkills />

                    </div>
                    <div className='eduYear'>
                        <b> Present - 2024</b>

                    </div>

                </div>
                <div className='eduContent'>
                    <div className='stapper'>

                    </div>
                    <div className='stapperContent'>
                        <span>Front End Developer</span><br/><br/>
                        <small><p>I can develop highly dynamic front end website in React and Redux JS.</p></small>

                    </div>

                </div>


                <div className='year'>
                    <div className='eduIcon'>
                        < GiSkills />

                    </div>
                    <div className='eduYear'>
                        <b>25/09/2023 - 30/11/2023</b>

                    </div>

                </div>
                <div className='eduContent'>
                    <div className='stapper'>

                    </div>
                    <div className='stapperContent'>
                        <span>Internship</span><br/><br/>
                        <small><p>Did Internship from Pure Code Software R&D pvt ltd. A product base start up company. My responsibility was to work in React and CSS.</p></small>

                    </div>

                </div>

            </div>
            

        </div>

      </div>
      
    </>
  )
}

export default Experience;