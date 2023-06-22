import { Box, Text,Card,CardBody,Image,Stack,CardFooter,Button, Flex } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar"

export default function Skills() {
    return <Box id="skills" p="2%" bg="green.200" textAlign="left" h="100%">
        <Box>
        <Box direction={{ base: 'column', sm: 'row' }}   w="70%" m="auto" bg="green.100" p="2%" className="skills-card">
            <Image className="skills-card-img" objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://pranshushuklagithub.github.io/Images/softskillcover.jpg'alt='softskills'/>

            <Stack>
                <Box >
                <Text fontSize={["xl","2xl","3xl"]} color="teal" fontWeight="semibold" className="skills-card-name">Soft Skills</Text>
                </Box>

                <Box gap="2%">
                    <Text fontSize={["10px","15px","20px"]} fontWeight="semibold">Communication Skills | Public Speaking Skills | Presentation Skills | Adaptibility | Enthusiastic</Text>
                </Box>
            </Stack>
        </Box>
        </Box>

        <Box mt="2%">
        <Box direction={{ base: 'column', sm: 'row' }}   w="70%" m="auto" bg="green.100" p="2%" className="skills-card">
            <Image className="skills-card-img" objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://pranshushuklagithub.github.io/Images/frontendcover.jpg'alt='frontend'/>

            <Stack>
                <Box>
                <Text fontSize={["xl","2xl","3xl"]} color="teal" fontWeight="semibold" className="skills-card-name">FrontEnd</Text>
                </Box>

                <Flex gap="2%">
                    <Box as ="Button"  borderRadius="xl" bg='yellow' w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>HTML</Box>
                    <Box as ="Button" color = "white" borderRadius="xl" bg='red' w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>CSS</Box>
                    <Box as ="Button" borderRadius="xl" bg='yellow' w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>JS</Box>
                    <Box as ="Button" color = "white" borderRadius="xl" bg="green" w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>ReactJS</Box>
                    <Box as ="Button" color = "white" borderRadius="xl" bg='teal' w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>REDUX</Box>
                    <Box as ="Button" color = "white" borderRadius="xl" bg='purple' w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>CakraUI</Box>
                    <Box as ="Button" borderRadius="xl" bg='orange' w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>Figma</Box>
                </Flex>
            </Stack>
        </Box>
        </Box>
        <Box mt="2%" mb="2%">
        <Box direction={{ base: 'column', sm: 'row' }} w="70%" m="auto" bg="green.100" p="2%" className="skills-card">
            <Image className="skills-card-img" objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://pranshushuklagithub.github.io/Images/backendcover.jpg'alt='backend'/>

            <Stack>
                <Box>
                <Text fontSize={["xl","2xl","3xl"]} color="teal" fontWeight="semibold" className="skills-card-name">BackEnd</Text>
                </Box>

                <Flex gap="2%">
                    <Box as ="Button"  borderRadius="xl" bg='yellow' w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>NodeJS</Box>
                    <Box as ="Button" color = "white" bg='red' borderRadius="xl" w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>Express</Box>
                    <Box as ="Button" color = "white" bg='green' borderRadius="xl" w ={["30px","50px","70px"]} h={["20px","30px","35px"]} fontSize={["5px","7px","12px"]}>MongoDB</Box>
                </Flex>
            </Stack>
        </Box>
        </Box>

        <Box  className="react-activity-calendar" textAlign="center" p="3%" >
        <Text fontSize={["xl","2xl","4xl"]} mb="3%" color="teal">My GitHub Statistics</Text>
        <GitHubCalendar className="react-activity-calendar" style={{margin:"auto"}} username="pranshushuklagithub"/>

        <Image id="github-streak-stats" src="https://streak-stats.demolab.com?user=pranshushuklagithub&theme=vue-dark&border_radius=10)(https://git.io/streak-stats)github-readme-streak-stats.herokuapp.com" m="auto" mt="2%"></Image>
        <Image id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=pranshushuklagithub" m="auto" mt="2%"></Image>
        <Image id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=pranshushuklagithub&show_icons=true&locale=en" m="auto" mt="2%"></Image>
        </Box>

        
    </Box>
}

// https://streak-stats.demolab.com?user=pranshushuklagithub&theme=vue-dark&border_radius=10)(https://git.io/streak-stats)' to include 'github-readme-streak-stats.herokuapp.com