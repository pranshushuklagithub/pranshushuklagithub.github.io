import { Box, Flex, Heading,IconButton,Link,Text,Image } from "@chakra-ui/react";
import {EmailIcon,PhoneIcon} from "@chakra-ui/icons"


export default function Contact() {
    return <Box id="contact"  p="6%" w="100%">
        <Heading  fontSize={["xl","2xl","3xl"]}> Contacts</Heading>
        
    <Flex bg="GrayText" borderRadius="2xl" flexWrap="wrap" w="100%" m="auto" justify="space-between" mt="8%" id="contact-card">
            <Box w="50%" alignItems="center">
            <Image src="./Images/socialmedia.jpg" w="100%" borderRadius="2xl" h={["150px","250px","400px"]}></Image>
            </Box>
        
        <Box w="50%"  p="2%" textAlign="left" alignItems="cneter"> 
            <Box  mb="5%" alignItems="cneter">
            <Heading fontSize={["xl","2xl","3xl"]} > My Contact Details Are Here</Heading>
            </Box>

            <Flex  id="contact-phone" gap="2%" alignItems="center" justifyContent="left" w="100%" mb="5%" >

                    <IconButton w="5%" variant='outline' colorScheme='teal.200' aria-label='Call Sage' fontSize={["sm","md","xl"]}icon={<PhoneIcon />}/>
                    <Text fontSize={["sm","md","xl"]}> +917987257325</Text>

                </Flex>
                <Flex id="contact-email"  gap="2%" alignItems="center" justifyContent="left" w="100%" mb="5%" >

                    <Link  href="https://mail.google.com" isExternal><IconButton w="5%" variant='outline' fontSize={["sm","md","xl"]} colorScheme='teal.200'aria-label='Send email'icon={<EmailIcon />}/></Link>
                    <Text fontSize={["sm","sm","xl"]} > pranshushuklaoffice@gmail.com</Text>

            </Flex>

            <Flex w="40%" justify="left" gap="5%">
                
            <Link href="https://github.com/pranshushuklagithub" isExternal><Box as="Button" borderRadius="xl" w ={["40px","60px","80px"]} h={["20px","30px","40px"]} fontSize={["7px","10px","17px"]}  _hover={{bg:"green.300",color:"black"}} bg = "tomato" color="white" id="contact-github">Github </Box></Link>
            <Link href="https://www.linkedin.com/in/pranshu-shukla-at/" isExternal><Box as="Button" borderRadius="xl" w ={["40px","60px","80px"]} h={["20px","30px","40px"]} fontSize={["7px","10px","17px"]}  _hover={{bg:"green.300",color:"black"}} bg = "tomato" color="white" id="contact-linkedin">Linkedin</Box></Link>
                
            </Flex>
        </Box>
            
    </Flex>    

    
    </Box>
}