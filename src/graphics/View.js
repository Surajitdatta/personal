import React from 'react'
import {image} from "./json"
import { useParams, useNavigate } from 'react-router-dom';
import "./view.css"
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import h from "../component/images/himanshu.jpg"

const View = () => {
    const navigate = useNavigate()
    const { id} = useParams();
    
    const y = []
    y.push(image[id])
    const back =()=>{
        navigate(-1)
        
    }
  return (
    <div className='view'>
        {
            y.map((v)=>{
                return(
                    <div className='viewProduct'>
                      
                      <div>
                        <img src={v.img} height="200px" width="300px"/>
                      </div>

                      <div className='viewContent'>
                        <b>TITLE</b><br/>
                        {v.title}<br/><br/>
                        <b>DESCRIPTION</b><br/>
                      {v.description}
                      </div>
                      


                    </div>
                )
            })
        }
        <div className='h'>
          <img src={h} height="100px" width="100px"/>
        </div>
        <div style={{textAlign:"center", marginTop:'20px'}}>
            DESIGNER : <br/>Himanshu Shekhar Barnwal
            <br/>
            <button onClick = {back}>GO BACK</button>

            <br/>
            <div className="social1">
            <div className='insta'>
                <a href="https://www.instagram.com/mrbarnwal_?igsh=NnE0MDFldHVtajhy"><GrInstagram/></a>
            </div>
            <div className='git'>
                {/* <a href="https://github.com/Surajitdatta"><FaGithub /></a> */}

                
            </div>
            <div className='linkedin'>
                <a href="https://www.linkedin.com/in/himanshushekhar-dev"> <FaLinkedin/></a>
               
            </div>

        </div>
            
        </div>
        
    </div>
  )
}

export default View;