import './App.css';
import React, {useState, useEffect,useLayoutEffect} from 'react';
import { Box, Text, Image, Button, Center, IconButton, Icon, Flex, useDisclosure, Radio, Container, Stack} from '@chakra-ui/react'
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent,DrawerCloseButton} from '@chakra-ui/react'
import CMD from './components/CMD';
import { FiGithub, FiLinkedin, FiInstagram, FiCode } from "react-icons/fi";
import { BsPaintBucket } from "react-icons/bs";
import $ from "jquery";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects=["WOOTTON LIFE", "SUPERLATIVES", "ENCRYPTABLE", "CODELE"];
const images=["Wootton-Life.png", "Superlatives.png", "Encryptable.png","Codele.png"]
const descriptions=["A listing for students at Wootton to view upcoming clubs and activities. Creating in an effort to promote school spirit and club interactivity. Improved my utilization of Firebase and Firebase authentication and focused more on making the interface more intuitive.",
 "An online game to play with friends where you vote for the friend who best fits the description of the listed question. Created to make superlative games more fun, interesting, and less time consuming to make. Developed using Socket IO to keep interactions live.",
"A tool to help visualize popular text encryption ciphers. Created to make learning about ciphers easier for students to understand.",
"A parody of Wordle, but using programming languages instead. I thought Wordle was fun, so I make a parody for people learning about programming languages like Java or Python This was a weekend project that implements Chakra UI."]
const tools=[["Firebase", "Chakra UI", "React JS"], ["Socket IO", "Mongo DB", "React JS"],
["Anime JS", "Chakra UI", "React JS"], ["Chakra UI", "React JS"]]
const links=["https://woottonlife.vercel.app/", "https://superlatives3.vercel.app/", "https://encryption-visualizer.vercel.app/", "https://codele.vercel.app/"];
const colorSchemes=["red", "orange", "cyan", "green"];
const sourceCodes=["https://github.com/Michaell14/woottonlife", "https://github.com/Michaell14/superlatives3",
"https://github.com/Michaell14/encrypt-visualizer", "https://github.com/Michaell14/codele"];

//small text, descirptions, underlines, lines, h1 text
const colors=[["AF6997", "BFD7B5", "808080", "AF6997", "383737"],["0081a7", "00afb9", "fdfcdc", "fed9b7", "f07167"], ["780000", "c1121f", "fdf0d5", "003049", "669bbc"]];

gsap.registerPlugin(ScrollTrigger);


const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function App() {

  let [width, setWidth] = useState(getWidth());
  const [colorIndex, setIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth())
      console.log(width);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])


  return (
    <>
      


      <Box>
        {width>650 && 
          <Box position={"fixed"} right={10} top={"50%"} transform={"translateY(-50%) rotateY(180deg)"} float={"right"} >
          <Box w={"27px"} borderTop={"2.8px solid #" + colors[colorIndex][0]} id="line1"></Box>
          <Box w={"27px"} borderTop={"2.8px solid #" + colors[colorIndex][0]} mt={4} id="line2"></Box>
          {/*<Box w={"27px"} borderTop={"2.8px solid #" + colors[colorIndex][0]} mt={4} id="line3"></Box>*/}
          <Box w={"27px"} borderTop={"2.8px solid #" + colors[colorIndex][0]} mt={4} id="line4"></Box>
        </Box>
        }
        
        {width>650 && 
        <Box position={"fixed"} bottom={0} ml={"60px"} zIndex={1}>
          <Flex direction={"column"} ml={"-9px"}>
            <a href="https://github.com/Michaell14" target="_blank" rel="noreferrer"><Icon as={FiGithub} boxSize={5} mb={4}/></a>
            <a href="https://www.linkedin.com/in/itsmichaelli" target="_blank" rel="noreferrer"><Icon as={FiLinkedin} boxSize={5} mb={4}/></a>
            <a href="https://www.instagram.com/michaells19/" target="_blank" rel="noreferrer"><Icon as={FiInstagram} boxSize={5} mb={4}/></a>
            <a href="https://github.com/Michaell14/portfolio-v3" target="_blank" rel="noreferrer"><Icon as={FiCode} boxSize={5} mb={4}/></a>
          </Flex>
          <Box h={"100px"} borderLeft={"3px solid #" + colors[colorIndex][0]}></Box>
        </Box>
        }


        <Box h={"100vh"} pos={"relative"} id="intro" opacity={0} mt={"20px"}>
          <Flex justify={"center"}>
            
            <Flex mt={"120px"} align={"center"} position={"relative"}>
              <Box mr={"18vw"} className="box">
                  <Text fontSize="40px" color={"#"+colors[colorIndex][0]} className='fontsize1'><b>Hey!</b></Text>
                  <Text fontSize="70px" color={"#" + colors[colorIndex][4]} className="fontsize2"><b>I'm Michael Li,</b></Text>
                  <Text fontSize="70px" color={"#6D6C6B"}><b id="descriptor" className="fontsize2"></b></Text>
                  <Text w={"400px"} fontSize={"lg"} className="fontsize3">I'm a high school student in Maryland who loves to code and listen to music.
                  I am focused on web development, artifical intelligence, and competitive programming. 
                  </Text>
              </Box>
              {width>900 && 
                  <Image
                    borderRadius='10px'
                    boxSize='260px'
                    objectFit='cover'
                    src='michaelbrian.png'
                    alt='Michael Li'
                    zIndex={1}
                    id="imageme"
                    />}
                  {width>900 &&
                <Box borderRadius={"10px"} borderColor={"#AF6997"} borderWidth={"5px"} h={"260px"} w={"260px"}
                     position={'absolute'}
                     right={"-18px"} bottom={"75px"} zIndex={0} id="backeffect"
                     >
                </Box>}
              </Flex>
            </Flex>
        </Box>
        
        
        <Center id="projectItems">
          <Box w={"100px"} borderTop={"2.3px solid grey"} mr={10}></Box>
          <Text fontSize={"4xl"}>What I've {" "}<a href="https://github.com/Michaell14" target="_blank" rel="noreferrer" id="maintitle" className="title">Built</a></Text>
          <Box w={"100px"} borderTop={"2.3px solid grey"} ml={10}></Box>
        </Center>
      
        <Center>
        <Box id="projects">

          {projects.map((item, index) => (
            <Center key={item}>
            <Box mt={40} id={"project"+(index+1)} opacity={0} textAlign={"center"}>
                
                  <Box>
                    <Text fontSize={"4xl"} mb={10} className="title" id={"title"+(index+1)}><a href={links[index]} rel="noreferrer" target="_blank"><b>{item}</b></a></Text>
                    <Box boxShadow={"lg"}>
                      <Center><Image src={images[index]} w={"70vw"} h={"70vh"} id={"image"+(index+1)} className="images"/></Center>
                      {width>1100 && <a href={sourceCodes[index]} target="_blank" rel="noreferrer"><IconButton colorScheme={colorSchemes[index]} aria-label='Source Code' icon={<FiCode />} position="absolute" right={10} top={"72vh"}/></a>}
                    </Box>
                  </Box>
  
                  <Center>
                    <Box mt={"-50px"}>
                      <Box w={"50vw"} h={"fit-content"} p={5} borderRadius={"5px"} borderColor={"black"} bg={"#" + colors[colorIndex][1]} boxShadow='md' className={"descriptions"}>
                        <Text fontSize={"md"} lineHeight={"20px"}>{descriptions[index]}</Text>
                      </Box>
  
                      <Flex mt={6} justify={"center"} className="tools">
                        {tools[index].map((tool) => (
                          <Text mr={5} key={tool}>{tool}</Text>
                        ))}
                      </Flex>
                    </Box>
                  </Center>
                  
                </Box>
            </Center>
          ))} 

        </Box>
        </Center>
        
{/*}
            <Box pt={20} my={20} id="cmdbox">
              <CMD/>
                      </Box>*/}
         
            <Center py={60}>
              <Box id="moreinfo">
                <Center><Text fontSize={"3xl"} className="title3">More About Me!</Text></Center>
                
                <Container maxW={"600px"} mt={10} className="fontsize3">Hey, my name is Michael and I like to make things that are cool and interactive.
                  My interest in computer science started in middle school and extended into now. 
                  Now, I have the opportunity to promote computer science through CodeDay DC, Kids For Code, and many more organizations.

                  I am also a part of many clubs in my school with a focus in computer science, notably the Game Development, Robotics, and Competitive Programming clubs.</Container>
                    
                  <Container maxW={"600px"} mt={5} className="fontsize3">Feel free to contact me through <a href="mailto: limichael909@gmail.com" target="_blank" rel="noreferrer" className="socials">email</a>. Find my resume {" "}<a href="Michael_Li_Resume.pdf" className="socials" alt="michael_li_resume" target="_blank" rel="noreferrer">here</a>.</Container>
              </Box>
{/*}
              <Box position={"absolute"} right={0} mt={20}>
                <Text fontSize={"md"} w={"180px"} ml={"70px"}>Take a look at my</Text><Text fontSize={"md"} ml={20}><a href="https://open.spotify.com/user/yvymj5dyeqm16d6ndcf6quctp" target="_blank" rel="noreferrer" id="socialUnderline">Spotify</a> playlist!</Text>
                  <Image src={"personup.svg"} w={"220px"} filter={"invert(70%)"}/>
                    </Box>*/}
            </Center>
          <Center my={5}>
              <Box>
                <Text>previous versions of this website:</Text>
                <Center>

                
                  <a href="https://portfolio-git-master-michaell14.vercel.app/" target="_blank" rel="noreferrer"><Button variant="ghost">V2</Button></a>
                  <a href="https://personalwebsite-neon.vercel.app/" target="_blank" rel="noreferrer"><Button variant="ghost">V1</Button></a>
                </Center>
              </Box>
              {/*<IconButton ref={btnRef} onClick={onOpen} icon={<BsPaintBucket />}/>*/}
          </Center>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Select Color Scheme</DrawerHeader>

          <DrawerBody>
            <Box>One</Box>
            <Box>Two</Box>
            <Box>Three</Box>
          </DrawerBody>

        </DrawerContent>
      </Drawer>

    </>

  );
}

const descriptors=["Developer", "Student", "Athlete"];

$(function(){
  write(0, 0);
})

function write(index, arrayIndex){
  if (index>=descriptors[arrayIndex].length){
    setTimeout(remove, 1100, index-1, arrayIndex);
    return;
  }
  $("#descriptor").text("a " + descriptors[arrayIndex].substring(0, index+1));
  setTimeout(write, 250, index+1, arrayIndex);
}

function remove(index, arrayIndex){
  if (index<=0){
    arrayIndex=(arrayIndex+1)%3;
    setTimeout(write, 600, 0, arrayIndex);
    return;
  }

  $("#descriptor").text("a "+ descriptors[arrayIndex].substring(0, index-1));
  setTimeout(remove, 200, index-1, arrayIndex);
}

$(function(){
  gsap.to("#intro", {
    duration: 1.2,
    y: -20,
    opacity: 1
  })

  //Project animations
  gsap.to("#project1", {
    scrollTrigger: {
      trigger: "#project1",
      start: "top 75%",
    },
    duration:.9,
    y: -15,
    opacity: 1
  })
  gsap.to("#project2", {
    scrollTrigger: {
      trigger: "#project2",
      start: "top 75%",
    },
    duration:.9,
    y: -15,
    opacity: 1
  })
  gsap.to("#project3", {
    scrollTrigger: {
      trigger: "#project3",
      start: "top 75%",
    },
    duration:.9,
    y: -15,
    opacity: 1
  })
  gsap.to("#project4", {
    scrollTrigger: {
      trigger: "#project4",
      start: "top 75%",
    },
    duration:.9,
    y: -15,
    opacity: 1
  })


  //Animate lines on the right side
  gsap.to("#line1", {
    scrollTrigger: {
      trigger: "#imageme",
      toggleActions: "restart reverse restart reverse"
    },
    width: "36px",
    duration:.16
  })

  gsap.to("#line2", {
    scrollTrigger: {
      trigger: "#projects",
      toggleActions: "restart reverse restart reverse"
    },
    width: "36px",
    duration:.16
  })

  gsap.to("#line3", {
    scrollTrigger: {
      trigger: "#cmd",
      toggleActions: "restart reverse restart reverse"
    },
    width: "36px",
    duration:.16
  })

  gsap.to("#line4", {
    scrollTrigger: {
      trigger: "#moreinfo",
      toggleActions: "restart reverse restart reverse"
    },
    width: "36px",
    duration:.16
  })

  document.getElementById("imageme").addEventListener("mouseover", function( event ) {
    gsap.to("#backeffect", {
      duration: .5,
      y: -4,
      x: 4,
      backgroundColor: "rgba(191, 135, 172, .3)"
    })
  });

  document.getElementById("imageme").addEventListener("mouseout", function(event){
    gsap.to("#backeffect", {
      duration: .5,
      y: 4,
      x: -4,
      backgroundColor: "rgba(0,0,0,0)"
    })
  })
  
  $('#image2').on('click', event => {
    var newSrc="Superlatives2.png";
    if (document.getElementById("image2").getAttribute('src')=="Superlatives2.png"){
      newSrc="Superlatives.png";
    }

    gsap.set($("#image2"), { attr: { src: newSrc } });
  });
})




export default App;
