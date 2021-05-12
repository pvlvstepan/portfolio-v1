import { Stack } from '@chakra-ui/react';
import React from 'react';
import NavLink from './NavLink';

const NavBar = () => {
    return (
        <Stack spacing={6} direction={{ xs: 'column', md: 'row' }} align='center'>
            <NavLink text='Projects' />
            <NavLink text='About' />
            <NavLink text='Contact' />
        </Stack>
    );
};

export default NavBar;
