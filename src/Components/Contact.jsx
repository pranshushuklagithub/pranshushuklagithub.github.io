import { Box, Flex, Heading,IconButton,Link,Text,Button,Image } from "@chakra-ui/react";
import {EmailIcon,PhoneIcon} from "@chakra-ui/icons"


export default function Contact() {
    return <Box  id="contact" bg="green.200" w = "100%" p="4%" alignItems="center">

            <Flex flexWrap="wrap" w="80%" m="auto" justify="space-between" alignItems="center">

            <Box w="40%" borderRadius="10%">
            <Image src="https://pranshushuklagithub.github.io/portfolio/src/Components/Images/socialmedia.jpg" w="100%" borderRadius="10%"></Image>
            </Box>
        
        <Box w="60%"  p="3%" justifyContent="left" color={["teal","teal","black"]}> 
            <Box textAlign="left" mb="5%">
            <Heading fontSize={["lg","xl","4xl"]}> My Contact Details Are Here</Heading>
            </Box>

            <Flex id="contact-phone" gap="2%" alignItems="center" justifyContent="left" w="40%" mb="5%">

                    <IconButton variant='outline' colorScheme='teal.200' aria-label='Call Sage' fontSize={["sm","md","lg"]}icon={<PhoneIcon />}/>
                    <Text fontSize={["md","lg","xl"]}> +917987257325</Text>

                </Flex>
                <Flex id="contact-email"  gap="2%" alignItems="center" justifyContent="left" w="40%" mb="5%">

                    <Link href="https://mail.google.com" isExternal><IconButton variant='outline' fontSize={["sm","md","lg"]} colorScheme='teal.200'aria-label='Send email'icon={<EmailIcon />}/></Link>
                    <Text fontSize={["md","lg","xl"]}> pranshushuklaoffice@gmail.com</Text>

            </Flex>

            <Flex w="40%" justify="left" gap="5%">
                
                    <Button w ={["40px","60px","80px"]} h={["20px","30px","40px"]} fontSize={["7px","10px","17px"]}  _hover={{bg:"green.300",color:"black"}} bg = "tomato" color="white" id="contact-github"><Link href="https://github.com/pranshushuklagithub" isExternal>Github </Link></Button>
                    <Button w ={["40px","60px","80px"]} h={["20px","30px","40px"]} fontSize={["7px","10px","17px"]}  _hover={{bg:"green.300",color:"black"}} bg = "tomato" color="white" id="contact-linkedin"><Link href="https://www.linkedin.com/in/pranshu-shukla-at/" isExternal>Linkedin</Link></Button>
                
            </Flex>
        </Box>
            
            </Flex>    

    </Box>
}