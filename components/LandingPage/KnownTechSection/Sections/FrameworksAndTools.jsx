import { SimpleGrid } from "@chakra-ui/react";
import TechContainer from "./TechContainer";
import react from "../../../../public/react.png";
import next from "../../../../public/next-js.png";
import node from "../../../../public/node-js.png";
import unity from "../../../../public/unity.png";
import storybook from "../../../../public/storybook.png";
import expo from "../../../../public/expo.png";

    const Frameworks = ({}) => {
    return (
        <SimpleGrid minChildWidth="95px" spacing="20px">
            <TechContainer image={react} text="React"/>
            <TechContainer image={next} text="NextJS"/>
            <TechContainer image={node} text="NodeJS"/>
            <TechContainer image={storybook} text="Storybook"/>
            <TechContainer image={expo} text="Expo"/>
            <TechContainer image={unity} text="Unity"/>
        </SimpleGrid>
    );
    };

export default Frameworks;
