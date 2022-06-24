import { VStack, Text, Box  } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Image from "next/image";

function TechContainer({image, text}) {
    return (
        <VStack 
        textAlign="center"
        borderRadius="lg"
        p="1rem 0 0 0"
        bgColor={useColorModeValue("gray.100", "gray.700")}>
            <Box w='4rem' h="4rem" alignItems="center" justifyContent="center" display="flex">
                <Image src={image} alt={text}/>
            </Box>
            <Box w='7rem' h="2rem" alignItems="center" justifyContent="center" display="flex" >
                <Text as="kbd" fontSize="md">{text}</Text>
            </Box>
        </VStack>
    )
};

export default TechContainer;