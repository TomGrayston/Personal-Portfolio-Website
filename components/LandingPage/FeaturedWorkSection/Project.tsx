import {
    Container,
    VStack,
    LinkBox,
    LinkOverlay,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Box,
    ModalFooter,
    Heading,
    Badge,
    HStack,
    Text,
    Stack,
    Divider,
    Button,
    Link
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { FaGithub } from "react-icons/fa";
import { Project } from "../../../common/types";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface Props {
    project: Project;
}

const ExampleProject: React.FC<Props> = ({ project }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const techBadges = project.techUsed ? (
        <Box>
            {project?.techUsed.map((tech, i) => (
                <Badge 
                    colorScheme="red" 
                    borderRadius="full" 
                    variant="solid" 
                    px="2"
                    mr="2"
                    key={i}
                    fontSize='0.8em'
                >
                    {tech}
                </Badge>
            ))}
        </Box>
    ) : null;

    const LearnMoreLink = project.link ? (
        <Link href={project.link} alignSelf="end">
            <Button leftIcon={<FaGithub/>} rightIcon={<ExternalLinkIcon/>} >
                Learn More
            </Button>
        </Link>
    ) : null;

    return (
        <>
            <LinkBox>
                <Container
                    bgColor={useColorModeValue("gray.100", "gray.700")}
                    p="1rem 2rem"
                    borderRadius="lg"
                    alignItems="flex-start"
                    maxW="container.md"
                    _hover={{ bg: useColorModeValue("gray.200", "gray.600") }}
                    cursor="pointer"
                >
                    <LinkOverlay onClick={onOpen}>
                        <VStack alignItems="flex-start">
                            <HStack 
                                direction={{ base: "column-reverse", sm: "row"}}
                                align={{base: "start", sm: "center"}}
                                w="full"
                                justify="space-between"
                            >
                                <Heading size="md" noOfLines={1}>
                                    {project.heading}
                                </Heading>
                                <Badge
                                    colorScheme="red"
                                    variant="solid"
                                    fontSize='1em'
                                >
                                    {project.year}
                                </Badge>
                            </HStack>
                            <Text fontSize="xs" alignSelf="flex-start" noOfLines={1}>
                                {project.subheading}
                            </Text>
                            {techBadges}
                            <Text fontSize="sm" noOfLines={4}>{project.body}</Text>
                        </VStack>
                    </LinkOverlay>
                </Container>
            </LinkBox>
            <Divider my="3" />

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="2xl"
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader pb="1">{project.heading}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack align="start" >
                            <HStack align="center" >
                                <Badge
                                    colorScheme="red"
                                    variant="solid"
                                >
                                    {project.year}
                                </Badge>
                                <Text fontSize="xs" align="start" >
                                    {project.subheading}
                                </Text>
                            </HStack>
                            <Text>{project.body}</Text>
                                <Divider/>
                                <Text >Project Stack:</Text>
                                {techBadges}
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <VStack width="100%" >
                            <Divider/>
                            {LearnMoreLink}
                        </VStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ExampleProject;
