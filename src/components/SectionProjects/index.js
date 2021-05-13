import { Box } from '@chakra-ui/layout';
import React from 'react';
import { SectionDescription, SectionTitle } from '../TextElements';

const SectionProjects = () => {
    return (
        <Box as='section' className='section'>
            <SectionTitle text='Projects' />
            <SectionDescription text="Take a look at some of my recent projects I've worked on." />
        </Box>
    );
};

export default SectionProjects;
