import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex } from '@chakra-ui/layout';
import { Squeeze as Hamburger } from 'hamburger-react';
import React, { useEffect, useState } from 'react';
import NavLink from '../SideNav/NavLink';
import useScrollDirection from '../../hooks/useScrollDirection';
import { motion, useAnimation } from 'framer-motion';

const Navbar = ({ navIsOpen, setNavIsOpen }) => {

    const bg = useColorModeValue('light.bgLighter', 'dark.bgLighter');
    const secondary = useColorModeValue('var(--sp-colors-light-secondary)', 'var(--sp-colors-dark-secondary)');
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const scrollDirection = useScrollDirection('down');

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
    };

    const animateOnLoad = useAnimation();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        animateOnLoad.start({ opacity: 1, transition: { duration: 0.5, delay: 1 } });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animateOnLoad]);

    return (
        <Flex
            as='header'
            px={2}
            pl='max(8px, env(safe-area-inset-left))'
            pr='max(8px, env(safe-area-inset-right))'
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
            <motion.div initial={{ opacity: 0 }} animate={animateOnLoad}>
                <Hamburger label='Open Side Menu' toggled={navIsOpen} toggle={setNavIsOpen} rounded={true} color={secondary} />
            </motion.div>
        </Flex>
    );
};

export default Navbar;
