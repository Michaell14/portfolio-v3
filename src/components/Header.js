import React, {useEffect, useState} from 'react'
import { Box, Flex, Text, Button, Image } from '@chakra-ui/react';

const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function Header() {

  let [width, setWidth] = useState(getWidth());

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
        <Flex justify={"space-between"} pt={10} mx={"50px"} id="header">
            {width>500 &&
            <Box>
                <Image src="favicon.png" height="28px"/>
            </Box>}
            <Flex>
                <Text px={5} id="menu1" className="menuunderline"><a href="#header">Home</a></Text>
                <Text px={5} id="menu2" className="menuunderline"><a href="#projectItems">Projects</a></Text>
                {/*<Text px={5} id="menu3" className="menuunderline"><a href="#cmdbox">CMD</a></Text>*/}
                <Text pl={5} id="menu4" className="menuunderline"><a href="#moreinfo">About</a></Text>
            </Flex>
        </Flex>
        
        
    </>
  )
}


export default Header;