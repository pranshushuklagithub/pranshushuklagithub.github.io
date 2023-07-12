
import {Box, Button, Flex, Heading, Text,useDisclosure, Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    } from "@chakra-ui/react"
import { downloadResume } from "../Functions/function";
import {HamburgerIcon} from "@chakra-ui/icons"
// import DrawerModel from "./Drawer";




export default function Navbar({comp,setComp}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    // console.log(comp)


    return <Box id="nav-menu" mt="-2%" bg="MenuText" p="1%" className="navbar" boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" w="100%" h="70px" position="fixed">
        <Flex w="100%" justify="space-evenly" flexWrap={["wrap"]}>
        <a href = "#home" onClick={()=>{
            setComp("home")
        }}>
            <Box  w="40%"><Heading><Flex gap="3%" ><Text color="tomato" id="user-detail-name">Pranshu</Text> <Text color="telegram.200">Shukla</Text></Flex></Heading></Box></a>
            
        <Flex justify="space-evenly" gap="1%"  w="60%" alignItems="center"  id="all-nav-link">
        <a href="#home"><Button  className="nav-link home" w ={["30px","50px","70px"]} h={["15px","25px","35px"]} bg={comp==="home"?"black":"tomato"} color="white" _hover={{bg:"green.300",color:"black"}} alignItems="center" onClick={()=>{
            setComp("home")}} fontSize={["5px","8px","15px"]}>Home</Button></a>
        <a href="#about"><Button className="nav-link about" w ={["30px","50px","70px"]} h={["15px","25px","35px"]} bg={comp==="about"?"black":"tomato"} color="white" _hover={{bg:"green.300",color:"black"}} onClick={()=>{
            setComp("about")}} fontSize={["5px","8px","15px"]}>About</Button></a>
        <a href="#skills"><Button className="nav-link skills" w ={["30px","50px","70px"]} h={["15px","25px","35px"]} bg={comp==="skills"?"black":"tomato"} color="white" _hover={{bg:"green.300",color:"black"}} onClick={()=>{
            setComp("skills")}} fontSize={["5px","8px","15px"]}>Skills</Button></a>
        <a href="#projects"><Button className="nav-link projects" w ={["30px","50px","70px"]} h={["15px","25px","35px"]} bg={comp==="projects"?"black":"tomato"} color="white" _hover={{bg:"green.300",color:"black"}} onClick={()=>{
            setComp("projects")}} fontSize={["5px","8px","15px"]}>Projects</Button></a>
        <a href="#contact"><Button className="nav-link contact" w ={["30px","50px","70px"]} h={["15px","25px","35px"]} bg={comp==="contact"?"black":"tomato"} color="white" _hover={{bg:"green.300",color:"black"}} onClick={()=>{
            setComp("contact")}} fontSize={["5px","8px","15px"]}>Contact</Button></a>
        
        <a href="#resume" id="resume-link-1"><Button className="nav-link resume" w ={["30px","50px","70px"]} h={["15px","25px","35px"]} bg="blue.400" color="white" _hover={{bg:"green.300",color:"black"}} fontSize={["5px","8px","15px"]}  id="resume-button-1" onClick={()=>{downloadResume()}}>Resume</Button></a>
        
        </Flex>
        <Box color="white" mr="-55%" mt="-4%" id="hamburger" fontSize="2xl" onClick={onOpen}><HamburgerIcon/></Box>

        <Box>
        <Drawer  onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton/>
            <DrawerBody >
            <a href="#home"><Button w="50%" m="auto" bg="MenuText" color="white">Home</Button></a><br></br><br></br>
            <a href="#about"><Button w="50%" m="auto" bg="MenuText" color="white">About</Button></a><br></br><br></br>
            <a href="#skills"><Button w="50%" m="auto" bg="MenuText" color="white">Skills</Button></a><br></br><br></br>
            <a href="#projects"><Button w="50%" m="auto" bg="MenuText" color="white">Projects</Button></a><br></br><br></br>
            <a href="#contact"><Button w="50%" m="auto" bg="MenuText" color="white">Contact</Button></a><br></br><br></br>
            <a href="#resume"><Button w="50%" m="auto" bg="MenuText" color="white" onClick={()=>{downloadResume()}}>Resume</Button></a>

            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

    </Flex>
    
    </Box>
}