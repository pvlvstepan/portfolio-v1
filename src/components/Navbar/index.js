import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex } from '@chakra-ui/layout';
import { Squeeze as Hamburger } from 'hamburger-react';
import React, { useEffect, useState } from 'react';
import NavLink from '../SideNav/NavLink';
import useScrollDirection from '../../hooks/useScrollDirection';

const Navbar = ({ navIsOpen, setNavIsOpen }) => {

    const bg = useColorModeValue('light.bgLighter', 'dark.bgLighter');
    const secondary = useColorModeValue('var(--sp-colors-light-secondary)', 'var(--sp-colors-dark-secondary)');
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const scrollDirection = useScrollDirection('down');

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Flex
            as='header'
            px={2}
            py={scrolledToTop || navIsOpen ? 4 : 0}
            display={{ xs: 'flex', lg: 'none' }}
            transition='.25s ease-in-out'
            transform={scrollDirection === 'up' || scrolledToTop ? 'translateY(0px)' : 'translateY(-48px)'}
            pos='fixed'
            zIndex='toast'
            left={0}
            top={0}
            width='full'
            direction='row'
            justify='space-between'
            bg={navIsOpen || scrolledToTop ? 'none' : bg}
            boxShadow={navIsOpen || scrolledToTop ? 'none' : '2xl'}>
            <Box
                color={secondary}
                px={2}
                transition='.25s ease-in-out'
                visibility={navIsOpen || scrolledToTop ? 'hidden' : 'visible'}
                opacity={navIsOpen || scrolledToTop ? 0 : 1}>
                <NavLink text='Stepan Pavlov' to='home' type='title' />
            </Box>
            <Hamburger label='Open Side Menu' toggled={navIsOpen} toggle={setNavIsOpen} rounded={true} color={secondary} />
        </Flex>
    );
};

export default Navbar;
