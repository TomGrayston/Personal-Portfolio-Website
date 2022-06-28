import { SimpleGrid } from "@chakra-ui/react";
import TechContainer from "./TechContainer";
import js from "../../../../public/js.png";
import ts from "../../../../public/ts.png";
import html from "../../../../public/html-css.png";
import css3 from "../../../../public/css3.png"
import python from "../../../../public/python.png";
import java from "../../../../public/java.png";

const Languages = ({}) => {
    return (
        <SimpleGrid minChildWidth="95px" spacing="20px">
            <TechContainer image={js} text="JavaScript"/>
            <TechContainer image={ts} text="TypeScript"/>
            <TechContainer image={html} text="HTML5"/>
            <TechContainer image={css3} text="CSS3"/>
            <TechContainer image={python} text="Python"/>
            <TechContainer image={java} text="Java"/>
        </SimpleGrid>
    );
};

export default Languages;
