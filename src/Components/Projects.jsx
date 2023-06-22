import { Box, SimpleGrid,Image,Text, Button, Heading,Link,Card, CardBody, CardFooter,Stack,Divider,ButtonGroup } from "@chakra-ui/react";




export default function Projects(){

    const projects = [
        {
            name:"Razer.com-Clone",
            image:"https://pranshushuklagithub.github.io/Images/razer.png",
            description:"An e-commerce website(USA based), where people can explore and buy electronic products.",
            github:"https://github.com/hasbealam/razer.com-clone.git",
            live:"razer-clone-blush.vercel.app/",
            techStack : "ReactJS | ChakraUI | REDUX | JAVASCRIPT | CSS"
        },
        {
            name:"Tata1MG.com-Clone",
            image:"https://pranshushuklagithub.github.io/Images/tata1mg.png",
            description:"Tata's leading ecommerce website, where people can explore and buy pharma products.",
            github:"https://github.com/pranshushuklagithub/tata1mg-clone.git",
            live:"https://648b7445ccba720a9e352702--deft-pika-7adc6a.netlify.app/",
            techStack : "HTML | CSS | JAVASCRIPT "
        },
        {
            name:"Bewakoof.com-Clone",
            image:"https://pranshushuklagithub.github.io/Images/bewakoof.png",
            description:"A leading ecommerce in Fashion industry, where people can explore and buy fashion products.",
            github:"https://github.com/arsh459/Bewakoof-clone.git",
            live:"https://magical-creponne-d53ec4.netlify.app/",
            techStack : "HTML | CSS | JAVASCRIPT"
        },
        {
            name:"Travelious.com-Clone",
            image:"https://pranshushuklagithub.github.io/Images/travalious.png",
            description:"Leading Ecommerce which offers various travel and tours services.",
            github:"https://github.com/arsh459/Bewakoof-clone.git",
            live:"https://travelious-clone-app.vercel.app/",
            techStack : "ReactJS | ChakraUI | REDUX | JAVASCRIPT | CSS | Mongodb | NodeJS | Express"
        },
        {
            name:"Portfolio Website",
            image:"https://pranshushuklagithub.github.io/Images/portfoliocover.png",
            description:"Leading Ecommerce which offers various travel and tours services.",
            github:"https://github.com/pranshushuklagithub/pranshushuklagithub.github.io.git",
            live:"https://github.com/pranshushuklagithub/pranshushuklagithub.github.io.git",
            techStack : "ReactJS | ChakraUI | JAVASCRIPT | CSS "
        }
        
    ]
   

    return <Box id="projects" p={["25%","17%","2%"]} bg="green.200">
        <SimpleGrid w="90%" textAlign="left" p="1%" gap ="1%" gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]} m="auto" className="project-card">
        
        {
            projects.map((e)=>{
                return (

        <Card w="100%" h="100%" boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" className="project-card">
                <CardBody>
                    <Image src={e.image} alt={e.name} borderRadius='lg' className="project-title"/>
                    <Stack mt='3' spacing='1'>
                        <Heading  fontSize={["13px","17px","25px"]} mt="3%" mb="3%" className="project-title">{e.name}</Heading>
                        <Text fontSize={["10px","14px","17px"]} fontWeight="bold" mt="1%"  className="project-description">{e.description}</Text>
                        <Text fontSize={["10px","13px","15px"]} fontWeight="bold" mt="1%"  className="project-tech-stack">{e.techStack}</Text>
                    </Stack>
                </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='3'>
                    <Button variant='solid' colorScheme='teal' w ={["40px","60px","80px"]} h={["20px","30px","40px"]} fontSize={["7px","10px","17px"]}  _hover={{bg:"green.300",color:"black"}}  color="white" mr="1%" className="project-github-link"><Link href={e.github} isExternal>Github </Link></Button>
                    <Button variant='ghost' colorScheme='teal' w ={["40px","60px","80px"]} h={["20px","30px","40px"]} fontSize={["7px","10px","17px"]} className="project-deployed-link"><Link href={e.live} isExternal>Live</Link></Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
        )})
        }

        </SimpleGrid>
    </Box>
}
