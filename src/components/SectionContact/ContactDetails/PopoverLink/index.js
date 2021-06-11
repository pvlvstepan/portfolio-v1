import { useColorModeValue } from '@chakra-ui/color-mode';
import { Link } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import React from 'react';
import { slideFade } from '../../../../animations';
import useAnimateOnView from '../../../../hooks/useAnimateOnView';

const PopoverLink = ({ text }) => {

    const accent = useColorModeValue('light.accent', 'dark.accent');
    const [linkRef, linkAnimation] = useAnimateOnView();

    return (
        <motion.div
            ref={linkRef}
            variants={slideFade}
            initial='hidden'
            animate={linkAnimation}>
            <Link
                as={motion.button}
                tabIndex={0}
                fontWeight='semibold'
                color={accent}
                textDecor='none !important'
                lineHeight='1'
                height='min'
                pb='6px'
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
        </motion.div>
    );
};

export default PopoverLink;
