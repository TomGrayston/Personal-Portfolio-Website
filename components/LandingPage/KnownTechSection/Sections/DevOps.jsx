import { SimpleGrid } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import TechContainer from "./TechContainer";
import awsL from "../../../../public/awsLight.png";
import awsD from "../../../../public/awsDark.png";
import git from "../../../../public/git.png";
import docker from "../../../../public/docker.png";
import kubernetes from "../../../../public/kubernetes.png";
import concourse from "../../../../public/concourse.png";
import firebase from "../../../../public/firebase.png";

    const DevOps = ({}) => {
    return (
        <SimpleGrid minChildWidth="95px" spacing="20px">
            <TechContainer image={useColorModeValue(awsL, awsD)} text="AWS"/>
            <TechContainer image={firebase} text="Firebase"/>
            <TechContainer image={git} text="Git"/>
            <TechContainer image={docker} text="Docker"/>
            <TechContainer image={kubernetes} text="Kubernetes"/>
            <TechContainer image={concourse} text="Concourse"/>
        </SimpleGrid>
    );
    };

export default DevOps;
