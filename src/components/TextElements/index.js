import { useColorModeValue } from '@chakra-ui/color-mode';
import { Heading, Text, Link } from '@chakra-ui/react';
import React from 'react';
import useAnimateOnView from '../../hooks/useAnimateOnView';
import { slideFade } from '../../animations';
import { motion } from 'framer-motion';

export const SectionTitle = ({ text }) => {

    const color = useColorModeValue('light.primary', 'dark.primary');

    const [ref, animation] = useAnimateOnView();

    return (
        <motion.div
            ref={ref}
            variants={slideFade}
            initial='hidden'
            animate={animation}>
            <Heading
                as='h1'
                color={color}
                fontWeight='bold'
                fontSize='28px'
                lineHeight='150%'
                mb='40px'>
                {text}
            </Heading>
        </motion.div>
    );
};

export const SectionDescription = ({ text }) => {

    const [ref, animation] = useAnimateOnView();

    return (
        <motion.div
            ref={ref}
            variants={slideFade}
            initial='hidden'
            animate={animation}>
            <Heading
                as='h2'
                fontWeight='semibold'
                maxW={{ xs: 'full', sm: '400' }}
                fontSize={{ xs: '18px', sm: '22px' }}
                lineHeight='1.65'
                mt={{ sm: '60px' }}
                mb='40px'>
                {text}
            </Heading>
        </motion.div>
    );
};

export const SectionParagraph = ({ text }) => {

    const color = useColorModeValue('light.primary', 'dark.primary');

    const [ref, animation] = useAnimateOnView();

    return (
        <motion.div
            ref={ref}
            variants={slideFade}
            initial='hidden'
            animate={animation}>
            <Text
                textAlign='justify'
                fontWeight='medium'
                mb='40px'
                sx={{
                    '& span': {
                        fontWeight: 'semibold',
                        color: color
                    }
                }}>
                {text}
            </Text>
        </motion.div>
    );
};

export const ParagraphLink = ({ text, to }) => {

    const accent = useColorModeValue('light.accent', 'dark.accent');

    return (
        <Link
            isExternal={true}
            href={to}
            fontWeight='semibold'
            color={accent}
            textDecor='none !important'
            pb='3px'
            borderBottom='2px solid'
            borderColor='rgba(58, 134, 255, 0.5)'
            transition='.25s ease-in-out'
            _hover={{
                borderColor: accent
            }}>
            {text}
        </Link>
    );
};
