import './App.css';
import { useState } from "react";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import { Box } from '@chakra-ui/react';




function App() {
  let [comp,setComp] = useState("home")
  

  return (
    <Box className="App" bg="white">
      
      
        
         
         <Navbar comp={comp} setComp={setComp}/>
         
         <Home/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
       

            
     
    </Box>

  )
}

export default App;


