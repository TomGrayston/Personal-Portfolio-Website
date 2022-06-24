import { SimpleGrid } from "@chakra-ui/react";
import TechContainer from "./TechContainer";
import react from "../../../../public/react.png";
import next from "../../../../public/next-js.png";
import node from "../../../../public/node-js.png";
import unity from "../../../../public/unity.png";
import firebase from "../../../../public/firebase.png";

    const Frameworks = ({}) => {
    return (
        <SimpleGrid minChildWidth="100px" spacing="30px">
            <TechContainer image={react} text="React"/>
            <TechContainer image={next} text="NextJS"/>
            <TechContainer image={node} text="NodeJS"/>
            <TechContainer image={unity} text="Unity"/>
            <TechContainer image={firebase} text="Firebase"/>
        </SimpleGrid>
    );
    };

export default Frameworks;
