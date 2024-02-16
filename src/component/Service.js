import React from 'react'
// import { useEffect, useState } from 'react';
import "./service.css";
import { useEffect, useState, useRef } from 'react';
const Service = () => {
    const[lists, setLists] = useState([
        { name: "UI Design", des:"Created user-friendly designs to make websites and apps easy to use. Used creativity and attention to detail to make interfaces look good and work well.", image:"https://cdn.dribbble.com/users/427857/screenshots/6321392/attachments/1353611/presentation-ui_designer-illustration-by_tranmautritam.png" },
        { name: "Javascript", des:"Designed user-friendly interfaces for websites and apps using JavaScript. Combined creativity and attention to detail to ensure functionality and aesthetics", image:"https://assets-global.website-files.com/606a802fcaa89bc357508cad/61143444834cd54b9b0a88b3_2-p-2600.png" },
        { name: "React js", des: "Developed user-friendly interfaces with React.js, prioritizing seamless navigation and engaging user experiences. Leveraged React's component-based architecture to create dynamic and responsive web applications.", image:"https://cdni.iconscout.com/illustration/premium/thumb/react-programing-6437282-5319662.png" }
    ])
    const[scrollValue, setScrollValue] = useState()
    const scrollRef = useRef(null)
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll=>{
            
            console.log(window.scrollY)
            console.log(window.innerWidth)
            if(window.scrollY>800){
                if(window.innerWidth<765){
                    // scrollRef.current.style.background="white";
                    scrollRef.current.style.transition="1s";
                    scrollRef.current.style.marginTop="50px"

                   
                
            }  
        }  else if(window.scrollY>400){
            if(window.innerWidth>769 && window.innerWidth<985){
                // scrollRef.current.style.background="yellow";
                scrollRef.current.style.transition="1s";
                scrollRef.current.style.marginTop="50px"

            }
        } else if(window.scrollY>300){
            if(window.innerWidth>992 && window.innerWidth<1900){
                // scrollRef.current.style.background="white";
                scrollRef.current.style.transition="2s";
                scrollRef.current.style.marginTop="50px"

            }
        } 
        
        })

    },[])
    
  return (
    <div className='serviceMain' id="service"  ref={scrollRef}>
        <div className="serviceContent">
            <h2>Services</h2>
        </div>
        <div className="serviceCard">
            {
                lists.map((val)=>{
                    return(
                        <>
                          <div className='card'>
                            <div className="cardImg">
                                <img src={val.image} height="30px" width="30px"/>

                            </div>
                            <div className='cardName'>
                                {val.name}

                            </div>
                            <div className='cardDes'>
                                <p>{val.des}</p>

                            </div>

                          </div>
                         
                        </>
                    )
                })
            }


        </div>
        
    </div>
  )
}

export default Service;