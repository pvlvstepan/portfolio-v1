import useScrollDirection from '../../hooks/useScrollDirection';
import { Flex, HStack, VStack, useColorModeValue, useOutsideClick, Box } from '@chakra-ui/react';
import { AiOutlineInstagram, AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import React, { useEffect, useRef, useState } from 'react';
import NavLink from './NavLink';
import ColorModeToggle from './ColorModeToggle';
import { github, instagram, linkedIn } from './../../data/contactDetails';
import { Squash as Hamburger } from 'hamburger-react';
import LogoLink from './LogoLink';
import NavOverlay from './NavOverlay';

const SideNav = () => {

    const bg = useColorModeValue('light.bgLighter', 'dark.bgLighter');
    const [navIsOpen, setNavIsOpen] = useState(false);
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const burgerRef = useRef();
    const scrollDirection = useScrollDirection('down');

    useEffect(() => {
        if (navIsOpen === true) {
            document.getElementsByTagName("html")[0].classList.add("no-scroll");
        } else {
            document.getElementsByTagName("html")[0].classList.remove("no-scroll");
        }
    }, [navIsOpen]);

    useOutsideClick({
        ref: burgerRef,
        handler: () => setNavIsOpen(false)
    });

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
        <Box>
            <NavOverlay visibility={navIsOpen ? 'visible' : 'hidden'} />
            <Flex
                as='aside'
                position='fixed'
                right={{ xs: navIsOpen ? 0 : '-100%', lg: '0' }} top={0} left='auto'
                h={{ xs: '100%', lg: '100vh' }}
                zIndex='sticky'
                maxW={{ xs: '240px', lg: '40%' }}
                width='100%'
                overflowY='auto'
                bg={{ xs: bg, lg: 'none' }}
                p={{
                    xs: '80px 30px',
                    lg: '60px 80px 60px 180px',
                    xl: '60px 100px 60px 250px',
                    xxl: '85px 100px 85px 180px'
                }}
                direction='column'
                alignItems='left'
                justifyContent='space-between'
                transition='right .25s ease-in-out'>

                <NavLink text='Stepan Pavlov' to='home' type='title' />
                <VStack spacing={3} align='left' my={12}>
                    <NavLink text='Projects' to='projects' type='menuLink' />
                    <NavLink text='About' to='about' type='menuLink' />
                    <NavLink text='Contact' to='contact' type='menuLink' />
                </VStack>
                <VStack spacing={12} align='left'>
                    <HStack spacing={6}>
                        <NavLink text={<AiOutlineInstagram />} to={instagram} type='socialLink' />
                        <NavLink text={<AiFillGithub />} to={github} type='socialLink' />
                        <NavLink text={<FaLinkedinIn />} to={linkedIn} type='socialLink' />
                    </HStack>
                    <ColorModeToggle />
                </VStack>
            </Flex>
            <Box
                pos='fixed'
                h='72px'
                w='100%'
                left={0}
                r={0}
                transition='.25s ease-in-out'
                bg={{ xs: navIsOpen || scrolledToTop ? 'none' : bg, lg: 'none' }}
                top={(scrollDirection === 'up' && !scrolledToTop && !navIsOpen) ? '0' : '-72px'}
                zIndex='sticky'
                boxShadow={{ xs: navIsOpen || scrolledToTop ? 'none' : 'lg', lg: 'none' }}>
            </Box>
            <LogoLink scrollDirection={scrollDirection} navIsOpen={navIsOpen} scrolledToTop={scrolledToTop} />
            <Box
                overflowY=''
                visibility={{ lg: 'hidden' }}
                pos='fixed'
                zIndex='sticky'
                right='16px'
                top={(scrollDirection === 'up' && !scrolledToTop) ? '12px' : navIsOpen || scrolledToTop ? '24px' : '-60px'}
                transition='top .25s ease-in-out'
                ref={burgerRef}>
                <Hamburger label="Show menu" duration={0.25} rounded={true} toggled={navIsOpen} toggle={setNavIsOpen} />
            </Box>
        </Box>
    );
};

export default SideNav;
