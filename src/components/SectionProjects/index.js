import { Box, VStack, SimpleGrid } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import React from "react";
import { SectionDescription, SectionTitle } from "../TextElements";
import Project from "./Project";
import projectsData from "../../data/projects";

const SectionProjects = () => {
    return (
        <Box as="section" className="section" id="projects">
            <SectionTitle text="Projects" />
            <SectionDescription text="Take a look at some of the recent projects I've worked on." />
            <VStack spacing="120px" align="left">
                {projectsData &&
                    projectsData
                        .filter((el) => !el.simple)
                        .map((val, key) => {
                            return <Project data={val} key={key} />;
                        })}
            </VStack>
            <Heading
                as="h3"
                fontSize="22px"
                fontWeight="semibold"
                marginTop="80px"
            >
                Noteworthy Projects
            </Heading>
            <SimpleGrid
                columns={{ xs: 1, sm: 2 }}
                maxW={{ xs: "full", lg: "650", xl: "670" }}
                spacingY="60px"
                spacingX="30px"
                marginTop="60px"
            >
                {projectsData &&
                    projectsData
                        .filter((el) => el.simple)
                        .map((val, key) => {
                            return <Project data={val} key={key} simple />;
                        })}
            </SimpleGrid>
        </Box>
    );
};

export default SectionProjects;
