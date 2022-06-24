import {Container, Divider, Heading } from '@chakra-ui/react';
import TechTabs from './TechTabs';


const KnownTech = () => {
    return(
        <Container maxW="container.md" p="1rem 1rem 1rem 1rem">
            <Heading fontSize="xl" p="1rem 0 1.5rem 0">
                Known Technologies
            </Heading>
            <TechTabs/>
            <Divider p="1.5rem 0 "/>
            </Container>
    );
}

export default KnownTech;