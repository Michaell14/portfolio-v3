//make typing animation when cmd is opened

import React, {useState, useEffect, useCallback} from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Text, Button, Center } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
import $ from "jquery"
import { Navigate } from 'react-router-dom';


let message="";
let messagesArr=[];
let index=0;

function CMD() {

    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);

    const handleUserKeyPress = useCallback(event => {
        const { key, keyCode } = event;

        //Enter key: submit message
        if(keyCode === 13){
            let toAdd=message;
            messagesArr.push(toAdd);
            setMessages(messages => [...messages, toAdd]);

            console.log(message);

            //Special command
            const splitMsg = message.split(" ");
            if (splitMsg.length>1){
                console.log(splitMsg);
                //Changing pages
                if (splitMsg[0]==="cd" || splitMsg[0]==="\rcd"){
                    
                    //Navigate to projects page
                    if (splitMsg[1]==="projects"){
                        navigate("/projects");
                    //Navigate to about page
                    }else if (splitMsg[1]==="About"){
                        
                    }
                }
            }

            message="";
            $("#message").text(message);
            index++;

        //UP arrow: cycle to oldest message
        }else if (keyCode==38){
            console.log("UP")
            if (index>0){
                index--;
                message=messagesArr[index];
                $("#message").text(message);
            }

        //DOWN arrow: cycle to recent message
        }else if (keyCode==40){
            if (index<messagesArr.length-1){
                index++;
                message=messagesArr[index];
                $("#message").text(message);
            }
        }
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [handleUserKeyPress]);

    return (
        <>
            <Center mt={20}>
                <Box backgroundColor={"#F2DDA4"} borderRadius={"6px"} w={"800px"} h={"400px"} p={7}>

                    <Text id="cmd">Help:</Text>
                    <Text>cd: redirect to a new page (projects/about)</Text>
                    <Text>arrow keys: cycle through entered messages</Text>
                    {messages.map(item => (
                        <Box key={item}>
                            <Text as={"span"}>C:\Users\Client&gt; {item}</Text>
                        </Box>
                    ))}
                    <Text as={"span"}>C:\Users\Client&gt; </Text><Text as={"span"} id="message"></Text>
          
                </Box>
            </Center>

           

        </>
    )
}

$(document).keydown(function(e){
    //Backspace: removes last character in message
    if (e.keyCode==8){
        if (message.length>0){
            message=message.slice(0, -1);
            $("#message").text(message);
        }
    //Escape key: closes modal
    }else if (e.keyCode==27){

    }
})

$(document).bind('keypress', function(e) {

    //Normal character: adds to the end of the message
    try{
        message=message + String.fromCharCode(e.keyCode);
        $("#message").text(message);
    }catch(error){
        console.error(error);
    }
    
});

export default CMD;
