import { Box, Text,Card,CardBody,Image,Stack,CardFooter,Button } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar"

export default function Skills() {
    return <Box id="skills" p="2%" bg="green.200" textAlign="left">
        <Box>
        <Card direction={{ base: 'column', sm: 'row' }}overflow='hidden'  variant='outline' w="70%" m="auto" bg="green.100">
            <Image className="skills-card-img" objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://pranshushuklagithub.github.io/portfolio/src/Components/Images/softskillcover.jpg'alt='softskills'/>

            <Stack>
                <CardBody >
                <Text fontSize={["xl","2xl","3xl"]} color="teal" fontWeight="semibold" className="skills-card-name">Soft Skills</Text>
                </CardBody>

                <CardFooter gap="2%">
                    <Text fontSize={["10px","15px","20px"]} fontWeight="semibold">Communication Skills | Public Speaking Skills | Presentation Skills | Adaptibility | Enthusiastic</Text>
                </CardFooter>
            </Stack>
        </Card>
        </Box>

        <Box mt="2%">
        <Card direction={{ base: 'column', sm: 'row' }}overflow='hidden'  variant='outline' w="70%" m="auto" bg="green.100">
            <Image className="skills-card-img" objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://pranshushuklagithub.github.io/portfolio/src/Components/Images/frontendcover.jpg'alt='frontend'/>

            <Stack>
                <CardBody>
                <Text fontSize={["xl","2xl","3xl"]} color="teal" fontWeight="semibold" className="skills-card-name">FrontEnd</Text>
                </CardBody>

                <CardFooter gap="2%">
                    <Button variant='solid' colorScheme='yellow' w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>HTML</Button>
                    <Button variant='solid' colorScheme='red' w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>CSS</Button>
                    <Button variant='solid' colorScheme='yellow' w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>JS</Button>
                    <Button variant='solid' colorScheme="green" w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>ReactJS</Button>
                    <Button variant='solid' colorScheme='teal' w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>REDUX</Button>
                    <Button variant='solid' colorScheme='purple' w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>CakraUI</Button>
                    <Button variant='solid' colorScheme='orange' w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>Figma</Button>
                </CardFooter>
            </Stack>
        </Card>
        </Box>
        <Box mt="2%" mb="2%">
        <Card direction={{ base: 'column', sm: 'row' }}overflow='hidden'  variant='outline' w="70%" m="auto" bg="green.100">
            <Image className="skills-card-img" objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://pranshushuklagithub.github.io/portfolio/src/Components/Images/backendcover.jpg'alt='backend'/>

            <Stack>
                <CardBody>
                <Text fontSize={["xl","2xl","3xl"]} color="teal" fontWeight="semibold" className="skills-card-name">BackEnd</Text>
                </CardBody>

                <CardFooter gap="2%">
                    <Button variant='solid' colorScheme='yellow' w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>NodeJS</Button>
                    <Button variant='solid' colorScheme='red' w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>Express</Button>
                    <Button variant='solid' colorScheme='green' w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>MongoDB</Button>
                </CardFooter>
            </Stack>
        </Card>
        </Box>

        <Box  className="react-activity-calendar" textAlign="center" p="3%" >
        <Text fontSize={["xl","2xl","4xl"]} mb="3%" color="teal">My GitHub Statistics</Text>
        <GitHubCalendar className="react-activity-calendar" style={{margin:"auto"}} username="pranshushuklagithub"/>

        <Image id="github-streak-stats" src="https://streak-stats.demolab.com?user=pranshushuklagithub&theme=vue-dark&border_radius=10)(https://git.io/streak-stats)" m="auto" mt="2%"></Image>
        <Image id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=pranshushuklagithub" m="auto" mt="2%"></Image>
        <Image id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=pranshushuklagithub&show_icons=true&locale=en" m="auto" mt="2%"></Image>
        </Box>

        
    </Box>
}