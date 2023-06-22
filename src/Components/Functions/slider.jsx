import React from 'react'
import { useState,useEffect } from "react";
import Mycard from './mycard';
import Navbar from '../Navbar/Navbar';
import Home from '../Home';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';
import { Box } from '@chakra-ui/react';

const Imagecarousel = () => {
    let [comp,setComp] = useState("home")
    useEffect(()=>{
    console.log(comp)
    
  },[comp])

  

    // let box = document.querySelector('.product-container');

     // When the user scrolls the page, execute myFunction
     

      function handleClick() {
        var winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        var height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("bar").style.width = scrolled + "%";
      }

      const btnpressprev = () => {
        let height = box.clientHeight;
        box.scrollTop = box.scrollTop - height;
        console.log(height)
    }
    
    return (
        <div className="product-carousel" >
            {/* <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button> */}

        <Navbar comp={comp} setComp={setComp} handleClick={handleClick}/>       

            
            <div className="product-container" onScroll={handleClick} >
                <Mycard component={<Home/>} />
                <Mycard component={<About/>} />
                <Mycard component={<Skills/>} />
                <Mycard component={<Projects/>} />
                <Mycard component={<Contact/>} />
            </div>
            <div id='bar'></div>
        </div>
    )
}

export default Imagecarousel