import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from '@chakra-ui/layout';
import Logo from '../../../data/img/Logo';

const LogoLink = () => {

    return (
        <Link
            pos='absolute'
            as={ScrollLink}
            href='home'
            to='home'
            smooth={true}
            spy={false}
            duration={1500}>
            <Logo />
        </Link>
    );
};

export default LogoLink;