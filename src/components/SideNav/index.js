import { Flex } from '@chakra-ui/layout';
import React from 'react';

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
            <h1>top</h1>
            <h1>center</h1>
            <h1>bottom</h1>
        </Flex>
    );
};

export default SideNav;
