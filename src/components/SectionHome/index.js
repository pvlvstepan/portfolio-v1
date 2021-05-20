import { Box } from '@chakra-ui/layout';
import React from 'react';
import Logo from '../../data/img/Logo';

const SectionHome = () => {
    return (
        <Box as='section' className='section' h='100vh' id='home' display='flex'>
            <Logo />
        </Box>
    );
};

export default SectionHome;