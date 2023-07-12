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
  let [theme,setTheme] = useState("light")

  return (
    <Box className="App"  bg={theme==="dark"?"InactiveBorder":"whitesmoke"} color={theme==="dark"?"telegram.100":false}>
      
         
         <Navbar comp={comp} setComp={setComp} />
         
         <Box w="100%" mt="2%">
         <Home/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/> 
          </Box>   


          
     
    </Box>

  )
}

export default App;


