import { Box, VStack } from '@chakra-ui/layout';
import React from 'react';
import { SectionDescription, SectionTitle } from '../TextElements';
import Project from './Project';
import projectsData from '../../data/projects';

const SectionProjects = () => {
    return (
        <Box as='section' className='section' id='projects'>
            <SectionTitle text='Projects' />
            <SectionDescription text="Take a look at some of the recent projects I've worked on." />
            <VStack spacing='120px' align='left'>
                {projectsData && projectsData.map((val, key) => {
                    return (
                        <Project data={val} key={key} />
                    );
                })}
            </VStack>
        </Box>
    );
};

export default SectionProjects;
