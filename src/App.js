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
function App() {
  const[shimmer, setShimmer] = useState(true)
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
   {
    shimmer?(<Shimmer/>):(
      <>
      <Header/>
      <Bio/>
      <About/>
      <Stats/>
      <Service/>
      <Experience/>
      <Projects/>
      <Contact/>
      </>
      

    )
   }
   


   </>
  );
}

export default App;
