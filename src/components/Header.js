import React from 'react'
import { Box, Flex, Text, Button, Image } from '@chakra-ui/react';

function Header() {
  return (
    <>
        <Flex justify={"space-between"} pt={10} mx={"50px"} id="header">
            <Box>
                <Image src="favicon.png" height="28px"/>
            </Box>
            <Flex>
                <Text px={5} id="menu1" className="menuunderline"><a href="#header">Home</a></Text>
                <Text px={5} id="menu2" className="menuunderline"><a href="#projectItems">Projects</a></Text>
                {/*<Text px={5} id="menu3" className="menuunderline"><a href="#cmdbox">CMD</a></Text>*/}
                <Text px={5} id="menu4" className="menuunderline"><a href="#moreinfo">About</a></Text>
            </Flex>
        </Flex>
        
    </>
  )
}


export default Header;