import { Box, Heading, Text,Image, Flex,Button,Link } from "@chakra-ui/react";
import { downloadResume } from "./Functions/function";

export default function Home() {
    return <Flex id="home" bg="green.200" p="3%" h="100%" flexWrap="wrap" alignItems="center">
        <Box borderRadius="15%" w="15%" m="auto" p="1%" textAlign="left">
            <Image className="home-img" src="https://pranshushuklagithub.github.io/Images/pranshu.JPG" borderRadius="15%" w="100%"></Image>
        </Box>
        <Box  textAlign="left">
        <Box  w="80%"  id="user-detail-intro" m="auto">
        <Text fontSize={["xl","2xl","4xl"]} >Hi ! This is </Text>
        <Heading fontSize={["2xl","3xl","5xl"]} color="tomato" _hover={{color:"gray"}}>Pranshu Shukla</Heading>
        <Text fontSize={["xl","2xl","4xl"]} fontWeight="semibold" id="user-detail-intro" >(I am a Software Developer)</Text> 
        </Box>
        <Box w="80%"  id="user-detail-intro" m="auto">
        <Text fontSize={["md","lg","xl"]} fontWeight="semibold" id="user-detail-intro" >Here you will find the best of my work that will help you to analyse my productivity as well as capability.
        </Text>
        <Button mt="2%" className="nav-link resume" w ={["40px","60px","100px"]} h={["20px","30px","50px"]} bg="green.400" color="white" _hover={{bg:"green.300",color:"black"}} fontSize={["7px","10px","17px"]} onClick={downloadResume} id="resume-button-2"><Link to="https://drive.google.com/file/d/1kNSn3WLdCenTcHoQ7-o_fYYZT66umVnp/view?usp=sharing" id="resume-link-2">Resume</Link></Button>
        </Box>
        
        </Box>
    </Flex>
}