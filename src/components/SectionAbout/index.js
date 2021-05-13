import { Box } from '@chakra-ui/layout';
import React from 'react';
import { SectionDescription, SectionTitle } from '../TextElements';

const SectionAbout = () => {
    return (
        <Box as='section' className='section'>
            <SectionTitle text='About Me' />
            <SectionDescription text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo libero quasi ex officiis, aliquam obcaecati in ducimus fugiat dicta. At!" />
        </Box>
    );
};

export default SectionAbout;