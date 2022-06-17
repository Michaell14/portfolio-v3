import React, {useState, useEffect, useCallback} from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Text, Button, useDisclosure } from '@chakra-ui/react'
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
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [messages, setMessages] = useState([]);

    const handleUserKeyPress = useCallback(event => {
        const { key, keyCode } = event;

        //Enter key: submit message
        if(keyCode === 13){
            const toAdd=message;
            messagesArr.push(toAdd);
            setMessages(messages => [...messages, toAdd]);

            console.log(message);
            //Special command
            const splitMsg = message.split(" ");
            if (splitMsg.length>1){
                console.log(splitMsg);
                //Changing pages
                if (splitMsg[0]==="cd"){
                    if (splitMsg[1]==="projects"){
                        //Navigate to projects page
                        navigate("/projects");
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
            <Button onClick={onOpen}>CMD</Button>

            <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
            <ModalOverlay />
            <ModalContent  h={"80vh"}>
                <ModalHeader>Command Prompt</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {messages.map(item => (
                        <Box key={item}>
                            <Text as={"span"}>C:\Users\Client&gt; {item}</Text>
                        </Box>
                    ))}
                    <Text as={"span"}>C:\Users\Client&gt; </Text><Text as={"span"} id="message"></Text>
                </ModalBody>

                <ModalFooter>
                </ModalFooter>
            </ModalContent>
            </Modal>
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
