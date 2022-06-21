import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { Box, Text, Image, HStack, Center, VStack, Icon, Flex} from '@chakra-ui/react'
import CMD from './components/CMD';
import { FiGithub, FiLinkedin, FiInstagram, FiCode } from "react-icons/fi";
import $ from "jquery";
import gsap from 'gsap';

const projects=["Wootton Life", "Codele", "Encryption Visualizer", "Superlatives"];
const images=["Wootton-life.png", "Codele.png", "Encryptable.png", "Superlatives.png"]
const descriptions=["This project was made for student at Wootton to learn about other clubs",
                  "This is a parody of the New York Times, Wordle, but with different coding languages", 
                  "This project was created to help visualize different encryption ciphers.",
                "This is a game to play with your friends to vote for superlatives"]

function App() {

  return (
    <>
      <Box id="body">

     

        <Box position={"fixed"} bottom={0} ml={"60px"}>
          <Flex direction={"column"} ml={"-9px"}>
            <a href=""><Icon as={FiGithub} boxSize={5} mb={4}/></a>
            <Icon as={FiLinkedin} boxSize={5} mb={4}/>
            <Icon as={FiInstagram} boxSize={5} mb={4}/>
            <Icon as={FiCode} boxSize={5} mb={4}/>
          </Flex>
          <Box h={"100px"} borderLeft={"3px solid #AF6997"}></Box>
        </Box>
        


        <Box h={"100vh"} pos={"relative"}>
          <Flex align={"center"} justify={"center"} direction={"column"}>
            
            <Flex mt={"120px"} align={"center"} position={"relative"}>
              <Box mr={"250px"}>
                  <Text fontSize="40px" color={"#AF6997"}><b>Hey!</b></Text>
                  <Text fontSize="70px" color={"#383737"}><b>I'm Michael Li,</b></Text>
                  <Text fontSize="70px" color={"#6D6C6B"}><b id="descriptor"></b></Text>
                  <Text w={"400px"} fontSize={"lg"}>I'm a high school student in Maryland who loves to code and listen to music.
                  I am focused on web development, artifical intelligence, and competitive programming. 
                  </Text>
              </Box>
                  <Image
                    borderRadius='10px'
                    boxSize='260px'
                    objectFit='cover'
                    src='michaelbrian.png'
                    alt='Michael Li'
                    zIndex={1}
                    />
                    <Box borderRadius={"10px"} borderColor={"#AF6997"} borderWidth={"5px"} h={"260px"} w={"260px"}
                     position={'absolute'}
                     right={"-18px"} bottom={"75px"} zIndex={0}>

                    </Box>
              </Flex>
            </Flex>
        </Box>
        
           
       
        
        
        <Center>
          <Text fontSize={"3xl"}>What I've Built</Text>
        </Center>
      
        <Center>
        <Box>
              <Flex mt={20}>
                <Box>
                <Image src={"Wootton-life.png"} w={"550px"}/>
                </Box>
                
                <Box ml={10} textAlign={"right"}>
                  <Text fontSize={"2xl"}>Wootton Life</Text>
                  <Box w={"550px"} h={"fit-content"} p={10} borderRadius={"15px"} borderColor={"black"} bg={"#BFD7B5"} boxShadow='xl'>
                    <Text fontSize={"xl"}>This is a thing for students at Wootton to gain info about clubs and activities there</Text>
                  </Box>

                  <Flex justify={"right"} mt={6}>
                    <Text>Firebase</Text>
                    <Text>Chakra UI</Text>
                    <Text>React JS</Text>
                  </Flex>
                  
                </Box>
              </Flex>
             
              
            <Flex mt={20}>
                
                <Box mr={10} textAlign={"left"}>
                  <Text fontSize={"2xl"}>{"Superlatives"}</Text>
                  <Box w={"550px"} h={"fit-content"} p={10} borderRadius={"15px"} borderColor={"black"} bg={"#BFD7B5"} boxShadow='xl'>
                    <Text fontSize={"xl"}>This is a game for friends where you ask questions with each other</Text>

                  </Box>
                  <Flex justify={"left"} mt={6}>
                    <Text>Firebase</Text>
                    <Text>Chakra UI</Text>
                    <Text>React JS</Text>
                  </Flex>
                </Box>
                <Box>
                <Image src={"Superlatives.png"} w={"550px"}/>
                </Box>
              </Flex>
              <Flex mt={20}>
                <Box>
                <Image src={"Encryptable.png"} w={"550px"}/>
                </Box>
                
                <Box ml={10} textAlign={"right"}>
                  <Text fontSize={"2xl"}>Encryptable</Text>
                  <Box w={"550px"} h={"fit-content"} p={10} borderRadius={"15px"} borderColor={"black"} bg={"#BFD7B5"} boxShadow='xl'>
                    <Text fontSize={"xl"}>This is an encyption visualizer</Text>
                  </Box>
                  <Flex justify={"right"} mt={6}>
                    <Text>Firebase</Text>
                    <Text>Chakra UI</Text>
                    <Text>React JS</Text>
                  </Flex>
                </Box>
              </Flex>
              <Flex mt={20}>
               <Box mr={10} textAlign={"left"}>
                  <Text fontSize={"2xl"}>Codele</Text>
                  <Box w={"550px"} h={"fit-content"} p={10} borderRadius={"15px"} borderColor={"black"} bg={"#BFD7B5"} boxShadow='xl'>
                    <Text fontSize={"xl"}>A Wordle parody where you guess a word</Text>
                  </Box>
                  <Flex justify={"right"} mt={6}>
                    <Text>Firebase</Text>
                    <Text>Chakra UI</Text>
                    <Text>React JS</Text>
                  </Flex>
                </Box>
                <Box>
                <Image src={"Codele.png"} w={"600px"}/>
                </Box>
                
                
              </Flex>
              

        </Box>
        </Center>
        

            <Box my={20}>
              <CMD/>
            </Box>
         
            <Center>
              <Box>
                <Text fontSize={"3xl"}>More About Me!</Text>
                <Text w={"600px"}>Again, my name is Michael and I want to make things that are cool and interactive.
                  My interest in computer science started in middle school and extended into now. 
                  Now, I have the opportunity to promote computer science through CodeDay DC, Kids For Code, and many more organizations.

                  I am also a part of many clubs in my school with a focus in technologies.

                  Here are some of my technology strenths:</Text>
              </Box>
              
            </Center>

          <Center>
            <Text>Check out the older versions of my portfolio website!</Text>
            <Text><a href="https://portfolio-git-master-michaell14.vercel.app/" target="_blank">V2</a></Text>
            <Text><a href="https://personalwebsite-neon.vercel.app/" target="_blank">V1</a></Text>
          </Center>
      </Box>
    </>

  );
}

const descriptors=["Developer", " Student", "Athlete"];

$(function(){
  write(0, 0);
})

function write(index, arrayIndex){
  if (index>=descriptors[arrayIndex].length){
    setTimeout(remove, 800, index-1, arrayIndex);
    return;
  }
  $("#descriptor").text("a " + descriptors[arrayIndex].substring(0, index+1));
  setTimeout(write, 180, index+1, arrayIndex);
}

function remove(index, arrayIndex){
  if (index<=0){
    arrayIndex=(arrayIndex+1)%3;
    setTimeout(write, 500, 0, arrayIndex);
    return;
  }

  $("#descriptor").text("a "+ descriptors[arrayIndex].substring(0, index-1));
  setTimeout(remove, 130, index-1, arrayIndex);
}


export default App;
