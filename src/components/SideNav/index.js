import { Flex, HStack, VStack, useColorModeValue } from '@chakra-ui/react';
import { AiOutlineInstagram, AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import React, { useEffect } from 'react';
import NavLink from './NavLink';
import ColorModeToggle from './ColorModeToggle';
import { github, instagram, linkedIn } from './../../data/contactDetails';
import NavOverlay from './NavOverlay';

const SideNav = ({ navIsOpen, setNavIsOpen }) => {

    const bg = useColorModeValue('light.bgLighter', 'dark.bgLighter');

    useEffect(() => {
        if (navIsOpen === true) {
            document.getElementsByTagName("html")[0].classList.add("no-scroll");
        } else {
            document.getElementsByTagName("html")[0].classList.remove("no-scroll");
        }
    }, [navIsOpen]);


    return (
        <>
            <NavOverlay setNavIsOpen={setNavIsOpen} visibility={navIsOpen ? 'visible' : 'hidden'} />
            <Flex
                as='aside'
                position='fixed'
                right={{ xs: navIsOpen ? 0 : '-100%', lg: '0' }} top={0} left='auto'
                h={{ xs: '100%', lg: '100vh' }}
                zIndex='sticky'
                maxW={{ xs: '260px', lg: '40%' }}
                width='100%'
                overflowY='auto'
                bg={{ xs: bg, lg: 'none' }}
                p={{
                    xs: '80px 60px 80px 30px',
                    lg: '60px 80px 60px 180px',
                    xl: '60px 100px 60px 250px',
                    xxl: '85px 100px 85px 180px'
                }}
                direction='column'
                alignItems='left'
                justifyContent='space-between'
                transition='right .25s ease-in-out'>
                <NavLink text='Stepan Pavlov' to='home' type='title' setNavIsOpen={setNavIsOpen} />
                <VStack as='nav' spacing={3} align='left' my={12}>
                    <NavLink text='Projects' to='projects' type='menuLink' setNavIsOpen={setNavIsOpen} />
                    <NavLink text='About' to='about' type='menuLink' setNavIsOpen={setNavIsOpen} />
                    <NavLink text='Contact' to='contact' type='menuLink' setNavIsOpen={setNavIsOpen} />
                </VStack>
                <VStack spacing={12} align='left'>
                    <HStack as='nav' spacing={6}>
                        <NavLink text={<AiOutlineInstagram />} to={instagram} type='socialLink' setNavIsOpen={setNavIsOpen} />
                        <NavLink text={<AiFillGithub />} to={github} type='socialLink' setNavIsOpen={setNavIsOpen} />
                        <NavLink text={<FaLinkedinIn />} to={linkedIn} type='socialLink' setNavIsOpen={setNavIsOpen} />
                    </HStack>
                    <ColorModeToggle setNavIsOpen={setNavIsOpen} />
                </VStack>
            </Flex>
        </>
    );
};

export default SideNav;
