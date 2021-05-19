import React from 'react';
import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Flex
            fontSize='18px'
            direction='column'
            maxW={{ xs: 'full', lg: '650', xl: '670' }} pb={{ xs: '60px', xxl: '85px' }}
            align='center'>
            <Text align='center'>Designed & built by Stepan Pavlov. 2021</Text>
        </Flex>
    );
};

export default Footer;
