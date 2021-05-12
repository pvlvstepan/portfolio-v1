import { useOutsideClick } from '@chakra-ui/hooks';
import { Box } from '@chakra-ui/layout';
import { Squash as Hamburger } from 'hamburger-react';
import React, { useRef } from 'react';

const NavBtnToggle = ({ isOpen, setOpen, }) => {

    const menuRef = useRef();

    useOutsideClick({
        ref: menuRef,
        handler: () => setOpen(false)
    });

    return (
        <Box zIndex='sticky' pos='fixed' top={4} right={4} display={{ xs: 'block', md: 'none' }} ref={menuRef}>
            <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                rounded={true}
                label="Show menu" />
        </Box>
    );
};

export default NavBtnToggle;
