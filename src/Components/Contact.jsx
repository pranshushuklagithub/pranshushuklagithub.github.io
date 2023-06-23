import { Box, Flex, Heading,IconButton,Link,Text,Image } from "@chakra-ui/react";
import {EmailIcon,PhoneIcon} from "@chakra-ui/icons"


export default function Contact() {
    return <Box id="contact"  p="6%" >
        <Heading id="user-detail-name" fontSize={["xl","2xl","3xl"]}> Contacts</Heading>
        
    <Flex flexWrap="wrap" w="80%" m="auto" justify="space-between" mt="15%">
            <Box w="45%">
            <Image src="./Images/socialmedia.jpg" w="100%" borderRadius="2xl"></Image>
            </Box>
        
        <Box w="50%"  p="3%" textAlign="left" > 
            <Box  mb="5%">
            <Heading fontSize={["xl","2xl","3xl"]} > My Contact Details Are Here</Heading>
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
                
            <Link href="https://github.com/pranshushuklagithub" isExternal><Box as="Button" borderRadius="xl" w ={["40px","60px","80px"]} h={["20px","30px","40px"]} fontSize={["7px","10px","17px"]}  _hover={{bg:"green.300",color:"black"}} bg = "tomato" color="white" id="contact-github">Github </Box></Link>
            <Link href="https://www.linkedin.com/in/pranshu-shukla-at/" isExternal><Box as="Button" borderRadius="xl" w ={["40px","60px","80px"]} h={["20px","30px","40px"]} fontSize={["7px","10px","17px"]}  _hover={{bg:"green.300",color:"black"}} bg = "tomato" color="white" id="contact-linkedin">Linkedin</Box></Link>
                
            </Flex>
        </Box>
            
    </Flex>    

    
    </Box>
}