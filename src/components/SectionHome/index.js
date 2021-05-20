import { Box } from '@chakra-ui/layout';
import React from 'react';
import LogoLink from './LogoLink';

const SectionHome = () => {
    return (
        <Box as='section' className='section' h='100vh' id='home' display='flex'>
            <LogoLink />
        </Box>
    );
};

export default SectionHome;