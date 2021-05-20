import { useColorModeValue } from '@chakra-ui/color-mode';
import { Link } from '@chakra-ui/layout';
import React from 'react';

const PopoverLink = ({ text }) => {

    const accent = useColorModeValue('light.accent', 'dark.accent');

    return (
        <Link
            tabIndex={0}
            fontWeight='semibold'
            color={accent}
            textDecor='none !important'
            lineHeight='1'
            height='min'
            pb='3px'
            width='min'
            borderBottom='2px solid'
            whiteSpace='nowrap'
            borderColor='rgba(58, 134, 255, 0.5)'
            transition='.25s ease-in-out'
            _hover={{
                borderColor: accent
            }}>
            {text}
        </Link>
    );
};

export default PopoverLink;
