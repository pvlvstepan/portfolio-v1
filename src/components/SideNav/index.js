import { Flex, HStack, VStack, useColorModeValue, useOutsideClick } from '@chakra-ui/react';
import { AiOutlineInstagram, AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import ColorModeToggle from './ColorModeToggle';
import { github, instagram, linkedIn } from './../../data/contactDetails';
import NavOverlay from './NavOverlay';

const SideNav = () => {

    const bg = useColorModeValue('light.bgLighter', 'dark.bgLighter');
    const [navIsOpen, setNavIsOpen] = useState(false);

    useEffect(() => {
        if (navIsOpen === true) {
            document.getElementsByTagName("html")[0].classList.add("no-scroll");
        } else {
            document.getElementsByTagName("html")[0].classList.remove("no-scroll");
        }
    }, [navIsOpen]);

    return (
        <>
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
                <VStack as='nav' spacing={3} align='left' my={12}>
                    <NavLink text='Projects' to='projects' type='menuLink' />
                    <NavLink text='About' to='about' type='menuLink' />
                    <NavLink text='Contact' to='contact' type='menuLink' />
                </VStack>
                <VStack spacing={12} align='left'>
                    <HStack as='nav' spacing={6}>
                        <NavLink text={<AiOutlineInstagram />} to={instagram} type='socialLink' />
                        <NavLink text={<AiFillGithub />} to={github} type='socialLink' />
                        <NavLink text={<FaLinkedinIn />} to={linkedIn} type='socialLink' />
                    </HStack>
                    <ColorModeToggle />
                </VStack>
            </Flex>
        </>
    );
};

export default SideNav;
