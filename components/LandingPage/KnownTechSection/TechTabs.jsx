import {
    Heading,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    } from "@chakra-ui/react";
import Languages from "./Sections/Languages";
import FrameworksNTools from "./Sections/FrameworksAndTools";
import DevOps from "./Sections/DevOps";

const TechTabs = ({}) => {
    return (
        <Tabs isFitted variant="enclosed" colorScheme="gray">
            <TabList mb="1em">
                <Tab>
                <Heading size="sm">Languages</Heading>
                </Tab>
                <Tab>
                <Heading size="sm">Frameworks &amp; Tools</Heading>
                </Tab>
                <Tab>
                <Heading size="sm">DevOps &amp; More</Heading>
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Languages />
                </TabPanel>
                <TabPanel>
                    <FrameworksNTools/>
                </TabPanel>
                <TabPanel>
                    <DevOps/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default TechTabs;
