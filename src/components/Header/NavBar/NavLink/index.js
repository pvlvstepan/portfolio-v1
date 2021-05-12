import { Link } from '@chakra-ui/layout';
import { Link as ScrollLink } from 'react-scroll';
import React from 'react';

const NavLink = ({ text }) => {
    return (
        <Link
            as={ScrollLink}
            textDecor='none !important'
            fontWeight='bold'
            _hover={{
                color: 'accent'
            }}>
            {text}
        </Link>
    );
};

export default NavLink;
