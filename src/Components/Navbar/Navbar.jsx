
import {Box, Button, Flex, Heading, Text,Link} from "@chakra-ui/react"
import { downloadResume } from "../Functions/function";



export default function Navbar({comp,setComp}){
    // console.log(comp)
    
    return <Box id="nav-menu" bg="MenuText" p="1%" boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" w="100%"  position="fixed">
        <Flex w="100%" justify="space-evenly" flexWrap={["wrap"]}>
        <a href = "#home" onClick={()=>{
            setComp("home")
        }}>
            <Box id="user-detail-name" w="100%"><Heading><Flex gap="3%" fontSize={["xl","2xl","4xl"]}><Text color="tomato">Pranshu</Text> <Text color="telegram.200">Shukla</Text></Flex></Heading></Box></a>

        <Flex justify="space-evenly" gap="1%"  w = {["100%","85%","70%"]} alignItems="center" flexWrap={["wrap"]}>
        <a href="#home"><Button  className="nav-link home" w ={["40px","60px","80px"]} h={["20px","30px","40px"]} bg={comp==="home"?"black":"tomato"} color="white" _hover={{bg:"green.300",color:"black"}} alignItems="center" onClick={()=>{
            setComp("home")}} fontSize={["7px","10px","17px"]}>Home</Button></a>
        <a href="#about"><Button className="nav-link about" w ={["40px","60px","80px"]} h={["20px","30px","40px"]} bg={comp==="about"?"black":"tomato"} color="white" _hover={{bg:"green.300",color:"black"}} onClick={()=>{
            setComp("about")}} fontSize={["7px","10px","17px"]}>About</Button></a>
        <a href="#skills"><Button className="nav-link skills" w ={["40px","60px","80px"]} h={["20px","30px","40px"]} bg={comp==="skills"?"black":"tomato"} color="white" _hover={{bg:"green.300",color:"black"}} onClick={()=>{
            setComp("skills")}} fontSize={["7px","10px","17px"]}>Skills</Button></a>
        <a href="#projects"><Button className="nav-link projects" w ={["40px","60px","80px"]} h={["20px","30px","40px"]} bg={comp==="projects"?"black":"tomato"} color="white" _hover={{bg:"green.300",color:"black"}} onClick={()=>{
            setComp("projects")}} fontSize={["7px","10px","17px"]}>Projects</Button></a>
        <a href="#contact"><Button className="nav-link contact" w ={["40px","60px","80px"]} h={["20px","30px","40px"]} bg={comp==="contact"?"black":"tomato"} color="white" _hover={{bg:"green.300",color:"black"}} onClick={()=>{
            setComp("contact")}} fontSize={["7px","10px","17px"]}>Contact</Button></a>
        
        <Button  className="nav-link resume" w ={["40px","60px","80px"]} h={["20px","30px","40px"]} bg="blue.400" color="white" _hover={{bg:"green.300",color:"black"}} fontSize={["7px","10px","17px"]}  id="resume-button-1"><Link  id="resume-link-1" href="https://drive.google.com/file/d/1wOhjFp3m5wa1uqpqTEeIPV8iWZkaKb7h/view?usp=sharing"  isExternal onClick={(e)=>{
            downloadResume(e)
        }}><a href="./Images/Pranshu_Shukla_Resume.pdf">Resume</a></Link></Button>
        </Flex>
    </Flex>
    </Box>
}