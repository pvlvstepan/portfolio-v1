import { useColorModeValue } from '@chakra-ui/color-mode';
import { Link } from '@chakra-ui/layout';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const NavLink = ({ text, to, type, offset }) => {

    const accent = useColorModeValue('light.accent', 'dark.accent');

    let scrollLinkProps = {};

    if (type === 'title' || type === 'menuLink') {
        scrollLinkProps = {
            as: ScrollLink,
            className: 'scrollLink',
            to: to,
            spy: type === 'menuLink' && true,
            smooth: true,
            duration: 1000,
            offset: offset,
            activeClass: 'active',
            pos: 'relative',
            _after: {
                transition: '.25s ease-in-out',
                pos: 'absolute',
                content: '""',
                height: '2px',
                bottom: '2px',
                width: '0',
                left: '0',
                bg: accent,
                borderRaduis: '1px'
            },
            sx: {
                '&.active': {
                    color: accent
                },
                '&.active:after': {
                    width: '100%',
                },
                '&.active:hover:after': {
                    bg: 'rgba(58, 134, 255, 0.5)',
                    width: '0',
                },
            }
        };
    }

    return (
        <Link
            href={to}
            rounded='xl'
            isExternal={type === 'socialLink' ? true : false}
            fontSize={type !== 'menuLink' ? type !== 'socialLink' ? { xs: '24px', xxl: '28px' } : '28px' : '22px'}
            fontWeight='semibold'
            textDecor='none !important'
            whiteSpace='nowrap'
            transition='.25s ease-in-out'
            width='min'
            _hover={{
                color: accent
            }}
            {...scrollLinkProps}>
            {text}
        </Link>
    );
};

export default NavLink;
