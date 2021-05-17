import { Flex, HStack, VStack } from '@chakra-ui/layout';
import { AiOutlineInstagram, AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import React from 'react';
import NavLink from './NavLink';
import ColorModeToggle from './ColorModeToggle';

const SideNav = () => {
    return (
        <Flex
            as='aside'
            position='fixed'
            right={0} top={0} left='auto'
            h='100vh'
            maxW='40%'
            width='100%'
            overflowY='auto'
            p={{ lg: '60px 80px 60px 180px', xl: '60px 100px 60px 250px', xxl: '85px 100px 85px 180px' }}
            direction='column'
            alignItems='left'
            justifyContent='space-between'>
            <NavLink text='Stepan Pavlov' to='home' type='title' />
            <VStack spacing={3} align='left' my={12}>
                <NavLink text='Projects' to='projects' type='menuLink' />
                <NavLink text='About' to='about' type='menuLink' />
                <NavLink text='Contact' to='contact' type='menuLink' />
            </VStack>
            <VStack spacing={12} align='left'>
                <HStack spacing={6}>
                    <NavLink text={<AiOutlineInstagram />} to='https://instagram.com/glyxs_' type='socialLink' />
                    <NavLink text={<AiFillGithub />} to='https://github.com/pvlvstepan' type='socialLink' />
                    <NavLink text={<FaLinkedinIn />} to='' type='socialLink' />
                    <NavLink text={<FaTelegramPlane />} to='https://t.me/glyxs' type='socialLink' />
                </HStack>
                <ColorModeToggle />
            </VStack>
        </Flex>
    );
};

export default SideNav;
