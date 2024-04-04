import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Bio from './component/Bio';
import About from './component/About';
import Stats from './component/Stats';
import Service from './component/Service';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Shimmer from './component/Shimmer';
import { useState, useEffect } from 'react';
import GraphicsArrow from './graphics/GraphicsArrow';
import { BrowserRouter, Routes, Route, useLocation, useParams } from 'react-router-dom';
import GraphicsProject from './graphics/GraphicsProject';
import Com from './component/all/Com';
import View from './graphics/View';
// import { useParams } from 'react-router-dom';
function App() {
  const[shimmer, setShimmer] = useState(false)
  const { id } = useParams();
  
  useEffect(()=>{
    // setTimeout(()=>{
    //   setShimmer(false)
    // }, 4000)

  }, [])
  window.addEventListener("load",()=>{
    setTimeout(()=>{
      setShimmer(false)
    }, 2000)
  })
  return (
   <>
   <BrowserRouter  style={{background:"white"}}>
     <Routes>
       <Route  path="/" element={<Com/>}/>
       <Route  path="/GraphicsProject" element={<GraphicsProject/>}/>
       <Route  path="/View/:id" element={<View/>}/>
     </Routes>
   </BrowserRouter>

   


   </>
  );
}

export default App;
