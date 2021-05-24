import { Box, Button, Heading, Link, Text, useColorModeValue, Wrap, WrapItem } from '@chakra-ui/react';
import { CVLink } from '../../data/contactDetails';
import { Link as ScrollLink } from 'react-scroll';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { staggerHero } from '../../animations';

const SectionHome = () => {

    const color = useColorModeValue('light.primary', 'dark.primary');


    const animateOnLoad = useAnimation();

    useEffect(() => {
        animateOnLoad.start('visible');
    }, [animateOnLoad]);

    return (
        <Box as='section' className='section' h='100vh' id='home' display='flex' alignItems='center' justifyContent='flex-start'>
            <Box maxW='480px' fontWeight='bold' as={motion.div} variants={staggerHero.container} initial="hidden" animate={animateOnLoad}>
                <Heading as={motion.h2} variants={staggerHero.item} fontSize={{ xs: '22px', sm: '30px' }}>
                    Hi, I'm Stepan Pavlov
                    </Heading>
                <Heading as={motion.h1} variants={staggerHero.item} fontSize={{ xs: '70px', sm: '90px' }} lineHeight={{ xs: '105%', sm: '95%' }} color={color} mb='40px'>
                    I create things for the web
                    </Heading>
                <Text as={motion.p} variants={staggerHero.item} fontWeight='medium' fontSize='18px' lineHeight='150%' maxW='400px' mb='40px'>
                    I'm a Russian Software Developer based in Kuala Lumpur, Malaysia passionate about building and designing high-quality websites and applications.
                </Text>
                <Wrap as={motion.div} variants={staggerHero.item} maxW='200px' spacing={6}>
                    <WrapItem w='full'>
                        <Button
                            w='full'
                            as={ScrollLink}
                            spy={false}
                            href='projects'
                            to='projects'
                            smooth={true}
                            duration={1500}>
                            View My Projects
                    </Button>
                    </WrapItem>
                    <WrapItem w='full'>
                        <Button as={Link} href={CVLink} isExternal={true} variant='secondary' w='full'>
                            Download My CV
                    </Button>
                    </WrapItem>
                </Wrap>
            </Box>
        </Box>
    );
};

export default SectionHome;