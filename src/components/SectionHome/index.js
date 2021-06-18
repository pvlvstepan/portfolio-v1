import { Box, Button, Heading, Link, Text, useColorModeValue, useMediaQuery, Wrap, WrapItem } from '@chakra-ui/react';
import { CVLink } from '../../data/contactDetails';
import { Link as ScrollLink } from 'react-scroll';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { staggerHero } from '../../animations';
import heroIMG from './../../data/img/heroIMG.png';
import heroIMGlight from './../../data/img/heroIMGlight.png';

const SectionHome = () => {

    const color = useColorModeValue('light.primary', 'dark.primary');
    const [isSmallerThan720] = useMediaQuery("(max-height: 720px)");

    const animateOnLoad = useAnimation();

    useEffect(() => {
        animateOnLoad.start('visible');
    }, [animateOnLoad]);

    return (
        <Box
            as='section'
            className='section'
            pr={{ xs: '5%', md: '25%', lg: 0 }}
            mr={{ xs: '-5%', md: '-25%', lg: 0 }}
            h={{ xs: '850px', sm: '920px', md: '100vh' }}
            id='home'
            display='flex'
            alignItems={{ xs: 'flex-end', md: 'center' }}
            justifyContent='flex-start'
            pos='relative'>
            <Box maxW='480px' fontWeight='bold' as={motion.div} variants={staggerHero.container} initial="hidden" animate={animateOnLoad}>
                <Box as={motion.div} variants={staggerHero.img} initial="hidden" animate={animateOnLoad}
                    backgroundImage={useColorModeValue(heroIMGlight, heroIMG)}
                    backgroundPosition={{ xs: '0 50px', sm: '0 0', md: isSmallerThan720 ? '250px 50px' : '190px', xl: isSmallerThan720 ? '320px 50px' : '280px' }}
                    bgSize={{ xs: 'contain', md: isSmallerThan720 ? 'auto 600px' : 'auto 720px' }}
                    backgroundRepeat='no-repeat'
                    h='full'
                    w='full'
                    pos='absolute'
                    top={0}
                    left={0}
                    zIndex='0'>
                </Box>
                <Heading zIndex='5' pos='relative' as={motion.h2} variants={staggerHero.item} fontSize={{ xs: '22px', sm: '24px', xl: '30px' }}>
                    Hi, I'm Stepan Pavlov
                </Heading>
                <Heading zIndex='5' pos='relative' as={motion.h1} variants={staggerHero.item} fontSize={{ xs: '64px', sm: '74px', xl: '90px' }} lineHeight={{ xs: '105%', sm: '95%' }} color={color} mb='40px'>
                    I create things for the web
                </Heading>
                <Text zIndex='5' pos='relative' as={motion.p} variants={staggerHero.item} fontWeight='medium' fontSize='18px' lineHeight='150%' maxW='400px' mb='40px'>
                    I'm a Russian Software Developer based in Kuala Lumpur, Malaysia, passionate about building and designing high-quality websites and applications.
                </Text>
                <Wrap userSelect='none' zIndex='5' pos='relative' as={motion.div} variants={staggerHero.item} maxW='200px' spacing={6}>
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