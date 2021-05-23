import { Box } from '@chakra-ui/layout';
import React from 'react';

const NavOverlay = ({ visibility, setNavIsOpen }) => {

    return (
        <Box
            h='100%'
            w='100%'
            pos='fixed'
            top={0}
            left={0}
            onClick={() => setNavIsOpen(false)}
            zIndex='docked'
            bg='blackAlpha.400'
            sx={{
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)'
            }}
            opacity={visibility === 'visible' ? 1 : 0}
            transition='.25s ease-in-out'
            visibility={visibility}>
        </Box>
    );
};

export default NavOverlay;
