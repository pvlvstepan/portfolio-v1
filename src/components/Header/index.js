import { Box, Heading, Stack, useColorModeValue, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import ColorModeToggle from './ColorModeToggle';
import NavBar from './NavBar';
import NavBtnToggle from './NavBtnToggle';

const Header = () => {

    const bgLighter = useColorModeValue('light.bgLighter', 'dark.bgLighter');

    const [isOpen, setOpen] = useState(false);

    return (
        <Box
            pos='fixed'>
            <Box
                pos='fixed'
                left={0}
                zIndex='1'
                w='100vw'
                h='100vh'
                bg={isOpen === true ? 'rgba(0,0,0, 0.5)' : 'transparent'}
                visibility={isOpen === true ? 'visible' : 'hidden'}
                transition='.25s ease-in-out'
            ></Box>
            <Stack
                pos={{ xs: 'fixed', md: 'static' }}
                right={{ xs: isOpen ? '0' : '-100%', md: '0' }}
                top={0}
                zIndex='sticky'
                mt='0 !important'
                mx='auto'
                py={6}
                px={{ xs: 12, md: '0' }}
                height={{ xs: '100%', md: 'unset' }}
                width={{ md: '720px', lg: '960px', xl: '1140px', xxl: '1320px', xs: 'min' }}
                direction={{ xs: 'column', md: 'row' }}
                justify={{ xs: 'center', md: 'flex-end' }}
                align='center'
                spacing={{ xs: 20, md: 6 }}
                bg={{ xs: bgLighter, md: 'transparent' }}
                fontSize={{ xs: '20px', md: '16px' }}
                transition='right .25s ease-in-out'>
                <Box mr='auto'>
                    <Heading size='md'>Stepan Pavlov</Heading>
                </Box>
                <NavBar />
                <Stack
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    spacing={6}
                    align='center'>
                    <ColorModeToggle />
                    <Button size='sm' variant='secondary'>Download CV</Button>
                </Stack>
            </Stack>
            <NavBtnToggle setOpen={setOpen} isOpen={isOpen} />
        </Box>
    );
};

export default Header;
