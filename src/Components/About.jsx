import { Box,Text,Heading,Image, Flex, useDisclosure,Link } from "@chakra-ui/react";
import Qualifications from "./Qualifications";



export default function About() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return <Box p="6%" textAlign="center" id="about" className="about section">
        <Heading id="user-detail-name" fontSize={["xl","2xl","3xl"]} mb="2%"> About me</Heading>
        <Flex w="100%" m="auto" mb="2%" id="about" className="about section"  alignItems="center" justify="space-between" flexWrap="wrap" p="2%">
        <Box w="40%">
            <Image src="./Images/aboutcover.png" w="100%" borderRadius="3xl"></Image>
        </Box>
        <Box maxW="60%" textAlign="left">
        <Box  w="50%"  id="user-detail-intro" m="auto">
            
        <Text fontSize={["lg","xl","3xl"]}>I am  </Text>
        <Heading id="user-detail-name" fontSize={["lg","xl","3xl"]}> A Software Developer</Heading>
        
        </Box>
        <Box  w = "50%" fontSize={["md","lg","xl"]} m="auto" mt="2%" id="user-detail-name" >
        A passionate Full Stack Web developer with considerable technical skills who possess self-discipline and the ability to work with minimum supervision.skilled in Node.JS. Experienced in Developing websites using JavaScript, Node.js, Express.js, MongoDB.Looking forward to join a progressive organization with opportunities to work on significant projects.
        </Box>
        <Box as="Button" borderRadius="lg" overflow="-moz-initial" onClick={onOpen} ml="25%" mt="5%" w ={["85px","105px","125px"]} h={["20px","30px","40px"]} fontSize={["5px","7px","12px"]}  _hover={{bg:"green.300",color:"black"}} bg="teal" color="white">See My Qualifications</Box>
        {isOpen?<Qualifications onOpen={onOpen} onClose={onClose} isOpen={isOpen}/>:false}
        </Box>
    </Flex>
    <Flex w="40%" justify="left" gap="5%" m="auto" id="about_contact">
                
    <Link href="https://github.com/pranshushuklagithub" isExternal><Box as="Button" borderRadius="lg" w ={["40px","60px","80px"]} h={["20px","30px","40px"]} fontSize={["7px","10px","17px"]}  _hover={{bg:"green.300",color:"black"}} bg="teal" color="white" id="contact-github">Github </Box></Link>
    <Link href="https://www.linkedin.com/in/pranshu-shukla-at/" isExternal><Box as="Button" borderRadius="lg" w ={["40px","60px","80px"]} h={["20px","30px","40px"]} fontSize={["7px","10px","17px"]}  _hover={{bg:"green.300",color:"black"}} bg="teal" color="white" id="contact-linkedin">Linkedin</Box></Link>
                
    </Flex>
    
    </Box>
}