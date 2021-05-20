import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from '@chakra-ui/layout';
import Logo from '../../../data/img/Logo';

const LogoLink = () => {

    return (
        <Link
            left={{ xs: '16px', lg: 'initial' }}
            px='8px'
            pos={{ xs: 'fixed', lg: 'absolute' }}
            top={{ xs: '24px', lg: '60px', xxl: '85px' }}
            as={ScrollLink}
            zIndex='sticky'
            href='home'
            to='home'
            smooth={true}
            spy={false}
            duration={1500} >
            <Logo />
        </Link >
    );
};

export default LogoLink;