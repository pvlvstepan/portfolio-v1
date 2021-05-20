import { Box } from '@chakra-ui/layout';
import React from 'react';

const NavOverlay = ({ visibility }) => {

    return (
        <Box
            h='100vh'
            w='100vw'
            pos='fixed'
            top={0}
            left={0}
            zIndex='docked'
            bg='blackAlpha.300'
            sx={{
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(2px)'
            }}
            opacity={visibility === 'visible' ? 1 : 0}
            transition='.25s ease-in-out'
            visibility={visibility}>

        </Box>
    );
};

export default NavOverlay;
