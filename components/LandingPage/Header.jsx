import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Heading } from "@chakra-ui/react";
import { Stack, Text, VStack, Container, Divider } from "@chakra-ui/layout";
import { DownloadIcon } from '@chakra-ui/icons';
import Image from "next/image";
import profilepic from "../../public/profilepicture.jpg";
import TextBlock from "./FeaturedWorkSection/TextBlock";

const Header = () => {
    return (
        <Container maxW="container.md">
            <Stack
                alignItems="center"
                justify="center"
                m={{ base: "1rem 0 1.2rem 0", md: "3rem 0 4rem 0" }}
                spacing="1rem"
                direction={{ base: "column", md: "row-reverse" }}
            >
                <VStack 
                    textAlign="center"
                    bgColor={useColorModeValue("gray.100", "gray.700")}
                    borderRadius="lg"
                    p="1rem 2rem"
                >
                    <Avatar
                        borderWidth="1.5px"
                        borderStyle="solid"
                        borderColor={useColorModeValue("black", "white.500")}
                        boxSizing="border-box"
                        size="2xl"
                        display="inline-block"
                        overflow="hidden"
                    >
                        <Image
                        src={profilepic}
                        alt="Profile Picture Image"
                        layout="fill"
                        placeholder="blur"
                        />
                    </Avatar>
                    <br/>
                    <Button colorScheme="red" size="sm" leftIcon={<DownloadIcon/>} >
                        <a src="../../public/Tom_Grayston_CV.pdf" download="Tom_Grayston_CV.pdf" href="Tom_Grayston_CV.pdf"> Download My CV </a> 
                    </Button>
                </VStack>

                <TextBlock>
                    <Heading fontSize="4xl" >
                    Hi, I&apos;m Tom! 👋 
                    </Heading>
                    <Text fontSize="md" >
                    I&apos;m a Software Engineer based in the UK with an interest in emerging technologies. 
                    A short summary of me would be that I love to learn, create, collaborate and build new &amp; 
                    interesting things 👨‍💻 
                    Welcome to my slice of the internet - I hope you find it interesting!
                    </Text>
                    <Text fontSize="md" >
                    Thanks for dropping by! 🥳
                    </Text>
                </TextBlock>
            </Stack>
            <Divider p="0.5rem"/>
        </Container>
    );
};

export default Header;
