// import React from 'react'
import "./graphicsArrow.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate ,Link} from 'react-router-dom';
import GraphicsProject from "./GraphicsProject";
// import { Link } from "react-router-dom";
const GraphicsArrow = () => {
    const navigate = useNavigate();
    function handleClick() {
       
        navigate('/GraphicsProject');
    }
  return (
    <div className='iconDiv'>
       
        <ul>
            <li><i onClick={handleClick}>
                 <Link to="/GraphicsProject" className="arrowLink"> Check some graphic works </Link>
                </i>
            </li>
            <li>
              <i className='icon'>
              <Link to="/GraphicsProject" className="arrowLink"><FaArrowRightLong /></Link>
              </i>
            </li>
        </ul>

    
       
        
        
    </div>
  )
}

export default GraphicsArrow