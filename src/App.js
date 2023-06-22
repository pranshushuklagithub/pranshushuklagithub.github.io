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
  let [comp,setComp] = useState(false)

function handleClick() {
  setComp(!comp)
}
function closeMenu() {
  setComp(false)
}
  // useEffect(()=>{
    // console.log(comp)
// window.onscroll=() =>{
//   handlePage();
// }
  // },[comp])

  // let box = document.getElementsByClassName("App");

  // function handlePage() {
    
  //   let height = box
  //   box.scrollTop = box.scrollTop - height;
  // }

  return (
    <Box className="App" bg="green.200">
      
      
        
         {/* <Navbar handleClick={handleClick} closeMenu={closeMenu}/> */}
         <Navbar comp={comp} setComp={setComp}/>
         

       {/* { comp==="home"?<Box p="5%"><Home/></Box>:comp==="about"?<Box p="3%"><About/></Box>:comp==="skills"? <Box p="5%"><Skills/></Box>:comp==="projects"?<Box p="5%"><Projects/></Box>:comp==="contact"? <Box p="11%"><Contact/></Box>:
       
       <Box p="3%">

        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>

       </Box>
       }  */}

<Box p="3%">

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


