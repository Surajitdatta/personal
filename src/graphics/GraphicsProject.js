import React from 'react'
import "./graphicsProject.css"
import { useState, useEffect } from 'react'
import Pagination from '../component/pagination/Pagination';
import { useNavigate,useParams } from 'react-router-dom';
import {image} from "./json"
const GraphicsProject = () => {
  //  const image = [
  //    {
  //     img:img1,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img2,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img3,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img4,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img5,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img6,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img7,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img8,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img9,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img10,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img11,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img12,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img13,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img14,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img15,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img16,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img17,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img18,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img19,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img20,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img21,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img22,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img23,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img24,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img25,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img26,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img27,
  //     title:"When yes means forever"
  //    },
  //    {
  //     img:img28,
  //     title:"When yes means forever"
  //    }


  // ]
  const viewNavigate = useNavigate()
  const {id} = useParams()
  const viewHandler=(v,i)=>{
    viewNavigate(`/view/${i}`)
  }
  return (
    <div className='graphicsWorkMain'>
      <div style={{width:"100%"}}>
        <h1>
          Graphics work
        </h1>
      </div>

      {/* works */}
      <div className='workCardGroup'>
        <div className="gCards">
        {
          image.map((v, i)=>{
            return(
              <div className='gCard'>
                <img src={v.img} height="100px" width="100%"  />
                {v.title}<br/>
                <button onClick={()=>{viewHandler(v,i)}}>View Design</button>

              
              </div>
            )
          })
        }

        </div>
        
      </div>
      {/* works */}
      <Pagination/>
      

    </div>
  )
}

export default GraphicsProject