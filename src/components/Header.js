import React from 'react'
import { Box, Flex, Text, Button, Center } from '@chakra-ui/react';

function Header() {
  return (
    <>
        <Flex justify={"space-between"} mt={10} mx={"50px"}>
            <Box>
                Michael Li
            </Box>
            <Flex>
                <Text mr={10}><a href="">Home</a></Text>
                <Text mr={10}><a href="">Projects</a></Text>
                <Text mr={10}><a href="">CMD</a></Text>
                <Text><a href="">About</a></Text>
            </Flex>
        </Flex>
        
    </>
  )
}


export default Header;