import React from 'react'
import "./projects.css"
import { useEffect, useState , useRef} from 'react'
const Projects = () => {
    const[project, setProject] = useState([
        { name:"TODO App", des:"A todo app, which is use to use to add, remove and edit task.", img:"https://assets.website-files.com/5f0a234d1293a2f4eb599bb5/60176e33710fdf691a6db05d_PNG-20-p-800.png", technology:"React & Redux toolkit", hide:"https://mir-s3-cdn-cf.behance.net/projects/max_808/59038033641765.Y3JvcCwxNzU3LDEzNzUsMjA2LDA.jpg", link:"https://todoapp-by-surajit.netlify.app/" },
        { name:"Weather App", des:"This weather app is use to get weather details by searching place. Data will come from API.", img:"https://assets.website-files.com/5f0a234d1293a2f4eb599bb5/60176e33710fdf691a6db05d_PNG-20-p-800.png", technology:"React JS, Javascript", hide:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a96b1b38533063.576527d72bf87.jpg", link:"https://final-weatherapp.netlify.app/" },
        { name:"Resume Buider App", des:"I am todo app", img:"https://assets.website-files.com/5f0a234d1293a2f4eb599bb5/60176e33710fdf691a6db05d_PNG-20-p-800.png", technology:"React & Redux toolkit", hide:"https://s3.envato.com/files/347745996/Preview_Image/Preview7.jpg", link:"https://smartwaycvmaker.netlify.app/" },
        { name:"E-commerce", des:"This is a resume builder app, where user will fill form . After submit the form user will be able to print the CV.", img:"https://assets.website-files.com/5f0a234d1293a2f4eb599bb5/60176e33710fdf691a6db05d_PNG-20-p-800.png",technology:"ReactJS, Javascript", hide:"https://img.freepik.com/premium-vector/ecommerce-management-illustration-online-business-black-template_541075-1606.jpg", link:"https://add-to-cart-surajit.netlify.app/" }
    ])
    const[scrollValue, setScrollValue] = useState()
    const scrollRef = useRef(null)
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll=>{
            
            // console.log(window.scrollY)
            // console.log(window.innerWidth)
            if(window.scrollY>3100){
                if(window.innerWidth<765){
                    // scrollRef.current.style.background="green";
                    scrollRef.current.style.transition="1s";
                    scrollRef.current.style.marginTop="50px"

                   
                
            }  
        }  else if(window.scrollY>1500){
            if(window.innerWidth>769 && window.innerWidth<985){
                // scrollRef.current.style.background="blue";
                scrollRef.current.style.transition="1s";
                scrollRef.current.style.marginTop="50px"

            }
        } else if(window.scrollY>1350){
            if(window.innerWidth>992 && window.innerWidth<1900){
                // scrollRef.current.style.background="white";
                scrollRef.current.style.transition="2s";
                scrollRef.current.style.marginTop="50px"

            }
        } 
        
        })

    },[])
  return (
    <div className='projects' id="projects" ref={scrollRef}>
        <div className="projectsContent">
            <h2>Projects</h2>

        </div>
        <div className='projectsCard'>
            {
                project.map((val)=>{
                    return(
                        <>
                        <div className='projectCard'>
                            <div className="hide">
                                <div className='hideImg'>
                                  <img src={val.hide} height="100%" width="100%"/>

                                </div>
                                

                            </div>
                            <div className='projectImg'>
                                <img src={val.img} height="100%" width="100%"/>

                            </div>
                            <div className='projectTitle'>
                                <a href={val.link}>
                                  {val.name}
                                </a>

                            </div>
                            {/* <div className='projectDes'>
                                {val.des}

                            </div> */}
                            <div className='tech'>
                                {val.technology}
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

export default Projects