import { useColorModeValue } from '@chakra-ui/color-mode';
import { Heading, Text } from '@chakra-ui/layout';
import React from 'react';

export const SectionTitle = ({ text }) => {

    const color = useColorModeValue('light.primary', 'dark.primary');

    return (
        <Heading
            as='h1'
            color={color}
            fontWeight='bold'
            fontSize='28px'
            lineHeight='150%'
            mb='40px'>
            {text}
        </Heading>
    );
};

export const SectionDescription = ({ text }) => {
    return (
        <Heading
            as='h2'
            fontWeight='semibold'
            maxW={{ xs: 'full', lg: '670' }}
            fontSize='22px'
            lineHeight='1.65'
            mb='40px'>
            {text}
        </Heading>
    );
};

export const SectionParagraph = ({ text }) => {
    return (
        <Text
            textAlign='justify'
            fontWeight='medium'
            maxW={{ xs: 'full', lg: '670' }}
            mb='40px'>
            {text}
        </Text>
    );
};
