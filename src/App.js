import './App.css';
import { useState,useEffect } from "react";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import { Box } from '@chakra-ui/react';


function App() {
  let [comp,setComp] = useState("home")
  useEffect(()=>{
    console.log(comp)
  },[comp])

  return (
    <Box className="App" bg="green.200" id="nav-menu">
      <Navbar comp={comp} setComp={setComp}/>
      <Box h="640px" bg="green.200"> 
        {comp==="home"?<Home/>:comp==="about"?<About/>:comp==="skills"?<Skills/>:comp==="projects"?<Projects/>:comp==="contact"?<Contact/>:false}
      </Box>
    </Box>

  )
}

export default App;

